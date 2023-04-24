import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className='flex align-center sm:justify-around sm:p-3 sm:mx-3 justify-between'>
            <img src="../src/assets/Logo.png" className='h-[10rem] w-[10rem] mb-8' alt="" />
            <div className='flex ml-10 mt-8 text-2xl font-light max-sm:hidden'>
                <Link className='mx-4' to="/" >Home</Link>
                <Link className='mx-4' to="/About">About</Link>
                <Link className='mx-4' to="/products">Products</Link>
            </div>
            <div className='flex mt-8 max-sm:hidden'> 
                <div className='mx-8'>
                    <span className='mx-2 text-2xl'>Cart</span>
                    <i className="fa fa-cart-shopping text-2xl"></i>
                </div>
                <div>
                    <span className='mx-2 text-2xl'>Profile</span>
                    <i className="fa fa-user text-2xl"></i>
                </div>
            </div>
            <i className="fa-solid fa-bars mt-[3rem] mr-14 text-4xl text-amber-700 sm:hidden"></i>
        </nav>
    )
}

export default Header