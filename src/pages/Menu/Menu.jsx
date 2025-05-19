import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import Cover from "../Shared/Cover";
import menuCover from '../../assets/menu/banner3.jpg'
import Testimonials from "../Home/Testimonials";

const Menu = () => {
    const location = useLocation().pathname;
    // Remove the slash and capitalize the first letter
    let formattedPath = location.replace("/", "")  // Remove "/"
        .replace(/^./, c => c.toUpperCase()); // Capitalize first letter

    useEffect(() => {
        document.title = `Bistro | ${formattedPath}`
    }, [])

    return (
        <>
            <Cover img={menuCover} title={'OUR MENU'} />
        </>
    )
}

export default Menu