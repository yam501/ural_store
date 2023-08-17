
import { useContext, useState } from 'react';
import { Button, Modal, Image, Form, Dropdown } from 'react-bootstrap';
import AssortmentService from '../../../service/AssortmentService';
import { observer } from 'mobx-react-lite';
import { Context } from '../../..';

const EditModal = (props) => {
    const assort = props.assortment
    const { assortment } = useContext(Context)

    const [type, setType] = useState(assort.type)
    const [typeChanged, setTypeChanged] = useState(false)

    const [name, setName] = useState(assort.name)
    const [nameChanged, setNameChanged] = useState(false)

    const [costPerOne, setCostPerOne] = useState(assort.costPerOne)
    const [costPerOneChanged, setCostPerOneChanged] = useState(false)

    const [composition, setComposition] = useState(assort.composition)
    const [compositionChanged, setCompositionChanged] = useState(false)

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

    const confirmEdit = () => {
        if (nameChanged) {
            AssortmentService.changeNameByName(assort.name, name)
        }
        if (typeChanged) {
            AssortmentService.changeTypeByName(name, type)
        }
        if (costPerOneChanged) {
            AssortmentService.changeCostPerOneByName(name, costPerOne)
        }
        if (compositionChanged) {
            AssortmentService.changeCompositionByName(name, composition)
        }
        assortment.getAll()
        props.onHide()
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <div>
                        Тип:
                        <div>
                            <Dropdown>
                                <Dropdown.Toggle > {type} </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item key={1} onClick={() => isTypeChanged('Мясо')}>Мясо</Dropdown.Item>
                                    <Dropdown.Item key={2} onClick={() => isTypeChanged('Салаты')}>Салаты</Dropdown.Item>
                                    <Dropdown.Item key={3} onClick={() => isTypeChanged('Овощи')}>Овощи</Dropdown.Item>
                                    <Dropdown.Item key={4} onClick={() => isTypeChanged('Выпечка')}>Выпечка</Dropdown.Item>
                                    <Dropdown.Item key={5} onClick={() => isTypeChanged('Молочка')}>Молочка</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <div>
                        Название:
                        <div>
                            <input value={name} onChange={e => isNameChanged(e.target.value)} />
                        </div>
                    </div>
                    <div>
                        Цена за штуку:
                        <div>
                            <input value={costPerOne} type='number' onChange={e => isCostPerOneChanged(e.target.value)} />
                        </div>
                    </div>
                    <div>
                        Состав:
                        <div>
                            <input value={composition} onChange={e => isCompositionChanged(e.target.value)} />
                        </div>
                    </div>
                    <div>
                        Картинка:
                        <div>
                            <Image className='w-100 h-100 product-img' alt='картинка' src={process.env.REACT_APP_API_URL + assort.image} />
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
export default observer(EditModal);