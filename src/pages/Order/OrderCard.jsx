import React, { useContext } from 'react'
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const OrderCard = ({ menus }) => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const handleAddToCart = food => {
        if (user && user.email) {
            const cartItem = {
                user: user.email,
                foodId: food._id,
                foodName: food.name
            }

            axios.post("http://localhost:8000/carts", cartItem,)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            icon: "success",
                            title: "Item added to your cart",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })

        } else {
            Swal.fire({
                title: "You are not Logged In",
                text: "Please login to add to cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/authentication/login", { state: location.pathname })
                }
            });
        }
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