import React from 'react';
import Sections from './StoreComponents/Sections';
import SaladSection from './StoreComponents/SaladSection';
import VegSection from './StoreComponents/VegSection';
import BakerySection from './StoreComponents/BakerySection';
import DairySection from './StoreComponents/DairySection';
import Nav from 'react-bootstrap/Nav'
import Camera from './StoreComponents/Camera';
import MeatSection from './StoreComponents/MeatSection';

import Container from 'react-bootstrap/esm/Container';
import CaruselHead from './StoreComponents/CaruselHead';
import './store.css';
import CarouselSections from './StoreComponents/CarouselSections';

const StoreMain = () => {
    return (
        <Container>
            <Sections />
            <CarouselSections/>
            <CaruselHead />
            <Container className='nav justify-content-center store-content'>
                <Nav className='meat-bg' >
                    <Nav className="nav justify-content-center" id="meet_section">
                        <MeatSection />
                    </Nav>
                    <Nav className="nav justify-content-center">
                        <Camera />
                    </Nav>
                    <Nav className='meet-content'>



                    </Nav>
                </Nav>
                <Nav className='salad-bg' >
                    <Nav className="nav justify-content-center" id="salad_section">
                        <SaladSection />
                    </Nav>
                    <Nav className="nav justify-content-center">
                        <Camera />
                    </Nav>
                    <Nav className='salad-content'>



                    </Nav>
                </Nav>
                <Nav className='veg-bg'>
                    <Nav className="nav justify-content-center" id="veg_section">
                        <VegSection />
                    </Nav>
                    <Nav className="nav justify-content-center">
                        <Camera />
                    </Nav>
                    <Nav className='veg-content'>



                    </Nav>
                </Nav>
                <Nav className='bakery-bg' >
                    <Nav className="nav justify-content-center" id="bakery_section">
                        <BakerySection />
                    </Nav>
                    <Nav className="nav justify-content-center">
                        <Camera />
                    </Nav>
                    <Nav className='bakery-content'>




                    </Nav>
                </Nav>
                <Nav className='dairy-bg' >
                    <Nav className="nav justify-content-center" id="dairy_section">
                        <DairySection />
                    </Nav>
                    <Nav className="nav justify-content-center">
                        <Camera />
                    </Nav>
                    <Nav className='dairy-content'>



                    </Nav>
                </Nav>
            </Container>
        </Container>
    );
};

export default StoreMain;