import React from 'react';
import { Link } from "react-router-dom";
import { Form } from 'react-bootstrap';

const Login = (props) => {
    return (
      <Form onSubmit={props.handleRegister}>
        <h2>Log In</h2>
        <Form.Group controlId="formGroupUser">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={props.formData.username}
            onChange={props.handleChange}
            placeholder="Enter Username"
          />
        </Form.Group>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={props.formData.email}
            onChange={props.handleChange}
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={props.formData.password}
            onChange={props.handleChange}
            placeholder="Password"
          />
        </Form.Group>
        <Link to="/register">Register</Link>
      </Form>
    );
}

export default Login;
