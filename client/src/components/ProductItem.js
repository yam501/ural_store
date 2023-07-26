import React, { useState } from 'react';
import { Button, Card, Image } from 'react-bootstrap';

const ProductItem = ({product}) => {
    const [countProduct, setCountProduct] = useState(1)
    const plus = () => {
        setCountProduct(countProduct + 1)
    }
    const minus = () => {
        setCountProduct(countProduct - 1)
    }
    return (
        <Card className='slider__item products-bg mb-5 me-5' style={{ width: 290, cursor: 'pointer' }}   >
            <Image width={288} height={300} src={product.img} style={{border: 0}} />
            <div className='mt-1 d-flex justify-content-center'>
                <div className='d-flex align-items-center'>
                    <div>
                        {product.name} 
                    </div>
                </div>
            </div>
            <div className='mt-1 d-flex justify-content-center'>
                <div>
                    {product.costPerOne} ₽ цена за кг
                </div>
            </div>
            <div className='mt-1 d-flex justify-content-center'>
                <div>
                    цена
                </div>
            </div>
            <div className='mt-1 d-flex justify-content-center'>
                <Button onClick={() => minus}>
                    -
                </Button>
                <span className='d-flex align-items-center'>{countProduct} кг</span>
                <Button onClick={() => plus}>
                    +
                </Button>
            </div>
        </Card>

    );
};

export default ProductItem;