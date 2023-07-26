import React from 'react';
import NavSections from './StoreComponents/NavSections';


import Container from 'react-bootstrap/esm/Container';
import CaruselHead from './StoreComponents/CaruselHead';
import './store.css';
import CarouselSections from './StoreComponents/CarouselSections';

import Section from './StoreComponents/Section';

const StoreMain = () => {
    return (
        <Container className='store-main'>
            <NavSections />
            <CarouselSections/>
            <CaruselHead />
            <Section/>
        </Container>
    );
};

export default StoreMain;