import React, { useContext, useEffect, useRef, useState } from "react";
import { Modal, Button, Dropdown, Form } from "react-bootstrap";
import AssortmentService from "../../service/AssortmentService";
import { observer } from "mobx-react-lite";

import './assortment.css'

function CreateAssortment() {

  const [type, setType] = useState('')
  const [name, setName] = useState('')
  const [available, setAvailable] = useState(true)
  const [costPerOne, setCostPerOne] = useState()
  const [composition, setComposition] = useState('')
  const [image, setImage] = useState('')

  const inputFile = useRef();

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      alert('Не все поля заполнены')
      event.stopPropagation();

    } else {
      formDataCreate()
      setDefaultValues()
      return 0
    }


    setValidated(true);

  };

  const setDefaultValues = () => {
    setType('')
    setName('')
    setComposition('')
    setCostPerOne('')
    inputFile.current.type = "text";
    inputFile.current.value = "";
    inputFile.current.type = "file";

  }


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

    } catch (e) {
      console.log(e.response?.data?.message)
    }

  }
  // alert('Товар успешно добавлен'), onSubmit={handleSubmit}

  return (

    <Form noValidate validated={validated} onSubmit={handleSubmit} >


      <div className="d-flex p-2 justify-content-center fw-bold fs-4">
        Добавление ассортимента
      </div>

      <div className="d-flex p-2 justify-content-center  flex-column ">

        <select className="dropdown-select" onChange={e => setType(e.target.value)} value={type} required id="types" name="types">
          <option value="">Выберите тип</option>
          <option value="Мясо">Мясо</option>
          <option value="Салаты">Салаты</option>
          <option value="Овощи">Овощи</option>
          <option value="Выпечка">Выпечка</option>
          <option value="Молочка">Молочка</option>
        </select>


        <Form.Control value={name} className="mt-3" placeholder="Введите название" required onChange={e => setName(e.target.value)} />

        <Dropdown>
          <Dropdown.Toggle className="mt-3" >{(available ? 'Есть' : 'Нет')}  </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setAvailable(true)} key={1}>Есть</Dropdown.Item>
            <Dropdown.Item onClick={() => setAvailable(false)} key={2}>Нет</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Form.Control value={costPerOne} min={0} className="mt-3" placeholder="Введите цену за штуку(кг)" type="number" required onChange={e => setCostPerOne(e.target.value)} />

        <Form.Control value={composition} className="mt-3" as='textarea' placeholder="Состав" rows={10} required onChange={e => setComposition(e.target.value)} />


        <input accept="image/*" className="mt-3 dropdown-select" placeholder="Фото" required type="file" onChange={selectFile} ref={inputFile} />
      </div>

      <div className="d-flex p-2 justify-content-center">
        {<Button type="submit" >Добавить</Button>}
      </div>

    </Form>





  );
}









{/* 
    
    

sdisabled={isValid} sonClick={formDataCreate}
Тип          String       notNull
Название     String       notNull
Есть/нет     Bool         notNull
Ценазаштуку  Double       notNull
Состав       String       NULL
image        String(FILE) NULL

      */}

export default observer(CreateAssortment)