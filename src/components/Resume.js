import React from 'react';

class Resume extends React.Component {

  render(){
  return (
    <div id="resume"  className="text-container">
      <h1>Resume</h1>
      <div className="text-container">
        <h2>Education</h2>
        <p> <strong>BA in Economics,</strong> University of Montana, 2017</p>
        <p><strong>BA in Spanish,</strong> University of Montana, 2017</p>
        <p><strong>MA in Economics,</strong> University of Montana, 2019</p>
        <h2>Experience</h2>
        <p><strong>Graduate Teaching Assistant</strong> - University of Montana, August 2017 - May 2019 </p>
        <p><strong>Digital Media Intern</strong> - Montana World Affairs Council, June 2016 - May 2017 </p>
        <SkillList />
      </div>
    </div>
  );

}
}

const Skill = (props) => {
  return <div className="skill">{props.skill}</div>
}

const SkillList = (props) => {
  const skills = ["HTML", "CSS", "Javascript", "React", "Node", "MongoDB", "SQL", "R/Shiny", "STATA", "WordPress"]
  let title = props.title;
  if(!title) title = "Skills"

  

  return (
    <div>
      <h2>{title}</h2>
      <div className="skill-list">{skills.map((x, i) => <Skill skill={x} key={i}></Skill>)}</div>
    </div>
  )
}

export default Resume;
