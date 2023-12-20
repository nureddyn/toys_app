require('dotenv').config();
const express = require('express');
const app = express();

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

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


app.get('/:id', (req, res) => {
  toy.find({category: categories[req.params.id].name})
  .then((foundToys) => {
    res.render('Category', {category: categories[req.params.id], toys: foundToys});  
  })
  .catch((error) => {
    res.render('Category', {category: categories[req.params.id], error});
  })
  // .finally(() => {
  //   db.close();
  // });
  // res.render('Category', {category: categories[req.params.id], toys: categoryToys});
});

app.post('/new', (req, res) => {
  // console.log(req.body.category);
  toy.create(req.body)
  .then((createdToy) => {
    console.log(createdToy);
  })
  .catch((error) => {
    console.log(error);
  })
  // .finally(() => {
  //   db.close();
  // });
  res.redirect('/');
});



app.listen(3000, () => {
  console.log("Listen on http://localhost:3000");
});

