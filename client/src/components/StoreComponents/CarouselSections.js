import React from 'react';
import { Button } from 'react-bootstrap';

const CarouselSections = () => {

    return (
        <div class="owl-carousel carousel-mobile">
            <Button className='button-section' href="#meet_section">Мясной отдел</Button>
            <Button className='button-section' href="#salad_section">Салаты</Button>
            <Button className='button-section' href="#veg_section">Овощной отдел</Button>
            <Button className='button-section' href="#bakery_section">Выпечка</Button>
            <Button className='button-section' href="#dairy_section">Молочный отдел</Button>
        </div>
    );
};

export default CarouselSections;