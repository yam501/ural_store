import React from 'react';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
const BurgerMenu = () => {
    const [open, setOpen] = useState(false)

    const handleClose = () => setOpen(false);
    const handleShow = () => setOpen(true);
    
    const openMenu = () => {
      return !open ? setOpen(true) : setOpen(false);
    }


    return (
        <div 
        className={`me-3 burgerMenu`}
        onClick={openMenu}
        >
          <span></span>
          <Offcanvas show={open}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              Some text as placeholder. In real life you can have the elements you
              have chosen. Like, text, images, lists, etc.
            </Offcanvas.Body>
          </Offcanvas>
        </div>
  
    );
};

export default BurgerMenu;