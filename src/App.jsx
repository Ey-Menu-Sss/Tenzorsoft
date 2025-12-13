import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import 'bootstrap-icons/font/bootstrap-icons.css';
import All from './Components/all';
import Porfolio from './Components/Porfolio';
import AboutUs from './pages/About';
import ScrollToTop from "./Components/ScrollToTop";

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
  )
}

export default App
