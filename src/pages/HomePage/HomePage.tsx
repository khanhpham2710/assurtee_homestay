import HeaderMain from '../../components/Headers/HeaderMain';
import Slider from 'react-slick';
import images from '../../assets/images';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import Banner_Video from '../../components/HomePageComponents/Banner_Video';
import Banner_Card from '../../components/HomePageComponents/Banner_Card';
import Landing_Fee from '../../components/HomePageComponents/Landing_Fee';
import Landing_Footer from '../../components/HomePageComponents/Landing_Footer';
import Banner_Header from '../../components/HomePageComponents/Banner_Header';
import Carousel_Bottom from '../../components/HomePageComponents/Carousel_Bottom';
export default function HomePage() {
    const video_ref = useRef<HTMLDivElement>(null);

    return (
        <section className="fullWidth_item fullHeightView_item">
            <section>
                <Banner_Header video_ref={video_ref} />
            </section>

            {/* banner video */}
            <section ref={video_ref}>
                <Banner_Video />
            </section>

            {/* banner card */}
            <section>
                <Banner_Card />
            </section>

            {/* Landing Fee */}
            <section>
                <Landing_Fee />
            </section>

            {/* Bottom Carousel */}
            <section>
                <Carousel_Bottom />
            </section>

            {/* footer section */}
            <section>
                <Landing_Footer />
            </section>

            {/* Button Fixed */}
            <section className="button_container">
                <Link to="/personal-infor">
                    <button className="button_main titleMini">
                        보험료 계산하기
                    </button>
                </Link>
            </section>
        </section>
    );
}
