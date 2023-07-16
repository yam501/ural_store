import React from 'react';
import Button from 'react-bootstrap/Button';
import AdressBoxIcon from './AdressBoxIcon';

const AdressBox = (props) => {
    return (
        <div className={`
        rounded-pill
        d-flex
        justify-content-around
        align-items-center
        ${props.width <= 1199 ? 'menuAdressBox' : 'adressBox'}`}

        disabled>
        <div className='d-flex w-100 justify-content-around align-items-center adressBoxContent' >
            <div className='adressBoxSvgIcon'><AdressBoxIcon/></div>
            <span className='text-center wrap adressBoxText'>г. Ревда,ул. Уральская 5</span>
        </div>

        </div>
    );
};

export default AdressBox;
