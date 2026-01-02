import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='flex justify-between items-center py-6 px-10 bg-(--c2) '>
            <Link to="/" className='font-semibold text-2xl'>
                Media Search
            </Link>
            <div className='flex gap-5 text-xl items-center'>
                <Link className='rounded font-medium active:scale-95 text-base bg-(--c4) text-(--c1) px-4 py-2' to="/">Search</Link>
                <Link className='rounded font-medium active:scale-95 text-base bg-(--c4) text-(--c1) px-4 py-2' to="/collection">Collection</Link>
            </div>
        </div>
    )
}

export default NavBar
