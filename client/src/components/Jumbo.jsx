import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap';

const Jumbo = () => {
    return (
    <Jumbotron fluid>
      <Container>
        <h1>
          Welcome to <span>Trendy Market</span> online Product Blog!
        </h1>
        <p>
          This is a modified jumbotron that occupies the entire horizontal space
          of its parent.
        </p>
      </Container>
    </Jumbotron>
    );
}

export default Jumbo;
