import React from 'react'
import SectionTitle from '../../../components/SectionTitle';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useMenu from '../../../hooks/useMenu';
import { RiDeleteBinLine } from 'react-icons/ri';
import { FaRegEdit } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const ManageItems = () => {
    const [menus, , refetch] = useMenu()
    const axiosSecure = useAxiosSecure()

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure you want to Delete this?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/menus/${id}`)
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
                <SectionTitle heading={"Manage All items"} subHeading={"Hurry up!"} />
            </div>

            <div className="bg-white p-4 rounded-lg max-w-screen-xl mx-auto mt-16">
                <h2 className="text-3xl font-semibold">Total Items: {menus.length && menus.length}</h2>
                <div className="overflow-x-auto mt-2 mb-11 rounded-t-xl h-[70vh] overflow-y-auto shadow-md">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-[#D1A054] text-lg text-white font-medium">
                            <tr >
                                <th>#</th>
                                <td>ITEM IMAGE</td>
                                <td>ITEM NAME</td>
                                <td>PRICE</td>
                                <td>Edit</td>
                                <td>Remove</td>
                            </tr>
                        </thead>
                        <tbody className="text-lg">
                            {/* row 1 */}
                            {
                                menus.length ?
                                    menus.map((menuItem, idx) => <tr key={menuItem._id}>
                                        <th>{idx + 1}</th>
                                        <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-20 md:w-24">
                                                    <img
                                                        src={menuItem.image}
                                                        alt="food" />
                                                </div>
                                            </div>
                                        </td>
                                        <td>{menuItem.name}</td>
                                        <td>${menuItem.price}</td>
                                        <td>
                                            <Link to={`/dashboard/update-item/${menuItem._id}`} >
                                                <button className="btn btn-square btn-lg btn-dash btn-warning"><FaRegEdit className="text-xl" ></FaRegEdit> </button>
                                            </Link>
                                        </td>
                                        <td>
                                            <button onClick={() => handleDelete(menuItem._id)} className="btn btn-square btn-lg btn-soft btn-secondary"><RiDeleteBinLine className="text-xl" /></button>
                                        </td>
                                    </tr>)
                                    : (
                                        <tr>
                                            <td colSpan="5" className="text-center py-4">
                                                No items in menu.
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
export default ManageItems