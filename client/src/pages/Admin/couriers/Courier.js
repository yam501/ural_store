import React from 'react';
import { useContext, useState, useRef } from 'react';
import { Modal, Button, Dropdown, Form } from "react-bootstrap";
import CreateCourierModal from '../modals/CreateCourierModal';
import CourierItem from './CourierItem';

const Courier = () => {

    const [showModal, setShowModal] = useState(false)


    return (
        <div>
            <div className="d-flex justify-content-center">
                Назначение курьер
            </div>
            <div>
                <Button onClick={() => setShowModal(true)}>Назначить курьера</Button>
            </div>

            <div>
                <CourierItem></CourierItem>
            </div>

            <>
                <CreateCourierModal show={showModal} onHide={() => setShowModal(false)} />
            </>
        </div>
    );
};

export default Courier;
