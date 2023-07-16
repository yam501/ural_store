import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import firstPict from '../../assets/meat.jpg'
import secondPict from '../../assets/meat2.jpg'
import Nav from 'react-bootstrap/Nav'

import './carousel.css'

const CaruselHead = () => {
    return (
        <Nav>
            <Carousel className='carousel-content'>
                <Carousel.Item>
                    <img
                        className='w-100'
                        src={secondPict}
                        alt='firstPicture'

                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='w-100'
                        src={secondPict}
                        alt='firstPicture'

                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='w-100'
                        src={secondPict}
                        alt='firstPicture'

                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='w-100'
                        src={secondPict}
                        alt='firstPicture'

                    />
                </Carousel.Item>
            </Carousel>
        </Nav>
    );
};

export default CaruselHead;