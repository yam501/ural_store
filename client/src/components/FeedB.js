import React from 'react';
import { useState } from 'react';
import { Button, Dropdown, Form, Offcanvas } from "react-bootstrap";
import FeedbackService from '../service/FeedbackService';
import './feedb.css';

const FeedB = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [variant, setVariant] = useState('secondary')

  const [type, setType] = useState('Тип отзыва')
  const [mail, setMail] = useState('')
  const [name, setName] = useState('')
  const [comment, setComment] = useState('')

  const changed = (number) => {
    if (number == 1) {
      setType('Положительный')
      setVariant('success')
      return 0
    }
    if (number == 2) {
      setType('Нейтральный')
      setVariant('warning')
      return 0
    }
    setType('Негативный')
    setVariant('danger')
  }

  const afterButton = () => {
    FeedbackService.sendFeedback(type, mail, name, comment)

    setShow(false)

    setVariant('secondary')

    setType('Тип отзыва')
    setName('')
    setMail('')
    setComment('')
  }

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
            {/* <Form.Select className='mb-4 select'   >
              <option>Выберите тип отзыва</option>
              <option className='button-good' value='Положительный'  onChange={() => setType('Положительный')}> {type}</option>
              <option className='button-neutral' value="2" onChange={() => setType('Нейтральный')}>Нейтральный</option>
              <option className='button-bad' value="3" onChange={() => setType('Негативный')}>Негативный</option>
            </Form.Select> */}
            <p>Выберите тип отзыва </p>
            <Dropdown className='mb-4'>
              <Dropdown.Toggle variant={variant} > {type} </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item className='button-good' onClick={() => changed(1)} key={1}>Положительный</Dropdown.Item>
                <Dropdown.Item className='button-neutral' onClick={() => changed(2)} key={2}>Нейтральный</Dropdown.Item>
                <Dropdown.Item className='button-bad' onClick={() => changed(3)} key={3}>Негативный</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Form.Group>
              <Form.Label className='mb-3'> Почта</Form.Label>
              <Form.Control
                className='mb-4 input'
                type="text"
                placeholder="pochta@mail.ru"
                value={mail}
                onChange={e => setMail(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className='mb-3'>Как к вам обращаться?</Form.Label>
              <Form.Control
                className='mb-4 input'
                type="text"
                placeholder="Имя Фамилия"
                value={name}
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
                value={comment}
                onChange={e => setComment(e.target.value)} />
            </Form.Group>
          </Form>
          <Button className='mt-3 w-100 feedb-button' onClick={() => afterButton()}>
            Отправить
          </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>

  );
};
export default FeedB;