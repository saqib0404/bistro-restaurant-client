import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

const Register = () => {
    const location = useLocation().pathname;
    // Remove the slash and capitalize the first letter
    let formattedPath = location.replace("/authentication/", "")  // Remove "/authentication/"
        .replace(/^./, c => c.toUpperCase()); // Capitalize first letter

    useEffect(() => {
        document.title = `Bistro | ${formattedPath}`
    }, [])
    return (
        <div>Register</div>
    )
}

export default Register