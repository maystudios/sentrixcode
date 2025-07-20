import { useEffect, useState } from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import AiCompanyLogSlider from './AiCompanyLogSlider';
import "swiper/swiper-bundle.css";


const ItCompanyHero = () => {
  const logos = [
    { img: "/img/creative-agency-2/logo.png" },
    { img: "/img/creative-agency-2/logo_4.png" },
    { img: "/img/creative-agency-2/logo_2.png" },
    { img: "/img/creative-agency-2/logo_3.png" },
    { img: "/img/creative-agency-2/logo_4.png" },
    { img: "/img/creative-agency-2/logo_2.png" },
    { img: "/img/creative-agency-2/logo_2.png" },
    { img: "/img/creative-agency-2/logo_3.png" },
  ];
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <div className="it-company-hero-area it-company-bg-two pt-160 pb-40 position-relative z-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h1 className="it-company-hero-title it-company-color fs-64 mb-30">
                <span className="fs-40 fw-600">Solve Your Business</span>
                Challenges With IT
              </h1>
              <p className="clr-paragraph fs-18 fw-500 flh-28 fch-50 mb-40">
                Be available right where your customers need it and give your
                team the automatically.
              </p>
              <a
                href="#"
                className="btn it-company-bg ca-two-bg-hover-two rounded-5 text-white fs-16"
              >
                Get Started
              </a>
              <a
                href="/termin"
                className="btn it-company-bg ca-two-bg-hover-two rounded-5 text-white fs-16"
              >
                Start Discussion
              </a>
            </div>
            <div className="col-lg-6">
              <img
                src="/img/it_company/hero.png"
                alt=""
                className="it-company-img img-fluid"
              />
            </div>
          </div>
        </div>

        <img
          src="/img/it_company/shape/hero.png"
          alt=""
          className="s-one position-absolute"
        />
        <img
          src="/img/it_company/shape/hero_2.png"
          alt=""
          className="s-two position-absolute"
        />
      </div>
    </>
  );
};

export default ItCompanyHero;