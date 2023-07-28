import React, { useState } from 'react';
import {Button, Container} from "react-bootstrap"; 
import CreateAssortment from '../components/Modals/CreateAssortment';
import EditAssortment from '../components/Modals/EditAssortment' 

// Страница администратора

function Admin() {
  const [assortmentVisible, setAssortmentVisible] = useState(false)
  const [editAssortmentVisible, setEditAssortmentVisible] = useState(false)
    return (
      <Container className="Admin justify-content-center me-auto ms-auto">
        <Button variant='outline-dark' className='mt-4 p-2 w-25' onClick={() => setAssortmentVisible(true)} > Добавить ассортимент  </Button>
        <Button variant='outline-dark' className='mt-4 p-2 w-25' > Удалить ассортимент   </Button>
        <Button variant='outline-dark' className='mt-4 p-2 w-25' onClick={() => setEditAssortmentVisible(true)} > Изменить наличие      </Button>
        <CreateAssortment show={assortmentVisible} onHide={() => setAssortmentVisible(false)}/>
        <EditAssortment show={editAssortmentVisible} onHide={() => setEditAssortmentVisible(false)}/>



      </Container>
    );
  }

export default Admin;