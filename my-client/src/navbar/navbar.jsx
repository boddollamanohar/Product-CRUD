import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar navbar-dark bg-dark expand-lg'>
        <Link className="navbar-brand">React Product CRUD</Link>

        <div className='ml auto'>
        <ul className='navbar nav'>
            <li className='nav-list'> <link className='nav-link' to="/About">About</link></li>
            <li className='nav-list'> <link className='nav-link' to="/Product">Product</link></li>
            <li className='nav-list'> <link className='nav-link' to="/Admin">Admin</link></li>
            <li className='nav-list'> <link className='nav-link' to="/Contact">Contact</link></li>
        </ul>
        </div>
    </nav>
  )
}

export default Navbar