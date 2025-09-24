import React, { use } from 'react';
import { useState } from 'react';
import Bottle from './Bottle';
import './bottles.css'

const Bottles = ({ bottlePromise }) => {
    const bottles = use(bottlePromise);

    const [cart, setCart] = useState([]);

    const handleAddTocart = (bottle) => {
        console.log(bottle.name)
    }

    return (
        <div>
            <p style={{
                textAlign: 'center'
            }}>
                <strong>Bottle: </strong>
                {bottles.length}
            </p>
            <div className='cardContainer'>
                {
                    bottles.map((bottle) => {
                        return <Bottle
                            key={bottle.id}
                            bottle={bottle}
                            handleAddTocart={handleAddTocart}>

                        </Bottle>
                    })
                }
            </div>
        </div>
    );
};

export default Bottles;