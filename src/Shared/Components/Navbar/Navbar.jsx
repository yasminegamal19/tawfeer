import { memo, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Navbar.modules.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) i18n.changeLanguage(savedLang);
  }, [i18n]);

  const handleAnchorClick = (e, id) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 500);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }

    closeMenu();
  };

  const handleHomeClick = (e) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 500);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    closeMenu();
  };

  return (
    <nav
      className={`navbar py-2 navbar-expand-lg bg-body-tertiary ${
        i18n.language === "ar" ? "lang-ar" : "lang-en"
      } ${isSticky ? "sticky" : ""}`}
    >
      <div className="container d-flex align-items-center justify-content-between">
        <Link className="navbar-brand" to="/" onClick={closeMenu}>
          <img src="/لوجو توفير- 1.png" alt="logo" />
        </Link>

        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
          <span className="navbar-toggler-icon bg-white"></span>
        </button>

        <ul className="navbar-nav desktop-nav align-items-center">
          <li className="nav-item">
            <a
              href="/"
              className="nav-link fw-medium"
              onClick={handleHomeClick}
            >
              {t("navbar.home")}
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link fw-medium"
              href="/#about"
              onClick={(e) => handleAnchorClick(e, "about")}
            >
              {t("navbar.about")}
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link fw-medium"
              href="/#services"
              onClick={(e) => handleAnchorClick(e, "services")}
            >
              {t("navbar.services")}
            </a>
          </li>

          <li className="nav-item">
            <Link className="nav-link fw-medium" to="/terms">
              {t("navbar.terms")}
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link fw-medium" to="/privacy">
              {t("navbar.privacy")}
            </Link>
          </li>
        </ul>

        <div className="d-flex align-items-center gap-2">
          <a href="#footer">
            <button className="btn btn-primary">
              {t("navbar.contact_us")}
            </button>
          </a>

          <div className="desktop-language-dropdown">
            <button
              className="btn btn-secondary custom-toggle"
              data-bs-toggle="dropdown"
            >
              {i18n.language === "ar" ? "العربية" : "English"}
            </button>

            <ul className="dropdown-menu">
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => {
                    i18n.changeLanguage("ar");
                    localStorage.setItem("lang", "ar");
                  }}
                >
                  {t("navbar.language_ar")}
                </button>
              </li>

              <li>
                <button
                  className="dropdown-item"
                  onClick={() => {
                    i18n.changeLanguage("en");
                    localStorage.setItem("lang", "en");
                  }}
                >
                  {t("navbar.language_en")}
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
          <button className="close-mobile-menu" onClick={toggleMenu}>
            ×
          </button>

          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link fw-medium"
                href="/#home"
                onClick={(e) => handleAnchorClick(e, "home")}
              >
                {t("navbar.home")}
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link fw-medium"
                href="/#about"
                onClick={(e) => handleAnchorClick(e, "about")}
              >
                {t("navbar.about")}
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link fw-medium"
                href="/#services"
                onClick={(e) => handleAnchorClick(e, "services")}
              >
                {t("navbar.services")}
              </a>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link fw-medium"
                to="/terms"
                onClick={closeMenu}
              >
                {t("navbar.terms")}
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link fw-medium"
                to="/privacy"
                onClick={closeMenu}
              >
                {t("navbar.privacy")}
              </Link>
            </li>

            <li className="nav-item mobile-language">
              <div className="dropdown">
                <button
                  className="btn btn-secondary custom-toggle"
                  data-bs-toggle="dropdown"
                >
                  {i18n.language === "ar" ? "العربية" : "English"}
                </button>

                <ul className="dropdown-menu">
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => {
                        i18n.changeLanguage("ar");
                        localStorage.setItem("lang", "ar");
                      }}
                    >
                      {t("navbar.language_ar")}
                    </button>
                  </li>

                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => {
                        i18n.changeLanguage("en");
                        localStorage.setItem("lang", "en");
                      }}
                    >
                      {t("navbar.language_en")}
                    </button>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default memo(Navbar);
