import React from "react";
import "./Copy-Right.modules.css";
import { useTranslation } from "react-i18next";

const CopyRight = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="copy-right py-5">
        <div className="container">
          <div className="row align-items-center">
            <p className="col-xl-6 col-12 text-white">{t("copyright")}</p>

            <div className="col-xl-6 col-12 icons text-end">
              <i className="fa-brands fa-facebook-f me-3 text-white"></i>
              <i className="fa-brands fa-linkedin-in text-white"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CopyRight;
