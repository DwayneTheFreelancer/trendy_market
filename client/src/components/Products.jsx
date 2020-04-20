import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

export default function Products (props) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        { 
            props.products.map( (product) => {
                return (
                  <Card style={{ width: "18rem" }} key={product.id}>
                    <Card.Img variant="top" src={product.image_url} />
                    <Card.Body>
                      <Card.Title>{product.title}</Card.Title>
                      <Card.Title>{product.price}</Card.Title>
                      <Card.Text>{product.description}</Card.Text>
                      <Link to="/edit/:id">
                        <Button variant="primary">Edit</Button>
                      </Link>
                      <Button variant="primary">Delete</Button>
                    </Card.Body>
                  </Card>
                );
            })
        }
      </div>
    );
}


