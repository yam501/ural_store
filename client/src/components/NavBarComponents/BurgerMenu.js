import React, { useEffect } from 'react';
import AdressBox from '../AdressButton/AdressBox';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { ABOUTUS_ROUTE, ADMIN_ROUTE, HISTORYORDER_ROUTE, ORDER_ROUTE, TERMS_ROUTE } from '../../utils/consts';
import Container from 'react-bootstrap/esm/Container';
import FeedB from '../FeedB';

const BurgerMenu = (props) => {
    const [open, setOpen] = useState(false);
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
          <Offcanvas className='border-0 menuBox' show={open} onHide={handleClose}>
            <Container className='mt-5 pt-4'>
              {props.width <= 1299 && <div className='text-center text-wrap menuAdressText'>г. Ревда, ул. Уральская 5</div>}
            </Container>
            {props.width <= 1299 && <div className='mt-4 sepLineMenu'></div>}
            <Offcanvas.Body className='menuBodyBox' >
            <Container className='container d-flex flex-column justify-content-between menuNav'>
              <div className='d-flex align-items-center menuItem' onClick={openMenu}><span className='me-3 menuItemMarker'></span><NavLink className='text-white text-decoration-none' to={ABOUTUS_ROUTE}>О нас</NavLink></div>
              <div className='d-flex align-items-center menuItem' onClick={openMenu}><span className='me-3 menuItemMarker'></span><NavLink className='text-white text-decoration-none' to={ORDER_ROUTE}>Заказ</NavLink></div>
              <div className='d-flex align-items-center menuItem' onClick={openMenu}><span className='me-3 menuItemMarker'></span><NavLink className='text-white text-decoration-none' to={HISTORYORDER_ROUTE}>История заказов</NavLink></div>
              <div className='d-flex align-items-center menuItem' onClick={openMenu}><span className='me-3 menuItemMarker'></span><NavLink className='text-white text-decoration-none' to={TERMS_ROUTE} >Условия доставки</NavLink></div>
              <div className='d-flex align-items-center menuItem'><span className='me-3 menuItemMarker'></span><FeedB/></div> 
            </Container>
            <Container>
              <div className='sepLineMenu'></div>
              <div className='text-white d-flex flex-column w-50 mt-3 ms-3'>
                <span className='menuHotLine'>Горячая линия</span>
                <span className='align-self-center mt-4 menuPhoneNum'>+77777777777</span>
              </div>
              <div className='d-flex flex-column mt-3 ms-3'>
                <span className='text-white '>Мы в социальных сетях</span>
                <Button className="ms-4 mt-3 tgButton" variant="outline-danger">
                  <svg width="24" height="22" viewBox="2 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path className='tgIcon' d="M21.9539 0.176566C21.9539 0.176566 24.1741 -0.689148 23.989 1.4133C23.9274 2.27903 23.3724 5.30902 22.9406 8.58639L21.4605 18.2948C21.4605 18.2948 21.3372 19.717 20.2271 19.9644C19.117 20.2117 17.4519 19.0987 17.1435 18.8513C16.8968 18.6658 12.5182 15.8831 10.9764 14.5227C10.5446 14.1517 10.0513 13.4096 11.038 12.5439L17.5136 6.36028C18.2536 5.61823 18.9937 3.8868 15.9101 5.98925L7.27606 11.8638C7.27606 11.8638 6.28932 12.4821 4.4392 11.9256L0.430527 10.6888C0.430527 10.6888 -1.04959 9.76131 1.47894 8.83371C7.64612 5.92737 15.2317 2.9592 21.9539 0.176566Z" fill="#FF709A" fill-opacity="0.7" />
                  </svg>
                </Button> 
              </div>
            </Container>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
    );
};

export default BurgerMenu;