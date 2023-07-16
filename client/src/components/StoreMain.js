import React from 'react';
import Sections from './Sections';
import SaladSection from './SaladSection';
import VegSection from './VegSection';
import BakerySection from './BakerySection';
import DairySection from './DairySection';
import Nav from 'react-bootstrap/Nav'
import Camera from './Camera';
import MeatSection from './MeatSection';
import Widget from './Widget';

import Container from 'react-bootstrap/esm/Container';
import CaruselHead from '../components/CaruselHead';
import './store.css';

const StoreMain = () => {
    return (
        <Container className="nav justify-content-center">
            <Sections />
            <CaruselHead />
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
    );
};

export default StoreMain;