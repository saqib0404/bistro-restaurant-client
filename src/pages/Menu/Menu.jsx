import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const Menu = () => {
    const location = useLocation().pathname;

    // Remove the slash and capitalize the first letter
    let formattedPath = location.replace("/", "")  // Remove "/"
        .replace(/^./, c => c.toUpperCase()); // Capitalize first letter


    useEffect(() => {
        document.title = `Bistro | ${formattedPath}`
    }, [])

    return (
        <div>
            Menu
        </div>
    )
}

export default Menu