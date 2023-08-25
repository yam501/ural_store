import React, { useContext, useState, useEffect } from 'react';
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
import GPS from './YndexMaps/GPS';
import ModalWindowYMaps from './YndexMaps/ModalWindowYMaps';

const NavBar = observer(({scrollUp, ...props}) => {

  const { user } = useContext(Context)
  const [width, setWidth] = useState(window.innerWidth);
  const [show, setShow] = useState(false)
  const [adress, setAdress] = useState({
    adressString: 'Выберите адрес'
  })
  const findAdress = (adress) => {
    setAdress({
      adressString: adress ? adress.slice(29) : 'Выберите адрес'
    })
  }
  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  })
  return (
    <Navbar className={`d-flex navbar1 ${scrollUp ? 'fixed' : ''}`} >
      <Container className='z-2 w-25'>
        <div className='d-flex align-items-center navBarBtnsBox'>
          <BurgerMenu adress={adress.adressString} onClick={() => setShow(true)} width={width} />
          <ShopLogo />
        </div>
      </Container>
      {/* <SearchPanel/> */}
      <Container className='container'>
        <Nav className="ms-auto d-flex align-items-center">
          <div className='d-flex align-items-center navBtnsBox'>
            {width >= 1199 && <AdressBox adress={adress.adressString} onClick={() => setShow(true)} width={width} />}
            <ModalWindowYMaps findAdress={findAdress} adress={adress.adressString} onClick={() => setShow(false)} show={show}/>
            <AuthButton />
            <ShopBasketButton />
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
});


export default NavBar;