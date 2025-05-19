import SectionTitle from '../../components/SectionTitle'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';

import 'swiper/css';
import 'swiper/css/navigation';
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('./reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    console.log(reviews);

    return (
        <div className='max-w-screen-2xl mx-auto mb-16 mt-14'>
            <SectionTitle subHeading="What Our Clients Say" heading="TESTIMONIALS" />

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper text-center">
                <div>
                    {
                        reviews.map(review => (
                            <SwiperSlide key={review._id}>
                                <div className="flex flex-col items-center text-center px-12 py-6 md:px-40 md:py-2 space-y-4">
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={review.rating}
                                        readOnly
                                    />
                                    <FaQuoteLeft className="text-3xl text-gray-400" />
                                    <p className="max-w-xl">{review.details}</p>
                                    <h3 className="text-2xl font-medium text-yellow-600">{review.name}</h3>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </div>
            </Swiper>
        </div>
    )
}

export default Testimonials