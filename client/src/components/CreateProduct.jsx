import React, { Component } from 'react';
// import { Form, Button } from "react-bootstrap";

export class CreateProduct extends Component {
    state = {
        productData: {
            title: "",
            image_url: "",
            link: "",
            description: ""
        }
    }
    
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState(prevState => ({
            productData: {
                ...prevState.productData,
                [name]: value
            }
        }))
    }
    
    
    render() {
        return (
          <div>
            <h1 style={{ textAlign: "center" }}>Add New Product</h1>
            <form
              id="create-product-form"
              onSubmit={(event) => {
                event.preventDefault();
                this.props.createProduct(
                  this.props.currentUser.id,
                  this.state.productData
                );
              }}
            >
              <div>
                <label className="create-label" htmlFor="title">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Title"
                  value={this.state.title}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label className="create-label" htmlFor="link">
                  Price
                </label>
                <input
                  type="text"
                  name="link"
                  id="link"
                  placeholder="Price"
                  value={this.state.link}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label className="create-label" htmlFor="image_url">
                  Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  cols="30"
                  rows="10"
                  value={this.state.description}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label className="create-label" htmlFor="image_url">
                  Image URL
                </label>
                <input
                  type="text"
                  name="image_url"
                  id="image_url"
                  placeholder="Image URL"
                  value={this.state.image_url}
                  onChange={this.handleChange}
                />
              </div>
              <button>Submit</button>
            </form>

            {/* <Form
              onSubmit={(event) => {
                event.preventDefault();
                this.props.createProduct(
                  this.props.currentUser.id,
                  this.state.productData
                );
              }}
            >
              <Form.Group controlId="exampleForm.ControlName">
                <Form.Label></Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={this.state.title}
                  onChange={this.handleChange}
                  placeholder="Name"
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  name="link"
                  value={this.state.link}
                  onChange={this.handleChange}
                  placeholder="Price"
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  value={this.state.description}
                  onChange={this.handleChange}
                  name="description"
                />
              </Form.Group>
              <div className="mb-3">
                <Form.Group>
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.image_url}
                    onChange={this.handleChange}
                    name="image_url"
                  />
                </Form.Group>
              </div>
              <Button variant="primary">Create Product</Button>
            </Form> */}
          </div>
        );
    }
}

export default CreateProduct;


