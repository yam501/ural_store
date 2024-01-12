import React, { useContext, useEffect, useRef, useState } from "react";
import { Modal, Button, Dropdown, Form } from "react-bootstrap";
import AssortmentService from "../../../service/AssortmentService";
import { observer } from "mobx-react-lite";

import { typeOfFood } from '../../../utils/consts'

import '../assortment.css'

function CreateAssortment() {

  const [type, setType] = useState('Выберите тип')
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
    if (form.checkValidity() === false || type.includes('Выберите тип')) {
      event.stopPropagation();
    } else {
      formDataCreate()
      setDefaultValues()
      return 0
    }


    setValidated(true);

  };

  const setDefaultValues = () => {
    setType('Выберите тип')
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


      <div className="d-flex p-2 justify-content-center assortment-text">
        Добавление ассортимента
      </div>

      <div className="d-flex p-2 justify-content-center  flex-column ">


        <Dropdown onSelect={e => setType(e)}>
          <Dropdown.Toggle className="assortment-switch" > {type} </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item className="assortment-switch-item" eventKey={'Выберите тип'} >Выберите тип</Dropdown.Item>
            {
              typeOfFood.map(item =>
                <Dropdown.Item className="assortment-switch-item" eventKey={item} > {item} </Dropdown.Item>)
            }
          </Dropdown.Menu>
        </Dropdown>

        <Form.Control
          value={name}
          className="mt-3 textarea"
          placeholder="Введите название"
          required onChange={e => setName(e.target.value)} />

        <Dropdown>
          <Dropdown.Toggle className="mt-3 assortment-switch" >{(available ? 'Есть' : 'Нет')}  </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item className="assortment-switch-item" onClick={() => setAvailable(true)} key={1}>Есть</Dropdown.Item>
            <Dropdown.Item className="assortment-switch-item" onClick={() => setAvailable(false)} key={2}>Нет</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Form.Control
          value={costPerOne}
          // min={0}
          className="mt-3 textarea"
          placeholder="Введите цену за штуку(кг)"
          type="number"
          required onChange={e => setCostPerOne(e.target.value)}
        />

        <Form.Control
          value={composition}
          className="mt-3 textarea"
          as='textarea'
          placeholder="Состав"
          rows={10}
          required onChange={e => setComposition(e.target.value)}
        />


        <input accept="image/*" className="mt-3 dropdown-select" placeholder="Фото" required type="file" onChange={selectFile} ref={inputFile} />
      </div>

      <div className="d-flex p-2 justify-content-center">
        {<Button className="addAssortment" type="submit" >Добавить</Button>}
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