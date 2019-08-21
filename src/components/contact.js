import React from 'react';

class Contact extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      name: "",
      nameMessage: "Jane Doe",
      email: "",
      emailMessage: "Jane@example.com",
      subject: "",
      message: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleSubject = this.handleSubject.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    console.log(event.target);
  }

  handleChange(event){
    console.log('changed')
    console.log(event.target.name);
    let newState = {};
    newState[event.target.name] = event.target.value;
    //this.setState(newState);
  }

  handleName(event){
    this.setState({name: event.target.value});
  }

  handleEmail(event){
    this.setState({email: event.target.value});
  }

  handleSubject(event){
    this.setState({subject: event.target.value});
  }

  handleMessage(event){
    this.setState({message: event.target.value});
  }

  render(){
    return <div className="contact-section">
          <h1>Get in Touch</h1>
          <form onSubmit={this.handleSubmit}>

            <label className="name-label">Name: </label> <br/>
            <input value={this.state.name} onChange={this.handleName} className="name" placeholder={this.state.nameMessage} type="text" name="name"></input> <br/>
            <p id="name-validation"></p>

            <label className="email-label">Email: </label> <br/>
            <input value={this.state.email} onChange={this.handleEmail} className="email" placeholder={this.state.emailMessage} type="email" name="email"></input><br/>
            <p className="email-validation"></p>

            <label>Subject: </label> <br/>
            <input type="text" name="subject" value={this.state.subject} onChange={this.handleSubject}></input> <br/>
            <p></p>

            <label className="message-label" value={this.state.message} onChange={this.handleMessage}>Message: </label> <br/>
            <textarea className="message" name="message" cols="40" rows="5"></textarea> <br/>
            <p></p>

            <input type="submit"></input>

          </form>
          </div>
  }
}

export default Contact;
