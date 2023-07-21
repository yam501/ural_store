import React, { useContext } from 'react';
import { useState } from 'react';
import AuthIcon from './AuthIcon';
import Button from 'react-bootstrap/Button';
import AuthWindow from './AuthWindow';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import Accept from './Accept';


const AuthButton = observer(() => {
    const { user } = useContext(Context)
    const [isShowAuthWin, setIsShowAuthWin] = useState(user._isAuth)
    const [numArr, setNumArr] = useState({
        number: '',
        isShowAccept: true
    })
    
    const updateNum = (number, bool) => {
        setNumArr({ 
            number: number, 
            isShowAccept: bool,
        })
    }

    const logout = () => {
        user.logout()
    }
    const [show, setShow] = useState(false);
    const handleShowControl = () => setShow(!show)
    if (user._isAuth) {
        return <div className='d-flex align-items-center'>
            <Button
                onClick={() => logout()}
                type='submit'
                className='ms-3 d-flex justify-content-around align-items-center rounded-pill btnAuth btnLogOut'
            >
                <span className='btnLogOutText'>Выйти</span>
            </Button>
            <Button className='ms-2 container rounded-circle adminBtn'>
                <AuthIcon />
            </Button>
            <Button
                className='ms-2 d-flex justify-content-around align-items-center rounded-pill btnAuth btnAdmin'
            >
                <span className='btnText'>Личный кабинет</span>
            </Button>
            {numArr.isShowAccept ?
            <Accept show={show} handleClose={handleShowControl} number={numArr.number}/> :
            ''}
        </div>
    }
    return (
        <div >
            <Button
                className='d-flex justify-content-around align-items-center rounded-pill btnAuth'
                onClick={handleShowControl}
            ><div className='d-flex justify-content-around align-items-center w-100'>
                    <AuthIcon className='btnIcon' />
                    <span className='btnText'>Войти</span>
                </div>
            </Button>
            <AuthWindow show={show} handleClose={handleShowControl} number={numArr} updateNum={updateNum} />
        </div>
    );
});

export default AuthButton;