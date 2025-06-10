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

                    <NavLink className="flex items-center gap-2" to='/dashboard/user-home'><FaHome />  USER HOME</NavLink>
                    <NavLink className="flex items-center gap-2" to='/dashboard/cart'> <FaCalendarAlt />RESERVATION</NavLink>
                    <NavLink className="flex items-center gap-2" to='/dashboard/cart'><FaWallet />  PAYMENT HISTORY</NavLink>
                    <NavLink className="flex items-center gap-2" to='/dashboard/cart'><FaCartShopping /> MY CART</NavLink>
                    <NavLink className="flex items-center gap-2" to='/dashboard/cart'><MdReviews />  ADD REVIEW</NavLink>
                    <NavLink className="flex items-center gap-2 pb-5" to='/dashboard/cart'><RiReservedFill /> MY BOOKING</NavLink>

                    <div className="w-11/12 border border-white border-opacity-80 mx-auto my-10"></div>

                    <NavLink className="flex items-center gap-2 pt-5" to='/'><FaHome />  HOME</NavLink>
                    <NavLink className="flex items-center gap-2" to='/menu'><GiHamburgerMenu /> Menu</NavLink>
                    <NavLink className="flex items-center gap-2" to='/order'><FaShoppingBag /> SHOP</NavLink>
                    <NavLink className="flex items-center gap-2" to='/contacts'><MdMail /> CONTACT</NavLink>
                </ul>
            </aside>
        </div>
    )
}

export default Dashboard