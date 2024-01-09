
import "tailwindcss/tailwind.css";

export default function Footer(props: any) {
  return (
    <footer className="w-full py-16 bg-gray-1000 border-t border-t-gray-900">
        <div
          className="w-full mx-auto lg:w-4/5 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 3md:grid-cols-10 lg:grid-cols-12 gap-8 px-8 lg:px-0">
          <div className="sm:col-span-1 xs:col-span-2 3md:col-span-3 lg:col-span-5"><a aria-current="page"
              href="https://helixapp.com/" className="router-link-active router-link-exact-active">
              <div className="flex items-center cursor-pointer md:mb-6">
                  <svg width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mr-2" ><path fillRule="evenodd" clipRule="evenodd" d="M25.44 5.3C25.44 5.74183 25.7982 6.1 26.24 6.1C26.6818 6.1 27.04 5.74183 27.04 5.3V1.46C27.04 1.01818 26.6818 0.660004 26.24 0.660004C25.7982 0.660004 25.44 1.01818 25.44 1.46V5.3ZM18.4 9.46C18.4 9.90183 18.7582 10.26 19.2 10.26C19.6418 10.26 20 9.90183 20 9.46V6.58C20 6.13818 19.6418 5.78 19.2 5.78C18.7582 5.78 18.4 6.13818 18.4 6.58V9.46ZM9.44001 21.3C9.44001 21.7418 9.79818 22.1 10.24 22.1C10.6818 22.1 11.04 21.7418 11.04 21.3V17.46C11.04 17.0182 10.6818 16.66 10.24 16.66C9.79818 16.66 9.44001 17.0182 9.44001 17.46V21.3ZM2.56001 23.7C2.11818 23.7 1.76001 23.3418 1.76001 22.9V20.66C1.76001 20.2182 2.11818 19.86 2.56001 19.86C3.00184 19.86 3.36001 20.2182 3.36001 20.66L3.36001 22.9C3.36001 23.3418 3.00184 23.7 2.56001 23.7ZM6.72001 24.34C6.27818 24.34 5.92001 23.9818 5.92001 23.54V20.66C5.92001 20.2182 6.27818 19.86 6.72001 19.86C7.16184 19.86 7.52001 20.2182 7.52001 20.66V23.54C7.52001 23.9818 7.16184 24.34 6.72001 24.34ZM12.96 18.42C12.96 18.8618 13.3182 19.22 13.76 19.22C14.2018 19.22 14.56 18.8618 14.56 18.42V16.18C14.56 15.7382 14.2018 15.38 13.76 15.38C13.3182 15.38 12.96 15.7382 12.96 16.18V18.42ZM22.72 7.7C22.2782 7.7 21.92 7.34183 21.92 6.9V4.02C21.92 3.57818 22.2782 3.22 22.72 3.22C23.1618 3.22 23.52 3.57818 23.52 4.02V6.9C23.52 7.34183 23.1618 7.7 22.72 7.7ZM28.96 3.38C28.96 3.82183 29.3182 4.18 29.76 4.18C30.2018 4.18 30.56 3.82183 30.56 3.38V1.46C30.56 1.01818 30.2018 0.660004 29.76 0.660004C29.3182 0.660004 28.96 1.01818 28.96 1.46V3.38Z" fill="url(#paint0_linear_719_21-0.07857932451062588)"></path><path fillRule="evenodd" clipRule="evenodd" d="M0.00348796 3.18205C0.0613084 4.06381 0.82299 4.73175 1.70475 4.67393C4.46863 4.49269 11.2161 5.89989 14.7113 13.3565L14.7404 13.4184L14.7746 13.4777C16.3387 16.1852 18.1011 18.6333 20.5513 20.4612C23.0296 22.31 26.0962 23.4401 30.1318 23.7137C31.0135 23.7735 31.7766 23.1073 31.8364 22.2256C31.8962 21.344 31.2299 20.5808 30.3483 20.5211C26.8319 20.2827 24.3785 19.3239 22.4648 17.8963C20.5376 16.4586 19.044 14.4621 17.5788 11.9346C13.3851 3.06209 5.22925 1.23594 1.49537 1.48079C0.613604 1.53861 -0.0543326 2.30029 0.00348796 3.18205Z" fill="#5BB1E9"></path><defs><linearGradient id="paint0_linear_719_21-0.07857932451062588" x1="-1.27917" y1="-3.66" x2="28.9737" y2="8.82444" gradientUnits="userSpaceOnUse"><stop offset="0.015625" stopColor="#6EE5B3"></stop><stop offset="0.430034" stopColor="#68D8E2"></stop><stop offset="1" stopColor="#4475F6"></stop></linearGradient></defs></svg>
                    <svg viewBox="0 0 254 56" fill="none" xmlns="http://www.w3.org/2000/svg"
                  className="h-6 md:h-8">
                  <path d="M0 56H6.32V30.8H38.64V56H44.96V0H38.64V24.88H6.32V0H0V56Z" fill="currentColor">
                  </path>
                  <path
                    d="M65.7812 56H106.661V50.24H72.1012V30.64H102.661V24.88H72.1012V5.76H106.261V0H65.7812V56Z"
                    fill="currentColor"></path>
                  <path d="M124.375 56H162.215V50.16H130.695V0H124.375V56Z" fill="currentColor"></path>
                  <path d="M179.466 56H185.786V0H179.466V56Z" fill="currentColor"></path>
                  <path
                    d="M245.428 0L228.307 23.04L211.188 0H203.747L224.387 27.44L202.947 56H210.228L228.148 31.84L246.068 56H253.588L232.148 27.44L252.787 0H245.428Z"
                    fill="currentColor"></path>
                </svg></div>
            </a><span className="text-gray-500 text-xs"> © 2024 Injective Labs Inc. </span>
            <div className="hidden text-sm opacity-75 lg:block mt-6 italic max-w-[450px]">*Note: Helix is able to
              provide maker rebates across a number of markets as approved via the Injective DAO.</div>
          </div>
          <div className="3md:col-span-2">
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <div className="mt-4 text-sm"><a href="https://helixapp.com/institutional"
                className="opacity-75 cursor-pointer hover:text-blue-500">Institutional</a></div>
            <div className="mt-4 text-sm"><a href="https://helixapp.com/fee-discounts"
                className="opacity-75 cursor-pointer hover:text-blue-500">Fee Discounts</a></div>
            <div className="mt-4 text-sm"><a href="https://api.injective.exchange/"
                className="opacity-75 cursor-pointer hover:text-blue-500" target="_blank">API Documentation</a>
            </div>
            <div className="mt-4 text-sm"><a href="https://injectivelabs.org/privacy"
                className="opacity-75 cursor-pointer hover:text-blue-500" target="_blank">Privacy Policy</a></div>
            <div className="mt-4 text-sm"><a href="https://helixapp.com/terms"
                className="opacity-75 cursor-pointer hover:text-blue-500">Terms &amp; Conditions</a></div>
          </div>
          <div className="3md:col-span-2">
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <div className="mt-4 text-sm"><a href="https://helixapp.zendesk.com/"
                className="opacity-75 cursor-pointer hover:text-blue-500" target="_blank">FAQ</a></div>
          </div>
          <div className="md:col-span-3">
            <h3 className="font-bold text-lg mb-4 md:mb-6">Community</h3>
            <div className="flex items-center"><a className="w-6 h-6 text-gray-500 hover:text-blue-500 mr-4"
                href="https://discord.com/invite/injective" target="_blank"><svg width="24" height="24"
                  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer h-6 w-6 min-w-6 cursor-pointer h-6 w-6 min-w-6">
                  <path
                    d="M9.70039 11.4002C9.00039 11.4002 8.40039 12.0002 8.40039 12.7002C8.40039 13.4002 9.00039 14.0002 9.70039 14.0002C10.4004 14.0002 11.0004 13.4002 11.0004 12.7002C11.0004 12.0002 10.4004 11.4002 9.70039 11.4002Z"
                    fill="currentColor"></path>
                  <path
                    d="M14.3 11.4002C13.6 11.4002 13 12.0002 13 12.7002C13 13.4002 13.6 14.0002 14.3 14.0002C15 14.0002 15.6 13.4002 15.6 12.7002C15.6 12.0002 15 11.4002 14.3 11.4002Z"
                    fill="currentColor"></path>
                  <path
                    d="M12 0C5.4 0 0 5.4 0 12C0 18.6 5.4 24 12 24C18.6 24 24 18.6 24 12C24 5.4 18.6 0 12 0ZM15.5 17C15.5 17 15 16.5 14.7 16C16.3 15.5 16.9 14.6 16.9 14.6C16.4 14.9 15.9 15.1 15.5 15.3C14.9 15.6 14.3 15.7 13.7 15.8C10.8 16.3 9.2 15.5 7.7 14.9L7.2 14.6C7.2 14.6 7.8 15.5 9.4 16C9 16.5 8.6 17 8.6 17C5.8 16.9 4.8 15.2 4.8 15.2C4.8 11.3 6.6 8.2 6.6 8.2C8.3 6.9 10 7 10 7L10.1 7.1C7.9 7.7 6.9 8.7 6.9 8.7C6.9 8.7 7.2 8.6 7.6 8.4C10.6 7.2 13.9 7.3 17 8.8C17 8.8 16 7.9 13.9 7.3L14.1 7C14.4 7 15.9 7.1 17.6 8.3C17.6 8.3 19.4 11.5 19.4 15.3C19.4 15.2 18.3 17 15.5 17Z"
                    fill="currentColor"></path>
                </svg></a><a className="w-6 h-6 text-gray-500 hover:text-blue-500 mr-4"
                href="https://twitter.com/helixapp_" target="_blank"><svg width="24" height="24"
                  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer h-6 w-6 min-w-6 cursor-pointer h-6 w-6 min-w-6">
                  <path
                    d="M12 0C5.3736 0 0 5.3736 0 12C0 18.6264 5.3736 24 12 24C18.6264 24 24 18.6264 24 12C24 5.3736 18.6264 0 12 0ZM17.4791 9.35632C17.4844 9.47443 17.4869 9.59308 17.4869 9.71228C17.4869 13.3519 14.7166 17.5488 9.65021 17.549H9.65039H9.65021C8.09473 17.549 6.64728 17.0931 5.42834 16.3118C5.64386 16.3372 5.86322 16.3499 6.08533 16.3499C7.37585 16.3499 8.56348 15.9097 9.50629 15.1708C8.30054 15.1485 7.28394 14.3522 6.93311 13.2578C7.10101 13.29 7.27368 13.3076 7.45074 13.3076C7.70215 13.3076 7.94568 13.2737 8.17712 13.2105C6.91681 12.9582 5.96741 11.8444 5.96741 10.5106C5.96741 10.4982 5.96741 10.487 5.96777 10.4755C6.33893 10.6818 6.76337 10.806 7.21527 10.8199C6.47571 10.3264 5.98956 9.48285 5.98956 8.52722C5.98956 8.02258 6.12598 7.5498 6.36255 7.14276C7.72083 8.80939 9.75073 9.90546 12.0399 10.0206C11.9927 9.81885 11.9683 9.60864 11.9683 9.39258C11.9683 7.87207 13.2019 6.63849 14.723 6.63849C15.5153 6.63849 16.2308 6.97339 16.7335 7.50879C17.361 7.38501 17.9502 7.15576 18.4825 6.84027C18.2765 7.48315 17.84 8.02258 17.2712 8.36371C17.8284 8.29706 18.3594 8.14929 18.8529 7.92993C18.4843 8.48236 18.0168 8.96759 17.4791 9.35632Z"
                    fill="currentColor"></path>
                </svg></a><a className="w-6 h-6 text-gray-500 hover:text-blue-500 mr-4"
                href="https://t.me/helixapp" target="_blank"><svg width="24" height="24" viewBox="0 0 24 24"
                  fill="none" xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer h-6 w-6 min-w-6 cursor-pointer h-6 w-6 min-w-6">
                  <path
                    d="M12 24C18.629 24 24 18.629 24 12C24 5.371 18.629 0 12 0C5.371 0 0 5.371 0 12C0 18.629 5.371 24 12 24ZM5.491 11.74L17.061 7.279C17.598 7.085 18.067 7.41 17.893 8.222L17.894 8.221L15.924 17.502C15.778 18.16 15.387 18.32 14.84 18.01L11.84 15.799L10.393 17.193C10.233 17.353 10.098 17.488 9.788 17.488L10.001 14.435L15.561 9.412C15.803 9.199 15.507 9.079 15.188 9.291L8.317 13.617L5.355 12.693C4.712 12.489 4.698 12.05 5.491 11.74Z"
                    fill="currentColor"></path>
                </svg></a></div>
          </div>
          <div className="xs:col-span-2 sm:col-span-3 md:col-span-5 lg:hidden text-sm">*Note: Helix is able to
            provide maker rebates across a number of markets as approved via the Injective DAO.</div>
        </div>
      </footer>
  );
}
