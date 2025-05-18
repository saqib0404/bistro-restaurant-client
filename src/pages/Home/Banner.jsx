import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Banner.css'
import img1 from '../../assets/home/01.jpg';
import img2 from '../../assets/home/02.jpg';
import img3 from '../../assets/home/03.png';
import img4 from '../../assets/home/04.jpg';
import img5 from '../../assets/home/05.png';
import img6 from '../../assets/home/06.png';

const Banner = () => {
    return (
        <div className="min-h-[80vh] custom-carousel">
            <Carousel
                className="h-full"
                autoPlay
                infiniteLoop
                interval={2000}
                emulateTouch
                showStatus={false}
            >
                {[img1, img2, img3, img4, img5, img6].map((image, index) => (
                    <div key={index} className="h-[80vh]">
                        <img src={image} className="object-cover w-full h-full" alt={`slide-${index}`} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Banner;
