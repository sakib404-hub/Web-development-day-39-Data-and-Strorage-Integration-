import React from 'react';
import './bottles.css'

const Bottle = ({ bottle, handleAddTocart }) => {
    const { img, name, stock, price } = bottle;
    return (
        <div className='card'>
            <div className='imageBox'>
                <img src={img} alt="" className='image' />
            </div>
            <p>{name}</p>
            <p>${price}</p>
            <p>{stock} remaining</p>
            <button className='btn' onClick={() => handleAddTocart(bottle)}>Buy Now</button>
        </div>
    );
};

export default Bottle;