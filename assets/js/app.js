// @TODO: YOUR CODE HERE!
// 11/13/2019 14:05

var StateData;
var StateAbbr=[]
var StatePoverty=[]
var StateHealthCare=[]

function CreatePlot(plotData)
{
    console.log(StateAbbr);
    console.log(StatePoverty);
    console.log(StateHealthCare);

    var sttxt="AA";
    var trace1 = 
    {
      x: StatePoverty,
      y: StateHealthCare,
      
      mode: 'markers+text',
      type:"scatter",

      text: StateAbbr,
      textposition: "center",
      textfont: "Raleway, sans-serif",
      textsize: .1,
      
      marker: {size: 20,
               color: "skyblue",
               sizemode: 'area',
              }
    };
    var data = [trace1];
    
    var layout = 
    {
      showlegend: false,
      title: 
      {
        text:'Health Care & Poverty Relationsship by State',
        font: {family: 'Courier New, monospace, bold', size: 20},
        xref: 'paper',
        x: 0.5,
      },
      xaxis: 
      {
        title: 
        {
          text: 'Poverty%',font: {family: 'Courier New, monospace',size: 18, color: '#7f7f7f'},
          y: 5,
        }
      },
      yaxis: 
      {
        title: 
        {
          text: 'HealthCare%',font: {family: 'Courier New, monospace',size: 18, color: '#7f7f7f'}
        }
      }
    };
    Plotly.newPlot('scatter', data, layout);
}

// async function getData()
function getData()
{
    filePath="assets/data/data.csv";
    d3.csv(filePath).then(function(Data)
    {
        Data.forEach(function(data)
        {
            // console.log(data.state, data.abbr, data.poverty, data.healthcare);
            StateAbbr.push(data.abbr);
            StatePoverty.push(data.poverty);
            StateHealthCare.push(data.healthcare);
        })
        StateData=Data;
        // console.log(StateData);
        CreatePlot(StateData);
    })
    return (true);
    // data = await d3.csv(filepath);
}

if (getData() === true)
{
    console.log(StateData);
};