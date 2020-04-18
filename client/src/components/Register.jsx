import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';



const Register = (props) => {
  return (
    <div>
      <h2>Register</h2>
      <hr />
      {/* <form onSubmit={props.handleRegister}> */}
      <Form onSubmit={props.handleRegister}>
        <Form.Group controlId="formGroupUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            name="username"
            type="text"
            value={props.formData.username}
            onChange={props.authHandleChange}
          />
        </Form.Group>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            value={props.formData.email}
            onChange={props.authHandleChange}
          />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            value={props.formData.password}
            onChange={props.authHandleChange}
          />
        </Form.Group>
        <Button variant="light">Register</Button>
        
        <Link to="/login">Login</Link>
      </Form>
    </div>
  );
};

export default Register;
