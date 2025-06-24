import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [err, setErr] = useState('')

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setErr(error.message)
        } else {
            setErr('')
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">PAYMENT</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Card Number Input */}
                    <div className="form-control">
                        <CardElement className='text-2xl border-2 px-3 py-2'
                            options={{
                                style: {
                                    base: {
                                        fontSize: '16px',
                                        color: '#424770',
                                        '::placeholder': {
                                            color: '#aab7c4',
                                        },
                                    },
                                    invalid: {
                                        color: '#9e2146',
                                    },
                                },
                            }}
                        />
                    </div>
                    <span className='text-red-600 text-lg '>{err}</span>

                    {/* Pay Button */}
                    <button type="submit" disabled={!stripe} className="btn btn-primary w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg text-lg transition duration-300 ease-in-out">
                        Pay
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CheckoutForm