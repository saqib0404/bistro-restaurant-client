import React from 'react'

const SectionTitle = ({ subHeading, heading }) => {
    return (
        <div className='my-8 text-center sm:w-5/12 md:w-3/12 mx-auto '>
            <p className='mb-2 italic text-lg text-yellow-500'>---{subHeading}---</p>
            <h2 className='text-4xl font-semibold py-4 border-y-4 '>{heading}</h2>
        </div>
    )
}

export default SectionTitle