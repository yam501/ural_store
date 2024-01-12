import { useContext, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Context } from '../../..';


const CreateCourierModal = (props) => {

    const { courier } = useContext(Context)

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    const [valid, setValid] = useState('none')


    function createCourier() {
        name && number ? courier.createCourier(name, number)  : setValid('')
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <div>
                    <div>
                        <label>Введите имя</label>
                        <input onChange={e => setName(e.target.value)} value={name}></input>

                    </div>

                    <div>
                        <label>Введите номер</label>
                        <input onChange={e => setNumber(e.target.value)} value={number}></input>
                    </div>
                    <div style={{ display: `${valid}` }}>
                        Не все поля заполнены
                    </div>
             
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button className='accept-change' onClick={() => createCourier()}>Создать курьера</Button>
                <Button className='btn-danger' onClick={props.onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
}
export default CreateCourierModal;