import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../../providers/AuthProvider';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useCart from '../../hooks/useCart';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useCartLength from '../../hooks/useCartLength';

const Navbar = () => {
    const { user, userSignOut } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure()
    const [cartLength] = useCartLength()
    // const { data: cartLength = 0 } = useQuery({
    //     queryKey: ['cart', user?.email],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get(`/carts-length?email=${user?.email}`)
    //         return res.data
    //     },
    // })

    const handleSignOut = () => {
        userSignOut()
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Logged Out ",
                    showConfirmButton: false,
                    timer: 1000
                })
            }
            )
    }

    const navLinkClass = ({ isActive }) =>
        `uppercase font-bold px-2 ${isActive ? 'text-yellow-500' : 'text-white'}`;

    const navOptions = <div className='md:flex items-center'>
        <li><NavLink className={navLinkClass} to={'/'}>Home</NavLink></li>
        <li><NavLink className={navLinkClass} to={'/menu'}>Menu</NavLink></li>
        <li>
            <NavLink className={navLinkClass} to={'/dashboard/cart'}>
                <FaShoppingCart /> <div className="badge badge-sm badge-secondary">{`+${typeof cartLength === 'number' && cartLength > 0 ? cartLength : "0"}`}</div>
            </NavLink>
        </li>
        <li><NavLink className={navLinkClass} to={'/order'}>Order</NavLink></li>
        <li><NavLink className={navLinkClass} to={'/contacts'}>Contacts</NavLink></li>
        {
            user ? (
                <li className="flex-row items-center">
                    <button onClick={handleSignOut} className="uppercase font-bold px-2 text-white">
                        Sign out
                    </button>
                    <FaUserCircle size={55} className="text-white" />
                </li>
            ) : (
                <li><NavLink className={navLinkClass} to="/authentication/login">Login</NavLink></li>
            )
        }
    </div>

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
                <Link className="btn btn-ghost text-4xl">
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