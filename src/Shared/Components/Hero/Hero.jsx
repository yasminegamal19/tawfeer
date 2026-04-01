import { memo } from "react";
import "./Hero.modules.css";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="hero py-5" id="hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <h1 className="mb-4 mt-5">
              {t("hero.title")} <span>!</span>
            </h1>

            <h5>{t("hero.desc1")}</h5>
            <h5>{t("hero.desc2")}</h5>

            <div className="links d-flex gap-2 mt-4">
              <img src="/applestore.png" alt="app store" />
              <img src="/applestore (1).png" alt="google play" />
            </div>
          </div>

          <div className="col-lg-6 col-12 d-flex justify-content-center align-items-center">
            <img src="/image 2186.png" alt="hero" className="hero-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Hero);
