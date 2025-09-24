import React from 'react';
import './bottles.css'

const Cart = ({ cart, handleRemove }) => {
    // console.log(cart);
    return (
        <div className='cart_container'>
            {
                cart.map((bottle) => {
                    return <div key={bottle.id} className='imageContainer'>
                        <img src={bottle.img} alt="" className='cartImage' />
                        <button onClick={() => { handleRemove(bottle.id) }}>del</button>
                    </div>
                })
            }
        </div>
    );
};

export default Cart;