import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

const useTitle = () => {
    const location = useLocation().pathname;
    // Remove the slash and capitalize the first letter
    const lastSegment = location.substring(location.lastIndexOf('/') + 1);

    // Capitalize the first letter
    const capitalized = lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);

    useEffect(() => {
        document.title = `Bistro | ${capitalized}`
    }, [])
}

export default useTitle