import React, { Component } from 'react'

export class EditProduct extends Component {
    constructor() {
        super();
        this.state = {
          productData: {
            title: "",
            image_url: "",
            link: "",
            description: "",
          },
        };
    }
    
    handleChange = (event) => {
    const { name, value } = event.target;
    this.setState(prevstate => ({
      recipeData: {
        ...prevstate.recipeData,
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
                      value={this.state.productData.title}
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
                      value={this.state.productData.link}
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
                      value={this.state.productData.description}
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
                      value={this.state.productData.image_url}
                      onChange={this.handleChange}
                    />
                  </div>
                  <button>Edit Product</button>
                </form>
            </div>
        )
    }
}

export default EditProduct;

