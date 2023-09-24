import React, { useState } from 'react';
import './toggle.css'
const Toggle = ({toggleState, toggleSwitch, ...props}) => {


    return (
        <div className='toggle_box'>
            <div onClick={toggleSwitch} className='switch'>
                <div className={`toggle ${toggleState ? 'more' : 'less'}`}></div>
                <div className='names'>
                    <p className='lessName'>Меньше</p>
                    <p className='moreName'>Больше</p>
                </div>
            </div>
        </div>
    );
};

export default Toggle;