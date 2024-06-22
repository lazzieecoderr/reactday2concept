import React, { useContext } from 'react';
import { CartContext } from '../Features/ContextProvider';


const CartProduct = ({element}) => {
    const {cart,dispatch} = useContext(CartContext)

 const Increase = (id)=>{
    const Index = cart.findIndex((ele)=>ele.id === id);
    if(cart[Index].quantity <10 ){
        dispatch({type:'Increase',id})
    }
 }

 const Decrease = (id)=>{
    const Index = cart.findIndex((ele)=>ele.id === id);
    if(cart[Index].quantity > 1 ){
        dispatch({type:'Decrease',id})
    }
 }

    return (
        <div className='d-flex border mb-4'>
            <img src={element.thumbnail} alt="image" className='w-25 h-25' />
            <div className="detail ms-4">
                <h5>{element.title}</h5>
                <h5>${element.price}</h5>
                <div className="buttons">
                    <button className="rounded-circle px-2" onClick={()=>Increase(element.id)}><b>+</b></button>
                    <button className='rounded'>{element.quantity}</button>
                    <button className="rounded-circle px-2" onClick={()=>Decrease(element.id)}><b>-</b></button>
                    <button className="btn  btn-sm btn-danger" onClick={()=>dispatch({type:'Remove', id:element.id})}>Remove</button>
                </div>
            </div>
        </div>
    );
};

export default CartProduct;