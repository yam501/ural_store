import React from 'react';
import { Button, Card, Col, Image } from 'react-bootstrap';

const ProductItem = (product) => {
    return (
        <div style={{marginRight: "80px"}}>
            <Card  style={{ width: 150, cursor: 'pointer' }} borrder={'light'}>
                <Image width={150} height={150} src={product.img} />
                <div className='mt-1 d-flex justify-content-center'>
                    <div className='d-flex align-items-center'>
                        <div>
                            Курица
                        </div>
                    </div>
                </div>
                <div className='mt-1 d-flex justify-content-center'>
                    <div>
                        цена за кг
                    </div>
                </div>
                <div className='mt-1 d-flex justify-content-center'>
                    <div>
                        цена
                    </div>
                </div>
                <div className='mt-1 d-flex justify-content-center'>
                    <Button>
                        +
                    </Button>
                    <span className='d-flex align-items-center'>0 кг</span>
                    <Button>
                        -
                    </Button>
                </div>
            </Card>
        </div>
    );
};

export default ProductItem;