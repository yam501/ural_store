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

        <Navbar className='footer_wrapper'>
            <Container className='row '>
                <Nav className='col-sm-2'></Nav>
                <Nav className='col-sm-4 justify-content-center '>
                    <span className="footer-text-left ">Уральский</span>
                </Nav>
                <Nav className='col-sm-2'></Nav>
                <Nav className='col-sm-4 justify-content-center prava'> © 2023 Уральский. Все права защищены.</Nav>
                <Nav className='col-sm-2'></Nav>
                <Nav className='col-sm-4 footer-content-right'>
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

