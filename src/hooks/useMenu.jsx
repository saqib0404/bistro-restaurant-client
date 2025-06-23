import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
    const axiosPublic = useAxiosPublic()

    const { data: menus = [], isPending: loadingData, refetch } = useQuery({
        queryKey: ["menus"],
        queryFn: async () => {
            const res = await axiosPublic.get('/menus')
            return res.data
        }
    })

    return [menus, loadingData, refetch]
}

export default useMenu