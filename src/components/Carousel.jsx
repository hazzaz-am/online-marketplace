// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { SliderContent } from "./SliderContent";

import bgImg1 from '../assets/images/carousel1.jpg'
import bgImg2 from '../assets/images/carousel2.jpg'
import bgImg3 from '../assets/images/carousel3.jpg'

export const Carousel = () => {
	return (
		<Swiper
			spaceBetween={30}
			centeredSlides={true}
			loop={true}
			autoplay={{
				delay: 2500,
				disableOnInteraction: false,
			}}
			pagination={{
				clickable: true,
			}}
			navigation={true}
			modules={[Autoplay, Pagination, Navigation]}
			className="mySwiper"
		>
			<SwiperSlide>
				<SliderContent bgImg={bgImg1} title={"get your web development projects done in minutes"}/>
			</SwiperSlide>
			<SwiperSlide>
				<SliderContent bgImg={bgImg2} title={"get your designs with a snap"}/>
			</SwiperSlide>
			<SwiperSlide>
				<SliderContent bgImg={bgImg3} title={"increase your sales with digital marketing"}/>
			</SwiperSlide>
		</Swiper>
	);
};
