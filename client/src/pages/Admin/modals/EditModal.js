import { useContext, useState } from 'react';
import { Button, Modal, Image, Form, Dropdown } from 'react-bootstrap';

import { typeOfFood, unitsOfMeasurement } from "../../../utils/consts";
import { Context } from '../../..';
import { observer } from 'mobx-react-lite';

const EditModal = (props) => {
    const assort = props.assortment

    const { assortment } = useContext(Context)

    const [name, setName] = useState(assort.name)
    const [type, setType] = useState(assort.type)
    const [available, setAvailable] = useState(assort.available)
    const [costPerOne, setCostPerOne] = useState(assort.costPerOne)
    const [units, setUnits] = useState(assort.unitsOfMeasurement)
    const [composition, setComposition] = useState(assort.composition)
    const [oldImage, setOldImage] = useState(assort.image)
    const [image, setImage] = useState()

    const [validated, setValidated] = useState(false);


    function createFormData() {
        const formData = new FormData()

        formData.append('id', assort.id)
        formData.append('name', name)
        formData.append('type', type)
        formData.append('available', available)
        formData.append('costPerOne', costPerOne)
        formData.append('unitsOfMeasurement', units)
        formData.append('composition', composition)
        formData.append('image', oldImage) 

        assortment.changeAllById(formData)

    }

    const confirmEdit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();

        if (!name || !costPerOne || !composition) {

            event.stopPropagation();
        } else {


            createFormData()

            props.onClick()
            props.onHide()
        }

        setValidated(true);

    }


    const selectFile = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
            setOldImage(event.target.files[0]);
        }
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <Form noValidate validated={validated} onSubmit={confirmEdit}>
                    <div>
                        Название
                        <input required placeholder={name} onChange={e => setName(e.target.value)}></input>
                    </div>

                    <div>
                        Тип
                        <Dropdown onSelect={e => setType(e)}>
                            <Dropdown.Toggle className="assortment-switch" > {type} </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {
                                    typeOfFood.map(item =>
                                        <Dropdown.Item className="assortment-switch-item" eventKey={item} > {item} </Dropdown.Item>)
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>

                    <div>
                        Наличие
                        <Dropdown>
                            <Dropdown.Toggle className="mt-3 assortment-switch" >{(available ? 'Есть' : 'Нет')}  </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item className="assortment-switch-item" onClick={() => setAvailable(true)} key={1}>Есть</Dropdown.Item>
                                <Dropdown.Item className="assortment-switch-item" onClick={() => setAvailable(false)} key={2}>Нет</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>

                    <div>
                        Единицы
                        <Dropdown onSelect={e => setUnits(e)}>
                            <Dropdown.Toggle className="assortment-switch" >{units}</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {
                                    unitsOfMeasurement.map(item =>
                                        <Dropdown.Item className="assortment-switch-item" eventKey={item} > {item} </Dropdown.Item>)
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>

                    <div>
                        Цена
                        <input required placeholder={costPerOne} onChange={e => setCostPerOne(e.target.value)}></input>
                    </div>

                    <div>
                        Состав
                        <input required placeholder={composition} type='text' onChange={e => setComposition(e.target.value)}></input>
                    </div>

                    <div>
                        Картинка
                        <div className='d-flex flex-column'>
                            <img className='w-100 h-100 product-img' alt={'Картинка не подгружается'} src={image || process.env.REACT_APP_API_URL + oldImage} thumbnail />
                            <input accept="image/*" className="mt-3" type="file" onChange={selectFile} />
                        </div>
                    </div>
                    <hr />
                    <Button type={'submit'}> Нажми меня</Button>
                    <Button onClick={() => console.log(image)}> Нажми меня</Button>
                </Form>
            </Modal.Body>

        </Modal>
    );
}
// 
export default EditModal;