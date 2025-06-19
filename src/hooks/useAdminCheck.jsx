import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider"
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useAdminCheck = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure()

    const { data: isAdmin } = useQuery({
        queryKey: ['userEmail', user?.email],
        queryFn: async () => {
            const result = await axiosSecure.get(`/users/admin/${user.email}`)
            return result.data
        }
    })
    return [isAdmin]
}

export default useAdminCheck