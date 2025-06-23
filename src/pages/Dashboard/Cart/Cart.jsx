import { RiDeleteBinLine } from "react-icons/ri"
import SectionTitle from "../../../components/SectionTitle"
import useCart from "../../../hooks/useCart"
import Swal from "sweetalert2"
import useAxiosSecure from "../../../hooks/useAxiosSecure"

const Cart = () => {
    const [cart, refetch] = useCart()
    let totalPrice = 0
    if (cart.length) {
        totalPrice = cart.reduce((sum, item) => sum + item.foodPrice, 0);
    }
    const axiosSecure = useAxiosSecure()

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });

    }

    return (
        <div className="bg-base-200 pb-10">
            <div className="-my-7 pt-10">
                <SectionTitle heading={"Wanna add more?"} subHeading={"My Cart"} />
            </div>

            <div className="bg-white p-4 rounded-lg max-w-screen-xl mx-auto mt-16">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                    <h2 className="text-3xl font-semibold">Total Order: {cart.length}</h2>
                    <h2 className="text-3xl font-semibold">Total Price: ${totalPrice}</h2>
                    <button className="btn w-min bg-[#D1A054] text-white">Pay</button>
                </div>

                <div className="overflow-x-auto my-11 rounded-t-xl">

                    <table className="table max:h-[70vh] overflow-y-auto shadow-md">
                        {/* head */}
                        <thead className="bg-[#D1A054] text-lg text-white font-medium ">
                            <tr >
                                <th></th>
                                <td>ITEM IMAGE</td>
                                <td>ITEM NAME</td>
                                <td>PRICE</td>
                                <td>ACTION</td>
                            </tr>
                        </thead>
                        <tbody className="text-lg">
                            {/* row 1 */}
                            {
                                cart.length ?
                                    cart.map((cartItem, idx) => <tr key={cartItem._id}>
                                        <th>{idx + 1}</th>
                                        <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-20 md:w-24">
                                                    <img
                                                        src={cartItem.foodImg}
                                                        alt="food" />
                                                </div>
                                            </div>
                                        </td>
                                        <td>{cartItem.foodName}</td>
                                        <td>${cartItem.foodPrice}</td>
                                        <td>
                                            <button onClick={() => handleDelete(cartItem._id)} className="btn btn-square btn-lg btn-soft btn-secondary"><RiDeleteBinLine className="text-xl" /></button>
                                        </td>
                                    </tr>)
                                    : (
                                        <tr>
                                            <td colSpan="5" className="text-center py-4">
                                                No items in cart.
                                            </td>
                                        </tr>
                                    )
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default Cart