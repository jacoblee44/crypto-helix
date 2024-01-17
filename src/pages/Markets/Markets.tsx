import React, {useState} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import  "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { useSwiper } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

export default function Markets({ cryptos }: any) {
    const swiper = useSwiper();
    return (
        <div>
            <Header />
            
            <Footer />
        </div>
    );
};
