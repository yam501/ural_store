import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';

import './feedb.css';

const FeedB = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <span onClick={handleShow} className="me-2 text-white">
        Оставить отзыв
      </span>
      <Offcanvas className='border-0 feedb-wrapper' show={show} placement='end' onHide={handleClose} >
        <Offcanvas.Header className='feedback-header'>
          <Offcanvas.Title >Оставить отзыв</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='feedb-body'>
          <p className='mb-4'>Дорогой покупатель! Мы ценим вашу инициативу в выражении вашего мнения о наших товарах и услугах, так как это помогает нам постоянно развиваться,
            исправлять ошибки и укреплять наши преимущества.</p>
          <Form>
            <Form.Label className='mb-3'> Почта</Form.Label>
            <Form.Select className='mb-4 select'>
              <option>Выберите тип отзыва</option>
              <option className='select-button' value="1">Положительный</option>
              <option className='select-button' value="2">Нейтральный</option>
              <option className='select-button' value="3">Негативный</option>
            </Form.Select>
            <Form.Group>
              <Form.Label className='mb-3'> Почта</Form.Label>
              <Form.Control className='mb-4 input' type="text" placeholder="pochta@mail.ru" />
            </Form.Group>
            <Form.Group>
              <Form.Label className='mb-3'>Как к вам обращаться?</Form.Label>
              <Form.Control className='mb-4 input' type="text" placeholder="Имя Фамилия" />
            </Form.Group>
            <Form.Group className='form_box'>
              <Form.Label className='mb-3'>Ваш отзыв</Form.Label>
              <Form.Control className='textarea' placeholder="Комментарий" as="textarea" rows={10} />
            </Form.Group>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
    
  );
};

export default FeedB;