import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Jumbotron1 = () => {
  return (
    <div>
      <Jumbotron1 fluid>
        <Container fluid>
          <h1 className="display-3">Fluid jumbotron</h1>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </Container>
      </Jumbotron1>
    </div>
  );
};

export default Jumbotron1;