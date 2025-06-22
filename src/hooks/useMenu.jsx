import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = () => {
    const [menus, setMenus] = useState([]);
    const [loadingData, setLoadingData] = useState(true);
    const axiosPublic = useAxiosPublic()
    useEffect(() => {
        axiosPublic.get(`/menus`)
            .then(res => {
                setMenus(res.data);
                setLoadingData(false)
            })
    }, [])

    return [menus, loadingData]
}

export default useMenu