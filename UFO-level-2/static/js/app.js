// from data.js
var tableData = data;
var selector = "Date"

// YOUR CODE HERE!
//console.log (tableData)

var table_body = d3.select("tbody");
console.log (table_body)

tableData.forEach(function(xyz){
    //console.log (xyz);
    var added_row = table_body.append("tr");

    Object.entries(xyz).forEach(function([key, value]){
        //console.log(key, value);
        var new_td = added_row.append("td");
        new_td.text(value);
    })
})

var button = d3.select("#filter-btn");
d3.selectAll("#selFilterOption").on("change", updateFilter);

function updateFilter() {
    var dropdownMenu = d3.selectAll("#selFilterOption")
    var dropdownMenuValue = dropdownMenu.property("value")
    enter_date_input = d3.select("input")

    var fitlerTitle = d3.selectAll("#ufo-filter")

     if (dropdownMenuValue == "Date") {
        enter_date_input.property("value","1/1/2010")
        fitlerTitle.text("Enter Date")
        //console.log(dropdownMenuValue)
        selector = "Date"
     }
     else if (dropdownMenuValue == "City") {
        enter_date_input.property("value","benton")
        fitlerTitle.text("Enter City Name")
        //console.log(dropdownMenuValue)
        selector = "City"
     }
     else if (dropdownMenuValue == "State") {
        enter_date_input.property("value","ar")
        fitlerTitle.text("Enter State Name")
        //console.log(dropdownMenuValue)
        selector = "State"
     }
     else if (dropdownMenuValue == "Country") {
        enter_date_input.property("value","us")
        fitlerTitle.text("Enter Country Name")
        //console.log(dropdownMenuValue)
        selector = "Country"
    }
    else if (dropdownMenuValue == "Shape") {
        enter_date_input.property("value","light")
        fitlerTitle.text("Enter a Shape")
        //console.log(dropdownMenuValue)
        selector = "Shape"
    }
};

button.on("click", function() {
    table_body.html("");
    enter_date_input = d3.select("input")
    //console.log (selector)
    filter_value = enter_date_input.property("value");

    if (selector == "Date") {
        var filteredData = tableData.filter(data_datetime => data_datetime.datetime == filter_value);
     }
     else if (selector == "City") {
        var filteredData = tableData.filter(data_datetime => data_datetime.city == filter_value);
     }
     else if (selector == "State") {
        var filteredData = tableData.filter(data_datetime => data_datetime.state == filter_value);
     }
     else if (selector == "Country") {
        var filteredData = tableData.filter(data_datetime => data_datetime.country == filter_value);
    }
    else if (selector == "Shape") {
        var filteredData = tableData.filter(data_datetime => data_datetime.shape == filter_value);
    }

    filteredData.forEach(function(xyz){
        //console.log (xyz);
        var added_row = table_body.append("tr");
    
        Object.entries(xyz).forEach(function([key, value]){
            //console.log(key, value);
            var new_td = added_row.append("td");
            new_td.text(value);
        })
    })
})