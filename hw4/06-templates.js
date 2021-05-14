const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = process.env.PORT || 5000;

// Use Pug as the templating engine
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

// REST Countries URL
const url = 'https://restcountries.eu/rest/v2/all';

// Add your code here
var capitals = [];
var populous = [];
var regions = []; 

function countOccurence(arr, continent) {
  var count = 0; 

  arr.sort();
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] === continent) {
      count = count + 1;
    }
  }  

  return count;
}

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    for (var i=0; i < data.length; i++) { 
      capitals.push(data[i].name + ' - ' + data[i].capital);
      regions.push(data[i].region);
      if(data[i].population >= 50000000) {
        populous.push(data[i].name + ' - ' + data[i].population.toLocaleString());
      }
    }
  })
  .catch((error) => console.log(error));

app.get('/', (req, res) => {
  // render pug template for the index.html file

  results = [
    'Countries and Capitals',
    'Most Populous Countries',
    'Regions of the World',
  ];

  res.render('page', {
    heading: 'Countries of the World',
    results: results,
  });
});

app.get('/capitals', (req, res) => {
  // map the output array to create an array with country names and capitals
  // check for empty data in the output array

  results = capitals;

  res.render('page', {
    heading: 'Countries and Capitals',
    results: results,
  });
});

app.get('/populous', (req, res) => {
  // filter the output array for the countries with population of 5ß0 million or more
  // sort the resulting array to show the results in order of population
  // map the resulting array into a new array with the country name and formatted population

  results = populous;

  res.render('page', {
    heading: 'Most Populous Countries',
    results: results,
  });
});

app.get('/regions', (req, res) => {
  // reduce the output array in a resulting object that will feature the numbers of countries in each region
  // disregard empty data from the output array


  results = ['Asia - ' + countOccurence(regions, 'Asia'), 
    'Europe - ' + countOccurence(regions, 'Europe'), 
    'Africa - ' + countOccurence(regions, 'Africa'), 
    'Oceania - ' + countOccurence(regions, 'Oceania'), 
    'Americas - ' + countOccurence(regions, 'Americas'),
    'Polar - ' + countOccurence(regions, 'Polar')
  ];

  res.render('page', {
    heading: 'Regions of the World',
    results: results,
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
