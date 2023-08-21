import React from 'react';
import StoreMain from '../components/StoreMain';
import { observer } from 'mobx-react-lite';

// Страница магазины

function Store() {

  return (
    <div className='page_body'>
      <StoreMain />
    </div >
  );
}

export default observer(Store);