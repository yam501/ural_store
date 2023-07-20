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

  const [mail, setMail] = useState('')
  const [name, setName] = useState('')
  const [comment, setComment] =useState('')

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
            <Form.Select className='mb-4 select'>
              <option>Выберите тип отзыва</option>
              <option className='button-good' value="1">Положительный</option>
              <option className='button-neutral' value="2">Нейтральный</option>
              <option className='button-bad' value="3">Негативный</option>
            </Form.Select>
            <Form.Group>
              <Form.Label className='mb-3'> Почта</Form.Label>
              <Form.Control
                className='mb-4 input'
                type="text"
                placeholder="pochta@mail.ru" 
                value ={mail}
                onChange={e => setMail(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
              <Form.Label className='mb-3'>Как к вам обращаться?</Form.Label>
              <Form.Control 
              className='mb-4 input' 
              type="text" 
              placeholder="Имя Фамилия" 
              value = {name}
              onChange={e => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className='form_box'>
              <Form.Label className='mb-3'>Ваш отзыв</Form.Label>
              <Form.Control 
              className='textarea' 
              placeholder="Комментарий" 
              as="textarea" 
              rows={10} 
              value = {comment}
              onChange={e => setComment(e.target.value)}/>
            </Form.Group>
          </Form>
          <Button className='mt-3 w-100 feedb-button'>
            Отправить
          </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>

  );
};
/// доделать кнопку отправки, когда сделают запросы в беке
export default FeedB;