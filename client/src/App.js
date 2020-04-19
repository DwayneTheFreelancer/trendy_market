import React from "react";
<<<<<<< HEAD
import { Navbar, Nav, Button } from "react-bootstrap";
import { Route } from "react-router-dom";
=======
import { Route, Link } from "react-router-dom";
>>>>>>> parent of e5b5f84... fully working navbar
import { withRouter } from "react-router";
// import Header from './components/Header';
// import Jumbo from './components/Jumbo';
import Login from './components/Login';
import Register from './components/Register';

// import {
//   loginUser,
//   registerUser,
//   verifyUser,
//   removeToken,
// } from "./services/api-helper";

import {
  loginUser,
  registerUser,
  removeToken,
  verifyUser,
} from "./services/api-helper";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null, // we set the logged in user here. This way we know if the user is logged in
      flavors: [],
      food: [],
      foodItem: null, // Value for a selected food item
      formData: {
        // Form data for addin a food
        name: "",
      },
      selectedFlavor: "", // Form data for adding a flavor to a food
      authFormData: {
        username: "",
        email: "",
        password: "",
      },
    };
  }

  // onClick function to redirect to the login form
  handleLoginButton = () => {
    this.props.history.push("/login");
  };

  // On page load, we grab all the foods and flavors
  // If so, we hit our verify route to get the user data.
  // componentDidMount = () => {
  //   this.handleVerify();
  // };

  // // handle change function for our create food form
  // handleChange = (e) => {
  //   const { name, value } = e.target;
  //   this.setState({ formData: { [name]: value } });
  // };

  // ====================================
  // ============= Auth =================
  // ====================================

  // Function to login a user
  // we set the user data in state.
  handleLogin = async () => {
    const currentUser = await loginUser(this.state.authFormData);
    this.setState({
      currentUser,
      authFormData: {
        username: "",
        email: "",
        password: "",
      },
    });
  };

  // Function to register a user
  // we set the user data in state.
  handleRegister = async (e) => {
    e.preventDefault();
    const currentUser = await registerUser(this.state.authFormData);
    this.setState({
      currentUser,
      authFormData: {
        username: "",
        email: "",
        password: "",
      }
    });
  };

  // =========================================================================================
  handleVerify = async () => {
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({ currentUser });
    }
  };
  // Function to logout user
  // We delete the token from local storage
  // set the current user in state back to null
  // and call our remove token function to remove
  // the auth headers from our api call
  handleLogout = () => {
    localStorage.removeItem("authToken");
    this.setState({
      currentUser: null,
    });
    removeToken();
  };

  // Handle change function for the auth forms
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
      <div>
        <header>
          <Link to="/">
            <h1>Trendy Market</h1>
          </Link>
          {/* Here we use a terinary to check if there is a logged in user set in state.
              If there is no logged in user, we show a login button instead of the site nav */}
          {this.state.currentUser ? (
            <div>
              {/* This is a greeting to the user if there user info has been set in state.
              We use the guard operator to check '&&' */}
              <h3>
                Hi {this.state.currentUser && this.state.currentUser.email}
                <button onClick={this.handleLogout}>logout</button>
              </h3>
              {/* <Link to="/food">View All Food</Link> */}
              &nbsp;
              {/* <Link to="/flavors">View All Flavors</Link> */}
              <hr />
            </div>
          ) : (
            <button onClick={this.handleLoginButton}>Login/register</button>
          )}
        </header>
        {/* setting up our routes */}
<<<<<<< HEAD
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">Trendy Market</Navbar.Brand>
          <Nav.Link href="/products">Products</Nav.Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            {this.state.currentUser ? (
              <div>
                <p>{this.state.currentUser.username}</p>
                <Button variant="primary" onClick={this.handleLogout}>
                  Logout
                </Button>
              </div>
            ) : (
              <>
                <Nav.Link href="/login" onClick={this.handleLoginButton}>
                  Login
                </Nav.Link>
                <Nav.Link href="/Register">
                  Register
                </Nav.Link>
              </>
            )}
          </Navbar.Collapse>
        </Navbar>
        {/* <header>
          <Link to="/">
            <h1>Trendy Market</h1>
          </Link>
          {this.state.currentUser ? (
            <div>
              <h3>
                Hi {this.state.currentUser && this.state.currentUser.email}
                <button onClick={this.handleLogout}>logout</button>
              </h3>
              &nbsp;
              <hr />
            </div>
          ) : (
            <button onClick={this.handleLoginButton}>Login/register</button>
          )}
        </header> */}
=======
>>>>>>> parent of e5b5f84... fully working navbar
        <Route
          exact
          path="/login"
          render={(props) => (
            <Login
              handleLogin={this.handleLogin}
              authHandleChange={this.authHandleChange}
              formData={this.state.authFormData}
            />
          )}
        />
        <Route
          exact
          path="/register"
          render={(props) => (
            <Register
              handleRegister={this.handleRegister}
              authHandleChange={this.authHandleChange}
              formData={this.state.authFormData}
            />
          )}
        />
        {/* <Route
          exact
          path="/food"
          render={(props) => (
            <ShowFood
              foods={this.state.food}
              formData={this.state.formData}
              getFoodItem={this.getFoodItem}
              deleteFood={this.deleteFood}
              handleSubmit={this.addFood}
              handleChange={this.handleChange}
              setFoodForm={this.setFoodForm}
              updateFood={this.updateFood}
            />
          )}
        /> */}
        {/* <Route
          exact
          path="/flavors"
          render={(props) => <ShowFlavors flavors={this.state.flavors} />}
        /> */}
        {/* <Route
          exact
          path="/food/:id"
          render={(props) => (
            <FoodItem
              foodItem={this.state.foodItem}
              flavors={this.state.flavors}
              selectedFlavor={this.state.selectedFlavor}
              handleChange={this.flavorForm}
              addFlavorToFood={this.addFlavorToFood}
            />
          )}
        /> */}
      </div>
      // <div className="App">
      //   {/* <Header
      //     handleLoginButton={this.handleLoginButton}
      //     handleLogout={this.handleLogout}
      //     currentUser={this.state.currentUser}
      //   />
      //   <Route
      //     exact
      //     path="/login"
      //     render={() => (
      //       <Login
      //         handleLogin={this.handleLogin}
      //         handleChange={this.authHandleChange}
      //         formData={this.state.authFormData}
      //       />
      //     )}
      //   />
      //   <Route
      //     exact
      //     path="/register"
      //     render={() => (
      //       <Register
      //         handleRegister={this.handleRegister}
      //         handleChange={this.authHandleChange}
      //         formData={this.state.authFormData}
      //       />
      //     )}
      //   /> */}
      //   {this.state.currentUser ? (
      //     <Header handleToggle={this.handleToggle} />
      //   ) : (
      //     <div></div>
      //   )}

      //   {/* {this.state.currentUser && this.state.recipes ? (
      //     <Route
      //       exact
      //       path="/recipes"
      //       render={() => (
      //         <MainPage
      //           toggle={this.state.toggle}
      //           recipes={this.state.recipes}
      //           currentUser={this.state.currentUser}
      //           currentUserRecipes={this.state.currentUserRecipes}
      //           handleLogout={this.handleLogout}
      //         />
      //       )}
      //     />
      //   ) : (
      //     <div></div>
      //   )} */}

      //   <Route
      //     exact
      //     path="/"
      //     render={() => (
      //       <Login
      //         handleLogin={this.handleLogin}
      //         authErrorMessage={this.state.authErrorMessage}
      //       />
      //     )}
      //   />
      //   <Route
      //     path="/register"
      //     render={() => (
      //       <Register
      //         handleRegister={this.handleRegister}
      //         authErrorMessage={this.state.authErrorMessage}
      //       />
      //     )}
      //   />
      //   <Jumbo />
      // </div>
    );
  }
}

export default withRouter(App);
