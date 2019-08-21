import React from 'react';

const projectArr = [
  {name: "Ski Searcher", description: `An interactive leaflet.js map
    that provides information about North American Ski resorts. If the
    user clicks on a point in the map in the United States, the app calls
    the NOAA API to get a forecast for that point.`,
    url: "www.averageanalytics.com/snow-forecast",
    github: 'https://github.com/niedermansam/snow-forecast',
    keywords: [ "Javascript", "HTML/CSS", "leaflet.js", "Web Scraping", "NOAA API"],
    img: require('./photos/ski-resort-explorer.PNG')
  },
  {name: "Census Time Series", description: `A Javascript application
    that uses plotly to visualize American Community Survey data from
     2010 to present.`,
    url: 'www.averageanalytics.com/census-search/',
    github: 'https://github.com/niedermansam/census-search',
    keywords: ["Javascript", "HTML/CSS", "Plot.ly", "JQuery", "Census API"],
    img: require('./photos/census-searcher-tool.PNG')
  },
  {name: "Trump Twittermap", description: `An R/Shiny application
    that visualizes the twitter habits of the 45th President of the
    United States.`,
    url: 'http://68.183.17.153:3838/trump-tweets/',
    github: '',
    keywords: ["R/Shiny", "Data Visualization", "ggplot"],
    img: require('./photos/trump-twitter-map.PNG')
  }
]

class Projects extends React.Component {
  constructor(props){
    super(props);
    let number = props.number,
        title = props.title;

    if(!number) number=projectArr.length;
    if(number==="all") number=projectArr.length;

    if(!title) title = "Projects"

    this.state = {
      number: number,
      title: title
    }
  }

  createProjectComponentArray(arr){

    let projectComponents = [];

      for(let i=0; i<arr.length; i++){
        arr[i].key=i;
        if(i<this.state.number) projectComponents.push(ProjectCard(arr[i]))
      }
    return projectComponents;
  }


  render(){

  let projectComponents = this.createProjectComponentArray(projectArr)
  
  return (
    <div className="text-container project-page">
      <h1>{this.state.title}</h1>
      <div className="projects">
        {
          projectComponents
        }
      </div>
    </div>
  );
}
}


function ProjectCard(props){

  let divStyle = { backgroundImage: `url('${props.img}')` }


  return (
    <div className="project-card" key={props.key}>
      <a href={"//" + props.url} style={{textDecoration: 'none'}} target="_blank" rel="noopener noreferrer">
    <div className="project-card-header" style={divStyle}>
        <h2 className="project-name">{props.name}</h2>

        <div className="project-card-overlay">
        <p className="project-description">{props.description}</p>
        </div>


    </div>
    </a>

    <div className="project-button-bar">
    <a href={props.url} target="_blank" rel="noopener noreferrer"><button>Project</button></a>
    <a href={ props.github} target="_blank" rel="noopener noreferrer"><button>GitHub</button></a>
    </div>

    <div className="project-skills">
      <h3>Skills Used:</h3>
      <ul>
        {props.keywords.map((keyword, index) => <li key={index}>{keyword}</li>)}
      </ul>
    </div>
  </div>
  )
}

export default Projects;
