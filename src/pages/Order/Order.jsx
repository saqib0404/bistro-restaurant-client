import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import Cover from '../Shared/Cover';
import shopCover from '../../assets/shop/shopCover.jpg'
import OrderSection from './OrderSection';

const Order = () => {
    const location = useLocation().pathname;
    // Remove the slash and capitalize the first letter
    let formattedPath = location.replace("/", "")  // Remove "/"
        .replace(/^./, c => c.toUpperCase()); // Capitalize first letter

    useEffect(() => {
        document.title = `Bistro | ${formattedPath}`
    }, [])


    return (
        <div >
            <Cover des="Would you like to try a dish?" img={shopCover} title={"OUR SHOP"} />
            <OrderSection  />
        </div>
    )
}

export default Order