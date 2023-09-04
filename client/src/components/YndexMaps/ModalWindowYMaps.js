import React, { useEffect, useState } from 'react';
import './gpsStyle.css'
import GPS from './GPS';
import CloseButton from '../UI/CloseButton';
import GpsIcon from './GpsIcon';

const ModalWindowYMaps = ({findAdress, show, width, ...props}) => {
    const [adress, setAdress] = useState('')
    return (
        <div
        className={`map_box ${show ? 'd-block' : 'd-none'}`}
        >
        <div onClick={props.onClick} className={show ? 'd-block overlay' : 'd-none'}></div>
        <div  className='map'>
            
            {/* <div className='gps_form_box'>
                <form className='gps_form'>
                    <label>Введите адрес доставки</label>
                    <div className='form_adres_string_box'>
                        <input type='text' value={adress} onChange={e => setAdress(e.target.value)} className='form_adress_string'/>
                        <button className='form_gelocation_btn'><GpsIcon/></button>
                    </div>

                </form>
            </div> */}
            <div className='ymap_box'>
                <GPS onClick={props.onClick} width={width} show={show} findAdress={findAdress}/>
            </div>
        </div>
        </div>
    );
};

export default ModalWindowYMaps;