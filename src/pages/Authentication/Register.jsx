import { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/auth/login.png'
import { FaFacebookF, FaGoogle, FaGithub } from 'react-icons/fa';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../providers/AuthProvider';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../hooks/useAxiosPublic';


const Register = () => {
    useTitle()
    const navigate = useNavigate();
    const location = useLocation()
    const axiosPublic = useAxiosPublic()
    const [disableBtn, setDisableBtn] = useState(false)
    const [authError, setAuthError] = useState('')
    const { createUserWithEmail } = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit, } = useForm()
    const from = location.state || "/";

    const onSubmit = (data) => {
        setDisableBtn(true)
        createUserWithEmail(data.email, data.password)
            .then((result) => {
                const userInfo = {
                    email: data.email,
                    name: data.name
                }
                axiosPublic.post(`/users`, userInfo)
                    .then(res => {
                        setAuthError("")
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "New Account Registered ",
                            showConfirmButton: false,
                            timer: 1000
                        })
                        setDisableBtn(false)
                        navigate(from, { replace: true });
                    }).catch(err => {
                        setAuthError(err?.message);
                    })
            })
            .catch((error) => {
                setDisableBtn(false)
                setAuthError(error.message)
                console.log(error.message);
            });

    }

    return (
        <div className="min-h-screen grid place-items-center px-4">
            <div className="grid md:grid-cols-2 items-center gap-6 border-2 shadow-2xl p-10 md:px-20 md:py-10">

                {/* Right Form Section */}
                <div className="w-full">
                    <div className="max-w-md mx-auto">
                        <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div>
                                <label className="label">
                                    <span className="label-text font-medium">Name</span>
                                </label>
                                <input
                                    name='name'
                                    type="text"
                                    placeholder="Type here"
                                    className="input input-bordered w-full focus:border-0 mt-1"
                                    required
                                    {...register("name")}
                                />
                            </div>

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
                                    className={`input input-bordered w-full mt-1 ${errors.password ? 'border-red-600 focus:border-red-600' : 'focus:border-0'}`}

                                    required
                                    {...register("password", {
                                        pattern: {
                                            value: /^[A-Za-z]+$/i,
                                            message: "Password must contain only letters",
                                        },
                                        minLength: {
                                            value: 6,
                                            message: "Password must be at least 6 characters",
                                        },
                                        maxLength: {
                                            value: 12,
                                            message: "Password cannot exceed 12 characters",
                                        },
                                    })}
                                />
                                <span className='text-red-600 font-semibold text-small'>{authError}</span>
                                {errors.password && <span className='text-red-600 font-semibold text-small'>{errors.password.message}</span>}
                            </div>

                            <input disabled={disableBtn} value="Register" type='submit' className="btn btn-primary w-full bg-gradient-to-r from-amber-400 to-amber-600 text-white border-none" />
                        </form>

                        <p className="text-center mt-4">
                            <span className="text-sm">Already Registered?</span>
                            <Link to='/authentication/login' className="text-amber-600 font-semibold ml-1 hover:underline">
                                Go to Login
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

                {/* Left Image - hidden on small screens */}
                <div className="hidden md:flex justify-center items-center">
                    <img src={loginImg} alt="Login Illustration" className="max-w-md" />
                </div>
            </div>
        </div>
    )
}

export default Register