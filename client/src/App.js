import React from "react";
// import { Route, Link } from 'react-router-dom';
import { withRouter, Route } from 'react-router';
import Header from './components/Header';
import Jumbo from './components/Jumbo';
import Login from './components/Login';
import Register from './components/Register';

import { loginUser, registerUser, verifyUser } from './services/api-helper';

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
      authFormData: {
        username: "",
        email: "",
        password: "",
      },
    };
  }

  // -------------- AUTH ------------------

  handleLoginButton = () => {
    this.props.history.push("/login");
  };

  handleLogin = async () => {
    const currentUser = await loginUser(this.state.authFormData);
    this.setState({ currentUser });
  };

  handleRegister = async (e) => {
    e.preventDefault();
    const currentUser = await registerUser(this.state.authFormData);
    this.setState({ currentUser });
  };

  handleLogout = () => {
    localStorage.removeItem("authToken");
    this.setState({
      currentUser: null,
    });
  };

  authHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value,
      },
    }));
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Jumbo />
        <Route
          exact
          path="/login"
          render={() => (
            <Login
              handleLogin={this.handleLogin}
              handleChange={this.authHandleChange}
              formData={this.state.authFormData}
            />
          )}
        />
        <Route
          exact
          path="/register"
          render={() => (
            <Register
              handleRegister={this.handleRegister}
              handleChange={this.authHandleChange}
              formData={this.state.authFormData}
            />
          )}
        />
      </div>
    );
  }
}

export default withRouter(App);
