require('dotenv').config();
const express = require('express');
const app = express();

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.use(express.urlencoded({extended: false})); 
app.use((req, res, next) => {
	console.log('I run for all routes')
	next();
});

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
});


app.listen(3000, () => {
  console.log("Listen on http://localhost:3000");
});

