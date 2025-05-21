import { useEffect, useState } from "react";

const useMenu = () => {
    const [menus, setMenus] = useState([]);
    const [loadingData, setLoadingData] = useState(true);
    useEffect(() => {
        fetch(`./menu.json`)
            .then(res => res.json())
            .then(data => {
                setMenus(data);
                setLoadingData(false)
            })
    }, [])

    return [menus, loadingData]
}

export default useMenu