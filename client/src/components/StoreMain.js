import React from 'react';
import NavSections from './StoreComponents/NavSections';


import Container from 'react-bootstrap/esm/Container';
import CaruselHead from './StoreComponents/CaruselHead';
import './store.css';
import CarouselSections from './StoreComponents/CarouselSections';

import SectionMeat from './StoreComponents/SectionMeat';
import SectionSalad from './StoreComponents/SectionSalad';

const StoreMain = () => {
    return (
        <Container className='store-main'>
            <NavSections />
            <CarouselSections/>
            <CaruselHead />
            <SectionMeat/>
            <SectionSalad/>
        </Container>
    );
};

export default StoreMain;