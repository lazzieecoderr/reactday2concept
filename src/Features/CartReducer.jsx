import React from 'react';

export const totalItem = (cart) =>{
    return cart.reduce((sum,ele)=>sum +ele.quantity,0)
}

export const totalPrice = (cart) =>{
    return cart.reduce((sum,ele)=>sum +ele.price*ele.quantity,0)
}



const CartReducer = (state,action) => {
    switch(action.type){
        case "Add":
            return [...state, action.ele]
 
        case "Remove":
            return state.filter(ele => ele.id!== action.id)

        case "Increase":
            const IndexI = state.findIndex(ele => ele.id== action.id)
            state[IndexI].quantity += 1 
            return [...state]

        case "Decrease":
            const IndexD = state.findIndex(ele => ele.id== action.id)
            state[IndexD].quantity -= 1 
            return [...state]

        default:
            state;
    }
    
};

export default CartReducer;