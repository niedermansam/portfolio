import React from 'react';
import './styles/App.min.css';
import Nav from './components/Nav';
import Resume from './components/Resume';
import Projects from './components/Projects';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {spring, AnimatedSwitch} from 'react-router-transition';

// hello this is gh-pages branch

function App() {
  // Transition code from http://maisano.github.io/react-router-transition/animated-switch/code


  // we need to map the `scale` prop we define below
  // to the transform style property
  function mapStyles(styles) {
    return {
      opacity: styles.opacity,
      transform: `scale(${styles.scale})`,
    };
  }

  // wrap the `spring` helper to use a bouncy config
  function bounce(val) {
    return spring(val, {
      stiffness: 150,
      damping: 22,
    });
  }

  // child matches will...
  const bounceTransition = {
    // start in a transparent, downscaled state
    atEnter: {
      opacity: 0,
      scale: .8
    },
    // leave in a transparent, downscaled state
    atLeave: {
      opacity: bounce(0),
      scale: bounce(0.8),
    },
    // and rest at an opaque, normally-scaled state
    atActive: {
      opacity: bounce(1),
      scale: bounce(1),
    },
  };

  return (
    <Router>
    <div className="App">
      <Nav />
    <AnimatedSwitch
    atEnter={bounceTransition.atEnter}
    atLeave={bounceTransition.atLeave}
    atActive={bounceTransition.atActive}
    mapStyles={mapStyles}
    className="route-wrapper"
  >
      <Route path="/portfolio" exact component={Home} />
      <Route path="/portfolio/resume" component={Resume}/>
      <Route path="/portfolio/projects" component={Projects}/>
      </AnimatedSwitch>
    </div>
    </Router>
  );
}

class Home extends React.Component {

render(){
return (
  <div className="text-container">
    <div className="about-container">
    <div id="greeting">
    <h2>Hi! My name is Sam.</h2>
    <p> I'm a web developer and data analyst. </p>
    </div>

    <div id="about-me">
      <div className="about-bullet"> <i className="fa fa-graduation-cap fa-3x"></i> <p> I recently graduated from the University of Montana with a Master's degree in Economics. </p></div>
      <div className="about-bullet"><i className="fa fa-code fa-3x"></i> <p> I have experience with HTML, CSS, and Javascript, along with React, node.js, MySQL, and MongoDB. </p></div>
      <div className="about-bullet"> <i className="fa fa-bar-chart fa-3x"></i> <p> I use R/Shiny and Stata for more complex data visualitzation, analysis, and econometric modeling.</p></div>
    </div>
    </div>
    <Projects title="A Sample of My Work" number='2' />

  </div>
)
}

}


export default App;
