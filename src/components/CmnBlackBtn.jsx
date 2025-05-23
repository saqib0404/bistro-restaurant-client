import React from 'react'

const CmnBlackBtn = ({ text }) => {
    return (
        <div className="flex justify-center mt-6">
            <button className='px-8 py-3 border-b-2 uppercase border-black rounded-lg font-medium hover:bg-black hover:text-white duration-300'>{text}</button>
        </div>
    )
}

export default CmnBlackBtn