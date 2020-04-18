import React from "react";
import { Link } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';

const Login = (props) => {
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        props.handleLogin();
      }}
    >
      <h2>login</h2>
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
      {/* <button>Login</button>
      //{" "} */}
      <Button variant="light">
        Login
      </Button>
      <Link to="/register">Register</Link>
    </Form>
  );
};

export default Login;
