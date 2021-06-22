//======================================================================
// Create dashboard for Belly Button Biodiversity
//======================================================================

// Create initial bar and bubble charts
//----------------------------------------------------------------------

function init() {
    
    // Pull data from samples.json for use in initial plots
    d3.json("data/samples.json").then ((sampleData) => {
        var initialData = sampleData;
        console.log(initialData); 

        // Pulling samples and metadata key values into variables
        var samples = initialData.samples;
        var meta = initialData.metadata;
        console.log(samples);
        console.log(meta);

        // Pulling initial sample and meta values only
        var initialSample = samples[0];
        var initialMeta = meta[0];
        console.log(initialSample);
        console.log(initialMeta);

        // Slicing top ten values from Samples data for charts
        var valueSlice = initialSample.sample_values.slice(0,10);
        var idSlice = initialSample.otu_ids.slice(0,10);
        var labelSlice = initialSample.otu_labels.slice(0, 10);
        console.log(valueSlice);
        console.log(idSlice);
        console.log(labelSlice);

        // Create initial bar chart
        var trace1 = {
            x: valueSlice,
            y: idSlice,
            type: "bar",
            orientation: "h",
            text: labelSlice
        }
        var data = [trace1];
        var layout = {
            title:  "Top Ten Bacteria Cultures Found"
        }
        Plotly.newPlot("bar", data, layout);

        // Create initial Bubble Chart
       var allValues = initialSample.sample_values;
       var allIds = initialSample.otu_ids;
       var allLabels = initialSample.otu_labels;
       console.log(allValues);
       console.log(allIds);
       console.log(allLabels);
       
        var trace2 = {
            x: allIds,
            y: allValues,
            text: allLabels,
            mode: "markers",
            marker: {
                size: allValues,
                color: allIds,
                colorscale: "Earth"
            }
        };
        var bubbleData = [trace2];
        var bubbleLayout = {
            title:  "Bacteria Cultures Per Sample"
        }
        Plotly.newPlot("bubble", bubbleData, bubbleLayout);
    });    
}
init();