import "./styles/App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home"
import Market from "./pages/Markets/Markets"
import Dashboard from "./pages/Dashboard/Dashboard";
import Bookmark from "./pages/Bookmark/Bookmark"
import "tailwindcss/tailwind.css";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/market" element={<Market />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/bookmark" element={<Bookmark />} />
      </Routes>

    </div>
  );
}

export default App;
