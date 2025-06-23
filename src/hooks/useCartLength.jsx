import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecure"
import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider"

const useCartLength = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useContext(AuthContext)
    const { data: cartLength = 0, refetch } = useQuery({
        queryKey: ['cartLength', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts-length?email=${user?.email}`)
            return res.data
        },
    })
    return [cartLength, refetch]
}

export default useCartLength