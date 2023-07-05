import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Context } from '..';
import AuthButton from './AuthButton';
import './navBar.css';
const NavBar = () => {
    const {user} = useContext(Context)
    return (
    <Navbar className='navbar' data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <AuthButton />
          </Nav>
        </Container>
      </Navbar>
    );
};


export default NavBar;