import { memo } from "react";
import { useTranslation } from "react-i18next";
import "./About.modules.css";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about py-5" id="about">
      <div className="container">
        <h2 className="mb-3 title">{t("about.title")}</h2>

        <div className="row align-items-center">
          <div className="col-lg-6 col-12">
            <h1 className="mb-3 brand">
              {t("about.brand")} <span>{t("about.brandSpan")}</span>
            </h1>

            <p className="desc">{t("about.description")}</p>

            <ul className="features">
              <li>
                <span className="icon"></span> {t("about.feature1")}
              </li>
              <li>
                <span className="icon"></span> {t("about.feature2")}
              </li>
              <li>
                <span className="icon"></span> {t("about.feature3")}
              </li>
              <li>
                <span className="icon"></span> {t("about.feature4")}
              </li>
            </ul>
          </div>

          <div className="col-lg-6 col-12 text-center">
            <img
              src="/لوجو توفير- 1.png"
              alt="about tawfeer market"
              className="about-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(About);