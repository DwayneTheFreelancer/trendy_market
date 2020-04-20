import React from "react";
import { Route } from "react-router-dom";
import { withRouter } from "react-router";
import { Navbar, Nav } from 'react-bootstrap';
import Login from './components/Login';
import Register from './components/Register';
import Jumbo from "./components/Jumbo";
import Products from './components/Products';
import CreateProduct from "./components/CreateProduct";
import EditProduct from './components/EditProduct';

import {
  loginUser,
  registerUser,
  removeToken,
  verifyUser,
  postProduct, 
  getAllUserProducts,
  getAllProducts,
  putProduct,
  deleteProduct
} from "./services/api-helper";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null, // we set the logged in user here. This way we know if the user is logged in
      products: [],
      currentUserProducts: [],
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

  readAllProducts = async () => {
    const products = await getAllProducts();
    products.sort(function (a, b) {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
    this.setState({ products });
  };

  allUserProducts = async (userId) => {
    const userProducts = await getAllUserProducts(userId);
    userProducts.sort(function (a, b) {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
    this.setState({
      currentUserProducts: userProducts,
    });
  };

  async componentDidMount() {
    const currentUser = await this.handleVerify();
    await this.readAllProducts();
    if (currentUser) {
      this.allUserProducts(currentUser.id);
    }
  }

  // On page load, we grab all the foods and flavors
  // If so, we hit our verify route to get the user data.
  // componentDidMount = () => {
  //   this.handleVerify();
  // };

  // // handle change function for our create food form
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ formData: { [name]: value } });
  };

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
      },
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

  // =========== Forms ===========
  createProduct = async (user_id, productData) => {
    const response = await postProduct(user_id, productData);
    const newProduct = response;
    this.setState((prevState) => ({
      products: [...prevState.products, newProduct]
    }));
    this.props.history.push("/products");
  };


  // handleDelete = async (event) => {
  //   const id = event.target.id;
  //   await deleteRecipe(id);
  //   this.setState((prevState) => ({
  //     recipes: [
  //       ...prevState.recipes.filter((recipe) => {
  //         return recipe.id !== parseInt(id);
  //       }),
  //     ],
  //     currentUserRecipes: [
  //       ...prevState.currentUserRecipes.filter((currentRecipe) => {
  //         return currentRecipe.id !== parseInt(id);
  //       }),
  //     ],
  //   }));
  //   this.props.history.push("/recipes");
  // };

  handleEdit = async (id, productData) => {
    const newProduct = await putProduct(id, productData);
    this.setState((prevState) => ({
      products: [
        ...prevState.recipes.map((product) =>
          product.id === newProduct.id ? newProduct : product
        ),
      ]
    }));
    this.props.history.push(`/products/${id}`);
  };

  // handleEditUser = async (id, formData) => {
  //   const newUser = await putUser(id, formData);
  //   this.setState((prevState) => ({
  //     currentUser:
  //       prevState.currentUser.id === newUser.id
  //         ? newUser
  //         : this.state.currentUser,
  //   }));
  //   this.props.history.push("/recipes");
  // };

  handleToggle = () => {
    this.setState((prevState) => ({
      toggle: !this.state.toggle,
    }));
  };

  render() {
    return (
      <div>
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
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">Trendy Market</Navbar.Brand>
          <Nav.Link href="/products">Products</Nav.Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            {this.state.currentUser ? (
              <div>
                {/* This is a greeting to the user if there user info has been set in state.
              We use the guard operator to check '&&' */}
                <>
                  Hi {this.state.currentUser && this.state.currentUser.email}
                  <button onClick={this.handleLogout}>logout</button>
                </>
              </div>
            ) : (
              <div>
                <Nav.Link onClick={this.handleLoginButton}>
                  Login/register
                </Nav.Link>
              </div>
            )}
          </Navbar.Collapse>
        </Navbar>
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
        <Jumbo />
        {this.state.currentUser && this.state.products ? (
          <Route
            exact
            path="/products"
            render={() => (
              <Products
                // toggle={this.state.toggle}
                products={this.state.products}
                currentUser={this.state.currentUser}
                currentUserProducts={this.state.currentUserProducts}
                // handleLogout={this.handleLogout}
              />
            )}
          />
        ) : (
          <div></div>
        )}
        {/* <Route path="/products/new" render={() => ()} */}
        <Route
          path="/products/new"
          render={(props) => (
            <CreateProduct
              currentUser={this.state.currentUser}
              createProduct={this.createProduct}
            />
          )}
        />
        <Route
          path="/edit/:id"
          render={(props) => (
            <EditProduct
              id={props.match.params.id}
              handleChange={this.handleChange}
              handleEdit={this.handleEdit}
              currentUser={this.state.currentUser}
            />
          )}
        />

        {/* <CreateProduct
          currentUser={this.state.currentUser}
          createProduct={this.createProduct}
        /> */}
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
