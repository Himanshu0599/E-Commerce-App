import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import BannerCard from '../Card/BannerCard'
import { Banner1,Banner3,Banner4,Banner5,Banner6 } from '../../assets';
import { Link } from 'react-router-dom'

const Banner=()=> {
   return(
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="mb-5 w-full "
    >
      <SwiperSlide>
        <BannerCard
          image={Banner5}
          para="Tops / skirts"
          title1="Women Fashion"
          title2="Collection"
          url={<Link to="" style={{ color: 'black' }}>Shop Now</Link>}
        />
      </SwiperSlide>
      <SwiperSlide>
        <BannerCard
          image={Banner1}
          para="Sweaters / Tops"
          title1="Winter Fashion"
          title2="Collection"
          url={<Link to="/women/sweaters" style={{ color: 'black' }}>Shop Now</Link>}
        />
      </SwiperSlide>
      <SwiperSlide>
        <BannerCard
          image={Banner3}
          para="kids / dress"
          title1="Kids Fashion"
          title2="Collection"
          url={<Link to="/products/kids" style={{ color: 'black' }}>Shop Now</Link>}
        />
      </SwiperSlide>
      <SwiperSlide>
        <BannerCard
          image={Banner4}
          para="T-shits / Jackets"
          title1="Men Fashion"
          title2="Collection"
          url={<Link to="/products/men" style={{ color: 'black' }}>Shop Now</Link>}
        />
      </SwiperSlide>
      <SwiperSlide>
        <BannerCard
          image={Banner6}
          para="Joggers / Sports"
          title1="Sports Fashion"
          title2="Collection"
          url={<Link to="/women/joggers" style={{ color: 'black' }}>Shop Now</Link>}
        />
      </SwiperSlide>
    </Swiper>
   )
}

export default Banner