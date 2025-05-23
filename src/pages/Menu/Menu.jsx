import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import Cover from "../Shared/Cover";
import menuCover from '../../assets/menu/banner3.jpg'
import dessertsCover from '../../assets/menu/dessert-bg.jpeg'
import pizzaCover from '../../assets/menu/pizza-bg.jpg'
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle";
import MenuItem from "../Shared/MenuItem";
import CmnBlackBtn from "../../components/CmnBlackBtn";

const Menu = () => {
    const location = useLocation().pathname;
    // Remove the slash and capitalize the first letter
    let formattedPath = location.replace("/", "")  // Remove "/"
        .replace(/^./, c => c.toUpperCase()); // Capitalize first letter

    useEffect(() => {
        document.title = `Bistro | ${formattedPath}`
    }, [])

    const [menus, loadingData] = useMenu();
    const popularMenus = menus?.filter(item => item.category === "popular")
    const dessertMenus = menus?.filter(item => item.category === "dessert")
    const pizzaMenus = menus?.filter(item => item.category === "pizza")

    return (
        <>
            {/* Menu Page Banner */}
            <Cover img={menuCover} title={'OUR MENU'} />


            {/* Todays offer */}
            <section className="my-5">
                <SectionTitle subHeading="Don't miss out" heading="Today's Offer" />
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-2 max-w-screen-2xl mx-auto'>
                    {
                        !loadingData && popularMenus?.map(item => <MenuItem key={item._id} item={item} ></MenuItem>)
                    }
                </div>
                <CmnBlackBtn text={"ORDER YOUR FAVOURITE FOOD"} />
            </section>

            {/* Deserts */}
            <Cover img={dessertsCover} title={'Desserts'} />
            <section className="my-7">
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-2 max-w-screen-2xl mx-auto'>
                    {
                        !loadingData && dessertMenus?.map(item => <MenuItem key={item._id} item={item} ></MenuItem>)
                    }
                </div>
                <CmnBlackBtn text={"ORDER YOUR FAVOURITE FOOD"} />
            </section>

            {/* Pizzas */}
            <Cover img={pizzaCover} title={'Desserts'} />
            <section className="my-7">
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-2 max-w-screen-2xl mx-auto'>
                    {
                        !loadingData && pizzaMenus?.map(item => <MenuItem key={item._id} item={item} ></MenuItem>)
                    }
                </div>
                <CmnBlackBtn text={"ORDER YOUR FAVOURITE FOOD"} />
            </section>


        </>
    )
}

export default Menu