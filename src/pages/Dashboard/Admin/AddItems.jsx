import React from 'react'
import SectionTitle from '../../../components/SectionTitle'
import { useForm } from 'react-hook-form';
import { PiForkKnifeFill } from 'react-icons/pi';

const AddItems = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // Here you would typically send your form data to an API
        // For file uploads, you'd usually use FormData:
        // const formData = new FormData();
        // formData.append('recipeName', data.recipeName);
        // formData.append('category', data.category);
        // formData.append('price', data.price);
        // formData.append('recipeDetails', data.recipeDetails);
        // if (data.recipeImage && data.recipeImage[0]) {
        //   formData.append('recipeImage', data.recipeImage[0]);
        // }
        // fetch('/api/recipes', { method: 'POST', body: formData })
        //   .then(response => response.json())
        //   .then(data => console.log('Success:', data))
        //   .catch(error => console.error('Error:', error));
    };

    return (
        <div className="bg-base-200 pb-10">

            <div className="-my-7 pt-10">
                <SectionTitle heading={"Add An Item"} subHeading={"What's new?"} />
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
                                placeholder="Recipe name"
                                required
                                {...register('recipeName', )}
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
                                        required
                                        {...register('category')}
                                        className={`block appearance-none w-full bg-white border rounded py-3 px-4 pr-8 text-gray-700 shadow-sm leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.category ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                    >
                                        <option value="">Category</option>
                                        <option value="appetizer">Appetizer</option>
                                        <option value="main-course">Main Course</option>
                                        <option value="dessert">Dessert</option>
                                        <option value="drink">Drink</option>
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
                                    placeholder="Price"
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
                                placeholder="Recipe Details"
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

                        <button
                            type="submit"
                            className="bg-gradient-to-r from-[#876024] to-[#B27F2F] text-white font-bold py-2 px-6 rounded-md focus:outline-none focus:shadow-outline flex items-center transition duration-200 ease-in-out"
                        >
                            Add Item
                            <PiForkKnifeFill className='ml-2 text-lg' />
                        </button>
                    </form>
                </div>
            </div>



        </div>
    )
}

export default AddItems