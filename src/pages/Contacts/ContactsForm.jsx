import { Send } from 'lucide-react'
import React from 'react'

const ContactsForm = () => {
    return (
        <form className="bg-gray-100 p-6 max-w-screen-xl mx-auto space-y-6 mb-10">
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label className="block font-medium mb-1">Name*</label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full p-3 border rounded"
                        required
                    />
                </div>
                <div>
                    <label className="block font-medium mb-1">Email*</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full p-3 border rounded"
                        required
                    />
                </div>
            </div>

            <div>
                <label className="block font-medium mb-1">Phone*</label>
                <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full p-3 border rounded"
                    required
                />
            </div>

            <div>
                <label className="block font-medium mb-1">Message*</label>
                <textarea
                    placeholder="Write your message here"
                    className="w-full p-3 border rounded h-40"
                    required
                ></textarea>
            </div>

            {/* Simulated reCAPTCHA placeholder */}
            <div className="border p-3 bg-white w-full sm:w-72">
                <label className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4" />
                    I'm not a robot
                </label>
                <p className="text-xs text-gray-500 mt-2">reCAPTCHA - Privacy - Terms</p>
            </div>

            <div className='flex justify-center py-10'>
                <button
                    type="submit"
                    className="bg-yellow-600 text-white px-6 py-3 rounded flex items-center gap-2 hover:bg-yellow-700 transition"
                >
                    Send Message <Send size={16} />
                </button>
            </div>
        </form>
    )
}

export default ContactsForm