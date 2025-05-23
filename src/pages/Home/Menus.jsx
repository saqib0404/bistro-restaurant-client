import React, { useEffect, useState } from 'react'
import SectionTitle from '../../components/SectionTitle'
import MenuItem from '../Shared/MenuItem';
import useMenu from '../../hooks/useMenu';
import CmnBlackBtn from '../../components/CmnBlackBtn';

const Menus = () => {
    const [menus, loadingData] = useMenu();
    const popularMenus = menus?.filter(item => item.category === "popular")

    return (
        <section className='max-w-screen-2xl mx-auto mb-12 px-2'>
            <SectionTitle heading={"FROM OUR MENU"} subHeading={"Check it out"} />

            <div className='grid md:grid-cols-2 gap-4 px-2 max-w-5xl mx-auto'>
                {
                    !loadingData && popularMenus?.map(item => <MenuItem key={item._id} item={item} ></MenuItem>)
                }
            </div>
            <CmnBlackBtn text="View More" />
            <div className='mt-8 py-24 bg-black text-white text-3xl text-center'>
                Call Us: +88 0192345678910
            </div>
        </section >
    )
}

export default Menus