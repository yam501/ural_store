import React from 'react';
import { Spinner } from "react-bootstrap";
const Loading = () => {


    return (
        <Spinner className='ms-auto me-auto mt-auto mb-auto' animation={"grow"}/>
    );
};

export default Loading;