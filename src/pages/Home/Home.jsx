import { useEffect } from 'react'
import Banner from './Banner'
import SwiperSection from './SwiperSection'
import Menus from './Menus'
import Featured from './Featured'
import Testimonials from './Testimonials'

const Home = () => {
    useEffect(() => {
        document.title = "Bistro Restaurant"
    }, [])

    return (
        <>

            <Banner />
            <SwiperSection />
            <Menus />
            <Featured />
            <Testimonials />
        </>
    )
}

export default Home