import { useContext, useState, useRef } from 'react';
import { Button, Modal, Image, Form, Dropdown } from 'react-bootstrap';
import AssortmentService from '../../../service/AssortmentService';
import { observer } from 'mobx-react-lite';
import { Context } from '../../..';

const EditModal = (props) => {
    const assort = props.assortment


    const [type, setType] = useState(assort.type)
    const [typeChanged, setTypeChanged] = useState(false)

    const [name, setName] = useState(assort.name)
    const [nameChanged, setNameChanged] = useState(false)

    const [costPerOne, setCostPerOne] = useState(assort.costPerOne)
    const [costPerOneChanged, setCostPerOneChanged] = useState(false)

    const [composition, setComposition] = useState(assort.composition)
    const [compositionChanged, setCompositionChanged] = useState(false)

    const [image, setImage] = useState(assort.image)
    const [imagePath, setImagePath] = useState()



    const isTypeChanged = (inputType) => {
        setType(inputType)
        if (inputType === assort.type) setTypeChanged(false)
        else setTypeChanged(true)
    }

    const isNameChanged = (inputName) => {
        setName(inputName)
        if (inputName === assort.name) setNameChanged(false)
        else setNameChanged(true)
    }

    const isCostPerOneChanged = (inputCostPerOne) => {
        setCostPerOne(inputCostPerOne)
        if (inputCostPerOne == assort.costPerOne) setCostPerOneChanged(false)
        else setCostPerOneChanged(true)
    }

    const isCompositionChanged = (inputComposition) => {
        setComposition(inputComposition)
        if (inputComposition === assort.composition) setCompositionChanged(false)
        else setCompositionChanged(true)
    }

    async function confirmEdit() {
        if (nameChanged) {
            await AssortmentService.changeNameByName(assort.name, name)
        }
        if (typeChanged) {
            await AssortmentService.changeTypeByName(name, type)
        }
        if (costPerOneChanged) {
            await AssortmentService.changeCostPerOneByName(name, costPerOne)
        }
        if (compositionChanged) {
            await AssortmentService.changeCompositionByName(name, composition)
        }
        if (image !== undefined){
            const formData = new FormData()
            formData.append('name', name)
            formData.append('image', image)
            await AssortmentService.changeImageByName(formData)
        }
        props.onClick()
        props.onHide()
    }


    const fuck = (e) => {

        setImage(e.target.files[0])


    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <Form>
                    <div>
                        Тип:
                        <div>
                            <Dropdown onSelect={e => isTypeChanged(e)}>
                                <Dropdown.Toggle > {type} </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item eventKey={'Мясо'}>Мясо</Dropdown.Item>
                                    <Dropdown.Item eventKey={'Салаты'}>Салаты</Dropdown.Item>
                                    <Dropdown.Item eventKey={'Овощи'}>Овощи</Dropdown.Item>
                                    <Dropdown.Item eventKey={'Выпечка'}>Выпечка</Dropdown.Item>
                                    <Dropdown.Item eventKey={'Молочка'}>Молочка</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <div>
                        Название:
                        <div>
                            <input value={name} className='w-100' onChange={e => isNameChanged(e.target.value)} />
                        </div>
                    </div>
                    <div>
                        Цена за штуку:
                        <div>
                            <input value={costPerOne} className='w-100' type='number' onChange={e => isCostPerOneChanged(e.target.value)} />
                        </div>
                    </div>
                    <div>
                        Состав:
                        <div>
                            <textarea className='w-100' style={{ minHeight: '200px' }} value={composition} onChange={e => isCompositionChanged(e.target.value)} />
                        </div>
                    </div>
                    <div>
                        Картинка:
                        <div className='d-flex flex-column'>
                            <Image className='w-100 h-100 product-img' alt={'Картинка не подгружается'} src={image || process.env.REACT_APP_API_URL + assort.image} thumbnail />
                            <label for="image_uploads">Текущая картинка: {image ? image.name === undefined ? 'не измениться' : image.name : 'не измениться3'}</label>
                            <input onChange={e => fuck(e)} id="image_uploads" accept="image/*" className="mt-3" type="file" />
                        </div>
                    </div>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button type='submit' onClick={confirmEdit}>Подтвердить изменения</Button>
                <Button onClick={props.onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
}
export default EditModal;