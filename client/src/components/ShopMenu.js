import React from 'react';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

const ShopMenu = () => {

    return (
        <Offcanvas >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    );
};

export default ShopMenu;