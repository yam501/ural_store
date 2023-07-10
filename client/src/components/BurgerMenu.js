import React from 'react';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ShopMenu from './ShopMenu';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { NavLink } from 'react-router-dom';
import { HISTORYORDER_ROUTE, ORDER_ROUTE } from '../utils/consts';
import Container from 'react-bootstrap/esm/Container';
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
          <Offcanvas className='menuBox' show={open} onHide={handleClose}>
            <Offcanvas.Body className='menuBodyBox' >
            <Container className='container d-flex flex-column justify-content-between gap-5 menuNav'>
              <NavLink className='text-white '>О нас</NavLink>
              <NavLink className='text-white' to={ORDER_ROUTE}>Заказы</NavLink>
              <NavLink className='text-white' to={HISTORYORDER_ROUTE}>История заказов</NavLink>
              <NavLink className='text-white'>Условия доставки</NavLink>
              <NavLink className='text-white'>Оставить отзыв</NavLink>
            </Container>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
    );
};

export default BurgerMenu;