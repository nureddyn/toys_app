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


app.get('/:id', (req, res) => {
  res.render('Category', {category: categories[req.params.id]});
});


app.listen(3000, () => {
  console.log("Listen on http://localhost:3000");
});

