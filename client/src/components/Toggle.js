import React, { useState } from 'react';
import './toggle.css'
const Toggle = () => {

    const [toggleState, setToggleState] = useState('less')
    const toggleSwitch = () => toggleState === 'less' ? setToggleState('more') : setToggleState('less');
    return (
        <div className='toggle_box'>
            <div onClick={toggleSwitch} className='switch'>
                <div className={`toggle ${toggleState}`}></div>
                <div className='names'>
                    <p className='less'>Меньше</p>
                    <p className='more'>Больше</p>
                </div>
            </div>
        </div>
    );
};

export default Toggle;