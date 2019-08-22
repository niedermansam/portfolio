import React from 'react';
import {NavLink} from 'react-router-dom'

class Nav extends React.Component {
  constructor(props){
    super(props);
    this.handleScroll=this.handleScroll.bind(this);
    this.handleHamburgerMenu = this.handleHamburgerMenu.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  handleScroll(){
    if(window.pageYOffset > 50) {
      document.querySelector('nav').style.height = '40px';
    } else {
      document.querySelector('nav').style.height = '80px';

    }
  }
  handleHamburgerMenu(){
    document.getElementById("hamburger-menu").classList.toggle("change");
    document.getElementById('nav-links').classList.toggle('closed');
    document.getElementById('overlay').classList.toggle('hidden');
  }

  handleMenuClick(){
    if(window.innerWidth <= 400){
      document.getElementById("hamburger-menu").classList.toggle("change");
      document.getElementById('nav-links').classList.toggle('closed');
      document.getElementById('overlay').classList.toggle('hidden');
    }
  }

  componentDidMount(){
      window.addEventListener('scroll', this.handleScroll)
  }
  componentWillUnmount(){
      window.removeEventListener('scroll', this.handleScroll)
  }

  render(){
  const style = {color: "white", textDecoration: 'none'}
  return (
    <nav id="nav-header">
      <NavLink style={style} exact={true} to="/portfolio">
      <h1 id="header-logo">S</h1>

      </NavLink>
      <div className="logo-menu">
        <div className="hamburger-menu" id="hamburger-menu" onClick={this.handleHamburgerMenu}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </div>

      <ul className="nav-links closed" id="nav-links" onClick = {this.handleMenuClick}>
        <NavLink style={style} exact={true} to="/portfolio">
          <li className="link">About</li>
        </NavLink>
        <NavLink style={style} to="/portfolio/resume">
          <li className="link">Resume</li>
        </NavLink>
        <NavLink style={style} to="/portfolio/projects">
          <li className="link">Projects</li>
        </NavLink>
      </ul>
      <div className='overlay hidden' id="overlay">
      </div>
    </nav>
  );
}
}

export default Nav;
