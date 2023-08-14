import React, { useContext, useEffect, useState } from "react";
import { Modal, Button, Dropdown, Form } from "react-bootstrap";
import AssortmentService from "../../service/AssortmentService";
import { observer } from "mobx-react-lite";



function CreateAssortment(props) {

  const [type, setType] = useState('Выберите тип')
  const [name, setName] = useState('Введите название')
  const [available, setAvailable] = useState(true)
  const [costPerOne, setCostPerOne] = useState('Введите цену за штуку(кг)')
  const [composition, setComposition] = useState('Состав')
  const [image, setImage] = useState(null)
  const [button, setButton] = useState('button-neutral')
  const [validated, setValidated] = useState(false);

  const changeButton = () => {
    if (type === 'Выберите тип') {
      setButton('button-bad')
    } else {
      setButton('button-good')
    }
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false || type === 'Выберите тип') {
      event.preventDefault();
      event.stopPropagation();

    } else {
      console.log('Я ьуь');
      formDataCreate();
    }


    setValidated(true);
    changeButton()
  };


  const selectFile = e => {
    setImage(e.target.files[0])
  }

  const formDataCreate = () => {

    try {
      const formData = new FormData()
      formData.append('type', type)
      formData.append('name', name)
      formData.append('available', available)
      formData.append('costPerOne', costPerOne)
      formData.append('composition', composition)
      formData.append('image', image)

      AssortmentService.create(formData)

    } catch (error) {

    }

  }
  // alert('Товар успешно добавлен'), onSubmit={handleSubmit}

  return (

    <Form className={props.show} noValidate validated={validated} onSubmit={handleSubmit} >


      <div className="d-flex border p-2 justify-content-center fw-bold fs-4">
        Добавление ассортимента
      </div>

      <div className="d-flex  border p-2 justify-content-center  flex-column ">
        <Dropdown >
          <Dropdown.Toggle className={button}  >{type} </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setType('Мясо')} key={1}>Мясо</Dropdown.Item>
            <Dropdown.Item onClick={() => setType('Салаты')} key={2}>Салаты</Dropdown.Item>
            <Dropdown.Item onClick={() => setType('Овощи')} key={3}>Овощи</Dropdown.Item>
            <Dropdown.Item onClick={() => setType('Выпечка')} key={4}>Выпечка</Dropdown.Item>
            <Dropdown.Item onClick={() => setType('Молочка')} key={5}>Молочка</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Form.Control className="mt-3" placeholder="Введите название" required onChange={e => setName(e.target.value)} />

        <Dropdown>
          <Dropdown.Toggle className="mt-3" >{(available ? 'Есть' : 'Нет')}  </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setAvailable(true)} key={1}>Есть</Dropdown.Item>
            <Dropdown.Item onClick={() => setAvailable(false)} key={2}>Нет</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Form.Control className="mt-3" placeholder="Введите цену за штуку(кг)" type="number" required onChange={e => setCostPerOne(e.target.value)} />

        <Form.Control className="mt-3" placeholder="Состав" required onChange={e => setComposition(e.target.value)} />

        <Form.Control className="mt-3" placeholder="Фото" required type="file" onChange={selectFile} />

      </div>

      <div className="d-flex border p-2 justify-content-center">

        {<Button type="submit" >Добавить</Button>}

      </div>

    </Form>
  );
}
/* sdisabled={isValid} sonClick={formDataCreate}
Тип          String       notNull
Название     String       notNull
Есть/нет     Bool         notNull
Ценазаштуку  Double       notNull
Состав       String       NULL
image        String(FILE) NULL

*/

export default observer(CreateAssortment)