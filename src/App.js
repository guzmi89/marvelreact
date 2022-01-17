import Header from "./components/sections/Header.js";
import Home from "./components/sections/Home.js";
import Footer from "./components/sections/Footer.js";
import Heroes from "./components/pages/Heroes.js";
import Error404 from "./components/error404.js"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Comics from "./components/pages/Comics.js";
import Films from "./components/pages/Films.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="bg-gradient-to-r dark:from-gray-700 dark:to-gray-600 from-slate-100 to-slate-400">
          <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path="heroes" element={<Heroes peticion="characters?series=22547&limit=48&ts=1" />} />
            <Route path="comics" element={<Comics peticion="comics?limit=48&ts=1" />} />
            <Route path="films" element={<Films peticion="films" />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
