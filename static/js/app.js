//======================================================================
// Create dashboard for Belly Button Biodiversity
//======================================================================

// Pull sample.json data
function init() {
    d3.json("data/samples.json").then ((sampleData) => {
        var bbData = sampleData;
        console.log(bbData);
        dropdown(bbData);
        chartData(bbData);
    });
}
init();

// Set up drop down sample values
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

// Add function to perform on event change
function optionChanged(pick) {
    console.log(pick);
    init();
}

// Determine dropdown pick and return associated data for charts
function chartData(bbData) {
    // Get objects from samples.json
    var sampleObj = bbData.samples;
    var metaObj = bbData.metadata;
    console.log(sampleObj);
    console.log(metaObj);

    // Linking to dropdown choice in HTML
    var selHtml = d3.select("#selDataset");
    var samplePick = selHtml.property("value");
    console.log(samplePick);

    // Get samples.json data for dropdown sample choice
    samplePickValue = sampleObj.filter(sample => sample.id === samplePick);
    metaPickValue = metaObj.filter(meta => String(meta.id) === samplePick);
    console.log(samplePickValue);
    console.log(metaPickValue);

    // Get data for bar/bubble charts
    // var sampleValues = samplePickValue.map(sample => sample.sample_values);
    // var otuIds = samplePickValue.map(sample => sample.otu_ids);
    // var otuLabels = samplePickValue.map(sample => sample.otu_labels);
    // console.log(sampleValues);
    // console.log(otuIds);
    // console.log(otuLabels);

    barChart(samplePickValue);
    bubbleChart(samplePickValue);
    metaPanel(metaPickValue);
}

function barChart(samplePickValue) {
    console.log("samplePickValue:",samplePickValue);
    // var sampleValues = samplePickValue.map(sample => sample.sample_values.slice(0,10).reverse());
    // var otuIds = samplePickValue.map(sample => sample.otu_ids.slice(0,10).reverse());
    // var otuLabels = samplePickValue.map(sample => sample.otu_labels.slice(0,10).reverse());
    // console.log(sampleValues);
    // console.log(otuIds);
    // console.log(otuLabels);

    var sampleValues = samplePickValue[0].sample_values.slice(0,10).reverse();
    var otuIds = samplePickValue[0].otu_ids.slice(0,10).reverse();
    var otuLabels = samplePickValue[0].otu_labels.slice(0,10).reverse();
    console.log(sampleValues);
    console.log(otuIds);
    console.log(otuLabels);


    var trace1 = {
        x: sampleValues,          
        y: otuIds,
        type: "bar",
        orientation: "h",
        text: otuLabels
    };
    console.log(trace1);

    var data = [trace1];
    console.log(data);

    var layout = {
        title:  "Top Ten Bacteria Cultures Found"
    };

    Plotly.newPlot("bar", data, layout);
}

function bubbleChart(samplePickValue) {

    var sampleValuesBubble = samplePickValue[0].sample_values;
    var otuIdsBubble = samplePickValue[0].otu_ids;
    var otuLabelsBubble = samplePickValue[0].otu_labels;
    console.log(sampleValuesBubble);
    console.log(otuIdsBubble);
    console.log(otuLabelsBubble);

    var trace1 = {
        x: otuIdsBubble,
        y: sampleValuesBubble,
        text: otuLabelsBubble,
        mode: "markers",
        marker: {
            size: sampleValuesBubble,
            color: otuIdsBubble,
            colorscale: "Earth"
        }
    };
    var bubbleData = [trace1];
    var bubbleLayout = {
        title:  "Bacteria Cultures Per Sample"
    }
    Plotly.newPlot("bubble", bubbleData, bubbleLayout);  
}

function metaPanel(metaPickValue) {
    
    var metaArray = metaPickValue[0];
    console.log(metaArray);
    
    var demoData = d3.select("#sample-metadata");
    demoData.html("");
    
    Object.entries(metaArray).forEach(([key, value]) => {
        demoData.append("h6").text(`${key}: ${value}`);
    });
    
    // id = metaPickValue[0].id
//     var demoData = d3.select("#sample-metadata");   
   
//     Object.entries(metaPickValue).forEach(([key, value]) => {
//       demoData.text(key, value);
//    })
   
//    demoData.text(panelText);

}

    // var slicedSampleValues = sampleValues.slice(0,10);
    // var slicedOtuIds = otuIds.slice(0,10);
    // var slicedotuLabels = otuLabels.slice(0,10);
    // console.log(slicedSampleValues);
    // console.log(slicedOtuIds);
    // console.log(slicedotuLabels);


    // metaObj.forEach(function (ID) {
    //     ID.id.toString();
    //     metaObjPick = metaObj.filter(item => item.id === samplePick);
    //     console.log(metaObjPick);
    // })
   

    
    // metaObjIdString = metaObj.map(key => key.id.toString());
    // console.log(metaObjIdString);
    // var metacheck = metaObj.map(object => object.id);
    // console.log(metacheck);
    // metaPickValue = metaObj.filter(sample => sample.id === samplePick);
    
    // console.log(metaPickValue);

    // Pull chart data from the sample/meta objects data
    // var sampleValues = chartVal.map(sample => sample.sample_values);
    // console.log(sampleValues);

    
    // var sampleValues = samplePickValue.map(values => values.sample_values);
    // var otuIds = samplePickValue.map(values => values.otu_ids);
    // var otuLabels = samplePickValue.map(values => values.otu_labels);
    // console.log(sampleValues);
    // console.log(otuIds);
    // console.log(otuLabels);

    

   
    // sampleBar()
    // });


// function sampleBar() {

// }

// Create initial bar and bubble charts
//----------------------------------------------------------------------

// function init() {
    
//     // Pull data from samples.json for use in initial plots
//     d3.json("data/samples.json").then ((sampleData) => {
//         var initialData = sampleData;
//         console.log(initialData); 

//         // Pulling samples and metadata key values into variables
//         var samples = initialData.samples;
//         var meta = initialData.metadata;
//         var names = initialData.names;     
              
//         console.log(samples);
//         console.log(meta);
//         console.log(names);

//         // Set up drop down sample values
//         var dataOpt = d3.select("#selDataset");
//         names.forEach((sample) => (
//             dataOpt
//             .append("option")
//             .text(sample)
//             .property("value", sample)
//         ))

//         // d3.select("#selDataset").on("change", optionChanged);
//         // function optionChanged() {
//         //     var sampleData = d3.select("#selDataset");
//         //     var samplePick = sampleData.property("value");
//         //     console.log(samplePick)
//         // }
        
//         // document.getElementById("#selDataset").onchange = function() {optionChanged()};

//         // function optionChanged() {
//         // var sampleData = document.getElementById("#selDataset");
//         // console.log(sampleData);
//         // }
       
//     //    var samplePick = d3.select("onchange").on("change", optionChanged);
//     //         function optionChanged() {
//     //             var sampleData = d3.select("#selDataset");
//     //             var samplePick = sampleData.property("value");
//     //             .append("this.value")
//     // //         }

//     // d3.select(onchange).on("change", optionChanged); 
//     // function optionChanged() {
//     //     console.log(this.value);
//     // }
       

//     //Do it in JS
//     // function optionChanged() {
//     //     var sampleData = d3.select("#selDataset");
//     //     var samplePick = sampleData.property("value");
//     //     console.log(samplePick);
//     // }
//     // d3.select("#selDataset").on("change", optionChanged);  


   
   
       
       
       
       
//         // .append(dataOpt)
//         // .on('change',function() { update(this.value, this.options[this.value].text) }); // note: since you are setting value equal to the index, you can also use this.value instead of this.selectedIndex


//         // Pulling initial sample and meta values only
//         var initialSample = samples[0];
//         var initialMeta = meta[0];
//         console.log(initialSample);
//         console.log(initialMeta);

//         // Slicing top ten values from Samples data for charts
//         var valueSlice = initialSample.sample_values.slice(0,10);
//         var idSlice = initialSample.otu_ids.slice(0,10);
//         var labelSlice = initialSample.otu_labels.slice(0, 10);
//         console.log(valueSlice);
//         console.log(idSlice);
//         console.log(labelSlice);

//         // Create initial bar chart
//         var trace1 = {
//             x: valueSlice,
//             y: idSlice,
//             type: "bar",
//             orientation: "h",
//             text: labelSlice
//         }
//         var data = [trace1];
//         var layout = {
//             title:  "Top Ten Bacteria Cultures Found",
//             yaxis: {
//                 "tickmode": "array",
//                 "tickvals": ["valueSlice"],
//                 "ticktext": ["idSlice"]
//             }
//         }
//         Plotly.newPlot("bar", data, layout);

//         // Create initial Bubble Chart
//        var allValues = initialSample.sample_values;
//        var allIds = initialSample.otu_ids;
//        var allLabels = initialSample.otu_labels;
//        console.log(allValues);
//        console.log(allIds);
//        console.log(allLabels);
       
//         var trace2 = {
//             x: allIds,
//             y: allValues,
//             text: allLabels,
//             mode: "markers",
//             marker: {
//                 size: allValues,
//                 color: allIds,
//                 colorscale: "Earth"
//             }
//         };
//         var bubbleData = [trace2];
//         var bubbleLayout = {
//             title:  "Bacteria Cultures Per Sample"
//         }
//         Plotly.newPlot("bubble", bubbleData, bubbleLayout);

//         // Create initial demo data
//         var firstMeta = d3.select(".panel-body");
//         Object.entries(initialMeta).forEach(([key, value]) => {
//             var initialDemo = (key, value);
//             console.log(initialDemo);
//             firstMeta.text(initialDemo)
//         });
//     });    
// }
// init();

//  //Do it in HTML
//  function optionChanged(val) {
//     console.log(val);
// }