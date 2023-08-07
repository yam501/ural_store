import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import AssortmentItem from './AssortmentItem';
import { Context } from '../..';
import { Nav } from 'react-bootstrap';

import "./assortment.css"

const AssortmentList = () => {
    const { assortment } = useContext(Context)

    return (

        <div className='w-100 ' >

            {
                assortment._assortments.map(item =>

                    <AssortmentItem assortment={item} />
                )
            }

        </div>






    );
};

export default observer(AssortmentList);