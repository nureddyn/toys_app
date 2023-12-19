require('dotenv').config();
const express = require('express');
const app = express();

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

const categories = require('./models/categories');

app.use(express.urlencoded({extended: false})); 
app.use((req, res, next) => {
	next();
});

app.get('/', (req, res) => {
  res.render('Home');
});


app.get('/:id', (req, res) => {
  res.render('Category', {category: categories[req.params.id]});
  // res.send(req.params.id);
});


app.listen(3000, () => {
  console.log("Listen on http://localhost:3000");
});

