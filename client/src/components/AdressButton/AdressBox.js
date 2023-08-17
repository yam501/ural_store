import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import AdressBoxIcon from './AdressBoxIcon';

const AdressBox = ({adress, ...props}) => {
    
    return (
        <Button className={`
        border-0
        p-1
        me-3
        rounded-pill
        d-flex
        align-items-center
        ${props.width <= 1199 ? 'menuAdressBox' : 'adressBox'}`} 
        {...props}
        
        >
        <div className='d-flex w-100 justify-content-between align-items-center adressBoxContent' >
            {props.width > 1299 && <div className='adressBoxSvgIcon'><AdressBoxIcon/></div>}
            <span className='text-center wrap adressBoxText'>г. Ревда,ул. {adress}</span>
        </div>

        </Button>
    );
};

export default AdressBox;
