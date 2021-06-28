# plotly-challenge
The challenge goal is to build a web dashboard showcasing data from the Belly Button Diversity Project.

Project URL:  http://robdunnlab.com/projects/belly-button-biodiversity/.  Below is a snippet 
about the project taken directly from the project site:

Belly Button Biodiversity
Public Science | Your Wild Life Projects
The coolest study of biodiversity on the human body on the planet!
The belly button is one of the habitats closest to us, and yet it remains relatively unexplored.
In January 2011, we launched Belly Button Biodiversity to investigate the microbes inhabiting our
navels and the factors that might influence the microscopic life calling this protected, moist patch
of skin home. In addition to inspiring scientific curiosity, Belly Button Biodiversity inspired 
conversations about the beneficial roles microbes play in our daily lives.

People
Dan Fergus, Post-doc
Sarah Council, Post-doc, NC Museum of Natural Sciences and NC Central University

Project Publications
Hulcr, J., Latimer, A. M., Henley, J. B., Rountree, N. R.**, Fierer, N., Lucky, A., 
Lowman, M. D., Dunn RR 2012. A jungle in there: bacteria in belly buttons are highly diverse,
but predictable. PLoS ONE 7(11): e47712. doi:10.1371/journal.pone.0047712

Data on the project was provided in a JSON file - samples.json.
The data includes sample ID numbers, metadata on the person providing the sample, and sample data including levels of 
different bacteria found.

JavaScript, Plotly, D3, and Html were used to code a web dashboard showcasing data from the Belly Button Diversity Project.
The web page includes a dropdown of the sample ID’s.  Upon selecting one of the ID’s the graphical and demographic data is 
displayed for that sample.  Demographic data is listed for the person giving a sample in a left side panel.
  
A bar chart renders showing the types of bacteria found on the y-axis and the amount of that bacteria found on the x-axis.  
The bar chart only includes data for the top 10 bacteria found in the sample.

A bubble chart also renders showing all the bacteria Id’s found in the sample on the x-axis and the numbers of each bacteria 
ID on the y-axis.  

Once another sample is selected in the dropdown, the data updates for that sample.  
The web page is published through GitHub Pages.




