import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    const navOptions = <>
        <li><NavLink>Home</NavLink></li>
        <li><NavLink to={'/menu'}>Menu</NavLink></li>
        <li><NavLink to={'/order'}>Order</NavLink></li>
        <li><NavLink to={'/authentication/login'}>Login</NavLink></li>
    </>

    return (
        <div className="navbar opacity-70 px-4 fixed z-10 bg-black text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu dropdown-content rounded-box z-[1] text-lg mt-3 w-52 p-2 shadow">
                        {navOptions}
                    </ul>
                </div>
                <Link className="btn btn-ghost text-3xl">
                    Bistro Restaurant
                </Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu text-lg menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
        </div>
    )
}

export default Navbar