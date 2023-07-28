import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { Button, Card, Image, Nav } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';



const AssortmentItem = ( props ) => {
    console.log("assortment.name" )

    return (
        <div>
            {props.assortment.name}
        </div>
    )

}


export default observer( AssortmentItem);