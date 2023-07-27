import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { Button, Card, Image, Nav } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
const ProductItem = ({product}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [countProduct, setCountProduct] = useState(1)
    const plus = () => {
        countProduct >= 0 && setCountProduct(countProduct + 1)
    }
    const minus = () => {
        countProduct > 0 && setCountProduct(countProduct - 1)
    }
    return (
        <div>
        <Card className='products-bg mb-5 me-5' style={{ width: 290, cursor: 'pointer' }} >
            <Image onClick={handleShow} width={288} height={300} src={process.env.REACT_APP_API_URL + product.image} style={{border: 0}} />
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
                <Button onClick={() => minus()}>
                    -
                </Button>
                <span className='d-flex align-items-center'>{countProduct} кг</span>
                <Button onClick={() => plus()}>
                    +
                </Button>
            </div>
        </Card>
        <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Body className='d-flex justify-content-between flex-wrap'>
            <div className='flex-grow-1 border-1'>картинка</div>
            <div className='flex-grow-1'>
                <div className='mb-2'>{product.name}</div>
                <div className='mb-2'>{product.costPerOne} ₽ за кг</div>
                <div className='mb-2'>{countProduct * product.costPerOne} ₽</div>
                <div className='d-flex justify-content-between mb-2'>
                    <Button className='rounded-circle justify-self-start' onClick={() => minus()}>
                        -
                    </Button>
                    <span className='d-flex align-items-center justify-self-center'>{countProduct} кг</span>
                    <Button className='rounded-circle justify-self-end'onClick={() => plus()}>
                        +
                    </Button>
                </div>
                <div>
                    <Button className='w-100 rounded-3'>
                        В корзину
                    </Button>
                </div>
            </div>
            <div>
                Состав: ываоывдаывлдоадыв
            </div>
        </Modal.Body>
      </Modal>
        </div>

    );
};

export default observer(ProductItem);