import "./App.scss";
import Header from "./components/Header/Header";
import { useTranslation } from "react-i18next";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import Abouts from "./Pages/Abouts/Abouts";
import Single from "./Pages/Single/Single";
import Wishlist from "./Pages/wishlist/Wishlist";
import Collection from "./Pages/Collection/Collection";
import Perfect from "./Pages/Perfect/Perfect";
import Perfect2 from "./Pages/Perfect2/Perfect2";
import Perfect3 from "./Pages/Perfect3/Perfect3";
import { BsTelegram } from "react-icons/bs";

function App() {
  const { t, i18n } = useTranslation();
  const laungage = localStorage.getItem("i18nextLng");
  const handleChange = (event) => {
    const selectedLaungage = event.target.value;
    i18n.changeLanguage(selectedLaungage);
  };

  return (
    <>
      <Header laungage={laungage} handleChange={handleChange} t={t} />
      <Routes>
        <Route path="/" element={<Home t={t} />} />
        <Route path="/product/:id" element={<Single t={t} />} />
        <Route path="/about" element={<Abouts t={t} />} />
        <Route path="/contact" element={<Contact t={t} />} />
        <Route path="/wishlist" element={<Wishlist t={t} />} />
        <Route path="/collection" element={<Collection t={t} />} />
        <Route path="/perfect" element={<Perfect t={t} />} />
        <Route path="/perfect-2" element={<Perfect2 t={t} />} />
        <Route path="/perfect-3" element={<Perfect3 t={t} />} />
      </Routes>

      <div className="telegram">
        <a
          className="telegram__icon"
          href="https://telegram.me/Bukharanaturalproduct"
        >
          <BsTelegram />
          <div className="telegram__ring"></div>
        </a>
      </div>

      <Footer t={t} />
    </>
  );
}
export default App;
