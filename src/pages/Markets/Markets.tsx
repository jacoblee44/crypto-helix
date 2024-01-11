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
            <main className="flex flex-wrap relative min-h-screen-excluding-header flex-col">
            
            <div className="w-screen flex-auto">
            <div className="h-full">
                <div className="container">
                <div className="w-full mx-auto xl:w-4/5 relative">
                    <div className="bg-cover bg-center">
                    <div className="mt-6">
                        <div className="flex justify-between items-center">
                        <h3 className="text-xl tracking-wider leading-6 font-bold hidden md:block">New Markets</h3>
                        </div>
                        
                        <div className="container-box ">
                                <div className="small-container sample-slider">
                                <div className="swiper-pagination pagi-position" style={{top: '180px'}}></div>
                                <div className="swiper-button-prev prev-position">
                                </div>
                                <div className="swiper-button-next next-position"></div>
                                <Swiper
                                // install Swiper modules
                                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                                spaceBetween={50}
                                slidesPerView={3}
                                slidesPerGroup={3}
                                navigation={{
                                    nextEl: ".swiper-button-next",
                                    prevEl: ".swiper-button-prev",
                                }}
                                pagination={{
                                    el: '.swiper-pagination',
                                    clickable: true,
                            }}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={(swiper) => console.log(swiper)}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                        slidesPerGroup: 1,
                                        },
                            
                                        640: {
                                        slidesPerView: 1,
                                        slidesPerGroup: 1,
                                        },
                                        768: {
                                        slidesPerView: 2,
                                        slidesPerGroup: 2,
                                        },
                                        991: {
                                        slidesPerView: 3,
                                        slidesPerGroup: 3,
                                        },
                                    }}
                                >
                                    <SwiperSlide>
                                    <a href="https://helixapp.com/spot/ninj-inj"
                                        className="rounded-lg shadow-card p-4 bg-gray-750 bg-opacity-30 block cursor-pointer flex-0-full col-span-4"
                                        data-cy="market-card-whats-new">
                                        <div className="flex justify-between mt-4">
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 mr-3"><img
                                                className="rounded-full w-8 h-8 min-w-8 min-w-full h-auto rounded-full"
                                                src="./Helix _ The Premier Decentralized Spot and Derivatives Exchange_files/ninj.png"
                                                /></div>
                                            <div className="flex flex-col">
                                            <p data-cy="market-card-ticker-text-content"
                                                className="uppercase tracking-widest text-sm font-bold leading-4">nINJ/INJ</p>
                                            <span className="text-xs text-gray-500 capitalize">Gryphon Staked Injective</span>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="flex items-center justify-start mt-4">
                                        <p className="text-xl tracking-wide font-mono font-semibold flex items-center mr-2 text-red-500"
                                            data-cy="market-card-last-traded-price-text-content">0.9999</p><span
                                            className="text-sm font-mono text-red-500"
                                            data-cy="market-card-change_24h-text-content">-0.01% </span>
                                        </div><span className="text-gray-500 w-full text-sm"
                                        data-cy="market-card-volume-usd-text-content">Vol <span
                                            className="font-mono">718.29</span> USD </span>
                                    </a>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <a href="https://helixapp.com/spot/ninj-inj"
                                        className="rounded-lg shadow-card p-4 bg-gray-750 bg-opacity-30 block cursor-pointer flex-0-full col-span-4"
                                        data-cy="market-card-whats-new">
                                        <div className="flex justify-between mt-4">
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 mr-3"><img
                                                className="rounded-full w-8 h-8 min-w-8 min-w-full h-auto rounded-full"
                                                src="./Helix _ The Premier Decentralized Spot and Derivatives Exchange_files/ninj.png"
                                                /></div>
                                            <div className="flex flex-col">
                                            <p data-cy="market-card-ticker-text-content"
                                                className="uppercase tracking-widest text-sm font-bold leading-4">nINJ/INJ</p>
                                            <span className="text-xs text-gray-500 capitalize">Gryphon Staked Injective</span>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="flex items-center justify-start mt-4">
                                        <p className="text-xl tracking-wide font-mono font-semibold flex items-center mr-2 text-red-500"
                                            data-cy="market-card-last-traded-price-text-content">0.9999</p><span
                                            className="text-sm font-mono text-red-500"
                                            data-cy="market-card-change_24h-text-content">-0.01% </span>
                                        </div><span className="text-gray-500 w-full text-sm"
                                        data-cy="market-card-volume-usd-text-content">Vol <span
                                            className="font-mono">718.29</span> USD </span>
                                    </a>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <a href="https://helixapp.com/spot/ninj-inj"
                                        className="rounded-lg shadow-card p-4 bg-gray-750 bg-opacity-30 block cursor-pointer flex-0-full col-span-4"
                                        data-cy="market-card-whats-new">
                                        <div className="flex justify-between mt-4">
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 mr-3"><img
                                                className="rounded-full w-8 h-8 min-w-8 min-w-full h-auto rounded-full"
                                                src="./Helix _ The Premier Decentralized Spot and Derivatives Exchange_files/ninj.png"
                                                /></div>
                                            <div className="flex flex-col">
                                            <p data-cy="market-card-ticker-text-content"
                                                className="uppercase tracking-widest text-sm font-bold leading-4">nINJ/INJ</p>
                                            <span className="text-xs text-gray-500 capitalize">Gryphon Staked Injective</span>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="flex items-center justify-start mt-4">
                                        <p className="text-xl tracking-wide font-mono font-semibold flex items-center mr-2 text-red-500"
                                            data-cy="market-card-last-traded-price-text-content">0.9999</p><span
                                            className="text-sm font-mono text-red-500"
                                            data-cy="market-card-change_24h-text-content">-0.01% </span>
                                        </div><span className="text-gray-500 w-full text-sm"
                                        data-cy="market-card-volume-usd-text-content">Vol <span
                                            className="font-mono">718.29</span> USD </span>
                                    </a>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className="box">slide</div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className="box">slide</div>
                                    </SwiperSlide>
                                </Swiper>
                                </div>
                            </div>
                    </div>
                    </div>
                </div>
                <div className="xl:max-w-6xl mx-auto py-6 md:py-12">
                    <div>
                    <h3 className="text-xl tracking-wider leading-6 font-bold md:hidden mb-6">Markets</h3>
                    <div>
                        <div className="flex items-center border-b border-b-gray-600">
                        <div
                            className="flex items-center gap-2 3md:gap-4 overflow-x-auto  xs:justify-start w-full xs:w-auto hide-scrollbar mb-[-2px]">
                            <div>
                            <div className="cursor-pointer">
                                <div
                                className="group px-4 h-[40px] cursor-pointer relative flex items-center justify-center text-gray-300">
                                <p className="text-sm capitalize select-none whitespace-nowrap"><span
                                    className="flex items-center"><svg width="16" height="16" viewBox="0 0 16 16"
                                        fill="none" xmlns="http://www.w3.org/2000/svg"
                                        className="cursor-pointer h-6 w-6 min-w-6 mr-1">
                                        <path
                                        d="M14.25 6.275L9.75625 5.8875L8 1.75L6.24375 5.89375L1.75 6.275L5.1625 9.23125L4.1375 13.625L8 11.2938L11.8625 13.625L10.8438 9.23125L14.25 6.275ZM8 10.125L5.65 11.5437L6.275 8.86875L4.2 7.06875L6.9375 6.83125L8 4.3125L9.06875 6.8375L11.8063 7.075L9.73125 8.875L10.3563 11.55L8 10.125Z"
                                        fill="currentColor"></path>
                                    </svg><span>Favorites</span></span></p>
                                <div className="group-hover:block absolute inset-0 pointer-events-none hidden">
                                    <div className="h-[2px] w-full bg-blue-500 absolute bottom-0"></div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div>
                            <div className="cursor-pointer">
                                <div
                                className="group px-4 h-[40px] cursor-pointer relative flex items-center justify-center text-blue-500">
                                <p className="text-sm capitalize select-none whitespace-nowrap"><span>All
                                    Markets</span></p>
                                <div className="group-hover:block absolute inset-0 pointer-events-none">
                                    <div className="h-[2px] w-full bg-blue-500 absolute bottom-0"></div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div>
                            <div className="cursor-pointer">
                                <div
                                className="group px-4 h-[40px] cursor-pointer relative flex items-center justify-center text-gray-300">
                                <p className="text-sm capitalize select-none whitespace-nowrap"><span>Spot</span></p>
                                <div className="group-hover:block absolute inset-0 pointer-events-none hidden">
                                    <div className="h-[2px] w-full bg-blue-500 absolute bottom-0"></div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div>
                            <div className="cursor-pointer">
                                <div
                                className="group px-4 h-[40px] cursor-pointer relative flex items-center justify-center text-gray-300">
                                <p className="text-sm capitalize select-none whitespace-nowrap"><span>Futures</span>
                                </p>
                                <div className="group-hover:block absolute inset-0 pointer-events-none hidden">
                                    <div className="h-[2px] w-full bg-blue-500 absolute bottom-0"></div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div
                            className="mt-4 sm:mt-2 md:mt-0 flex justify-start items-start sm:items-center flex-col sm:flex-row">
                            <div className="w-full input-wrap w-full">
                            <div>
                                <div className="flex items-center justify-between"></div>
                                <div className="relative shadow-none">
                                <div className="flex items-center justify-between no-shadow">
                                    <div><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                        viewBox="0 0 24 24" className="cursor-pointer w-5 h-5">
                                        <path
                                        d="M19.023,16.977c-0.513-0.488-1.004-0.997-1.367-1.384c-0.372-0.378-0.596-0.653-0.596-0.653l-2.8-1.337 C15.34,12.37,16,10.763,16,9c0-3.859-3.14-7-7-7S2,5.141,2,9s3.14,7,7,7c1.763,0,3.37-0.66,4.603-1.739l1.337,2.8 c0,0,0.275,0.224,0.653,0.596c0.387,0.363,0.896,0.854,1.384,1.367c0.494,0.506,0.988,1.012,1.358,1.392 c0.362,0.388,0.604,0.646,0.604,0.646l2.121-2.121c0,0-0.258-0.242-0.646-0.604C20.035,17.965,19.529,17.471,19.023,16.977z M9,14 c-2.757,0-5-2.243-5-5s2.243-5,5-5s5,2.243,5,5S11.757,14,9,14z">
                                        </path>
                                    </svg></div><input
                                    className="input-base sm:w-auto md:w-3xs px-3 input-bg-transparent px-2 placeholder-white sm:w-auto md:w-3xs px-3 input-bg-transparent px-2 placeholder-white"
                                    name="search" is-dense="" data-cy="markets-search-input"
                                    placeholder="Search Markets"/>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div
                        className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-0 justify-between mt-6 mb-2 px-3 sm:px-0">
                        <div className="flex items-center gap-2"><span
                            className="text-xs cursor-pointer select-none px-3 py-2 rounded font-medium bg-blue-500 bg-opacity-20 text-blue-500  hover:text-blue-600"
                            data-cy="market-category-market-category-type-all-button">All</span><span
                            className="text-xs cursor-pointer select-none px-3 py-2 rounded font-medium text-gray-300  hover:text-blue-500"
                            data-cy="market-category-market-category-type-cosmos-button">Cosmos</span><span
                            className="text-xs cursor-pointer select-none px-3 py-2 rounded font-medium text-gray-300  hover:text-blue-500"
                            data-cy="market-category-market-category-type-ethereum-button">Ethereum</span><span
                            className="text-xs cursor-pointer select-none px-3 py-2 rounded font-medium text-gray-300  hover:text-blue-500"
                            data-cy="market-category-market-category-type-experimental-button">Experimental</span>
                        </div>
                        <div className="flex items-center">
                            <div className="v-popper v-popper--theme-dropdown self-end cursor-pointer self-end">
                            <div className="flex items-center gap-2"><span
                                className="text-xs text-gray-300 uppercase">Quote</span><span
                                className="text-xs text-blue-500 uppercase">All</span><svg width="16" height="16"
                                viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                                className="cursor-pointer h-3 w-3 min-w-3 fill-current rotate-0">
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M1.64645 4.64645C1.84171 4.45118 2.15829 4.45118 2.35355 4.64645L8 10.2929L13.6464 4.64645C13.8417 4.45118 14.1583 4.45118 14.3536 4.64645C14.5488 4.84171 14.5488 5.15829 14.3536 5.35355L8.35355 11.3536C8.15829 11.5488 7.84171 11.5488 7.64645 11.3536L1.64645 5.35355C1.45118 5.15829 1.45118 4.84171 1.64645 4.64645Z"
                                    fill="currentColor"></path>
                                </svg></div>
                            </div><label className="relative ml-4" is-sm="">
                            <div className="flex gap-2 cursor-pointer">
                                <div className="grid place-items-center">
                                <div className="relative w-4 h-4">
                                    <div className="absolute inset-0 border border-white"></div>
                                </div>
                                </div>
                                <div className="flex items-center"><span className="text-xs select-none"
                                    data-cy="unknown-id">Show low Vol.</span></div>
                            </div><input type="checkbox" className="hidden"/>
                            </label>
                        </div>
                        </div>
                    </div>
                    
                    </div>
                </div>
                </div>
            </div>
            </div>
            </main>
            
            <Footer />
        </div>
    );
};
