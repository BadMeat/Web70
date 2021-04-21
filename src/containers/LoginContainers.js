import React, { Component } from "react";
import { auth, provider } from "../firebase";
import firebase from "firebase";

class LoginContainer extends Component {
  state = {
    isAuth: false,
    isError: false,
    account: null,
    email: null,
    password: null,
  };

  login = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log("userku", user);
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("error message", errorMessage);
      });
  };

  loginGoogle = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => {
        this.setState({
          isAuth: true,
          account: res.additionalUserInfo.profile,
        });
      })
      .catch((err) => {
        this.setState({
          isError: err,
        });
      });
  };

  logoutGoogle = () => {
    auth
      .signOut()
      .then(() => {
        this.setState({
          isAuth: false,
          account: [],
        });
      })
      .catch((err) => {
        this.setState({
          isError: err,
        });
      });
  };

  textOnChange = (event, property) => {
    this.setState({
      [property]: event.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.isAuth ? (
            <>
              <img
                src={this.state.account.picture}
                alt={this.state.account.name}
                width="200"
              />
              <p>{this.state.account.name}</p>
              <button onClick={this.logoutGoogle}>Logout</button>
            </>
          ) : (
            <>
              <p>Firebase Authentication</p>
              <button onClick={this.loginGoogle}>Login With Google</button>
            </>
          )}
          <small>{this.state.isError.message}</small>
          <input
            type="text"
            onChange={(props) => this.textOnChange(props, "email")}
            value={this.state.email}
          />
          <input
            name="password"
            type="password"
            onChange={(props) => this.textOnChange(props, "password")}
            value={this.state.password}
          />
          <button onClick={this.login}>Login With Email</button>
          {/* <p>
            {firebase.auth().currentUser
              ? firebase.auth().currentUser
              : "Belum Login?"}
          </p> */}
        </header>
      </div>
    );
  }
}
export default LoginContainer;
