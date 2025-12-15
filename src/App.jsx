import { Routes, Route } from "react-router-dom";
import Layout from "./pages/home/Layout";
import "bootstrap-icons/font/bootstrap-icons.css";
import All from "./pages/home/all";
import Porfolio from "./pages/_components/Porfolio";
import AboutUs from "./pages/About";
import ScrollToTop from "./pages/_components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<All />} />
          <Route path="portfolio" element={<Porfolio />} />
          <Route path="aboutus" element={<AboutUs />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
