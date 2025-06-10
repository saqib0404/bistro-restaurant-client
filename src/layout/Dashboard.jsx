import { CgPullClear } from "react-icons/cg"
import { FaCalendarAlt, FaHome, FaShoppingBag, FaWallet } from "react-icons/fa"
import { FaCartShopping } from "react-icons/fa6"
import { GiHamburgerMenu } from "react-icons/gi"
import { MdMail, MdReviews } from "react-icons/md"
import { RiReservedFill } from "react-icons/ri"
import { NavLink, Outlet } from "react-router-dom"

const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn bg-[#D1A054] my-4 mx-2 text-white drawer-button lg:hidden">
                    <CgPullClear /> Open Menu Bar
                </label>
                <Outlet />
            </div>

            <aside className="drawer-side bg-[#D1A054] text-xl">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="bg-[#D1A054] text-base-content space-y-2 min-h-full w-80 p-4">
                    <h3 className="text-4xl text-center font-semibold py-4">Bistro Restaurant</h3>
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
                    <li className="flex items-center gap-2 pb-5">
                        <RiReservedFill /> <NavLink to='/dashboard/cart'> MY BOOKING</NavLink>
                    </li>

                    <div className="w-11/12 border border-white border-opacity-80 mx-auto my-10"></div>

                    <li className="flex items-center gap-2 pt-5">
                        <FaHome /> <NavLink to='/'> HOME</NavLink>
                    </li>
                    <li className="flex items-center gap-2 ">
                        <GiHamburgerMenu /> <NavLink to='/menu'> Menu</NavLink>
                    </li>
                    <li className="flex items-center gap-2 ">
                        <FaShoppingBag /> <NavLink to='/order'> SHOP</NavLink>
                    </li>
                    <li className="flex items-center gap-2 ">
                        <MdMail /> <NavLink to='/contacts'> CONTACT</NavLink>
                    </li>
                </ul>
            </aside>
        </div>
    )
}

export default Dashboard