import React from 'react';
import Contact from './contact';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-122663887-3');

const projectArr = [
  {name: "Ski Searcher", description: `An interactive leaflet.js map
    that provides information about North American Ski resorts. If the
    user clicks on a point in the map in the United States, the app calls
    the NOAA API to get a forecast for that point.`,
    buttons: [
      {
        name: "Project",
        url: "http://www.averageanalytics.com/snow-forecast"
      },
      {
        name: "GitHub",
        url: 'https://github.com/niedermansam/snow-forecast'
      }
    ],
    github: 'https://github.com/niedermansam/snow-forecast',
    keywords: [ "Javascript", "HTML/CSS", "leaflet.js", "Web Scraping", "NOAA API"],
    img: require('./photos/ski-resort-explorer.PNG'),
    include: true
  },
  {name: "Census Time Series", description: `A Javascript application
    that uses plotly to visualize American Community Survey data from
     2010 to present.`,
    buttons: [
      {
        name: "Project",
        url: "http://www.averageanalytics.com/census-search/"
      },
      {
        name: "GitHub",
        url: 'https://github.com/niedermansam/census-search'
      }
    ],
    keywords: ["Javascript", "HTML/CSS", "Plot.ly", "JQuery", "Census API"],
    img: require('./photos/census-searcher-tool.PNG'),
    include: true
  },
  {name: "FCC Microservices", description: `A node.js application
    for freecodecamp.org's Microservices and APIs Certification, with
    a front end build in React.`,
  buttons: [
    {
      name: "Project",
      url: "https://swamp-straw.glitch.me"
    },
    {
      name: "FCC Certificate",
      url: 'https://www.freecodecamp.org/certification/samniederman/apis-and-microservices'
    }
  ],
  keywords: [ "MongoDB", "express.js", "React", "node.js"],
  img: require('./photos/fcc-microservices-project.PNG'),
  include: true
},
{name: "wikiScraper", description: `An R package designed to
  get information from Wikipedia pages and HTML tables.`,
buttons: [
  {
    name: "GitHub",
    url: 'https://github.com/niedermansam/wikiScraper'
  }
],
keywords: [ "R", "Regular Expressions", "HTML Tables", "GitHub"],
img: require('./photos/wikiScraper-github-page.PNG'),
include: true
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
    arr = arr.filter(x=>{
      return x.include;
    })
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
      <Contact />
    </div>
  );
}
}


function ProjectCard(props){

  let divStyle = {
    backgroundImage: `url('${props.img}')`,
    backgroundPosition: "left top",
    backgroundSize: 'cover'
 }

  const onClick = (e) => {
    ReactGA.event({
      category: "Project",
      action: `Clicked Card`,
      label: props.name
    })
  }

  const onMouseEnter = (e) => {
    console.log('mouse over')
    ReactGA.event({
      category: "Project",
      action: `Hovered Card`,
      label: props.name
    })
  }

  return (
    <div className="project-card" key={props.key}>
      <a href={"//" + props.url}
        onClick={onClick}
        style={{textDecoration: 'none'}}
        target="_blank"
        rel="noopener noreferrer">
    <div className="project-card-header"
      style={divStyle}
      onMouseEnter={onMouseEnter}>
        <h2 className="project-name">{props.name}</h2>

        <div className="project-card-overlay">
        <p className="project-description">{props.description}</p>
        </div>


    </div>
    </a>

    <div className="project-button-bar">
      {props.buttons.map(button => {
        return(
          <a href={button.url}
            key={button.url}
            target="_blank"
            rel="noopener noreferrer">
            <button>{button.name}</button>
          </a>
        )
      })}
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
