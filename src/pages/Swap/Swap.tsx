import React, {useEffect, useState} from 'react';
import Header from "../../components/Header/Header";
import Tooltip from "react-tooltip";

export default function Swap({ cryptos }: any) {

    const [isSetting, setSetting] =  useState(true);
    
    const clickSetting = () => {
        setSetting(!isSetting);

        if(isSetting) {
            document.getElementsByClassName("setting-position")[0].classList.remove("hidden");
        }
        else {
            document.getElementsByClassName("setting-position")[0].classList.add("hidden");
        }
    }

    return (
        <div>
            <Header />
            <main className="flex flex-wrap h-[90vh]">
                <div className="w-screen max-h-screen-excluding-header flex-1">
                    <div className="h-full container">
                    <div className="w-full px-4 max-w-xl mx-auto h-full overflow-auto flex items-center justify-center">
                        <div className="bg-gray-850 rounded-lg mx-auto p-6 h-fit w-full">
                        <div className="mb-4 flex items-center justify-between">
                            <h3 className="font-bold text-lg">Swap</h3>
                            <div className="v-popper v-popper--theme-tooltip">
                            <div onClick={clickSetting}>
                                <div className="v-popper v-popper--shown v-popper--theme-dropdown cursor-pointer relative" data-tip data-for="setting">
                                <div aria-describedby="popper_5z6zqqm0_7aan0z" data-popper-shown="">
                                    <svg width="20"
                                    height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
                                    className={isSetting ? "cursor-pointer h-5 w-5 text-gray-500 hover:text-blue-500" : "cursor-pointer h-5 w-5 text-blue-500 hover:opacity-80" }>
                                    <path
                                        d="M11.7558 1.31298C11.2398 -0.437661 8.76017 -0.437661 8.24417 1.31298L8.11904 1.73754C7.78934 2.85613 6.51169 3.38534 5.4876 2.82752L5.09891 2.6158C3.49615 1.74277 1.74277 3.49616 2.6158 5.09891L2.82752 5.4876C3.38534 6.51169 2.85612 7.78934 1.73754 8.11904L1.31298 8.24417C-0.437661 8.76017 -0.437661 11.2398 1.31298 11.7558L1.73754 11.881C2.85613 12.2107 3.38534 13.4883 2.82752 14.5124L2.6158 14.9011C1.74277 16.5038 3.49615 18.2572 5.09891 17.3842L5.4876 17.1725C6.51169 16.6147 7.78934 17.1439 8.11904 18.2625L8.24417 18.687C8.76017 20.4377 11.2398 20.4377 11.7558 18.687L11.881 18.2625C12.2107 17.1439 13.4883 16.6147 14.5124 17.1725L14.9011 17.3842C16.5038 18.2572 18.2572 16.5038 17.3842 14.9011L17.1725 14.5124C16.6147 13.4883 17.1439 12.2107 18.2625 11.881L18.687 11.7558C20.4377 11.2398 20.4377 8.76017 18.687 8.24417L18.2625 8.11904C17.1439 7.78934 16.6147 6.51169 17.1725 5.4876L17.3842 5.09891C18.2572 3.49615 16.5038 1.74277 14.9011 2.6158L14.5124 2.82752C13.4883 3.38534 12.2107 2.85612 11.881 1.73754L11.7558 1.31298ZM10 13.661C7.97808 13.661 6.33898 12.0219 6.33898 10C6.33898 7.97808 7.97808 6.33898 10 6.33898C12.0219 6.33898 13.661 7.97808 13.661 10C13.661 12.0219 12.0219 13.661 10 13.661Z"
                                        fill="currentColor"></path>
                                    </svg></div>
                                </div>
                            </div>
                                Your transaction will be automatically cancelled if the price changes unfavorably by more than this percentage.
                            
                            <div className="absolute setting-position hidden">
                                <div className="p-4 bg-gray-800 text-white setting">
                                    <h3 className="text-xs font-bold uppercase tracking-widest">Advanced Settings</h3>
                                    <div className="my-4 flex items-center gap-2"><span className="text-xs">Slippage Tolerance</span>
                                    <div className="v-popper v-popper--theme-tooltip">
                                        <div><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                                            className="cursor-pointer text-gray-500 w-3 h-3 min-w-3">
                                            <path
                                            d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM8.9307 6.58789L7.92875 11.293C7.85844 11.6328 7.95805 11.8262 8.23344 11.8262C8.4268 11.8262 8.71977 11.7559 8.91898 11.5801L8.83109 11.9961C8.54398 12.3418 7.91117 12.5938 7.36625 12.5938C6.66313 12.5938 6.3643 12.1719 6.55766 11.2754L7.29594 7.80664C7.36039 7.51367 7.3018 7.4082 7.00883 7.33789L6.55766 7.25586L6.63969 6.875L8.9307 6.58789ZM8 5.5C7.44772 5.5 7 5.05228 7 4.5C7 3.94772 7.44772 3.5 8 3.5C8.55229 3.5 9 3.94772 9 4.5C9 5.05228 8.55229 5.5 8 5.5Z"
                                            fill="currentColor"></path>
                                        </svg></div>
                                    </div>
                                    </div>
                                    <div className="flex items-center gap-2 max-xs:flex-wrap">
                                    <div className="flex items-center gap-2 max-xs:w-full">
                                        <div>
                                        <div className="cursor-pointer"><button role="button"
                                            className="text-xs leading-4 px-6 h-8 hover:bg-opacity-80 hover:text-opacity-80 hover:border-opacity-80 w-full border-blue-500 border text-blue-500 rounded font-semibold rounded-md border box-border focus:outline-none">
                                            <div className="mx-auto leading-4"><span className="text-base capitalize">0.1</span><span>%</span></div>
                                            </button></div>
                                        </div>
                                        <div>
                                        <div className="cursor-pointer"><button  role="button"
                                            className="text-xs leading-4 px-6 h-8 border-transparent hover:bg-opacity-80 hover:text-opacity-80 hover:border-opacity-80 w-full border-blue-500 border bg-blue-500 text-blue-900 rounded font-semibold rounded-md border box-border focus:outline-none">
                                            <div className="mx-auto leading-4"><span className="text-base capitalize">0.5</span><span>%</span></div>
                                            </button></div>
                                        </div>
                                        <div>
                                        <div className="cursor-pointer"><button  role="button"
                                            className="text-xs leading-4 px-6 h-8 hover:bg-opacity-80 hover:text-opacity-80 hover:border-opacity-80 w-full border-blue-500 border text-blue-500 rounded font-semibold rounded-md border box-border focus:outline-none">
                                            <div className="mx-auto leading-4"><span className="text-base capitalize">1.0</span><span>%</span></div>
                                            </button></div>
                                        </div>
                                    </div>
                                    <div className="w-full input-wrap w-full">
                                        <div>
                                        <div className="flex items-center justify-between"></div>
                                        <div className="shadow-none input-wrapper p-0 overflow-hidden">
                                            <div className="flex items-center justify-between no-shadow"><input
                                                className="input-base ml-auto px-3 h-8 text-right input ml-auto px-3 h-8 text-right input"
                                                type="number" lang="en"/></div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="">
                            <div className="bg-gray-1000 rounded-xl py-4">
                                <div
                                className="text-sm font-semibold text-gray-500 flex items-center justify-between px-4 mb-2">
                                <span>You pay</span>
                                <div className="text-right flex items-center gap-2">
                                    <p className="text-xs text-blue-500"><span>Balance: 0.000</span></p>
                                </div>
                                </div>
                                <div className="px-4">
                                <div className="flex justify-between">
                                    <div className="w-full input-wrap w-full">
                                    <div>
                                        <div className="flex items-center justify-between"></div>
                                        <div className="shadow-none overflow-hidden">
                                        <div className="flex items-center justify-between no-shadow"><input
                                            className="input-base h-8 input-bg-transparent p-0 text-xl font-bold input h-8 input-bg-transparent p-0 text-xl font-bold input"
                                            type="number" lang="en" tens-multiplier="-3" placeholder="0.001"/></div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                    <div
                                        className="flex items-center gap-2 p-1.5 hover:bg-gray-150 cursor-pointer rounded-xl  transition-all duration-300 ease-in-out">
                                        <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2"><img className="rounded-full w-6 h-6 min-w-6"
                                            src="./Helix _ The Premier Decentralized Spot and Derivatives Exchange_files/ethereum.png"
                                            />
                                            <div className="flex flex-col max-w-2xs truncate text-base"><span
                                                className="font-semibold text-xl">wETH</span></div>
                                        </div>
                                        </div><svg width="12" height="6" viewBox="0 0 12 6" fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="cursor-pointer h-3 w-3 min-w-3 cursor-pointer h-3 w-3 min-w-3">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M11.0325 0L6.00675 4.0875L0.957 0.01425L0 1.1475L6.0015 6L12 1.143L11.0325 0Z">
                                        </path>
                                        </svg>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="flex items-center justify-between gap-2 px-4">
                                <div className="flex flex-wrap items-center gap-1 text-sm whitespace-nowrap"></div>
                                <p className="text-right text-sm text-gray-500 truncate"><span>$0.00</span></p>
                                </div>
                            </div>
                            </div>
                            <div className="my-4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                className="cursor-pointer mx-auto min-w-6 w-6 h-6 -rotate-90">
                                <path
                                d="M21 11L6.414 11 11.707 5.707 10.293 4.293 2.586 12 10.293 19.707 11.707 18.293 6.414 13 21 13z"
                                fill="currentColor"></path>
                            </svg></div>
                            <div className="">
                            <div className="bg-gray-1000 rounded-xl py-4">
                                <div
                                className="text-sm font-semibold text-gray-500 flex items-center justify-between px-4 mb-2">
                                <span>You receive</span>
                                <div className="text-right flex items-center gap-2">
                                    <p className="text-xs text-blue-500"><span>Balance: 0.000</span></p>
                                </div>
                                </div>
                                <div className="px-4">
                                <div className="flex justify-between">
                                    <div className="w-full input-wrap w-full">
                                    <div>
                                        <div className="flex items-center justify-between"></div>
                                        <div className="shadow-none overflow-hidden">
                                        <div className="flex items-center justify-between no-shadow"><input
                                            className="input-base h-8 input-bg-transparent p-0 text-xl font-bold input h-8 input-bg-transparent p-0 text-xl font-bold input"
                                            type="number" lang="en" tens-multiplier="-3" placeholder="0.001"/></div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                    <div
                                        className="flex items-center gap-2 p-1.5 hover:bg-gray-150 cursor-pointer rounded-xl  transition-all duration-300 ease-in-out">
                                        <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2"><img className="rounded-full w-6 h-6 min-w-6"
                                            src="./Helix _ The Premier Decentralized Spot and Derivatives Exchange_files/usdt.png"
                                            />
                                            <div className="flex flex-col max-w-2xs truncate text-base"><span
                                                className="font-semibold text-xl">USDT</span></div>
                                        </div>
                                        </div><svg width="12" height="6" viewBox="0 0 12 6" fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="cursor-pointer h-3 w-3 min-w-3 cursor-pointer h-3 w-3 min-w-3">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M11.0325 0L6.00675 4.0875L0.957 0.01425L0 1.1475L6.0015 6L12 1.143L11.0325 0Z">
                                        </path>
                                        </svg>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="flex items-center justify-between gap-2 px-4">
                                <div className="flex flex-wrap items-center gap-1 text-sm whitespace-nowrap"></div>
                                <p className="text-right text-sm text-gray-500 truncate"><span>$0.00</span></p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="mx-4 mt-4 mb-6" >
                            <div className="space-y-3">
                            <div className="flex justify-between text-sm gap-4 items-center"><span
                                className="text-gray-400 whitespace-nowrap">Route</span><span
                                className="leading-5 text-gray-200 truncate">
                                <div className="flex items-center gap-1 justify-end"><span>wETH</span><svg
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                    className="rotate-180 w-3 h-3 cursor-text w-4 h-4">
                                    <path
                                        d="M21 11L6.414 11 11.707 5.707 10.293 4.293 2.586 12 10.293 19.707 11.707 18.293 6.414 13 21 13z"
                                        fill="currentColor"></path>
                                    </svg><span>USDT</span></div>
                                </span></div>
                            <div className="flex justify-between text-sm gap-4 items-center"><span
                                className="text-gray-400 whitespace-nowrap">Rate</span><span
                                className="leading-5 text-gray-200 truncate">
                                <div><span>—</span></div>
                                </span></div>
                            <div className="flex justify-between text-sm gap-4 items-center"><span
                                className="text-gray-400 whitespace-nowrap">Fees</span><span
                                className="leading-5 text-gray-200 truncate"><span className="flex group">
                                    <div>
                                    <div className="flex items-center gap-1 justify-end mb-1"><span>—</span></div>
                                    
                                    </div>
                                </span></span></div>
                            <div className="flex justify-between text-sm gap-4 items-center"><span
                                className="text-gray-400 whitespace-nowrap">Minimum output</span><span
                                className="leading-5 text-gray-200 truncate"><span>—</span></span></div>
                            <div className="flex justify-between text-sm gap-4 items-center"><span
                                className="text-gray-400 whitespace-nowrap">Expected output</span><span
                                className="leading-5 text-gray-200 truncate"><span>—</span></span></div>
                            </div>
                        </div>
                        <div><button role="button"
                            className="text-base leading-5 px-6 h-10 border-transparent hover:bg-opacity-80 hover:text-opacity-80 hover:border-opacity-80 w-full bg-blue-501 text-blue-901 font-semibold font-semibold rounded-md border box-border focus:outline-none">Connect
                            Wallet</button></div>
                        </div>
                    </div>
                    </div>
                </div>
                
            </main>
        </div>
    );
};
