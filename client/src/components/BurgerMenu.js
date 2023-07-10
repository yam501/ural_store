import React from 'react';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ShopMenu from './ShopMenu';
const BurgerMenu = () => {
    const [open, setOpen] = useState(false)

    const handleClose = () => setOpen(false);
    const handleShow = () => setOpen(true);
    
    const openMenu = () => {
      return !open ? setOpen(true) : setOpen(false);
    }


    return (
        <div>
          <div 
          className={`me-3 burgerMenu ${open ? 'open' : ''}`}
          onClick={openMenu}
          >
            <span></span>
          </div>
        </div>
    );
};

export default BurgerMenu;