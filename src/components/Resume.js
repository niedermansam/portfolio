import React from 'react';
import Contact from './contact'

class Resume extends React.Component {

  render(){
  return (
    <div>
    <div className="text-container resume">
      <h1 className="resume-header">Resume</h1>
      <Education />
      <Experience />
      <SkillList />
    </div>
    <Contact/>
    </div>
  );

}
}

// Create Education component
const Education = (props) => {
  const defaultEducation = [
                            {
                              degree: "Master of Arts in Economics",
                              institution: "University of Montana",
                              year: 2019,
                              description: [`In the graduate economics program at the University of Montana
                                            I honed my skills in data collection, analysis, and visualization in
                                            classes like microeconomic theory, macroeconomic theory/forecasting,
                                            and advanced econometrics. I also took a number of courses in geographic informations systems,
                                            where I learned to collect and display geographic data using a variety
                                            of programs, including R/Shiny, Python, and ArcGIS.`]
                            },
                            {
                              degree: "Bachelor of Arts in Economics",
                              institution: "University of Montana",
                              year: 2017,
                              description: `As an undergraduate economics student,
                                            I began developing my skills in economic modelling and
                                            statistical analysis in classes like Labor Economics,
                                            Environmental Economics, and Public Finance.`
                            },
                            {
                              degree: "Bachelor of Arts in Spanish",
                              institution: "University of Montana",
                              year: 2017,
                              description: `As an undergraduate Spanish student, I wrote papers and gave presentations
                                            in advanced seminar classes, and learned about the history of a variety of
                                            Hispanic communities and cultures through literature and lectures.`
                            },
                            ]
  const EduItem = (props) => {
    return(
      <div key={props.degree}>
      <h3 style = {{paddingBottom:"0", margin: 0}}>{props.degree}</h3>
      <p style = {{margin: 0}}><strong>{props.institution}, {props.year}</strong></p>
      <p style={{marginBottom:'3em', marginTop:".5em"}}>{props.description}</p>
      </div>
    )
  }

  let education = props.education || defaultEducation;

  return (
    <div className="education-section">
    <h2>Education</h2>
    {education.map(x => EduItem(x))}
    </div>
  )

}

// Create Experience component
const Experience = (props) => {
  const defaultExperience = [
                              {position: "Graduate Teaching Assistant",
                               location: "University of Montana",
                               time:"August 2017 - May 2019",
                               description:`During academic year 2017-2018 I ran lab
                                            sections for an Intro to Probability and Linear
                                            Algebra Class. In 2018-2019 I was a teaching assistant
                                            for various upper-level economics classes, including
                                            Public Finance, Communicating Economics, Advanced
                                            Econometrics, and Microeconomic Theory.`},
                              {position: "Digital Media Intern",
                               location: "The Montana World Affairs Council",
                               time: "June 2016 - May 2017",
                               description: [`At the Montana World Affairs Council, I created web
                                             pages to engage users and organize content, in
                                             addition to event management and other standard tasks
                                             around the office, I helped develop and create `,
                                             <a href='https://www.montanaworldaffairs.org/citcguide/'
                                               target="_blank" rel="noopener noreferrer"
                                               key='https://www.montanaworldaffairs.org/citcguide/'>
                                               Council in the Classroom Teacher Guides</a>, ` to help
                                             instructors better engage with the educational material
                                             the Council creates.`]
                            },
                            {position: "Office Assistant and Web Designer",
                             location: "Studio Modera, PLLC",
                             time: "June 2015 - January 2017",
                             description: [`Tasked with business writing, tech support, creating
                                           3D Google Sketchup models from AutoCAD floor plans of
                                           houses for an architectural firm, and other
                                           miscellaneous tasks. I remade the firm's website and
                                           optimized it for seach engine indexing. The site,
                                            www.studiomodera.com, was the 3rd unpaid link in
                                            Google's search results for "Missoula Architect" as
                                            of August 23rd, 2018, but is currently inactive.`]
                          }
                          ]

  let experience = props.experience || defaultExperience;
  let title = props.title || "Experience";

  const SingleExperience = (props) => {
    return(
      <div key={props.position} className="experience">
      <h3 style = {{paddingBottom:"0", margin: 0}}>{props.position}</h3>
      <p style={{margin:0}}><strong>{props.location}, {props.time}</strong></p>
      <p style={{marginBottom:'3em', marginTop:".5em"}}>{props.description}</p>
      </div>
    )
  }

  return (
    <div className="experience-section">
      <h2>{title}</h2>
      {experience.map(x => SingleExperience(x))}
    </div>
)
}


// Create component for a single skill
const Skill = (props) => {
  return <div className="skill">{props.skill}</div>
}

// Create conmponent for the list of skills
const SkillList = (props) => {
  // Pass in default list if there is no "skills" property
  let skills = props.skills || ["HTML", "CSS", "Javascript", "React", "Node", "MongoDB", "SQL", "Linux", "WordPress",
                                "R/Shiny", "Python", "STATA", "Plot.ly", "Leaflet", "Google Earth Engine", "ArcGIS",
                                "Sketchup", "Adobe Suite", "Microsoft Office", "Latex"]
  if(skills.length%2 === 1) skills.pop()
  // pass in default title if title does
  let title = props.title || "Skills";


  return (
    <div>
      <h2>{title}</h2>
      <div className="skill-list">{skills.map((x, i) => <Skill skill={x} key={i}></Skill>)}</div>
    </div>
  )
}

export default Resume;
