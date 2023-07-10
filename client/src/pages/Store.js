import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/Nav'
import Camera from './Camera';
import Otdel from './Otdel';
import Widget from './Widget';
// Страница магазины

import './store.css';

function Store() {
  return (
    <Container>
      <Nav className="nav justify-content-center">
        <Otdel />
      </Nav>
      <Nav className="nav justify-content-center">
        <Camera />
      </Nav>
      <Container className="nav justify-content-center">
        <Nav className="nav-item" >
          <Widget />
        </Nav>
        <Nav className="nav-item">
          <Widget />
        </Nav>
        <Nav className="nav-item">
          <Widget />
        </Nav>
      </Container>
    </Container>
  );
}

export default Store;