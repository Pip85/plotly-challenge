//======================================================================
// Create dashboard for Belly Button Biodiversity
//======================================================================

// Create bar chart of sample results

function init() {
    d3.json("data/samples.json").then ((sample) => {
        var sampleData = sample;
        console.log(sampleData);
        var initialSample = sampleData.samples[0];
        console.log(initialSample); 

        var trace1 = {
        x: initialSample.sample_values,
        y: initialSample.otu_ids,
        type: "bar",
        orientation: "h"
        };
        var data = [trace1];
    
        Plotly.newPlot("bar", data);        
    });      
    alert("Watch out!");
}



function bar() {
    d3.json("data/samples.json").then ((samples) => {
        var sampleSlice = samples.slice(0, 10);
        console.log(sampleSlice);         

        var trace1 = {
            x: sampleSlice.map(row => row.sample_values),
            y: sampleSlice.map(row => row.otu_ids),
            type: "bar",
            orientation: "h"
            };
        var data = [trace1];
    
        Plotly.newPlot("bar", data);        
    }); 
}

init();

d3.select("#selDatset").on("change",selDataset);

function optionChange(choiceValue) {
    // var choice = d3.select("#selDataset");
    // var choiceValue = choice.value;
    alert(choiceValue);

}


        
        
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
// });