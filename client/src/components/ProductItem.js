import React, { useState } from 'react';
import { Button, Card, Col, Image, Row } from 'react-bootstrap';

const ProductItem = (props) => {
    const [countProduct, setCountProduct] = useState(1)
    const plus = () => {
        setCountProduct(countProduct + 1)
    }
    const minus = () => {
        setCountProduct(countProduct - 1)
    }
    return (
        <div> 
            <Card className='mb-5' style={{ width: 200, cursor: 'pointer' }} borrder={'light'}>
                <Image width={199} className='rounded-2' height={150} src={props.product.img} />
                <div className='mt-1 d-flex justify-content-center'>
                    <div className='d-flex align-items-center'>
                        <div>
                            Курица
                        </div>
                    </div>
                </div>
                <div className='mt-1 d-flex justify-content-center'>
                    <div>
                       {props.product.costPerOne} цена за кг
                    </div>
                </div>
                <div className='mt-1 d-flex justify-content-center'>
                    <div>
                        цена
                    </div>
                </div>
                <div className='mt-1 d-flex justify-content-center'>
                    <Button onClick={() => plus}>
                        +
                    </Button>
                    <span className='d-flex align-items-center'>{countProduct} кг</span>
                    <Button onClick={() => minus}>
                        -
                    </Button>
                </div>
            </Card>
        </div>
    );
};

export default ProductItem;