import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import './Banner.css'

import slide1 from '../../assets/home/slide1.jpg';
import slide2 from '../../assets/home/slide2.jpg';
import slide3 from '../../assets/home/slide3.jpg';
import slide4 from '../../assets/home/slide4.jpg';
import slide5 from '../../assets/home/slide5.jpg';
import chef from '../../assets/home/chef-service.jpg';
import SectionTitle from '../../components/SectionTitle';

const SwiperSection = () => {
    return (
        <div className='mb-10 px-5'>
            <SectionTitle heading={"ORDER ONLINE"} subHeading={"From 11:00am to 10:00pm"} />
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper swiper-with-margin my-10 max-w-screen-xl mx-auto "
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h3 className="text-3xl font-semibold text-white text-center -mt-16">SALAD</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className="text-3xl font-semibold text-white text-center -mt-16">SOUP</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className="text-3xl font-semibold text-white text-center -mt-16">PIZZA</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className="text-3xl font-semibold text-white text-center -mt-16">CAKE</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className="text-3xl font-semibold text-white text-center -mt-16">SALAD</h3>
                </SwiperSlide>
            </Swiper>

            <div className='w-full flex justify-center max-w-screen-2xl mx-auto bg-fixed' style={{
                backgroundImage: `url(${chef})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                <div className='text-center w-7/12 bg-white px-28 py-24 mx-20 my-12 hidden md:block'>
                    <h3 className='text-3xl font-semibold pb-5'>Bistro Restaurant</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem quis minima debitis quisquam sed iste, molestiae similique tempore necessitatibus eum veritatis nemo, laboriosam voluptatum error doloremque! Laudantium iste reprehenderit accusantium ratione assumenda cumque sed, hic, repellendus tempora illum necessitatibus nulla inventore quidem consequatur voluptates! Iusto qui voluptatum a vero ducimus.</p>
                </div>
            </div>
        </div>
    )
}

export default SwiperSection