import React from "react";
import { Link } from "react-router-dom";
// import { Form } from 'react-bootstrap';




const Login = (props) => {
  return (
    <div>
      <h2>login</h2>
      <hr />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.handleLogin();
        }}
      >
        <input
          name="username"
          type="text"
          value={props.formData.username}
          onChange={props.authHandleChange}
        />
        <input
          name="email"
          type="email"
          value={props.formData.email}
          onChange={props.authHandleChange}
        />
        <input
          name="password"
          type="password"
          value={props.formData.password}
          onChange={props.authHandleChange}
        />
        <button>Login</button>
        <Link to="/register">Register</Link>
      </form>
    </div>
  );
};

export default Login;















// export class Login extends Component {
//     constructor() {
//        super();
//        this.state = {
//          username: "",
//          password: "",
//        };
//     }

//     handleChange = (event) => {
//        const { name, value } = event.target;
//        this.setState({
//          [name]: value,
//        });
//     };

//      render() {
//        return (
//          <form
//            className="login-form"
//            onSubmit={(event) => {
//              event.preventDefault();
//              this.props.handleLogin(this.state);
//            }}
//          >
//            <img
//              className="login-logo-image"
//              src="https://i.imgur.com/IoEQE0G.png"
//              alt="verdure logo"
//            />
//            <div className="sign-in-main">
//              <div className="sign-in-header">
//                <h2>Welcome Back</h2>
//              </div>
//              <div className="sign-in-grid">
//                <div className="sign-in-input-div">
//                  <label htmlFor="username">Username</label>
//                  <input
//                    className="sign-in-input"
//                    placeholder="Username"
//                    name="username"
//                    id="username"
//                    type="text"
//                    value={this.state.username}
//                    onChange={this.handleChange}
//                  />
//                </div>
//                <div className="sign-in-input-div">
//                  <label htmlFor="password">Password</label>
//                  <input
//                    className="sign-in-input"
//                    placeholder="Password"
//                    name="password"
//                    id="password"
//                    type="password"
//                    value={this.state.password}
//                    onChange={this.handleChange}
//                  />
//                </div>
//                <div>
//                  <button id="submit">SIGN IN</button>
//                </div>
//                <div className="sign-in-lower-grid">
//                  <p>Don't have an account?</p>
//                  <Link to="/register">
//                    <p id="register-link">SIGN UP NOW</p>
//                  </Link>
//                </div>
//              </div>
//            </div>
//          </form>
//        );
//      }
// }

// export default Login;


// const Login = (props) => {
//     return (
//         <form className="login-form" onSubmit={(event) => {
//             event.preventDefault();
//             this.props.handleLogin(this.state);
//           }}>
//             <img className="login-logo-image" src="https://i.imgur.com/IoEQE0G.png" alt="verdure logo" />
//             <div className="sign-in-main">
//               <div className="sign-in-header">
//                 <h2>Welcome Back</h2>
//               </div>
//               <div className="sign-in-grid">
//                 <div className="sign-in-input-div">
//                   <label htmlFor="username">Username</label>
//                   <input
//                     className="sign-in-input"
//                     placeholder="Username"
//                     name="username"
//                     id="username"
//                     type="text"
//                     value={this.state.username}
//                     onChange={this.handleChange}
//                   />
//                 </div>
//                 <div className="sign-in-input-div">
//                   <label htmlFor="password">Password</label>
//                   <input
//                     className="sign-in-input"
//                     placeholder="Password"
//                     name="password"
//                     id="password"
//                     type="password"
//                     value={this.state.password}
//                     onChange={this.handleChange}
//                   />
//                 </div>
//                 <div>
//                   <button id="submit">SIGN IN</button>
//                 </div>
//                 <div className="sign-in-lower-grid">
//                   <p>Don't have an account?</p>
//                   <Link to='/register'>
//                     <p id="register-link">SIGN UP NOW</p>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//         </form>
//     )
//     //   <Form
//     //     className="auth-container"
//     //     onSubmit={(e) => {
//     //       e.preventDefault();
//     //       props.handleLogin();
//     //     }}>
//     //     <h2>Log In</h2>
//     //     <Form.Group controlId="formGroupUser">
//     //       <Form.Label>Username</Form.Label>
//     //       <Form.Control
//     //         type="text"
//     //         name="username"
//     //         value={props.formData.username}
//     //         onChange={props.handleChange}
//     //         placeholder="Enter Username"
//     //       />
//     //     </Form.Group>
//     //     <Form.Group controlId="formGroupEmail">
//     //       <Form.Label>Email address</Form.Label>
//     //       <Form.Control
//     //         type="email"
//     //         name="email"
//     //         value={props.formData.email}
//     //         onChange={props.handleChange}
//     //         placeholder="Enter email"
//     //       />
//     //     </Form.Group>
//     //     <Form.Group controlId="formGroupPassword">
//     //       <Form.Label>Password</Form.Label>
//     //       <Form.Control
//     //         type="password"
//     //         name="password"
//     //         value={props.formData.password}
//     //         onChange={props.handleChange}
//     //         placeholder="Password"
//     //       />
//     //     </Form.Group>
//     //     <Link to="/register">Register</Link>
//     //   </Form>
//     );
// }

// export default Login;
