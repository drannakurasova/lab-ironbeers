const express = require('express');

const hbs = require('hbs');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();

//const birrasArr = punkAPI.getBeers({'beer_name': ""})

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// Register the location for handlebars partials here:

// ...

// Add the route handlers here:

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/beers', (req, res, next) => {
  
  punkAPI.getBeers()
  .then((response) => {
    console.log(response)
    res.render('beers', { 
      response
    })
  })
  .catch((error) => {
    console.log(error)
  })
  
})

app.listen(3000, () => console.log('🏃‍ on port 3000'));
