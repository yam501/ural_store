import React, { useContext, useState } from "react";
import { Modal, Button, Dropdown, Form } from "react-bootstrap";
import AssortmentService from "../../service/AssortmentService";
import { Context } from "../..";


function CreateAssortment({ show, onHide }) {
  const {product} = useContext(Context)
  const [type, setType] = useState('Выберите тип')
  const [name, setName] = useState('Введите название')
  const [available, setAvailable] = useState(true)
  const [costPerOne, setCostPerOne] = useState('Введите цену за штуку(кг)')
  const [description, setDescription] = useState('Описание')
  const [composition, setComposition] = useState('Состав')
  const [image, setImage] = useState(null)


  const selectFile = e => {
    setImage(e.target.files[0])
  }
  const formDataCreate = () => {
    const formData = new FormData()
    formData.append('type', type)
    formData.append('name', name)
    formData.append('available', available)
    formData.append('costPerOne', costPerOne)
    formData.append('description', description)
    formData.append('composition', composition)
    formData.append('image', image)
    AssortmentService.create(formData).then(data => onHide()).then(alert('Товар успешно добавлен'))
    
  }
  // alert('Товар успешно добавлен'),

  return (

    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавление ассортимента
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown>
            <Dropdown.Toggle >{type} </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setType('Мясо')} key={1}>Мясо</Dropdown.Item>
              <Dropdown.Item onClick={() => setType('Салаты')} key={2}>Салаты</Dropdown.Item>
              <Dropdown.Item onClick={() => setType('Овощи')} key={3}>Овощи</Dropdown.Item>
              <Dropdown.Item onClick={() => setType('Выпечка')} key={4}>Выпечка</Dropdown.Item>
              <Dropdown.Item onClick={() => setType('Молочка')} key={5}>Молочка</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Form.Control className="mt-3" placeholder="Введите название" onChange={e => setName(e.target.value)} />

          <Dropdown>
            <Dropdown.Toggle className="mt-3" >{(available ? 'Есть' : 'Нет' )}  </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setAvailable(true)} key={1}>Есть</Dropdown.Item>
              <Dropdown.Item onClick={() => setAvailable(false)} key={2}>Нет</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Form.Control className="mt-3" placeholder="Введите цену за штуку(кг)" type="number" onChange={e => setCostPerOne(e.target.value)} />

          <Form.Control className="mt-3" placeholder="Описание" onChange={e => setDescription(e.target.value)} />

          <Form.Control className="mt-3" placeholder="Состав" onChange={e => setComposition(e.target.value)} />

          <Form.Control className="mt-3" placeholder="Фото" type="file" onChange={selectFile} />

        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Закрыть</Button>
        <Button onClick={formDataCreate}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
}
/*
Тип          String       notNull
Название     String       notNull
Есть/нет     Bool         notNull
Ценазаштуку  Double       notNull
Описание     String       NUll
Состав       String       NULL
image        String(FILE) NULL

*/

export default CreateAssortment