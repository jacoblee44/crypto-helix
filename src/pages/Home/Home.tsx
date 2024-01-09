import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { nanoid } from "nanoid";
import { useState } from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { icons } from "../../assets/icons";
import { Percent } from "../../components/Percent";
import useLocalStorage from "../../hooks/useLocalStorage";
import "tailwindcss/tailwind.css";
import Plyr from 'plyr';

export default function Home({ cryptos }: any) {
    const player = new Plyr('hgM6Z7YqnDk');
    let count = 0;
    let newArray = [];
    const sliceArr = cryptos.slice(0,10);

    return (
            <main className="flex flex-wrap relative min-h-screen-excluding-header flex-col">
                <div className="w-screen flex-auto">
                    <div>
                    <div className="h-14 w-full bg-[#182855] flex items-center justify-center gap-2"><span
                        className="text-sm md:text-lg" style={{color: 'white'}}>Onboard onto Injective instantly with fiat!</span><a
                        href="https://app.kado.money/ramp?product=BUY&amp;onPayCurrency=USD&amp;onRevCurrency=USDT&amp;offPayCurrency=USDC&amp;offRevCurrency=USD&amp;network=INJECTIVE"
                        rel="noopener noreferrer" target="_blank">
                        <div className="flex items-center justify-start gap-1"><span
                            className="text-sm md:text-lg text-blue-500 font-medium">Get started</span><svg
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                            className="cursor-pointer rotate-135 w-3 h-3 text-blue-500">
                            <path
                                d="M21 11L6.414 11 11.707 5.707 10.293 4.293 2.586 12 10.293 19.707 11.707 18.293 6.414 13 21 13z"
                                fill="currentColor"></path>
                            </svg></div>
                        </a></div>
                    <div className="bg-white">
                        <div className="container py-4 sm:py-10 xl:px-10 relative">
                        <div className="w-full mx-auto">
                            <div
                            className="block md:grid rounded-[20px] p-6 md:p-16 lg:px-6 lg:py-8 2xl:px-20 2xl:py-16 bg-gray-100 bg-cover grid-cols-12 gap-12 items-center bg-hero">
                            <div className="flex flex-col sm:block col-span-12 lg:col-span-6 3xl:col-span-6">
                                <div className="flex items-center justify-start mb-8">
                                      <svg width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-auto h-6 lg:h-[30px]" ><path fillRule="evenodd" clipRule="evenodd" d="M25.44 5.3C25.44 5.74183 25.7982 6.1 26.24 6.1C26.6818 6.1 27.04 5.74183 27.04 5.3V1.46C27.04 1.01818 26.6818 0.660004 26.24 0.660004C25.7982 0.660004 25.44 1.01818 25.44 1.46V5.3ZM18.4 9.46C18.4 9.90183 18.7582 10.26 19.2 10.26C19.6418 10.26 20 9.90183 20 9.46V6.58C20 6.13818 19.6418 5.78 19.2 5.78C18.7582 5.78 18.4 6.13818 18.4 6.58V9.46ZM9.44001 21.3C9.44001 21.7418 9.79818 22.1 10.24 22.1C10.6818 22.1 11.04 21.7418 11.04 21.3V17.46C11.04 17.0182 10.6818 16.66 10.24 16.66C9.79818 16.66 9.44001 17.0182 9.44001 17.46V21.3ZM2.56001 23.7C2.11818 23.7 1.76001 23.3418 1.76001 22.9V20.66C1.76001 20.2182 2.11818 19.86 2.56001 19.86C3.00184 19.86 3.36001 20.2182 3.36001 20.66L3.36001 22.9C3.36001 23.3418 3.00184 23.7 2.56001 23.7ZM6.72001 24.34C6.27818 24.34 5.92001 23.9818 5.92001 23.54V20.66C5.92001 20.2182 6.27818 19.86 6.72001 19.86C7.16184 19.86 7.52001 20.2182 7.52001 20.66V23.54C7.52001 23.9818 7.16184 24.34 6.72001 24.34ZM12.96 18.42C12.96 18.8618 13.3182 19.22 13.76 19.22C14.2018 19.22 14.56 18.8618 14.56 18.42V16.18C14.56 15.7382 14.2018 15.38 13.76 15.38C13.3182 15.38 12.96 15.7382 12.96 16.18V18.42ZM22.72 7.7C22.2782 7.7 21.92 7.34183 21.92 6.9V4.02C21.92 3.57818 22.2782 3.22 22.72 3.22C23.1618 3.22 23.52 3.57818 23.52 4.02V6.9C23.52 7.34183 23.1618 7.7 22.72 7.7ZM28.96 3.38C28.96 3.82183 29.3182 4.18 29.76 4.18C30.2018 4.18 30.56 3.82183 30.56 3.38V1.46C30.56 1.01818 30.2018 0.660004 29.76 0.660004C29.3182 0.660004 28.96 1.01818 28.96 1.46V3.38Z" fill="url(#paint0_linear_719_21-0.07857932451062588)"></path><path fillRule="evenodd" clipRule="evenodd" d="M0.00348796 3.18205C0.0613084 4.06381 0.82299 4.73175 1.70475 4.67393C4.46863 4.49269 11.2161 5.89989 14.7113 13.3565L14.7404 13.4184L14.7746 13.4777C16.3387 16.1852 18.1011 18.6333 20.5513 20.4612C23.0296 22.31 26.0962 23.4401 30.1318 23.7137C31.0135 23.7735 31.7766 23.1073 31.8364 22.2256C31.8962 21.344 31.2299 20.5808 30.3483 20.5211C26.8319 20.2827 24.3785 19.3239 22.4648 17.8963C20.5376 16.4586 19.044 14.4621 17.5788 11.9346C13.3851 3.06209 5.22925 1.23594 1.49537 1.48079C0.613604 1.53861 -0.0543326 2.30029 0.00348796 3.18205Z" fill="#5BB1E9"></path><defs><linearGradient id="paint0_linear_719_21-0.07857932451062588" x1="-1.27917" y1="-3.66" x2="28.9737" y2="8.82444" gradientUnits="userSpaceOnUse"><stop offset="0.015625" stopColor="#6EE5B3"></stop><stop offset="0.430034" stopColor="#68D8E2"></stop><stop offset="1" stopColor="#4475F6"></stop></linearGradient></defs></svg>
                                    <svg viewBox="0 0 254 56" fill="none" xmlns="http://www.w3.org/2000/svg"
                                    className="block ml-2 h-6 text-gray-900">
                                    <path d="M0 56H6.32V30.8H38.64V56H44.96V0H38.64V24.88H6.32V0H0V56Z"
                                    fill="currentColor"></path>
                                    <path
                                    d="M65.7812 56H106.661V50.24H72.1012V30.64H102.661V24.88H72.1012V5.76H106.261V0H65.7812V56Z"
                                    fill="currentColor"></path>
                                    <path d="M124.375 56H162.215V50.16H130.695V0H124.375V56Z" fill="currentColor"></path>
                                    <path d="M179.466 56H185.786V0H179.466V56Z" fill="currentColor"></path>
                                    <path
                                    d="M245.428 0L228.307 23.04L211.188 0H203.747L224.387 27.44L202.947 56H210.228L228.148 31.84L246.068 56H253.588L232.148 27.44L252.787 0H245.428Z"
                                    fill="currentColor"></path>
                                </svg></div>
                                <h1
                                className="text-gray-900 font-bold text-[36px] leading-[58px] sm:text-5xl sm:leading-[60px] 3xl:leading-[72px] 3xl:text-[60px] 4xl:leading-[77px] 4xl:text-[64px] mb-8">
                                The Premier Decentralized Crypto Exchange</h1>
                                <p className="text-gray-900 mt-4 text-base 3xl:text-xl mb-8">Trade unlimited cross-chain
                                crypto assets and perpetual markets with market leading rebates*</p>
                                <div className="grid grid-cols-12 gap-4 text-base 3xl:text-xl">
                                <div className="col-span-6 flex items-center justify-start"><svg width="16" height="16"
                                    viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                                    className="cursor-pointer text-gray-900 w-6 h-6 mr-3">
                                    <path
                                        d="M11.2514 0.0678058C11.4524 0.184724 11.5463 0.424795 11.4779 0.647058L9.67699 6.50002H13C13.1995 6.50002 13.3799 6.61858 13.459 6.8017C13.5381 6.98482 13.5008 7.19744 13.3641 7.3427L5.36411 15.8427C5.20473 16.012 4.94964 16.0491 4.74863 15.9322C4.54761 15.8153 4.45373 15.5752 4.52212 15.353L6.32303 9.50002H3.00001C2.80053 9.50002 2.62014 9.38145 2.54102 9.19833C2.4619 9.01522 2.4992 8.80259 2.63591 8.65733L10.6359 0.157333C10.7953 -0.0120074 11.0504 -0.049112 11.2514 0.0678058Z"
                                        fill="currentColor"></path>
                                    </svg><span className="text-gray-900 text-lg">Fast</span></div>
                                <div className="col-span-6 flex items-center justify-start"><svg width="16" height="16"
                                    viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                                    className="cursor-pointer text-gray-900 w-6 h-6 mr-3">
                                    <path
                                        d="M2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3C2.55228 3 3 2.55228 3 2C3 1.44772 2.55228 1 2 1ZM0 2C0 0.89543 0.89543 0 2 0C2.93192 0 3.71497 0.637386 3.93699 1.5H12.063C12.285 0.637386 13.0681 0 14 0C15.1046 0 16 0.89543 16 2C16 2.93192 15.3626 3.71497 14.5 3.93699V12.063C15.3626 12.285 16 13.0681 16 14C16 15.1046 15.1046 16 14 16C13.0681 16 12.285 15.3626 12.063 14.5H3.93699C3.71497 15.3626 2.93192 16 2 16C0.89543 16 0 15.1046 0 14C0 13.0681 0.637386 12.285 1.5 12.063V3.93699C0.637386 3.71497 0 2.93192 0 2ZM2.5 3.93699V12.063C3.2028 12.2439 3.7561 12.7972 3.93699 13.5H12.063C12.2439 12.7972 12.7972 12.2439 13.5 12.063V3.93699C12.7972 3.7561 12.2439 3.2028 12.063 2.5H3.93699C3.7561 3.2028 3.2028 3.7561 2.5 3.93699ZM14 1C13.4477 1 13 1.44772 13 2C13 2.55228 13.4477 3 14 3C14.5523 3 15 2.55228 15 2C15 1.44772 14.5523 1 14 1ZM2 13C1.44772 13 1 13.4477 1 14C1 14.5523 1.44772 15 2 15C2.55228 15 3 14.5523 3 14C3 13.4477 2.55228 13 2 13ZM14 13C13.4477 13 13 13.4477 13 14C13 14.5523 13.4477 15 14 15C14.5523 15 15 14.5523 15 14C15 13.4477 14.5523 13 14 13Z"
                                        fill="currentColor"></path>
                                    </svg><span className="text-gray-900 text-lg">Interoperable</span></div>
                                <div className="col-span-6 flex items-center justify-start"><svg width="20" height="23"
                                    viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg"
                                    className="cursor-pointer text-gray-900 w-6 h-6 mr-3">
                                    <path
                                        d="M19.1152 5.62727L19.1273 5.61515L15.2606 1.74849C14.9091 1.39697 14.3273 1.39697 13.9758 1.74849C13.6242 2.1 13.6242 2.68182 13.9758 3.03333L15.8909 4.94848C14.6182 5.43333 13.7576 6.7303 13.9758 8.23333C14.1697 9.56667 15.3091 10.6455 16.6424 10.7909C17.2121 10.8515 17.7091 10.7545 18.1818 10.5485V19.2879C18.1818 19.9545 17.6364 20.5 16.9697 20.5C16.303 20.5 15.7576 19.9545 15.7576 19.2879V13.8333C15.7576 12.5 14.6667 11.4091 13.3333 11.4091H12.1212V2.92424C12.1212 1.59091 11.0303 0.5 9.69697 0.5H2.42424C1.09091 0.5 0 1.59091 0 2.92424V21.1061C0 21.7727 0.545455 22.3182 1.21212 22.3182H10.9091C11.5758 22.3182 12.1212 21.7727 12.1212 21.1061V13.2273H13.9394V19.1182C13.9394 20.7061 15.0788 22.1485 16.6545 22.3061C18.4727 22.4879 20 21.0697 20 19.2879V7.77273C20 6.93636 19.6606 6.17273 19.1152 5.62727ZM9.69697 8.98485H2.42424V4.13636C2.42424 3.4697 2.9697 2.92424 3.63636 2.92424H8.48485C9.15152 2.92424 9.69697 3.4697 9.69697 4.13636V8.98485ZM16.9697 8.98485C16.303 8.98485 15.7576 8.43939 15.7576 7.77273C15.7576 7.10606 16.303 6.56061 16.9697 6.56061C17.6364 6.56061 18.1818 7.10606 18.1818 7.77273C18.1818 8.43939 17.6364 8.98485 16.9697 8.98485Z"
                                        fill="currentColor"></path>
                                    </svg><span className="text-gray-900 text-lg">Gas Free</span></div>
                                <div className="col-span-6 flex items-center justify-start"><svg width="16" height="16"
                                    viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                                    className="cursor-pointer text-gray-900 w-6 h-6 mr-3">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M8 0C7.31051 0 6.15738 0.265343 5.07166 0.559653C3.96156 0.860567 2.84316 1.21461 2.18528 1.42928C1.63625 1.60844 1.22098 2.09359 1.14123 2.69209C0.544608 7.16942 1.92804 10.4869 3.606 12.682C4.44183 13.7754 5.35024 14.5904 6.12309 15.1354C6.50924 15.4077 6.86713 15.6165 7.17105 15.7596C7.45186 15.8918 7.7523 16 8 16C8.24771 16 8.54814 15.8918 8.82896 15.7596C9.13287 15.6165 9.49076 15.4077 9.87691 15.1354C10.6498 14.5904 11.5582 13.7754 12.394 12.682C14.072 10.4869 15.4554 7.16942 14.8588 2.6921C14.779 2.09359 14.3637 1.60844 13.8147 1.42928C13.1568 1.21461 12.0384 0.860567 10.9283 0.559652C9.84262 0.265343 8.68949 0 8 0ZM8 5C8.82843 5 9.5 5.67157 9.5 6.5C9.5 7.15311 9.0826 7.70873 8.5 7.91465L8.88494 9.90506C8.94461 10.2136 8.70826 10.5 8.39404 10.5H7.60596C7.29174 10.5 7.05539 10.2136 7.11506 9.90506L7.5 7.91465C6.9174 7.70873 6.5 7.15311 6.5 6.5C6.5 5.67157 7.17157 5 8 5Z"
                                        fill="currentColor"></path>
                                    </svg><span className="text-gray-900 text-lg">Secure</span></div>
                                </div><button role="button"
                                className="text-base leading-5 px-6 h-10 border-transparent hover:bg-opacity-80 hover:text-opacity-80 hover:border-opacity-80 bg-gray-750 text-white mt-8 font-semibold font-semibold rounded-md border box-border focus:outline-none">Start
                                trading now</button>
                            </div>
                            <div className="col-span-6 3xl:col-span-6 hidden lg:block lg:mt-6">
                                <div className="max-w-md max-w-lg ml-auto 3xl:mr-10">
                                <div className="bg-white rounded-lg self-center shadow-light">
                                    <div className="overflow-auto p-6">
                                    <div className="flex flex-col" aria-disabled>
                                        <div>
                                        <div className="bg-gray-200 rounded-xl py-4">
                                            <div
                                            className="text-sm font-semibold text-gray-500 flex items-center justify-between px-4">
                                            <span>You pay</span></div>
                                            <div
                                            className="v-popper v-popper--theme-dropdown w-full mb-2 cursor-pointer w-full mb-2"
                                            id="temporaryDropdown">
                                            <div className="px-4">
                                                <div className="flex justify-between relative">
                                                <div>
                                                    <div
                                                    className="w-full input-wrap fade-down-enter-from fade-down-leave-from fade-down-leave-active">
                                                    <div>
                                                        <div className="flex items-center justify-between"></div>
                                                        <div className="shadow-none overflow-hidden">
                                                        <div className="flex items-center justify-between no-shadow">
                                                            <input
                                                            className="input-base h-8 input-bg-transparent p-0 text-xl font-bold text-gray-600 input h-8 input-bg-transparent p-0 text-xl font-bold text-gray-600 input"
                                                            type="number" lang="en" placeholder="0.001" /></div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-2"><img
                                                        className="rounded-full w-6 h-6 min-w-6"
                                                        src="./Helix _ The Premier Decentralized Spot and Derivatives Exchange_files/injective-v3.png"
                                                        />
                                                        <div
                                                        className="flex flex-col max-w-2xs truncate text-gray-600 font-semibold text-base">
                                                        <span>INJ</span></div>
                                                    </div>
                                                    </div><svg width="12" height="6" viewBox="0 0 12 6"
                                                    fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                                    className="cursor-pointer h-3 w-3 min-w-3 text-gray-600">
                                                    <path fillRule="evenodd" clipRule="evenodd"
                                                        d="M11.0325 0L6.00675 4.0875L0.957 0.01425L0 1.1475L6.0015 6L12 1.143L11.0325 0Z">
                                                    </path>
                                                    </svg>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="my-4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                            className="cursor-pointer mx-auto min-w-6 w-6 h-6 -rotate-90 text-black">
                                            <path
                                            d="M21 11L6.414 11 11.707 5.707 10.293 4.293 2.586 12 10.293 19.707 11.707 18.293 6.414 13 21 13z"
                                            fill="currentColor"></path>
                                        </svg></div>
                                        <div>
                                        <div className="bg-gray-200 rounded-xl py-4">
                                            <div
                                            className="text-sm font-semibold text-gray-500 flex items-center justify-between px-4">
                                            <span>You receive</span></div>
                                            <div
                                            className="v-popper v-popper--theme-dropdown w-full mb-2 cursor-pointer w-full mb-2"
                                            id="temporaryDropdown">
                                            <div className="px-4">
                                                <div className="flex justify-between relative">
                                                <div>
                                                    <div className="w-full input-wrap w-full">
                                                    <div>
                                                        <div className="flex items-center justify-between"></div>
                                                        <div className="shadow-none overflow-hidden">
                                                        <div className="flex items-center justify-between no-shadow">
                                                            <input
                                                            className="input-base h-8 input-bg-transparent p-0 text-xl font-bold text-gray-600 input h-8 input-bg-transparent p-0 text-xl font-bold text-gray-600 input"
                                                            type="number" lang="en" placeholder="0.1" /></div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <div
                                                    className="flex items-center justify-between fade-down-enter-from fade-down-leave-from fade-down-leave-active">
                                                    <div className="flex items-center gap-2"><img
                                                        className="rounded-full w-6 h-6 min-w-6"
                                                        src="./Helix _ The Premier Decentralized Spot and Derivatives Exchange_files/ethereum.png"
                                                        />
                                                        <div
                                                        className="flex flex-col max-w-2xs truncate text-gray-600 font-semibold text-base">
                                                        <span>wETH</span></div>
                                                    </div>
                                                    </div><svg width="12" height="6" viewBox="0 0 12 6"
                                                    fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                                    className="cursor-pointer h-3 w-3 min-w-3 text-gray-600">
                                                    <path fillRule="evenodd" clipRule="evenodd"
                                                        d="M11.0325 0L6.00675 4.0875L0.957 0.01425L0 1.1475L6.0015 6L12 1.143L11.0325 0Z">
                                                    </path>
                                                    </svg>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div><button type="button" role="button"
                                        className="text-base leading-5 px-6 h-10 border-transparent hover:bg-opacity-80 hover:text-opacity-80 hover:border-opacity-80 w-full bg-blue-500 font-semibold mt-4 text-white font-semibold rounded-md border box-border focus:outline-none">Get
                                        <span className="uppercase">ORAI</span></button>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-span-3 flex gap-2 w-max items-center mt-6 md:mt-0" style={{position: 'relative'}}><span
                                className="text-gray-775 text-sm md:text-base">Built on</span><img
                                className="rounded-full w-6 h-6 min-w-6" style={{position: 'absolute', left: '62px'}}
                                src="./Helix _ The Premier Decentralized Spot and Derivatives Exchange_files/injective-v3.png"
                                /><svg width="116" height="24"
                                viewBox="0 0 116 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                className="w-20 md:w-28">
                                <g clipPath="url(#clip0_2059_11852)">
                                    <path
                                    d="M32.2078 18.0923V8.21286C32.2078 7.19805 33.0306 6.37543 34.0454 6.37543H34.1801V18.0923H32.2078Z"
                                    fill="black"></path>
                                    <path
                                    d="M37.0391 18.0923V6.37543H39.1142L43.8649 14.8786V6.37543H43.9138C44.9286 6.37543 45.7514 7.19805 45.7514 8.21286V18.0923H43.6761L38.9256 9.5891V18.0923H37.0391Z"
                                    fill="black"></path>
                                    <path
                                    d="M51.9669 18.3769C50.7435 18.3769 49.7888 18.0031 49.1027 17.2555C48.4167 16.5077 48.0737 15.5146 48.0737 14.2759H50.046C50.046 15.0013 50.2062 15.5816 50.5262 16.0168C50.8579 16.4407 51.3381 16.6528 51.9669 16.6528C52.5958 16.6528 53.0759 16.4407 53.4075 16.0168C53.7506 15.5816 53.922 15.0068 53.922 14.2927V8.21286C53.922 7.19805 54.7448 6.37543 55.7596 6.37543H55.8943V14.2927C55.8943 15.5312 55.5456 16.5246 54.8482 17.2721C54.1622 18.0086 53.2017 18.3769 51.9669 18.3769Z"
                                    fill="black"></path>
                                    <path
                                    d="M58.573 6.37543H65.5018C65.5018 7.32755 64.7299 8.09949 63.7778 8.09949H60.5453V11.4136H65.5018V13.1377H60.5453V16.3682H65.5018V18.0923H58.573V11.4136V8.09949V6.37543Z"
                                    fill="black"></path>
                                    <path
                                    d="M108.635 6.37543H115.564C115.564 7.32755 114.792 8.09949 113.84 8.09949H110.608V11.4136H115.564V13.1377H110.608V16.3682H115.564V18.0923H108.635V11.4136V8.09949V6.37543Z"
                                    fill="black"></path>
                                    <path
                                    d="M73.5654 18.3765C71.8544 18.3765 70.5 17.8075 69.5018 16.6691C68.5039 15.5309 68.0049 14.0524 68.0049 12.2334C68.0049 10.4146 68.5039 8.93607 69.5018 7.79768C70.5 6.65947 71.8544 6.09045 73.5654 6.09045C75.0012 6.09045 76.1826 6.49218 77.1095 7.29565C78.0362 8.08783 78.581 9.12018 78.744 10.3922H78.303C77.4372 10.3922 76.7468 9.7381 76.2335 9.04102C76.0855 8.84007 75.9141 8.65989 75.7193 8.50084C75.1694 8.04323 74.4564 7.81451 73.5806 7.81451C72.4094 7.81451 71.4929 8.21624 70.831 9.01971C70.1792 9.81189 69.8532 10.8833 69.8532 12.2334C69.8532 13.5836 70.1792 14.6606 70.831 15.4641C71.4929 16.2562 72.4094 16.6524 73.5806 16.6524C74.4564 16.6524 75.1694 16.4237 75.7193 15.9661C75.9141 15.807 76.0855 15.6269 76.2335 15.4259C76.7468 14.7288 77.4372 14.0748 78.303 14.0748H78.744C78.581 15.3468 78.0362 16.3847 77.1095 17.1881C76.1826 17.9803 75.0012 18.3765 73.5654 18.3765Z"
                                    fill="black"></path>
                                    <path
                                    d="M83.8364 18.0923V8.18313H80.355C80.355 7.1848 81.1644 6.37543 82.1627 6.37543H89.3075V8.18313H85.8087V18.0923H83.8364Z"
                                    fill="black"></path>
                                    <path
                                    d="M91.8105 18.0923V8.21286C91.8105 7.19805 92.6332 6.37543 93.6482 6.37543H93.7828V18.0923H91.8105Z"
                                    fill="black"></path>
                                    <path
                                    d="M100.264 18.0923L96.2852 6.37543H97.0874C97.8865 6.37543 98.5942 6.89197 98.8376 7.65316L101.207 15.0627L103.577 7.65316C103.82 6.89197 104.528 6.37543 105.327 6.37543H106.129L102.151 18.0923H100.264Z"
                                    fill="black"></path>
                                    <path
                                    d="M2.9056 4.20823C3.05428 4.02125 3.21184 3.84143 3.36941 3.66161C3.37649 3.65265 3.39246 3.65086 3.39955 3.6419C3.4137 3.62417 3.43677 3.61343 3.45094 3.5957L3.46509 3.57779C3.57493 3.47623 3.69183 3.36573 3.82658 3.26955C4.30335 2.90758 4.79816 2.63265 5.31991 2.45158C6.99336 1.86411 8.85624 2.22626 10.317 3.60537C12.3568 5.51731 12.1742 8.59737 10.5459 10.6445C8.48818 13.6965 4.95228 17.9545 9.84812 21.7687C10.7284 22.4545 11.3814 23.0199 14.1543 23.8212C12.3407 24.1555 10.6593 24.0514 8.78764 23.5734C7.4637 22.8261 5.38224 21.2262 4.67408 19.0651C3.60375 15.7881 6.55842 10.8892 7.98633 9.00232C9.94699 6.39116 6.7746 3.56435 4.43909 6.72017C3.21825 8.36489 1.08246 13.0187 1.82467 16.4708C2.25864 18.4284 2.83709 19.8553 5.13062 21.8155C4.7053 21.5645 4.2923 21.2798 3.89164 20.9613C-1.4372 15.9976 -0.818947 8.32244 2.9056 4.20823Z"
                                    fill="url(#paint0_linear_2059_11852)"></path>
                                    <path
                                    d="M21.0457 19.8772C20.8971 20.0642 20.7394 20.244 20.5818 20.4238C20.5748 20.4328 20.5587 20.4346 20.5517 20.4434C20.5376 20.4613 20.5145 20.472 20.5003 20.4897L20.4862 20.5077C20.3764 20.6092 20.2594 20.7195 20.1248 20.8159C19.6478 21.1779 19.1531 21.4528 18.6314 21.6337C16.9578 22.2213 15.0951 21.8592 13.6342 20.4801C11.5945 18.5681 11.7772 15.4881 13.4055 13.4407C15.463 10.389 18.9989 6.13094 14.1031 2.31673C13.2228 1.63094 12.5698 1.06533 9.79688 0.264105C11.6105 -0.069997 13.2919 0.0339187 15.1636 0.511966C16.4875 1.2593 18.5691 2.85924 19.2772 5.02031C20.3476 8.29739 17.3929 13.1963 15.9649 15.0829C14.0044 17.6943 17.1767 20.5209 19.5122 17.3653C20.733 15.7206 22.8688 11.0667 22.1266 7.61464C21.6926 5.65703 21.1141 4.2301 18.8207 2.26999C19.2459 2.52091 19.6589 2.80551 20.0596 3.12413C25.3885 8.08784 24.7702 15.763 21.0457 19.8772Z"
                                    fill="url(#paint1_linear_2059_11852)"></path>
                                </g>
                                </svg></div>
                            </div>
                        </div>
                        </div>
                        <div className="h-full w-full flex flex-wrap pb-4">
                        <div className="container">
                            <div className="w-full mx-auto xl:w-4/5">
                            <div>
                                <div className="text-gray-900">
                                <div className="text-2xl sm:text-3xl font-semibold pb-4 sm:pb-8">Latest News</div>
                                </div>
                            </div>
                            <div className="flex flex-col mt-8 sm:mt-16">
                                <div className="flex items-center justify-center sm:my-2 -mx-2 font-semibold gap-4 sm:gap-6">
                                <div>
                                    <div className="cursor-pointer"><span
                                        className="text-xl text-gray-775 hover:opacity-100 opacity-100"><span>Trending</span></span>
                                    </div>
                                </div>
                                <div>
                                    <div className="cursor-pointer"><span
                                        className="text-xl text-gray-775 hover:opacity-100 opacity-30"><span>Newly
                                        added</span></span></div>
                                </div>
                                </div>
                                <div className="rounded-xl bg-transparent p-4 lg:p-6 relative flex-1">
                                    <div className="v-panel-content">
                                    <table className="crypto-table">
                                        <thead>
                                            <tr className="table-head">
                                                <th className="left fixed-column"><span className="col-span-4 uppercase text-gray-700 whitespace-nowrap text-xs pl-4">Market</span></th>
                                                <th className="center"><span className="uppercase text-gray-700 whitespace-nowrap text-xs text-right col-span-2">Last price</span></th>
                                                <th className="right"><span className="uppercase text-gray-700 whitespace-nowrap text-xs col-span-2 text-right">Change (24H)</span></th>
                                                <th className="center"><span className="col-span-2 uppercase text-gray-700 whitespace-nowrap text-xs text-center">7 days price</span></th>
                                                <th className="center"><div className="col-span-3"></div></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {sliceArr.map((crypto: any, index: number) => 
                                                    (
                                                <tr key={nanoid()} className="crypto-row">
    
                                                    <td>
                                                        <div className="coin-data">
                                                        <img className="crypto-img" src={crypto.image} />
                                                        <p className="crypto-name">{crypto.name}</p>
                                                        <p className="crypto-symbol">{crypto.symbol}</p>
                                                        </div>
                                                    </td>
    
                                                    <td>
                                                    <p className="right">
                                                        $
                                                        {crypto.current_price.toLocaleString(undefined, {
                                                        minimumFractionDigits: 2,
                                                        })}
                                                    </p>
                                                    </td>
    
                                                    <td>
                                                    <Percent
                                                        data={crypto.price_change_percentage_24h_in_currency}
                                                        className="right"
                                                    >
                                                        {Number(
                                                        crypto.price_change_percentage_24h_in_currency
                                                        ).toFixed(1)}
                                                        %
                                                    </Percent>
                                                    </td>
    
                                                    <td className="center">
                                                        <Sparklines data={crypto.sparkline_in_7d.price} margin={0}>
                                                            <SparklinesLine
                                                            color={
                                                                crypto.sparkline_in_7d.price[0] >
                                                                crypto.sparkline_in_7d.price[
                                                                crypto.sparkline_in_7d.price.length - 1
                                                                ]
                                                                ? "var(--clr-loss)"
                                                                : "var(--clr-gain)"
                                                            }
                                                            style={{ fill: "none", strokeWidth: 3 }}
                                                            />
                                                        </Sparklines>
                                                    </td>
                                                </tr>
                                                )
                                                
                                            )}
                                        </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="text-gray-775">
                                <div
                                className="font-semibold text-2xl sm:text-3xl text-gray-775 text-left sm:text-center mt-10 sm:mt-[120px] mb-4 sm:mb-[40px]">
                                Why Trade on Helix</div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12">
                                <div className="sm:mt-[14px] lg:mt-5">
                                    <div className="mb-4"><img className="w-full"
                                        src="./Helix _ The Premier Decentralized Spot and Derivatives Exchange_files/why-trade-on-helix-01.svg"
                                        alt=""/></div>
                                    <div className="font-semibold text-xl mb-4">Decentralized exchange with advanced order
                                    types</div>
                                    <div className="font-medium text-base mb-4 sm:mb-0">Enjoy trading spot and perpetual
                                    markets on the premier front-running resistant decentralized orderbook exchange
                                    using stop-loss and take-profit orders.</div>
                                </div>
                                <div className="sm:mt-[9px] lg:mt-3">
                                    <div className="mb-4"><img className="w-full"
                                        src="./Helix _ The Premier Decentralized Spot and Derivatives Exchange_files/why-trade-on-helix-02.svg"
                                        alt=""/></div>
                                    <div className="font-semibold text-xl mb-4">Minimal fees for maximum benefits and rewards
                                    </div>
                                    <div className="font-medium text-base mb-4">Zero gas fees, low taker fees and highly
                                    competitive maker fee rebates for the best trading experience amongst all exchanges.
                                    </div>
                                </div>
                                <div>
                                    <div className="mb-4"><img className="w-full"
                                        src="./Helix _ The Premier Decentralized Spot and Derivatives Exchange_files/why-trade-on-helix-03.svg"
                                        alt=""/></div>
                                    <div className="font-semibold text-xl mb-4">Cross-chain assets and novel markets</div>
                                    <div className="font-medium text-base">Seamlessly transfer assets from Ethereum and Cosmos
                                    networks to trade popular markets as well as unique markets not available elsewhere.
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div data-v-4a9e0270="" className="text-gray-775 sm:mb-[144px] mb-10">
                                <div data-v-4a9e0270=""
                                className="font-semibold text-2xl sm-text-3xl text-gray-775 text-left sm:text-center mt-16 sm:mt-[120px] mb-6">
                                Get Started in 3 Simple Steps</div>
                                <div data-v-4a9e0270=""
                                className="justify-between items-stretch gap-4 flex flex-col-reverse lg:flex-row">
                                <div data-v-4a9e0270="" className="video">
                                    <div className="plyr plyr--full-ui plyr--video plyr--youtube plyr--fullscreen-enabled">
                                    <div className="plyr__video-wrapper plyr__video-embed">
                                        <div data-v-4a9e0270="" data-plyr-embed-id="hgM6Z7YqnDk"
                                        className="video rounded-lg h-full"></div>
                                        <div className="plyr__poster"></div>
                                    </div>
                                    </div>
                                </div>
                                <div data-v-4a9e0270="" className="lg:col-span-6 flex flex-col gap-6 font-medium w-full">
                                    <div data-v-4a9e0270="" className="flex-grow">
                                    <div
                                        className="flex items-center gap-4 cursor-pointer shadow-helixLight h-[80px] opacity-50">
                                        <div
                                        className="w-8 h-8 ml-6 rounded-full flex items-center justify-center bg-gray-600 opacity-50">
                                        <span className="font-semibold text-white">1</span></div><span
                                        data-v-4a9e0270="">Transfer assets to begin</span>
                                    </div>
                                    </div>
                                    <div data-v-4a9e0270="" className="lg:ml-6 flex-grow lg:ml-6">
                                    <div
                                        className="flex items-center gap-4 cursor-pointer shadow-helixLight h-[80px] opacity-50">
                                        <div
                                        className="w-8 h-8 ml-6 rounded-full flex items-center justify-center bg-gray-600 opacity-50">
                                        <span className="font-semibold text-white">2</span></div><span
                                        data-v-4a9e0270="">Trade spot markets</span>
                                    </div>
                                    </div>
                                    <div data-v-4a9e0270="" className="lg:ml-12 flex-grow lg:ml-12">
                                    <div className="flex items-center gap-4 cursor-pointer shadow-helixLight h-[80px]">
                                        <div
                                        className="w-8 h-8 ml-6 rounded-full flex items-center justify-center bg-blue-500">
                                        <span className="font-semibold text-white">3</span></div><span
                                        data-v-4a9e0270="">Trade perpetuals with advanced orders</span>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div>
                        <div className="bg-cover py-14 bg-left-top h-[189px] md:h-[790px] flex items-center"
                            style={{backgroundImage: 'url(img/cta-area.svg)'}}>
                            <div
                            className="w-full mx-auto max-w-xs sm:max-w-md md:max-w-full xl:w-4/5 flex flex-col md:block items-center">
                            <h1 className="text-2xl md:text-4xl 4xl:text-5xl font-bold tracking-wide text-center">Start
                                Trading on Helix Now</h1>
                            <div className="text-center"><button type="button" role="button"
                                className="text-base leading-5 px-6 h-10 border-transparent hover:bg-opacity-80 hover:text-opacity-80 hover:border-opacity-80 mt-2 md:mt-10 bg-blue-500 text-blue-900 hover:bg-blue-600 hover:bg-opacity-100 font-semibold rounded-md border box-border focus:outline-none">Trade
                                Now</button></div>
                            </div>
                        </div>
                        <div className="py-20 bg-gray-900 text-center">
                            <h1 className="text-3xl font-semibold">Subscribe to Helix newsletter</h1>
                            <div className="max-w-[340px] xs:max-w-[360px] mt-6 mx-auto">
                            <div className="bg-gray-750 rounded-lg flex items-center">
                                <div className="w-full input-wrap w-full">
                                <div>
                                    <div className="flex items-center justify-between"></div>
                                    <div className="relative shadow-none input-wrapper">
                                    <div className="flex items-center justify-between no-shadow">
                                        <input
                                        className="input-base px-3 px-3" placeholder="Email address"
                                        transparent-bg=""/></div>
                                    </div>
                                </div>
                                </div><button type="button" role="button"
                                className="text-base leading-5 px-4 h-12 border-transparent hover:bg-opacity-80 hover:text-opacity-80 hover:border-opacity-80 bg-blue-500 text-blue-900 font-semibold rounded-md border box-border focus:outline-none"><span
                                    className="text-sm">Subscribe</span></button>
                            </div>
                            <div className="mt-6">
                                <p className="text-xs text-gray-450">By subscribing, you agree to the <a
                                    href="https://helixapp.com/terms" rel="noopener noreferrer" target="_blank"
                                    className="underline hover:text-opacity-80">Terms and Conditions</a> and have read the <a
                                    className="underline hover:text-blue-500" href="https://injectivelabs.org/privacy"
                                    target="_blank">Privacy Policy</a>.</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </main>
    );
};
