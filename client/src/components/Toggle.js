import React, { useState } from 'react';
import './toggle.css'
const Toggle = ({toggleState, toggleSwitch, ...props}) => {


    return (
        <div className='toggle_box'>
            <div onClick={toggleSwitch} className='switch'>
                <div className={`toggle ${toggleState ? 'more' : 'less'}`}></div>
                <div className='names'>
                    <p className='less'>Меньше</p>
                    <p className='more'>Больше</p>
                </div>
            </div>
        </div>
    );
};

export default Toggle;