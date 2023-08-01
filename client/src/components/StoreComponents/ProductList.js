import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import ProductItem from './ProductItem';
import { Context } from '../..';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


import OwlCarousel from 'react-owl-carousel';

const ProductList = () => {
    const { product } = useContext(Context)
    return (
        

        <OwlCarousel  
        className="owl-theme mt-5 "
        items='3'
        dots={false}
        nav
        navText={[
            '<span class="arrow prev">‹</span>',
            '<span class="arrow next">›</span>'
          ]}
        
        >
             
            {product.products.map(product =>
                <ProductItem key={product.type} id={product.id} product={product} />)}
        </OwlCarousel>
    );
};

export default observer(ProductList);