import React, { Component } from "react";
import "./css/Signup.css";
import { Link, Redirect } from "react-router-dom";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      signupLoading: false,
      message: "",
      redirect: false,
    };
  }

  setRedirect() {
    this.setState({
      redirect: true,
    });
  }
  renderRedirect() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
  }

  handleSubmit = async (e) => {
    console.log("clicked");
    this.setState({
      signupLoading: true,
    });
    e.preventDefault();
    const res = await fetch("/api/v1/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: this.state.name.split(" ")[0],
        lastName: this.state.name.split(" ")[1],
        email: this.state.email,
        password: this.state.password,
      }),
    });
    const response = JSON.parse(await res.text());
    // localStorage.setItem("user", JSON.stringify(response.data.user));
    // console.log(JSON.parse(localStorage.getItem("user")));
    console.log(response);
    if (response.status === "fail") {
      this.setState({
        message: response.message,
      });
    }
    if (response.status === "success") {
      alert("Account Created successfully");
      this.setRedirect();
    }
    this.setState({
      signupLoading: false,
    });
  };

  render() {
    return (
      <div className="signupPage">
        <div>{this.renderRedirect()}</div>
        <form onSubmit={this.handleSubmit}>
          <div className="signupPageHead">
            <span>Signup</span>
          </div>
          <div className="responseMessage">{this.state.message}</div>
          <div className="signupBox">
            <div className="inputName" id="inputfields">
              <label htmlFor="inputName">Full Name</label>
              <input
                value={this.state.name}
                onChange={(e) => this.setState({ name: e.target.value })}
                className="textInput"
                id="inputName"
                type="text"
                placeholder="ex: John Walker"
                required
              />
            </div>
            <div className="inputEmail" id="inputfields">
              <label htmlFor="inputEmail">Email</label>
              <input
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
                className="textInput"
                id="inputEmail"
                type="email"
                placeholder="abc@xyz.com"
                required
              />
            </div>
            <div className="inputPassword" id="inputfields">
              <label htmlFor="inputPassword">Password</label>
              <input
                value={this.state.password}
                onChange={(e) => this.setState({ password: e.target.value })}
                className="textInput"
                id="inputPassword"
                type="password"
                required
              />
            </div>
            <div className="signupButton" id="inputfields">
              {this.state.signupLoading ? (
                <button
                  id="signupButton"
                  type="submit"
                  disabled={true}
                  style={{ cursor: "not-allowed" }}
                >
                  Loading...
                </button>
              ) : (
                <button id="signupButton" type="submit">
                  Signup
                </button>
              )}
            </div>
          </div>
          <div className="signupOthers">
            <div className="forSignin" id="otherfields">
              <Link
                id="signinLink"
                to={{
                  pathname: "/signin",
                }}
              >
                Already have an account? Sign in
              </Link>
            </div>
          </div>
          <div className="forCopy" id="otherfields">
            <span id="copyright">Copyright © By Milan 2021.</span>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
