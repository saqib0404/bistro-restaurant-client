import { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/auth/login.png'
import { FaFacebookF, FaGoogle, FaGithub } from 'react-icons/fa';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import useTitle from '../../hooks/useTitle';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';


const Login = () => {
    useTitle()
    const navigate = useNavigate();
    const location = useLocation()
    const [authError, setAuthError] = useState('')
    const { signInUserWithEmail } = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit, } = useForm()
    const from = location.state || "/";


    useEffect(() => {
        // captcha
        loadCaptchaEnginge(4);
    }, [])


    const onSubmit = (data) => {
        if (!validateCaptcha(data.captcha)) {
            return alert('Captcha Does Not Match');
        }
        signInUserWithEmail(data.email, data.password)
            .then((result) => {
                setAuthError("")
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Logged In ",
                    showConfirmButton: false,
                    timer: 1500
                })
                 navigate(from, { replace: true });
            })
            .catch((error) => {
                setAuthError(error.message)
                console.log(error);
            });

    }

    return (
        <div className="min-h-screen grid place-items-center px-4">

            <div className="grid md:grid-cols-2 items-center gap-6 border-2 shadow-2xl p-10 md:px-20 md:py-10">

                {/* Left Image - hidden on small screens */}
                <div className="hidden md:flex justify-center items-center">
                    <img src={loginImg} alt="Login Illustration" className="max-w-md" />
                </div>

                {/* Right Form Section */}
                <div className="w-full">
                    <div className="max-w-md mx-auto">
                        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                                    {...register("email")}
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
                                    {...register("password")}
                                />
                                <span className='text-red-600 font-semibold text-small'>{authError}</span>
                            </div>

                            <div>
                                <div>
                                    <LoadCanvasTemplate />
                                </div>
                                <input
                                    name='captcha'
                                    type="text"
                                    placeholder="Type here"
                                    className="input input-bordered w-full mt-2 focus:border-0 "
                                    {...register("captcha")}
                                />
                            </div>

                            <input value="Log In" type='submit' className="btn btn-primary w-full bg-gradient-to-r from-amber-400 to-amber-600 text-white border-none" />

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