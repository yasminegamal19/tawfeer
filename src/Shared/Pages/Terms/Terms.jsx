import { memo } from "react";
import axios from "axios";
import Loader from "../../Components/Loader/Loader";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import './Terms.modules.css';
import { useTranslation } from "react-i18next";
const Terms = () => {
    const {t,i18n} = useTranslation();
      const [terms, setTerms] = useState([]);
      const [loading, setLoading] = useState(false);
const baseUrl = "https://tawfeer.betamoneta.com/api/terms";
      
  useEffect(() => {
    setLoading(true);

    axios
      .get(baseUrl, {
        headers: {
          "Accept-Language": i18n.language,
        },
      })
      .then((res) => {
        console.log(res.data);
        setTerms(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error:", err);
        setLoading(false);
      });
  }, [i18n.language]);

    return (
      <>
        {loading ? (
          <Loader />
        ) : (
          <div className="terms-page py-5">
            <div className="container">
              <div className="terms-card row">
                <div className="col-lg-6 col-12">
                  <h2 className="terms-title">{terms?.title}</h2>
                  <p className="terms-desc">{terms?.description}</p>
                  <p className="date">
                    {t("terms.last_updated")}: {terms?.updated_at}
                  </p>
                </div>
                <div className="col-lg-6 col-12">
                  <div className="terms-image-wrapper">
                    <img src={terms?.image} alt="terms" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
};

export default memo(Terms);