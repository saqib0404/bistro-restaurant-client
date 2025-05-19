import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import featured from '../../assets/home/featured.jpg'

const Featured = () => {
    return (
        <section className='featured max-w-screen-2xl mx-auto my-10 pt-10 pb-16 bg-fixed text-white px-2'>
            <SectionTitle subHeading="Check it out" heading="FROM OUR MENU" />

            <div className='flex flex-col md:flex-row justify-center items-center gap-8 max-w-screen-xl mx-auto'>
                <div className='max-w-md'>
                    <img src={featured} alt="" />
                </div>
                <div className='md:ml-10 text-center md:text-left'>
                    <h3 className='text-2xl font-semibold'>March 20, 2023</h3>
                    <h3 className='text-2xl font-semibold'>WHERE CAN I GET SOME?</h3>
                    <p className='max-w-lg mx-auto md:mx-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className='mt-4 duration-300 hover:bg-black hover:border-none px-6 py-2 border-b-2 rounded-lg border-white'>Read More</button>
                </div>
            </div>
        </section>

    )
}

export default Featured