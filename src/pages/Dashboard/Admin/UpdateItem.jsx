import React, { useState } from 'react'
import Swal from 'sweetalert2'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import useMenu from '../../../hooks/useMenu'
import SectionTitle from '../../../components/SectionTitle'
import useAxiosPublic from '../../../hooks/useAxiosPublic'
import { useForm } from 'react-hook-form'
import { PiForkKnifeFill } from 'react-icons/pi'
import { useLoaderData } from 'react-router-dom'

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure();
    const menuItem = useLoaderData();
    

    const [postLoading, setPostLoading] = useState(false)

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = async (data) => {

        setPostLoading(true)
        const imageFile = { image: data.recipeImage[0] }
        try {
            const res = await axiosPublic.post(image_hosting_api, imageFile, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            // console.log(res.data);
            if (res.data.success) {
                const image = res.data.data.display_url;
                const updatedMenuItem = {
                    image,
                    name: data.recipeName,
                    price: Number(data.price),
                    category: data.category,
                    recipe: data.recipeDetails
                }
                axiosSecure.patch(`/menus/${menuItem._id}`, updatedMenuItem)
                    .then(res => {
                        if (res.data.modifiedCount) {
                            Swal.fire({
                                icon: "success",
                                title: `${data.recipeName} has been added`,
                                showConfirmButton: false,
                                timer: 1000
                            });
                            setPostLoading(false)
                        }
                    }).catch(err => {
                        setPostLoading(false)
                        console.log(err);
                    })
            }
        } catch (error) {
            setPostLoading(false)
            console.error('Error uploading image:', error);
        }
    };

    return (
        <div className="bg-base-200 pb-10">

            <div className="-my-7 pt-10">
                <SectionTitle heading={"Update Your Recipe"} subHeading={"What's the Change?"} />
            </div>

            <div className="bg-base-300 text-lg p-10 max-w-screen-lg lg:mx-auto mt-16 rounded-lg shadow-md mx-4">

                <div className="w-full ">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-6">
                            <label htmlFor="recipeName" className="block text-gray-700 text-lg font-medium mb-2 after:content-['*'] after:ml-0.5 after:text-red-500">
                                Recipe name
                            </label>
                            <input
                                type="text"
                                id="recipeName"
                                defaultValue={menuItem.name}
                                required
                                {...register('recipeName',)}
                                className={`shadow-sm appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.recipeName ? 'border-red-500' : 'border-gray-300'
                                    }`}
                            />
                            {errors.recipeName && <p className="text-red-500 text-sm mt-1">{errors.recipeName.message}</p>}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label htmlFor="category" className="block text-gray-700 text-lg font-medium mb-2 after:content-['*'] after:ml-0.5 after:text-red-500">
                                    Category
                                </label>
                                <div className="relative">
                                    <select
                                        id="category"
                                        defaultValue={menuItem.category}
                                        {...register('category')}
                                        className={`block appearance-none w-full bg-white border rounded py-3 px-4 pr-8 text-gray-700 shadow-sm leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.category ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                    >
                                        <option value="">Category</option>
                                        <option value="soup">Soup</option>
                                        <option value="salad">Salad</option>
                                        <option value="dessert">Dessert</option>
                                        <option value="drinks">Drinks</option>
                                        <option value="pizza">Pizza</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9l4.95 4.95z" />
                                        </svg>
                                    </div>
                                </div>
                                {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>}
                            </div>

                            <div>
                                <label htmlFor="price" className="block text-gray-700 text-lg font-medium mb-2 after:content-['*'] after:ml-0.5 after:text-red-500">
                                    Price
                                </label>
                                <input
                                    type="number"
                                    id="price"
                                    defaultValue={menuItem.price}
                                    step="0.01" // Allows decimal values for price
                                    required
                                    {...register('price')}
                                    className={`shadow-sm appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.price ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                />
                                {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>}
                            </div>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="recipeDetails" className="block text-gray-700 text-lg font-medium mb-2 after:content-['*'] after:ml-0.5 after:text-red-500">
                                Recipe Details
                            </label>
                            <textarea
                                id="recipeDetails"
                                defaultValue={menuItem.recipe}
                                rows="6"
                                required
                                {...register('recipeDetails')}
                                className={`shadow-sm appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y ${errors.recipeDetails ? 'border-red-500' : 'border-gray-300'
                                    }`}
                            ></textarea>
                            {errors.recipeDetails && <p className="text-red-500 text-sm mt-1">{errors.recipeDetails.message}</p>}
                        </div>

                        <div className="flex items-center mb-6">
                            <input
                                id="recipeImage"
                                type="file"
                                required
                                {...register('recipeImage')}
                                className="file-input file-input-bordered file-input-lg "
                            />
                            {errors.recipeImage && <p className="text-red-500 text-sm mt-1">{errors.recipeImage.message}</p>}
                        </div>

                        <div className='flex justify-center'>
                            <button
                                type="submit"
                                disabled={postLoading}
                                className="bg-gradient-to-r btn-wide text-center from-[#876024] to-[#B27F2F] text-white font-bold py-2 px-6 rounded-md focus:outline-none focus:shadow-outline flex items-center justify-center transition duration-200 ease-in-out"
                            >
                                Update Recipe
                                {
                                    postLoading ?
                                        <span className="loading loading-spinner loading-md ml-2"></span>
                                        :
                                        <PiForkKnifeFill className='ml-2 text-lg' />
                                }
                            </button>
                        </div>
                    </form>
                </div>
            </div>



        </div>
    )
}

export default UpdateItem