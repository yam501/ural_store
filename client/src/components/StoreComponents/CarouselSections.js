import React from 'react';
import { Button } from 'react-bootstrap';

const CarouselSections = () => {

    return (
        <div class="owl-carousel navSection-carousel">
            <Button className='button-section' href="#meat_section">Мясной отдел</Button>
            <Button className='button-section' href="#salad_section">Салаты</Button>
            <Button className='button-section' href="#veg_section">Овощной отдел</Button>
            <Button className='button-section' href="#bakery_section">Выпечка</Button>
            <Button className='button-section' href="#dairy_section">Молочный отдел</Button>
        </div>
    );
};

export default CarouselSections;