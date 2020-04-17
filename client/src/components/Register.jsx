import React from 'react';
// import { Link } from 'react-router-dom';
// import { Form, Button } from 'react-bootstrap';



const Register = (props) => {
  return (
    <div>
      <h2>Register</h2>
      <hr />
      <form onSubmit={props.handleRegister}>
        <input
          name="username"
          type="text"
          value={props.formData.usernmae}
          onChange={props.authHandleChange}
        />
        <input
          name="email"
          type="text"
          value={props.formData.email}
          onChange={props.authHandleChange}
        />
        <input
          name="password"
          type="password"
          value={props.formData.password}
          onChange={props.authHandleChange}
        />
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;














// const Register = (props) => {
//     return (
//       <Form className="auth-container" onSubmit={props.handleRegister}>
//         <h2>Register</h2>
//         <Form.Group controlId="formGroupUser">
//           <Form.Label>Username</Form.Label>
//           <Form.Control
//             type="text"
//             name="username"
//             value={props.formData.username}
//             onChange={props.handleChange}
//             placeholder="Enter Username"
//           />
//         </Form.Group>
//         <Form.Group controlId="formGroupEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control
//             type="email"
//             name="email"
//             value={props.formData.email}
//             onChange={props.handleChange}
//             placeholder="Enter email"
//           />
//         </Form.Group>
//         <Form.Group controlId="formGroupPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             name="password"
//             value={props.formData.password}
//             onChange={props.handleChange}
//             placeholder="Password"
//           />
//         </Form.Group>
//         <Button variant="primary">Submit</Button>
//       </Form>
//     );
// }

// export default Register;
