import React, { use, useEffect } from 'react';
import { useState } from 'react';
import Bottle from './Bottle';
import { getStored, addToStored } from '../../utilities/localStorage';
import './bottles.css'

const Bottles = ({ bottlePromise }) => {
    const bottles = use(bottlePromise);

    const [cart, setCart] = useState([]);

    const handleAddTocart = (bottle) => {
        // console.log(bottle.name)
        const newCart = [...cart, bottle]
        setCart(newCart);

        //? Saving the bottle id in the localStorage
        addToStored(bottle.id);
    }

    //? We must always use the useEffect library outside of the function
    useEffect(() => {
        const storedCartIds = getStored();
        const storedCart = [];
        // console.log(storedCartIds, bottles);

        //? Lopping
        for (let id of storedCartIds) {
            console.log(id);

            const cartBottle = bottles.find((bottle) => bottle.id = id);
            cartBottle ? storedCart.push(cartBottle) : null;
        }
        setCart(storedCart);

    }, [bottles]);

    return (
        <div>
            <p style={{
                textAlign: 'center'
            }}>
                <strong>Bottle: </strong>
                {bottles.length}
            </p>
            <p style={{
                textAlign: 'center'
            }}>
                Cart : {cart.length}
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