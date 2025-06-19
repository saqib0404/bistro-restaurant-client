import React, { useContext } from 'react'
import SectionTitle from '../../../components/SectionTitle'
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import { FaUsers } from 'react-icons/fa'
import { RiDeleteBinLine } from 'react-icons/ri'
import { AuthContext } from '../../../providers/AuthProvider'

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);

    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const data = await axiosSecure.get(`/users`)
            return data.data
        }
    })

    const handleDelete = id => {

    }

    return (
        <div className="bg-base-200 pb-10">

            <div className="-my-7 pt-10">
                <SectionTitle heading={"Mangae all users"} subHeading={"How many??"} />
            </div>

            <div className="bg-white p-4 rounded-lg max-w-screen-xl mx-auto mt-16">
                <h2 className="text-3xl font-semibold">Total Users: {users.length || "0"}</h2>

                <div className="overflow-x-auto my-11 rounded-t-xl">

                    <table className="table">
                        {/* head */}
                        <thead className="bg-[#D1A054] text-lg text-white font-medium">
                            <tr >
                                <th></th>
                                <td>NAME</td>
                                <td>EMAIL</td>
                                <td>ROLE</td>
                                <td>ACTION</td>
                            </tr>
                        </thead>
                        <tbody className="text-lg">
                            {/* row 1 */}
                            {
                                users.length ?
                                    users.filter(filteredUser => filteredUser.email !== user?.email).map((userData, idx) => <tr key={userData._id}>
                                        <th>{idx + 1}</th>
                                        <td>{userData.name}</td>
                                        <td>{userData.email}</td>
                                        <td>
                                            <button className="btn btn-square btn-soft btn-lg btn-accent"><FaUsers className="text-xl" /></button>
                                        </td>
                                        <td>
                                            <button onClick={() => handleDelete(userData._id)} className="btn btn-square btn-lg btn-soft btn-secondary"><RiDeleteBinLine className="text-xl" /></button>
                                        </td>
                                    </tr>)
                                    : (
                                        <tr>
                                            <td colSpan="5" className="text-center py-4">
                                                No Users.
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

export default AllUsers