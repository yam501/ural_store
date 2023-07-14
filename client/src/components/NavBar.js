import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Context } from '..';
import AuthButton from './AuthButton';
import './navBar.css';
import AdressBox from './AdressBox';
import ShopBasketButton from './ShopBasketButton';
import BurgerMenu from './BurgerMenu'; 
import ShopLogo from './ShopLogo';
import LogOutButton from './LogOutButton';

const NavBar = () => {
    const {user} = useContext(Context)
    return (
    <Navbar className='d-flex navbar navbar-expand-lg'>
        <Container className='z-2'>
          <div className='d-flex align-items-center navBarBtnsBox'>
            <BurgerMenu/>
            <ShopLogo/>
          </div>
        </Container>
        <Container className='container'>
          <Nav className="ms-auto d-flex align-items-center">
          <div className='d-flex align-items-center navBtnsBox'>
            <AdressBox/>
            {
              user.isAuth ? 
              <LogOutButton/>:
              <AuthButton/>
            }
            <ShopBasketButton/>
          </div>
          </Nav>
        </Container>
      </Navbar>
    );
};


export default NavBar;