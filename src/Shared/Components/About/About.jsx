import { memo } from "react";
import "./About.modules.css";

const About = () => {
  return (
    <div className="about py-5" id="about">
      <div className="container">
        <h2 className="mb-3 title">من نحن</h2>

        <div className="row align-items-center">
          <div className="col-lg-6 col-12">
            <h1 className="mb-3 brand">
              توفير <span>ماركت</span>
            </h1>
            <p className="desc">
              توفير ماركت هو ماركت متكامل لبيع جميع المنتجات الغذائية والمنزلية
              بأفضل الأسعار، مع عروض مستمرة تناسب كل أفراد الأسرة.
            </p>

            <ul className="features">
              <li>
                <span className="icon"></span> منتجات عالية الجودة
              </li>
              <li>
                <span className="icon"></span> أسعار مناسبة للجميع
              </li>
              <li>
                <span className="icon"></span> عروض وتخفيضات مستمرة
              </li>
              <li>
                <span className="icon"></span> تجربة تسوق سهلة وسريعة
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
