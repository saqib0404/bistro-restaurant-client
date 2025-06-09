import React from 'react'

const OrderCard = ({ menus }) => {
    
    const handleAddToCart = food => {
        console.log(food);
    }

    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-2'>
            {
                menus.map(orderItem => <div
                    key={orderItem._id}
                    className="card bg-base-300 shadow-xl"
                >
                    <figure>
                        <img
                            src={orderItem.image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-2xl font-semibold text-center">{orderItem.name}</h2>
                        <p className='max-w-xs'>{orderItem.recipe}</p>
                        <div className="card-actions justify-center mt-2">
                            <button
                                onClick={() => handleAddToCart(orderItem)}
                                className="btn btn-lg border-t-0 border-r-0 border-l-0 duration-200 hover:bg-[#111827] text-[#BB8406] border-b-2 border-[#BB8406] rounded-lg">ADD TO CART</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}

export default OrderCard