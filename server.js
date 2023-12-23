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
const Toy = require('./models/Toy.js');

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
  }, 3000)
});


app.get('/edit',(req, res) => {
  Toy.find({})
  .then((foundToys) => {
    res.render('EditToy', {toys: foundToys});
  })
  .catch((error) => {
    res.send(error);
  })
});



app.post('/edit', (req, res) => {
  // console.log(req.body.name);
  if (req.body.newName && req.body.newPrice) {
    Toy.findOneAndUpdate(
      {name: req.body.name},
      {$set: {name: req.body.newName, price: req.body.newPrice}},
      {new: true}
      )
    .then((toy) => {
      console.log({toy});

      Wish.findOneAndUpdate(
        {name: req.body.name},
        {$set: {name: req.body.newName, price: req.body.newPrice}},
        {new: true}
        )
      .then((toy) => {
        console.log({toy});  
      })
      .catch((error) => {
        res.json({error});
      })
    })
    .catch((error) => {
      res.json({error});
    })
  } else if (req.body.newName && !req.body.newPrice) {
    Toy.findOneAndUpdate(
      {name: req.body.name},
      {name: req.body.newName},
      {new: true}
      )
    .then((toy) => {
      console.log({toy});

      Wish.findOneAndUpdate(
        {name: req.body.name},
        {name: req.body.newName},
        {new: true}
        )
      .then((toy) => {
        console.log({toy});  
      })
      .catch((error) => {
        res.json({error});
      })
    })
    .catch((error) => {
      res.json({error});
    })
  } else if (req.body.newPrice && !req.body.newName) {
    Toy.findOneAndUpdate(
      {name: req.body.name},
      {price: req.body.newPrice},
      {new: true}
      )
    .then((toy) => {
      console.log({toy});

      Wish.findOneAndUpdate(
        {name: req.body.name},
        {price: req.body.newPrice},
        {new: true}
        )
      .then((toy) => {
        console.log({toy});  
      })
      .catch((error) => {
        res.json({error});
      })
    })
    .catch((error) => {
      res.json({error});
    })
  }
  res.redirect('/edit');
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
  if (categories[req.params.id]) {
    toy.find({category: categories[req.params.id].name})
    .then((foundToys) => {
      res.render('Category', {category: categories[req.params.id], toys: foundToys});  
    })
    .catch((error) => {
      res.render('Category', {category: categories[req.params.id], error});
    })
  }
});


app.listen(3000, () => {
  console.log("Listen on http://localhost:3000");
});

