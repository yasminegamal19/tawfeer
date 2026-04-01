import { memo } from "react";
import axios from "axios";
import Loader from "../../Components/Loader/Loader";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import './Privacy.modules.css';
const Privacy = () => {
     
      const {t,i18n} = useTranslation();
      const [privacy, setPrivacy] = useState([]);
      const [loading, setLoading] = useState(false);
const baseUrl = "https://tawfeer.betamoneta.com/api/privacy";
      
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
        setPrivacy(res.data.data);
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
          <div className="privacy py-5">
            <div className="container">
              <div className="privacy-card row">
                <div className="col-lg-6 col-12">
                  <h2 className="title">{privacy?.title}</h2>
                  <p className="desc">{privacy?.description}</p>
                  <p className="date">
                    {t("privacy.last_updated")}: {privacy?.updated_at}
                  </p>
                </div>
                <div className="col-lg-6 col-12">
                  <div className="image-wrapper">
                    <img src={privacy?.image} alt="privacy" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
};

export default memo(Privacy);