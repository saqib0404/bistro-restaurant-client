import { Outlet } from 'react-router-dom'
import authBg from '../assets/auth/authentication.png'

const Authentication = () => {
    return (
         <div className="relative min-h-screen">
            {/* Background with lowered opacity */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-70"
                style={{ backgroundImage: `url(${authBg})` }}
            ></div>

            {/* Foreground content */}
            <div className="relative z-10">
                <Outlet />
            </div>
        </div>
    )
}

export default Authentication