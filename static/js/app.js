//======================================================================
// Create dashboard for Belly Button Biodiversity
//======================================================================

// Create Bar Chart
//----------------------------------------------------------------------

// Create initial bar chart for first sample

// function init() {
//     d3.json("data/samples.json").then ((firstSample) => {
//         var initialSample = firstSample.samples[0];
//         console.log(initialSample); 
        
//         // var sortSample = Object.entries(initialSample).forEach(([key, value]) => {
//         //     console.log(key, value);
//         // })

//         // var slicedSample = sampleID.map(String);
//         // console.log(slicedSample);

//         // prepY = []
//         // getY = slicedSample.forEach(id => {
//         //     prepY.push("OTU "${id});
//         //     console.log(prepY);
//         // });
//         initialSampleValues = initialSample.sample_values.slice(0, 10)
//         inititalSampleIds = initialSample.otu_ids.slice(0,10);
        
//         var trace1 = {
//         x: initialSampleValues,
//         y: inititalSampleIds,
//         type: "bar",
//         orientation: "h",
//         text: initialSample.otu_labels.slice(0, 10),
//         marker: {width: .5}
//         };

//         var data = [trace1];

//         var layout = {
//             title:  "Top Ten Bacteria Cultures Found"
                
//         //     // yaxis: {
//         //     //     conve: "strict",
//         //     //     dtick:  initialSample.otu_ids.slice(0, 10),
//         //     //     tickvals: initialSample.otu_ids.slice(0, 10),
                
//         //     // }
//         }
    
//         Plotly.newPlot("bar", data, layout);        
//     });
// }

//----------------------------------------------------------------------------------------------------------------------

// function bar() {
//     d3.json("data/samples.json").then ((samples) => {
//         var sampleSlice = samples.slice(0, 10);
//         console.log(sampleSlice);         

//         var trace1 = {
//             x: sampleSlice.map(row => row.sample_values),
//             y: sampleSlice.map(row => row.otu_ids),
//             type: "bar",
//             orientation: "h"
//             };
//         var data = [trace1];
    
//         Plotly.newPlot("bar", data);        
//     }); 
// }

// init();

// d3.select("#selDatset").on("change",selDataset);

// function optionChange(choiceValue) {
//     // var choice = d3.select("#selDataset");
//     // var choiceValue = choice.value;
//     alert(choiceValue);

// }


        
        
//        

//         var data = [trace1];
    
//         Plotly.newPlot("bar", data);
//     }); 
// }
// d3.json("data/samples.json").then ((sample) => {
//     var sampleData = sample;
//     console.log(sampleData);
//     var sampleData = sampleData.samples.slice(0, 10);
//     console.log(sampleData);
//     var trace1 = {
//         x: sampleData.map(row => row.sample_values),
//         y: sampleData.map(row => row.otu_ids),
//         type: "bar"
//         orientation: "h"
//     };
//     var data = [trace1];

//     Plotly.newPlot("bar", data);
// init();

//================================================================
// Bubble Chart
//================================================================

// Create function to show plots with first sample on page open
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
        samples.forEach((keys) => {
            console.log(keys);
            Object.entries(keys).forEach(([key,value]) => {
                console.log(key, value);
                var allIds = keys.otu_ids;
                var allValues = keys.sample_values;
                var allLabels = keys.otu_labels;
                console.log(allIds);
                console.log(allValues);
                console.log(allLabels)
            });
        })
        

        // var trace2 = {
        //     x: allIds,
        //     y: allValues,
        //     mode: "markers",
        //     marker: {
        //         size: allIds
        //     }        
        // }

        // var bubbleData = [trace2];

        // var layout = {
        //     title:  "Bacteria Cultures per Sample"
        // }

        // Plotly.newPlot("bubble", bubbleData, layout); 
    });
}
init();