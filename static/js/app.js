const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Promise Pending
const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);


// Fetch the JSON data and console.log it
d3.json(url).then(function(data) {
    // Following steps are used to better understand that data

    // Displays the whole data set 
    console.log("Shows the whole dataset:", data)

    // Displays the first individual's name (i.e. 940)
    console.log("Shows first id:" , data.names[0])

    // Displays the information for individual with id 940
    console.log("Shows 940's personal information", data.metadata[0])
    
    // All for id 940
    console.log("940's OTU ids", data.samples[0].otu_ids)
    console.log("940's OTU labels", data.samples[0].otu_labels)
    console.log("940's OTU sample_values", data.samples[0].sample_values)

    function init() {
        // Choose drop down menu
        let dropdownMenu = d3.select("#selDataset")
        
        dropdownMenu.append(option)
        .text(data.name)
        .property("value", data.name)
        
    }
});