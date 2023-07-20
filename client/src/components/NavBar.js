import React, { useContext,  } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Context } from '..';
import AuthButton from './AuthButton/AuthButton';
import './navBar.css';
import AdressBox from './AdressButton/AdressBox';
import ShopBasketButton from './NavBarComponents/ShopBasketButton';
import BurgerMenu from './NavBarComponents/BurgerMenu'; 
import ShopLogo from './NavBarComponents/ShopLogo';
import LogOutButton from './AuthButton/LogOutButton';
import SearchPanel from './NavBarComponents/SearchPanel';
import FeedB from './FeedB';
import { observer } from 'mobx-react-lite';
import Accept from './AuthButton/Accept';

const NavBar = observer(() => {
    const {user} = useContext(Context)
    
    return (
    <Navbar className='d-flex navbar1'>
        <Container className='z-2 w-25'>
          <div className='d-flex align-items-center navBarBtnsBox'>
            <BurgerMenu/>
            <ShopLogo/>
          </div>
        </Container>
        {/* <SearchPanel/> */}
        <Container className='container'>
          <Nav className="ms-auto d-flex align-items-center">
          <div className='d-flex align-items-center navBtnsBox'>
            <AdressBox/>
            <AuthButton/>
            <ShopBasketButton/>
          </div>
          </Nav>
        </Container>
      </Navbar>
    );
});


export default NavBar;