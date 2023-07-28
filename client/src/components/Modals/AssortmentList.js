import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import AssortmentItem from './AssortmentItem';
import { Context } from '../..';
import { Nav } from 'react-bootstrap';

const AssortmentList = () => {
    const { assortment } = useContext(Context)
    return (




        assortment._assortments.map(item => {

            <Nav>{item.name}</Nav>
            // <AssortmentItem assortment={e} />
        })



    );
};

export default observer(AssortmentList);