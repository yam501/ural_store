import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';

const FeedB = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
        <span onClick={handleShow} className="me-2 text-white">
          Оставить отзыв
        </span>
        <Offcanvas show={show} placement='end' onHide={handleClose} >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Оставить отзыв</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          <p className='mb-4'>Дорогой друг! Мы рады тому, что вы решили донести свое мнение о наших продуктах и сервисе, 
          ведь этим вы помогаете ежедневно совершенствоваться, работать над ошибками и приумножать наши плюсы.</p>
          <Form>
            <Form.Group>
                <Form.Label>Как вас</Form.Label>
                <Form.Control type="text" placeholder="Enter email" />
            </Form.Group>
          </Form>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
};

export default FeedB;