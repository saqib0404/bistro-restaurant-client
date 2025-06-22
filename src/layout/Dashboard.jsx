import { CgPullClear } from "react-icons/cg"
import { FaBars, FaBook, FaCalendarAlt, FaHome, FaShoppingBag, FaUsers, FaWallet } from "react-icons/fa"
import { FaCartShopping } from "react-icons/fa6"
import { GiHamburgerMenu } from "react-icons/gi"
import { MdMail, MdReviews } from "react-icons/md"
import { PiForkKnifeFill } from "react-icons/pi"
import { RiReservedFill } from "react-icons/ri"
import { NavLink, Outlet } from "react-router-dom"
import useAdminCheck from "../hooks/useAdminCheck"

const Dashboard = () => {
    const navLinkClass = ({ isActive }) =>
        `flex items-center gap-2 uppercase font-semibold ${isActive ? 'text-white' : 'text-black'}`;

    const [isAdmin] = useAdminCheck();

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content bg-base-200">
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

                    {
                        isAdmin ? <>
                            <NavLink className={navLinkClass} to='/dashboard/user-home'><FaHome />  ADMIN HOME</NavLink>
                            <NavLink className={navLinkClass} to='/dashboard/add-items'> <PiForkKnifeFill />ADD ITEMS</NavLink>
                            <NavLink className={navLinkClass} to='/dashboard/carasdt'><FaBars />  MANAGE ITEMS</NavLink>
                            <NavLink className={navLinkClass} to='/dashboard/cart'><FaCartShopping /> MY CART</NavLink>
                            <NavLink className={navLinkClass} to='/dashboard/carddt'><FaBook /> MANAGE BOOKINGS</NavLink>
                            <NavLink className={navLinkClass} to='/dashboard/carqqt'><MdReviews />  ADD REVIEW</NavLink>
                            <NavLink className={navLinkClass} to='/dashboard/all-users'><FaUsers /> ALL USERS</NavLink>
                        </>
                            :
                            <>
                                <NavLink className={navLinkClass} to='/dashboard/user-home'><FaHome />  USER HOME</NavLink>
                                <NavLink className={navLinkClass} to='/dashboard/cadsrt'> <FaCalendarAlt />RESERVATION</NavLink>
                                <NavLink className={navLinkClass} to='/dashboard/cacrt'><FaWallet />  PAYMENT HISTORY</NavLink>
                                <NavLink className={navLinkClass} to='/dashboard/cart'><FaCartShopping /> MY CART</NavLink>
                                <NavLink className={navLinkClass} to='/dashboard/caawert'><MdReviews />  ADD REVIEW</NavLink>
                                <NavLink className={navLinkClass} to='/dashboard/caffrt'><RiReservedFill /> MY BOOKING</NavLink>
                            </>
                    }

                    <div className="w-11/12 border border-white border-opacity-80 mx-auto my-10"></div>

                    <NavLink className="flex items-center gap-2 font-semibold" to='/'><FaHome />  HOME</NavLink>
                    <NavLink className="flex items-center gap-2 font-semibold" to='/menu'><GiHamburgerMenu /> MENU</NavLink>
                    <NavLink className="flex items-center gap-2 font-semibold" to='/order'><FaShoppingBag /> SHOP</NavLink>
                    <NavLink className="flex items-center gap-2 font-semibold" to='/contacts'><MdMail /> CONTACT</NavLink>
                </ul>
            </aside>
        </div>
    )
}

export default Dashboard