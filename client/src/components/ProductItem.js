import React from 'react';
import { Button, Card, Col, Image } from 'react-bootstrap';

const ProductItem = (product) => {
    return (
        <Col md={3} >
            <Card className='mb-5' style={{ width: 200, cursor: 'pointer' }} borrder={'light'}>
                <Image width={200} height={200} src={product.img} />
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
        </Col>
    );
};

export default ProductItem;