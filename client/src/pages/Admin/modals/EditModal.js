import { useContext, useState } from 'react';
import { Button, Modal, Image, Form, Dropdown } from 'react-bootstrap';

import { typeOfFood, unitsOfMeasurement } from "../../../utils/consts";
import { Context } from '../../..';

const EditModal = (props) => {
    const assort = props.assortment

    const { assortment } = useContext(Context)

    const [name, setName] = useState(assort.name)
    const [type, setType] = useState(assort.type)
    const [available, setAvailable] = useState(assort.available)
    const [costPerOne, setCostPerOne] = useState(assort.costPerOne)
    const [units, setUnits] = useState(assort.unitsOfMeasurement)
    const [composition, setComposition] = useState(assort.composition)
    const [image, setImage] = useState(assort.image)

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
        // formData.append('image', image) ДОДЕЛАТЬ КАРТИНКУ

        assortment.changeAllById(formData)

    }

    const confirmEdit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        console.log(1)
        if (!name || !costPerOne || !composition) {
            console.log(2)
            event.stopPropagation();
        } else {

            console.log(3)

            createFormData()

            props.onClick()
            props.onHide()
        }
        console.log(5)
        setValidated(true);

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
                            <Image className='w-100 h-100 product-img' alt={'Картинка не подгружается'} src={process.env.REACT_APP_API_URL + image} thumbnail />
                            <input id="image_uploads" accept="image/*" className="mt-3" type="file" />
                        </div>
                    </div>
                    <hr />
                    <Button type={'submit'}> Нажми меня</Button>
                </Form>
            </Modal.Body>

        </Modal>
    );
}
export default EditModal;