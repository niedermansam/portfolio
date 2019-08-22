import React from 'react';

class Contact extends React.Component {
  constructor(props){
    super(props);
    this.baseState = {
      name: "",
      nameMessage: "Jane Doe",
      email: "",
      emailMessage: "Jane@example.com",
      subject: "",
      message: "",
      showForm: true
    }
    this.state = this.baseState;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleSubject = this.handleSubject.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.sendAnother=this.sendAnother.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();

    if(!this.state.name){
      return;
    }
    if(!this.state.email){
      return;
    }
    this.setState({showForm: false})
  }

  sendAnother(){
    this.setState(this.baseState);
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
    let address = event.target.value;
    let formInput = document.getElementById('email-form');


    if(address.indexOf('@') === -1 || address.indexOf('@') > address.lastIndexOf('.')) {
      formInput.style.borderColor = 'red';
      formInput.style.backgroundColor="#F9B7B7";
    } else {
      formInput.style.borderColor = "";
      formInput.style.backgroundColor="";
    }

  }

  handleSubject(event){
    this.setState({subject: event.target.value});
  }

  handleMessage(event){
    this.setState({message: event.target.value});
  }


  render(){
    if(this.state.showForm){
    return <div className="contact-section" id="contact-section">
          <h1>Get in Touch</h1>
          <h2>(Just kidding... this form doesn't do anything yet)</h2>
          <form onSubmit={this.handleSubmit}>

            <label className="name-label">Name: </label> <br/>
            <input value={this.state.name} onChange={this.handleName} className="name" placeholder={this.state.nameMessage} type="text" name="name"></input> <br/>
            <p id="name-validation"></p>

            <label className="email-label">Email: </label> <br/>
            <input id="email-form" value={this.state.email} onChange={this.handleEmail} className="email" placeholder={this.state.emailMessage} type="email" name="email"></input><br/>
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
        } else {
          let formHeight=document.querySelector('#contact-section').clientHeight;
          return  (
            <div className="contact-section" style={{ height: formHeight+'px'}}>
            <h2>Thanks for getting in touch, {this.state.name.split(" ")[0]}!</h2>
            <button onClick={this.sendAnother} style={{width: "200px", padding: "5px 10px", alignSelf:'center'}}>Send Another Message</button>
            </div>
          )
        }
  }
}

export default Contact;
