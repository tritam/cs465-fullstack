const url = 'https://restcountries.eu/rest/v2/all';

let getData = (url) => {
  // Add your code here
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      output = document.querySelector("#results");
      for (var i=0; i < data.length; i++) { 
        var input = data[i].name + ' - ' + data[i].population;
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input));
        output.appendChild(li);
      }
    })
    .catch((error) => console.log(error));
};

getData(url);
