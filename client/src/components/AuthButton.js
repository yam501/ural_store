import React from 'react';
import { useState } from 'react';
import AuthIcon from './AuthIcon';


const AuthButton = () => {
    
    const [phone, setPhone] = useState('+79');
      
    const handlePhoneChange = (event) => {
        const input = event.target.value;
        const regex = /^[+]?[0-9]*$/; // Регулярное выражение для проверки только цифр
      
        if (input.startsWith('+79') && regex.test(input)) {
            setPhone(input);
        }
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <button  
            className='btnAuth'
            onClick={handleShow}
            ><AuthIcon className='btnIcon'/><span className='btnText'>Войти</span></button>
            
            <div className='authWindowOverlay'>
                <div className='authWindowBox'>
                    <form className='authForm'>
                        <div className="authFormContent">
                            <label>Телефон</label>
                            <input 
                            type='text' 
                            placeholder="+78888888888"
                            value={phone}
                            maxLength={12}
                            onChange={handlePhoneChange} />
                            
                        </div>

                        <button type="submit">
                            Продолжить
                        </button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AuthButton;