import { memo } from "react";
import "./Services.modules.css";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: "bi-box-seam",
      title: t("services.items.allProducts.title"),
      desc: t("services.items.allProducts.desc"),
    },
    {
      icon: "bi-truck",
      title: t("services.items.delivery.title"),
      desc: t("services.items.delivery.desc"),
    },
    {
      icon: "bi-cash-coin",
      title: t("services.items.pricing.title"),
      desc: t("services.items.pricing.desc"),
    },
    {
      icon: "bi-bag-heart",
      title: t("services.items.offers.title"),
      desc: t("services.items.offers.desc"),
    },
    {
      icon: "bi-cart-check",
      title: t("services.items.order.title"),
      desc: t("services.items.order.desc"),
    },
    {
      icon: "bi-patch-check",
      title: t("services.items.quality.title"),
      desc: t("services.items.quality.desc"),
    },
  ];

  return (
    <div className="services py-5" id="services">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="title">{t("services.title")}</h2>
          <p className="subtitle">{t("services.subtitle")}</p>
        </div>

        <div className="row g-4">
          {services.map((item, index) => (
            <div className="col-lg-4 col-md-6 col-12" key={index}>
              <div className="service-card">
                <div className="service-title">
                  <i className={`bi ${item.icon} service-icon`}></i>
                  <h4>{item.title}</h4>
                </div>

                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(Services);
