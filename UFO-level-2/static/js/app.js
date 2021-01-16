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

button.on("click", function() {

    table_body.html("");
    enter_date_input = d3.select("#ufo-datetime-input")
    enter_city_input = d3.select("#ufo-city-input")
    enter_state_input = d3.select("#ufo-state-input")
    enter_country_input = d3.select("#ufo-country-input")
    enter_shape_input = d3.select("#ufo-shape-input")

    filter_date_value = enter_date_input.property("value");
    console.log(filter_date_value)
    filter_city_value = enter_city_input.property("value");
    console.log(filter_city_value)
    filter_state_value = enter_state_input.property("value");
    console.log(filter_state_value)
    filter_country_value = enter_country_input.property("value");
    console.log(filter_country_value)
    filter_shape_value = enter_shape_input.property("value");
    console.log(filter_shape_value)
    var filteredData = tableData
    if (filter_date_value) {filteredData = tableData.filter(data_datetime => data_datetime.datetime == filter_date_value); }
    if (filter_city_value) {filteredData = filteredData.filter(data_city => data_city.city == filter_city_value); }
    if (filter_state_value) {filteredData = filteredData.filter(data_state => data_state.state == filter_state_value); }
    if (filter_country_value) {filteredData = filteredData.filter(data_country => data_country.country == filter_country_value); }
    if (filter_shape_value) {filteredData = filteredData.filter(data_shape => data_shape.shape == filter_shape_value); }
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