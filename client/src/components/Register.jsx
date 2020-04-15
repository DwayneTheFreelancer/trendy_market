import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Register = (props) => {
    return (
      <Form onSubmit={props.handleRegister}>
        <h2>Register</h2>
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
        <Button variant="primary">
          Submit
        </Button>
      </Form>
    );
}

export default Register;
