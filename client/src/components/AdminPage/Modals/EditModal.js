
import { useState } from 'react';
import { Button, Modal, Image, Form } from 'react-bootstrap';

const EditModal = (props) => {
    const assort = props.assortment
    const [name, setName] = useState(assort.name)
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
                    Тип:
                    <Form.Control value={assort.type} />
                    Название:
                    <input value={name} onChange={e => setName(e.target.value)}/>
                    Цена за штуку:
                    <div>{assort.costPerOne}</div>
                    Состав:
                    <div>{assort.composition}</div>
                    Картинка:
                    <Image className='w-100 h-100 product-img' alt='картинка' src={process.env.REACT_APP_API_URL + assort.image} />

                </Form>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
}
export default EditModal;