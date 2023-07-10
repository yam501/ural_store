import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/Nav'
import Camera from '../components/Camera';
import MeatSection from '../components/MeatSection';
import Widget from '../components/Widget';
// Страница магазины

import '../components/store.css';
import Sections from '../components/Sections';
import SaladSection from '../components/SaladSection';
import VegSection from '../components/VegSection';
import BakerySection from '../components/BakerySection';
import DairySection from '../components/DairySection';


function Store() {

  return (
    <Container>

      <Sections />
      <Nav className='meat-bg' >
        <Nav className="nav justify-content-center" id="meet_section">
          <MeatSection />
        </Nav>
        <Nav className="nav justify-content-center">
          <Camera />
        </Nav>
        <Nav>
          тут надо сделать товары, прокрутку для них Widget -прототип, как его связать с бд не ебу Илья Данил надеюсь на вас :)
          если что все страницы в папке pages, все компоненты в папке components\
        </Nav>
      </Nav>
      <Nav className='salad-bg' >
        <Nav className="nav justify-content-center" id="salad_section">
          <SaladSection />
        </Nav>
        <Nav className="nav justify-content-center">
          <Camera />
        </Nav>
        <Nav>продукты</Nav>
      </Nav>
      <Nav className='veg-bg'>
        <Nav className="nav justify-content-center"  id="veg_section">
          <VegSection />
        </Nav>
        <Nav className="nav justify-content-center">
          <Camera />
        </Nav>
        <Nav>продукты</Nav>
      </Nav>
      <Nav className='bakery-bg' >
        <Nav className="nav justify-content-center" id="bakery_section">
          <BakerySection />
        </Nav>
        <Nav className="nav justify-content-center">
          <Camera />
        </Nav>
        <Nav>
      </Nav>
      </Nav>
      <Nav className='dairy-bg' >
        <Nav className="nav justify-content-center" id="dairy_section">
          <DairySection />
        </Nav>
        <Nav className="nav justify-content-center">
          <Camera />
        </Nav>
        продукты
      </Nav>
    </Container >
  );
}

export default Store;