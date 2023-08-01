import React, { useContext, useState } from 'react';
import { Nav, Button } from 'react-bootstrap';
import ProductItem from './ProductItem';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';
import './slickSlider.css'
import Transition from 'react-transition-group/Transition';

const SectionMeat = () => {

    const { product } = useContext(Context)
    const [productShow, setProductShow] = useState(false)
    return (
        <Nav className='meat-section-content'>
            <Nav className='
            d-flex
            mt-5
            mb-5
            section-header
            w-100
            border-3
            border-top
            border-bottom
            justify-content-center
            align-items-center
            fs-2
            showcase'>
                <h className='showcase'>Витрина мясного отдела</h>
            </Nav>
            <Nav className='d-flex
            mt-2
            mb-2
            camera
            w-100  
            justify-content-center
            align-items-center
            bg-black
            text-white'
                style={{ height: '500px' }}
                id='meat_section'>
                Камера
            </Nav>
            <Nav className='d-flex justify-content-center'>
                <Button className='btn-show-product ' onClick={() => setProductShow(!productShow)}>
                    {productShow ? 'Скрыть товары' : 'Показать товары'}
                </Button>
                <Transition
                    in={productShow}
                    timeout={500}
                    mountOnEnter
                    unmountOnExit
                >
                    {state =>
                        <OwlCarousel
                            className={`carousel-products ${state} owl-theme mt-5`}
                            items='3'
                            dots={false}
                            nav
                            navText={[
                                '<span class="arrow prev">‹</span>',
                                '<span class="arrow next">›</span>'
                            ]}>
                            {product.products.map(product =>
                                <ProductItem key={product.type} id={product.id} product={product} />)}
                        </OwlCarousel>}
                </Transition>
            </Nav>
        </Nav>
    );
};

export default observer(SectionMeat);