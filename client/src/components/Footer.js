import React, { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Context } from '..';
import Nav from 'react-bootstrap/Nav'

import './footer.css';
import PhoneContact from './PhoneContact';
import SocialContent from './SocialContent';




const Footer = () => {
    const { user } = useContext(Context)

    return (

        <Navbar className='justify-content-center footer_wrapper'>
            <Container className='row '>
                <Nav className='col-sm-3 justify-content-center '>
                    <span className="footer-text-left ">Уральский</span>
                </Nav>
                <Nav className='col-sm-6 justify-content-center footer-content-center'> © 2023 Уральский. Все права защищены.</Nav>
                <Nav className='col-sm-1 justify-content-center footer-content-right'>
                    <Nav className='footer-social-content'>
                        <SocialContent />
                    </Nav>
                    <Nav className='footer-phone-content'>
                        <PhoneContact />
                    </Nav>
                </Nav>
            </Container>
        </Navbar>
    );
};


export default Footer;

