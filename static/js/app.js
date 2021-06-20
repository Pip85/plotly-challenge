//======================================================================
// Create dashboard for Belly Button Biodiversity
//======================================================================

// Create bar chart of sample results
d3.json("data/samples.json").then ((sample) => {
    var sampleData = sample;
    console.log(sampleData);
})