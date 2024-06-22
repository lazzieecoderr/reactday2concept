import React, { useContext } from 'react';
import { BsCart } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { CartContext } from '../Features/ContextProvider';

const Navbar = () => {
    const {cart} = useContext(CartContext)
    return (
       <div className='d-flex justify-content-between py-3 px-5 bg-dark text-white'>
        <Link to='/' className='navbar-brand fs-5 fw-bolder'>Shoppify</Link>
        <Link to='/cart' className='navbar-link fs-5 fw-bolder text-white text-decoration-none'> <BsCart />{cart.length}</Link>
       </div>
    )
};

export default Navbar;