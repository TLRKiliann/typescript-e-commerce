import React, { Component } from "react";
import axios from "axios";
import '../stylescomp/signup.scss';


class SignUp extends Component {
  state = {
      fullName: "",
      userName: "",
      email: "",
      password: ""
  };

  fullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    this.setState({fullName: e.target.value});
  };

  userNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    this.setState({userName: e.target.value});
  };

  emailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    this.setState({email: e.target.value});
  };

  passwordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    this.setState({password: e.target.value});
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const registered = {
      fullName:this.state.fullName,
      userName:this.state.userName,
      email:this.state.email,
      password:this.state.password
    }
    axios.post("http://localhost:4000/app/signup", registered)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));

    this.setState({
      fullName:"",
      userName:"",
      email:"",
      password:""
    })
  };

  render() {
    return (
      <form className="form--signup" onSubmit={(e) => this.handleSubmit(e)}>

        <h1>Sign Up</h1>

        <input type="text" className="input--logsign" value={this.state.fullName}
            placeholder="fullname" onChange={(e) => this.fullNameChange(e)} />

        <input type="text" className="input--logsign" value={this.state.userName}
            placeholder="username" onChange={(e) => this.userNameChange(e)} />

        <input type="email" className="input--logsign" value={this.state.email}
            placeholder="e-mail" onChange={(e) => this.emailChange(e)} />

        <input type="password" className="input--logsign" value={this.state.password}
            placeholder="password" onChange={(e) => this.passwordChange(e)} />

        <button type="submit" className="btn--submit">
          Sign Up
        </button>

      </form>
    );
  }
}

export default SignUp;

/*
        No ".bind(this)" required => every action binded by event (e)
        this.fullNameChange = this.fullNameChange.bind(this);
        this.userNameChange = this.userNameChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
*/