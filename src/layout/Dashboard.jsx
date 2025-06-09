import { FaCalendarAlt, FaHome, FaWallet } from "react-icons/fa"
import { FaCartShopping } from "react-icons/fa6"
import { MdReviews } from "react-icons/md"
import { RiReservedFill } from "react-icons/ri"
import { NavLink, Outlet } from "react-router-dom"

const Dashboard = () => {
    return (
        <div className="flex">
            <aside className="w-64 min-h-screen bg-[#D1A054] text-lg">
                <ul>
                    <li className="flex items-center gap-2">
                        <FaHome /> <NavLink to='/dashboard/user-home'> USER HOME</NavLink>
                    </li>
                    <li className="flex items-center gap-2">
                        <FaCalendarAlt /> <NavLink to='/dashboard/cart'> RESERVATION</NavLink>
                    </li>
                    <li className="flex items-center gap-2">
                        <FaWallet /> <NavLink to='/dashboard/cart'> PAYMENT HISTORY</NavLink>
                    </li>
                    <li className="flex items-center gap-2">
                        <FaCartShopping /> <NavLink to='/dashboard/cart'> MY CART</NavLink>
                    </li>
                    <li className="flex items-center gap-2">
                        <MdReviews /> <NavLink to='/dashboard/cart'> ADD REVIEW</NavLink>
                    </li>
                    <li className="flex items-center gap-2">
                        <RiReservedFill /> <NavLink to='/dashboard/cart'> MY BOOKING</NavLink>
                    </li>
                </ul>
            </aside>

            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard