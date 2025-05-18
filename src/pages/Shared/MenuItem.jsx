import React from 'react'

const MenuItem = ({ item }) => {
    const { _id, name, price, image, recipe } = item
    return (
        <div className='flex space-x-3 '>
            <img src={image} className='w-[100px] rounded-[0px_200px_200px_200px]' alt={name} />
            <div>
                <h3 className='text-xl pb-1'>{name}---------</h3>
                <p className='max-w-xs'>{recipe}</p>
            </div>
            <p className='text-yellow-500'>${price}</p>
        </div>
    )
}

export default MenuItem