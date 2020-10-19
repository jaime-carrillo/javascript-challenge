// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// console.log(data);

// Values for each sighting and append one row for each sighting
data.forEach(function(UfoSighting) {
    var row = tbody.append("tr");


    Object.entries(UfoSighting).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
    });
});

var button = d3.select