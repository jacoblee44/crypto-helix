
import "./styles/App.css";
import "./styles/crypto-table.scss";

import { Route, Routes } from "react-router-dom";
import appData from "./hooks/appData";
import Home from "./pages/Home/Home"
import Markets from "./pages/Markets/Markets"
import Swap from "./pages/Swap/Swap";
import "tailwindcss/tailwind.css";

function App() {
  const { cryptos, globalData, trending, news, cryptoList } = appData();

  return (
    <div className="App">
      <div id="pro" className="flex min-h-screen max-h-screen bg-gray-1000 text-gray-100 relative overflow-x-hidden">
        <div className="min-h-screen w-full">
          <div className="h-full">
            <div className="w-full">
              <div className="bg-gray-1000">
                <Routes>
                  {/* <Route path="/" element={<Cryptos cryptos={cryptos} />} /> */}
                  <Route path="/" element={<Home cryptos={cryptos}/>} />
                  <Route path="/markets" element={<Markets />} />
                  <Route path="/swap" element={<Swap />} /> 
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
