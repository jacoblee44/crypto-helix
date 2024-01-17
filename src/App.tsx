import "./styles/App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home"
import "tailwindcss/tailwind.css";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

    </div>
  );
}

export default App;
