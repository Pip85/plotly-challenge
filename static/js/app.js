//======================================================================
// Create dashboard for Belly Button Biodiversity
//======================================================================

// Create initialize function to pull json data and
// call functions to create sample dropdown and charts
//--------------------------------------------------------------------
function init() {
    d3.json("data/samples.json").then ((sampleData) => {
        var bbData = sampleData;
        console.log(bbData);
        dropdown(bbData);
        chartData(bbData);
    });
}
init();

//--------------------------------------------------------------------
// Create function to populate sample dropdown
//--------------------------------------------------------------------
function dropdown(bbData) {
    var selectId = d3.select("#selDataset");
    var names = bbData.names;
    names.forEach((sample) => (
        selectId
        .append("option")
        .text(sample)
        .property("value", sample)
    ))
}

//--------------------------------------------------------------------
// Add event listener and re-route to init function when triggered
//--------------------------------------------------------------------
function optionChanged(pick) {
    console.log(pick);
    init();
}

//--------------------------------------------------------------------
// Build function to manipulate sammples.json for use in charts
// Gather value from sample dropdown and use to gather chart data
//--------------------------------------------------------------------
function chartData(bbData) {
    // Get objects from samples.json
    var sampleObj = bbData.samples;
    var metaObj = bbData.metadata;
    
    // Linking to dropdown choice in HTML
    var selHtml = d3.select("#selDataset");
    var samplePick = selHtml.property("value");
    
    // Get samples.json data for dropdown sample choice
    samplePickValue = sampleObj.filter(sample => sample.id === samplePick);
    metaPickValue = metaObj.filter(meta => String(meta.id) === samplePick);
    
    // Call functions to build charts/demo panel
    barChart(samplePickValue);
    bubbleChart(samplePickValue);
    metaPanel(metaPickValue);
}

//--------------------------------------------------------------------
// Build bar chart
//--------------------------------------------------------------------
function barChart(samplePickValue) {
    var sampleValues = samplePickValue[0].sample_values;
    var otuIds = samplePickValue[0].otu_ids;
    var otuLabels = samplePickValue[0].otu_labels;

    var trace1 = {
        x: sampleValues.slice(0,10),        
        y: otuIds.slice(0,10),
        type: "bar",
        orientation: "h",
        text: otuLabels.slice(0,10)                 
    };
   
    var data = [trace1];
    
    var layout = {
        title:  "<b>Top Ten Bacteria Cultures Found<b>",
        margin: {
            t: 90        
        },           
        yaxis: {
        tickprefix: "OTU ",
        tickvals: otuIds.slice(0,10),
        }
    };

    Plotly.newPlot("bar", data, layout);
}

//--------------------------------------------------------------------
// Build bubble chart
//--------------------------------------------------------------------
function bubbleChart(samplePickValue) {
    var sampleValuesBubble = samplePickValue[0].sample_values;
    var otuIdsBubble = samplePickValue[0].otu_ids;
    var otuLabelsBubble = samplePickValue[0].otu_labels;
   
    var trace1 = {
        x: otuIdsBubble,
        y: sampleValuesBubble,
        text: otuLabelsBubble,
        mode: "markers",
        marker: {
            size: sampleValuesBubble,
            color: otuIdsBubble,
            colorscale: "Earth"
        },
        height: 600
    };
    var bubbleData = [trace1];

    var bubbleLayout = {
        title:  "<b>Bacteria Cultures Per Sample<b>",
        xaxis: {
            title: "OTU ID"
        }
    }

    Plotly.newPlot("bubble", bubbleData, bubbleLayout);  
}

//--------------------------------------------------------------------
// Populate Demographic Info panel
//--------------------------------------------------------------------
function metaPanel(metaPickValue) {    
    var metaArray = metaPickValue[0];     
    
    var demoData = d3.select("#sample-metadata");
    demoData.html("");
    
    Object.entries(metaArray).forEach(([key, value]) => {
        keyUpper = key.toUpperCase();
        demoData.append("h6").text(`${keyUpper}: ${value}`);
    });  
}

 