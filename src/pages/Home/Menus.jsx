import React, { useEffect, useState } from 'react'
import SectionTitle from '../../layout/components/SectionTitle'
import MenuItem from '../Shared/MenuItem';

const Menus = () => {
    const [menus, setMenus] = useState([]);
    useEffect(() => {
        fetch(`./menu.json`)
            .then(res => res.json())
            .then(data => {
                const filtered = data?.filter(item => item.category === "popular")
                setMenus(filtered)
            })
    }, [])

    return (
        <section className='max-w-screen-2xl mx-auto mb-12 px-2'>
            <SectionTitle heading={"FROM OUR MENU"} subHeading={"Check it out"} />

            <div className='grid md:grid-cols-2 gap-4 px-2 max-w-5xl mx-auto'>
                {
                    menus?.map(item => <MenuItem key={item._id} item={item} ></MenuItem>)
                }
            </div>
            <div className="flex justify-center mt-6">
                <button className='px-8 py-3 border-b-2 border-black rounded-lg font-medium hover:bg-black hover:text-white duration-300'>View More</button>
            </div>
            <div className='mt-8 py-24 bg-black text-white text-3xl text-center'>
                Call Us: +88 0192345678910
            </div>
        </section >
    )
}

export default Menus