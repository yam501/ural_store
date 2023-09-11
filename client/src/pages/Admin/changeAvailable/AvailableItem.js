import React, { useContext, useEffect, useState } from 'react';
import { Button, Row, Col, Form } from 'react-bootstrap';

import AssortmentService from '../../../service/AssortmentService';

import "../assortment.css"

import { observer } from 'mobx-react-lite';
import { Context } from '../../..';



const AvailableItem =  ({ products }) => {
    const [available, setAvailable] = useState()

    const changeAvailable = () => {
        setAvailable(!available)
        console.log(products.name, available)
        AssortmentService.changeAvailableByName(products.name, available)
    }
    useEffect(() =>{
        setAvailable(products.available)
    },[products.available])

    return (
        <Form>

            <Row className='p-2 m-1'>

                <Col className='border-1 p-2'>
                    {products.name}
                </Col>

                <Col className='border-1 p-2'>
                    {products.type}
                </Col>

                <Col className='border-1 p-2'>
                    <Button onClick={changeAvailable}> {available ? 'Есть' : 'Нет'} </Button>

                </Col>
            </Row>

        </Form>
    )

}


export default observer(AvailableItem);