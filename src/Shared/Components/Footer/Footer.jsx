import React, { useEffect, useState } from "react";
import "./Footer.modules.css";
import { useNavigate, useLocation, Link } from "react-router-dom";
import axios from "axios";
import Loader from "../../Components/Loader/Loader";
import { useTranslation } from "react-i18next";

const Footer = () => {

  const {i18n} = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(false);

  const baseUrl = "https://tawfeer.betamoneta.com/api/settings";

  useEffect(() => {
    setLoading(true);

    axios
      .get(baseUrl,  {
        headers: {
          "Accept-Language": i18n.language,
        },
      })
      .then((res) => {
        setSettings(res.data.data[0]); 
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [i18n.language]);

  const handleFooterClick = (e, id) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 200);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (loading) return <Loader />;

  return (
    <div className="footer py-5" id="footer">
      <div className="container">
        <div className="content">
          <div className="row">
            <div className="col-xl-4 col-12 text-white-50">
              <div className="img">
                <img src="لوجو توفير- 1.png" alt="logo" />
              </div>

              <p className="mb-4">{settings?.desc}</p>

              <div className="links d-flex pb-3 gap-3">
                <a
                  href={settings?.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-facebook"></i>
                </a>

                <a
                  href={settings?.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-whatsapp"></i>
                </a>

                <a
                  href={settings?.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>

            <div className="col-xl-4 col-12 text-white-50 footer-links">
              <h5 className="text-uppercase pb-3">روابط سريعة</h5>

              <a href="#about" onClick={(e) => handleFooterClick(e, "about")}>
                من نحن
              </a>

              <a
                href="#services"
                onClick={(e) => handleFooterClick(e, "services")}
              >
                الخدمات
              </a>

              <Link to="/terms">الشروط والأحكام</Link>

              <Link to="/privacy">سياسة الخصوصية</Link>
            </div>

            <div className="col-xl-4 col-12 text-white">
              <h5 className="text-uppercase">تواصل معنا</h5>

              <div className="contact d-flex mb-2 gap-3">
                <i className="bi bi-telephone-fill"></i>
                <span>{settings?.phone}</span>
              </div>

              <div className="contact d-flex mb-2 gap-3">
                <i className="bi bi-whatsapp"></i>
                <span>{settings?.whatsapp}</span>
              </div>

              <div className="contact d-flex mb-2 gap-3">
                <i className="bi bi-envelope-fill"></i>
                <span>{settings?.email}</span>
              </div>

              <div className="contact d-flex mb-2 gap-3">
                <i className="bi bi-geo-alt-fill"></i>
                <span>{settings?.address}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
