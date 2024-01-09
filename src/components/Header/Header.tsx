import React, {useState} from "react";
import "./Header.scss";
import "tailwindcss/tailwind.css";

export default function Header(props: any){
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const handleMouseEnter = () => {
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setDropdownVisible(false);
    };

  return (
    <header
      className="w-full z-40 h-12 lg:h-14 bg-gray-1000 flex items-center border-b border-b-gray-900 relative">
      <div className="cursor-pointer pl-6 lg:pr-6 lg:border-r flex items-center">
        <svg width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-auto h-6 lg:h-[30px]" ><path fillRule="evenodd" clipRule="evenodd" d="M25.44 5.3C25.44 5.74183 25.7982 6.1 26.24 6.1C26.6818 6.1 27.04 5.74183 27.04 5.3V1.46C27.04 1.01818 26.6818 0.660004 26.24 0.660004C25.7982 0.660004 25.44 1.01818 25.44 1.46V5.3ZM18.4 9.46C18.4 9.90183 18.7582 10.26 19.2 10.26C19.6418 10.26 20 9.90183 20 9.46V6.58C20 6.13818 19.6418 5.78 19.2 5.78C18.7582 5.78 18.4 6.13818 18.4 6.58V9.46ZM9.44001 21.3C9.44001 21.7418 9.79818 22.1 10.24 22.1C10.6818 22.1 11.04 21.7418 11.04 21.3V17.46C11.04 17.0182 10.6818 16.66 10.24 16.66C9.79818 16.66 9.44001 17.0182 9.44001 17.46V21.3ZM2.56001 23.7C2.11818 23.7 1.76001 23.3418 1.76001 22.9V20.66C1.76001 20.2182 2.11818 19.86 2.56001 19.86C3.00184 19.86 3.36001 20.2182 3.36001 20.66L3.36001 22.9C3.36001 23.3418 3.00184 23.7 2.56001 23.7ZM6.72001 24.34C6.27818 24.34 5.92001 23.9818 5.92001 23.54V20.66C5.92001 20.2182 6.27818 19.86 6.72001 19.86C7.16184 19.86 7.52001 20.2182 7.52001 20.66V23.54C7.52001 23.9818 7.16184 24.34 6.72001 24.34ZM12.96 18.42C12.96 18.8618 13.3182 19.22 13.76 19.22C14.2018 19.22 14.56 18.8618 14.56 18.42V16.18C14.56 15.7382 14.2018 15.38 13.76 15.38C13.3182 15.38 12.96 15.7382 12.96 16.18V18.42ZM22.72 7.7C22.2782 7.7 21.92 7.34183 21.92 6.9V4.02C21.92 3.57818 22.2782 3.22 22.72 3.22C23.1618 3.22 23.52 3.57818 23.52 4.02V6.9C23.52 7.34183 23.1618 7.7 22.72 7.7ZM28.96 3.38C28.96 3.82183 29.3182 4.18 29.76 4.18C30.2018 4.18 30.56 3.82183 30.56 3.38V1.46C30.56 1.01818 30.2018 0.660004 29.76 0.660004C29.3182 0.660004 28.96 1.01818 28.96 1.46V3.38Z" fill="url(#paint0_linear_719_21-0.07857932451062588)"></path><path fillRule="evenodd" clipRule="evenodd" d="M0.00348796 3.18205C0.0613084 4.06381 0.82299 4.73175 1.70475 4.67393C4.46863 4.49269 11.2161 5.89989 14.7113 13.3565L14.7404 13.4184L14.7746 13.4777C16.3387 16.1852 18.1011 18.6333 20.5513 20.4612C23.0296 22.31 26.0962 23.4401 30.1318 23.7137C31.0135 23.7735 31.7766 23.1073 31.8364 22.2256C31.8962 21.344 31.2299 20.5808 30.3483 20.5211C26.8319 20.2827 24.3785 19.3239 22.4648 17.8963C20.5376 16.4586 19.044 14.4621 17.5788 11.9346C13.3851 3.06209 5.22925 1.23594 1.49537 1.48079C0.613604 1.53861 -0.0543326 2.30029 0.00348796 3.18205Z" fill="#5BB1E9"></path><defs><linearGradient id="paint0_linear_719_21-0.07857932451062588" x1="-1.27917" y1="-3.66" x2="28.9737" y2="8.82444" gradientUnits="userSpaceOnUse"><stop offset="0.015625" stopColor="#6EE5B3"></stop><stop offset="0.430034" stopColor="#68D8E2"></stop><stop offset="1" stopColor="#4475F6"></stop></linearGradient></defs></svg>
      </div>
      <div className="flex-1 px-2 lg:px-6 flex justify-end lg:justify-between">
        <div
          className="relative h-0 -z-10 w-0 opacity-0 lg:h-full lg:z-0 lg:w-full lg:opacity-100 flex items-center">
          <div className="hidden lg:block">
            <nav className="block flex-1 lg:flex">
                <a aria-current="page" href="https://helixapp.com/"
                className="router-link-active router-link-exact-active block lg:hidden text-gray-200 hover:bg-gray-800 hover:text-white text-sm font-semibold rounded-lg cursor-pointer mx-px h-10 flex items-center px-6 py-2 hover:bg-gray-800 hover:text-white block lg:hidden"
                ><span className="block">Home</span></a>
                <a href="https://helixapp.com/markets"
                className="block text-gray-200 hover:bg-gray-800 hover:text-white text-sm font-semibold rounded-lg cursor-pointer mx-px h-10 flex items-center px-6 py-2 hover:bg-gray-800 hover:text-white block"
                data-cy="header-markets-link" ><span className="block">Markets</span></a>
              <div className="v-popper v-popper--theme-menu v-popper--theme-dropdown" onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                <div>
                  <div className="relative">
                    <span id="trade-dropdown" 
                      className="hidden lg:block text-gray-200 hover:bg-gray-800 hover:text-white text-sm font-semibold rounded-lg cursor-pointer mx-px h-10 flex lg:flex items-center px-6 hidden lg:block">
                        <span className="block"
                        >Trade</span></span></div>
                </div>
                {isDropdownVisible && <ul className="rounded absolute text-gray-850 pt-1 pb-1 group-hover:block popup-menu" style={{top: '42px'}}>
                    <li className="p-4 block  group hover:bg-gray-700 relative z-50 bg-gray-850">
                    Profile
                    </li>
                    <li className="p-4 block group hover:bg-gray-700 relative z-50 bg-gray-850">
                    Settings
                    </li>
                    <li className="p-4 block group hover:bg-gray-700 relative z-50 bg-gray-850">
                    Logout
                    </li>
                </ul>}
              </div>
              
              
              <div className="block lg:hidden">
                <div className="py-2 px-6">
                  <dt className="text-lg"><button 
                      className="text-left w-full flex justify-between items-start text-gray-200 items-center"
                      aria-expanded="false">
                      <div className="font-semibold text-gray-200 flex items-start">
                        <div className="flex gap-0.5">
                          <div className="text-sm font-semibold">Trade</div>
                          <div className="bg-blue-500 rounded-full w-2 h-2 block lg:hidden"></div>
                        </div>
                      </div><span className="ml-6 h-6 flex items-center"><svg className="transform h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                          stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M19 9l-7 7-7-7"></path>
                        </svg></span>
                    </button></dt>
                </div>
                <div className="py-2 px-6">
                  <dt className="text-lg"><button
                      className="text-left w-full flex justify-between items-start text-gray-200 items-center"
                      aria-expanded="false">
                      <div className="font-semibold text-gray-200 flex items-start">
                        <div className="text-sm font-semibold">Rewards</div>
                      </div><span className="ml-6 h-6 flex items-center"><svg className="transform h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                          stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M19 9l-7 7-7-7"></path>
                        </svg></span>
                    </button></dt>
                </div>
              </div><a href="https://helixapp.com/trading-bots/liquidity-bots/spot"
                className="block relative text-gray-200 hover:bg-gray-800 hover:text-white text-sm font-semibold rounded-lg cursor-pointer mx-px h-10 flex items-center px-6 py-2 hover:bg-gray-800 hover:text-white block relative"
                data-cy="header-markets-link" ><span className="block"><span>Liquidity</span>
                  <div className="bg-blue-500 rounded-full w-2 h-2 absolute right-3.5 top-2.5 hidden lg:block">
                  </div>
                </span></a>
              <div className="v-popper v-popper--theme-menu v-popper--theme-dropdown">
                <div>
                  <div className="relative"><span id="rewards-dropdown"
                      className="hidden lg:block text-gray-200 hover:bg-gray-800 hover:text-white text-sm font-semibold rounded-lg cursor-pointer mx-px h-10 flex lg:flex items-center px-6 hidden lg:block"><span
                        className="block">Rewards</span></span>
                    <div className="bg-blue-500 rounded-full w-2 h-2 absolute right-3.5 top-2.5 hidden lg:block">
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="flex items-center"><button 
            className="text-sm px-6 leading-4 h-9 border-transparent hover:bg-opacity-80 hover:text-opacity-80 hover:border-opacity-80 bg-blue-501 text-blue-901 font-semibold whitespace-nowrap font-semibold rounded-md border box-border focus:outline-none">Connect
            Wallet</button></div>
      </div><button className="px-4 border-r border-gray-600 text-gray-200 lg:hidden"><svg
          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
          aria-hidden="true" className="cursor-pointer w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7">
          </path>
        </svg></button>
    </header>
  );
};
