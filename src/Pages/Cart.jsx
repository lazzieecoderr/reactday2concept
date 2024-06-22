import React, { useContext } from 'react';

import CartProduct from '../Components/CartProduct';
import { CartContext } from '../Features/ContextProvider';
import { totalItem, totalPrice } from '../Features/CartReducer';

const Cart = () => {
    const {cart} = useContext( CartContext)
    //console.log(cart);
    return (
        <div className='container mt-4'>
            <div className="row">
                <div className="col-8">
                    {cart.map((element,index)=>{
                        return(
                            <div key={index}>
                               <CartProduct element={element} />
                            </div>
                        )
                    })}
                </div>
                <div className="col-4">
                    <div className="bg-secondary p-3 text-white">
                         <h5>Total Items: {totalItem(cart)}</h5>
                         <h5>Total Price: ${totalPrice(cart)}</h5>
                         <button className='btn btn-primary'>Checkout</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Cart;