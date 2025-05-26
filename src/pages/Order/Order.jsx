import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import Cover from '../Shared/Cover';
import shopCover from '../../assets/shop/shopCover.jpg'
import OrderSection from './OrderSection';
import useTitle from '../../hooks/useTitle';

const Order = () => {
    useTitle()

    return (
        <div >
            <Cover des="Would you like to try a dish?" img={shopCover} title={"OUR SHOP"} />
            <OrderSection />
        </div>
    )
}

export default Order