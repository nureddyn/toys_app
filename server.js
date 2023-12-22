require('dotenv').config();
const express = require('express');
const app = express();

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

const mongoose = require('mongoose');
const db = mongoose.connection;
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, {
	useNewUrlParser: true,
	useUnifiedTopology: true 
});
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});
db.on("error", (err) => console.log(err.message + " is mongo not running?"));
db.on("open", () => console.log("mongo connected: ", mongoURI));
db.on("close", () => console.log("mongo disconnected"));


const categories = require('./models/categories');
const toy = require('./models/Toy.js'); 
const Wish = require('./models/Wish.js');

app.use(express.urlencoded({extended: false})); 
app.use((req, res, next) => {
	next();
});



app.get('/', (req, res) => {
  res.render('Home');
});


app.get('/new', (req, res) => {
  res.render('NewToy', {categories: categories});
});

app.post('/new', (req, res) => {
  toy.create(req.body)
  .then((createdToy) => {
    console.log(createdToy);
  })
  .catch((error) => {
    console.log(error);
  })
  setTimeout(() => {
    res.redirect('/');
  }, 1000)
});

app.get('/wish', (req, res) => {
  Wish.find({})
  .then((foundWishes) => {
    res.render('Wishes', {wishes: foundWishes});
  })
  .catch((error) => {
    res.render('Wishes');
  })
});

app.post('/wish', (req, res) => {
  Wish.create(req.body)
  .then((createdWish) => {
    console.log(createdWish);
  })
  .catch((error) => {
    console.log(error);
  })
  res.redirect('/wish');
});


app.delete('/remove/:id', (req, res) => {
  Wish.findByIdAndRemove(req.params.id, (error, data) => {
    res.redirect('/wish');
  });
});


app.get('/:id', (req, res) => {
  toy.find({category: categories[req.params.id].name})
  .then((foundToys) => {
    res.render('Category', {category: categories[req.params.id], toys: foundToys});  
  })
  .catch((error) => {
    res.render('Category', {category: categories[req.params.id], error});
  })
});


app.listen(3000, () => {
  console.log("Listen on http://localhost:3000");
});

