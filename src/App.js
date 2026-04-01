import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./Shared/Components/Navbar/Navbar";
import { useTranslation } from "react-i18next";
import {useEffect } from "react";
import Footer from "./Shared/Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Layouts from "./Shared/Components/Layouts/Layouts";
import Terms from "./Shared/Pages/Terms/Terms";
import Privacy from "./Shared/Pages/Privacy/Privacy";

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const isArabic = i18n.language === "ar";

    document.documentElement.lang = isArabic ? "ar" : "en";
    document.documentElement.dir = isArabic ? "rtl" : "ltr";

    document.body.classList.toggle("lang-ar", isArabic);
    document.body.classList.toggle("lang-en", !isArabic);
  }, [i18n.language]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Layouts />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
