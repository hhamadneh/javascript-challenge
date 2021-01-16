// from data.js
var tableData = data;

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
button.on("click", function() {

    table_body.html("");
    enter_date_input = d3.select("input")

    filter_value = enter_date_input.property("value");
    var filteredData = tableData.filter(data_datetime => data_datetime.datetime == filter_value);
    //console.log (filteredData);

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