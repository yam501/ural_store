import React from 'react';

const Widget = () => {
    return (
        <div className='widget_content'>
            <div className='widget_name'>
                Курица
            </div>
            <div className="quantity_inner">
                <button className="bt_minus">
                    <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </button>
                <span className="quantity"> 1 </span>
                <button className="bt_plus">
                    <svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </button>
            </div>
        </div>
    );
};

export default Widget;