import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import loginImg from '../../assets/auth/login.png'
import { FaFacebookF, FaGoogle, FaGithub } from 'react-icons/fa';


const Login = () => {
    const location = useLocation().pathname;
    // Remove the slash and capitalize the first letter
    let formattedPath = location.replace("/authentication/", "")  // Remove "/authentication/"
        .replace(/^./, c => c.toUpperCase()); // Capitalize first letter

    useEffect(() => {
        document.title = `Bistro | ${formattedPath}`
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        const captcha = form.captcha.value
        console.log(email, password, captcha);

    }

    return (
        <div className="min-h-screen grid place-items-center px-4">
            <div className="grid md:grid-cols-2 items-center gap-4 border-2 shadow-2xl p-4">

                {/* Left Image - hidden on small screens */}
                <div className="hidden md:flex justify-center items-center">
                    <img src={loginImg} alt="Login Illustration" className="max-w-md" />
                </div>

                {/* Right Form Section */}
                <div className="w-full">
                    <div className="max-w-md mx-auto">
                        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="label">
                                    <span className="label-text font-medium">Email</span>
                                </label>
                                <input
                                    name='email'
                                    type="email"
                                    placeholder="Type here"
                                    className="input input-bordered w-full focus:border-0 mt-1"
                                    required
                                />
                            </div>

                            <div>
                                <label className="label">
                                    <span className="label-text font-medium">Password</span>
                                </label>
                                <input
                                    name='password'
                                    type="password"
                                    placeholder="Enter your password"
                                    className="input input-bordered w-full focus:border-0 mt-1"
                                    required
                                />
                            </div>

                            <div>
                                <img src="https://dummyimage.com/120x40/cccccc/000000&text=UAgIuo" alt="Captcha" />
                                <a className="text-blue-600 text-sm hover:underline">Reload Captcha</a>
                                <input
                                    name='captcha'
                                    type="text"
                                    placeholder="Type here"
                                    className="input input-bordered w-full mt-2 focus:border-0 "
                                />
                            </div>

                            <button className="btn btn-primary w-full bg-gradient-to-r from-amber-400 to-amber-600 text-white border-none">
                                Sign In
                            </button>
                        </form>

                        <p className="text-center mt-4">
                            <span className="text-sm">New here?</span>
                            <Link to='/authentication/register' className="text-amber-600 font-semibold ml-1 hover:underline">
                                Create a New Account
                            </Link>
                        </p>

                        <div className="divider mt-6">Or sign in with</div>
                        <div className="flex justify-center gap-4 mt-4">
                            <button className="btn btn-outline btn-circle" aria-label="Login with Facebook">
                                <FaFacebookF className="w-5 h-5" />
                            </button>

                            <button className="btn btn-outline btn-circle" aria-label="Login with Google">
                                <FaGoogle className="w-5 h-5" />
                            </button>

                            <button className="btn btn-outline btn-circle" aria-label="Login with GitHub">
                                <FaGithub className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login