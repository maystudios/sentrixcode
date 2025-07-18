import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";

export default function DigiIntegration() {
  const swiperOption = {
    slidesPerView: 1,
    loop: true,
    speed: 700,
    autoplay: {
      delay: 2000,
    },
    navigation: {
      nextEl: ".digi-nav-control .swiper-button-next",
      prevEl: ".digi-nav-control .swiper-button-prev",
    },
  };
  return (
    <section
      className="digi-integration bg-dark position-relative"
      style={{
        background: "url('/img/page-header-bg.svg')no-repeat center bottom",
      }}
    >
      <div className="digi-testimonial">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="text-center mb-5">
                <div>
                  <span className="span-arrow text-pink">Custome Feedback</span>
                  <img
                    src="/img/arro-right.svg"
                    className="img-fluid"
                    alt="arrow"
                  />
                </div>
                <h2 className="text-dark">
                  Hear what our <span className="text-pink">amazing</span>
                  customers say
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="position-relative">
                <Swiper
                  {...swiperOption}
                  modules={[Navigation]}
                  className="digi-testimonial-wrapper"
                >
                  <SwiperSlide>
                    <div className="d-md-flex align-items-center digi-testimonial-single border bg-white shadow-lg">
                      <div className="text-center text-md-start">
                        <img
                          src="/img/digi-t-1.png"
                          className="me-md-4 mb-4 mb-md-0"
                          alt="Person"
                        />
                      </div>
                      <div>
                        <h5 className="mb-3">
                          "Agency X helped us to reach our business goals"
                        </h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Vitae, aliquet duis pellentesque pretium mattis
                          orci. Vestibulum nunc diam tellus ac tempor. Nulla a
                          commod.
                        </p>
                        <h6 className="m-0">Kyle Johnston</h6>
                        <span className="text-orange fs-sm text-muted">
                          Founder & CEO
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="d-md-flex align-items-center digi-testimonial-single border bg-white shadow-lg">
                      <div className="text-center text-md-start">
                        <img
                          src="/img/digi-t-1.png"
                          className="me-md-4 mb-4 mb-md-0"
                          alt="Person"
                        />
                      </div>
                      <div>
                        <h5 className="mb-3">
                          "Agency X helped us to reach our business goals"
                        </h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Vitae, aliquet duis pellentesque pretium mattis
                          orci. Vestibulum nunc diam tellus ac tempor. Nulla a
                          commod.
                        </p>
                        <h6 className="m-0">Kyle Johnston</h6>
                        <span className="text-orange fs-sm text-muted">
                          Founder & CEO
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="d-md-flex align-items-center digi-testimonial-single border bg-white shadow-lg">
                      <div className="text-center text-md-start">
                        <img
                          src="/img/digi-t-1.png"
                          className="me-md-4 mb-4 mb-md-0"
                          alt="Person"
                        />
                      </div>
                      <div>
                        <h5 className="mb-3">
                          "Agency X helped us to reach our business goals"
                        </h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Vitae, aliquet duis pellentesque pretium mattis
                          orci. Vestibulum nunc diam tellus ac tempor. Nulla a
                          commod.
                        </p>
                        <h6 className="m-0">Kyle Johnston</h6>
                        <span className="text-orange fs-sm text-muted">
                          Founder & CEO
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div className="digi-nav-control">
                  <span className="swiper-button-prev shadow-sm">
                    <i className="far fa-arrow-left"></i>
                  </span>
                  <span className="swiper-button-next shadow-sm">
                    <i className="far fa-arrow-right"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-3">
            <div className="int-icon-one position-relative">
              <ul className="list-unstyled mb-0 d-none d-lg-block">
                <li>
                  <img
                    src="/img/digital-marketing/int-icon/fa.svg"
                    alt="icon"
                  />
                </li>
                <li>
                  <img
                    src="/img/digital-marketing/int-icon/fi.svg"
                    alt="icon"
                  />
                </li>
                <li>
                  <img
                    src="/img/digital-marketing/int-icon/slack.svg"
                    alt="icon"
                  />
                </li>
                <li>
                  <img
                    src="/img/digital-marketing/int-icon/inst.svg"
                    alt="icon"
                  />
                </li>
                <li>
                  <img
                    src="/img/digital-marketing/int-icon/er.svg"
                    alt="icon"
                  />
                </li>
                <li>
                  <img
                    src="/img/digital-marketing/int-icon/google.svg"
                    alt="icon"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="text-center">
              <div>
                <span className="span-arrow text-pink">
                  Intergration Software{" "}
                </span>
                <img src="/img/arro-right.svg" alt="arrow" />
              </div>
              <h2 className="mb-4">
                Intergrated with 20+ Widely Used Software
              </h2>
              <div>
                <a
                  href="contact-us.html"
                  className="btn rounded-pill bg-orange me-3 mb-3"
                >
                  Get in touch
                </a>
                <a
                  href="integrations.html"
                  className="btn rounded-pill btn-outline-light mb-3"
                >
                  Browse all integration
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="int-icon-two position-relative">
              <ul className="list-unstyled mb-0 d-none d-lg-block">
                <li>
                  <img
                    src="/img/digital-marketing/int-icon/slash.svg"
                    alt="icon"
                  />
                </li>
                <li>
                  <img
                    src="/img/digital-marketing/int-icon/tree.svg"
                    alt="icon"
                  />
                </li>
                <li>
                  <img
                    src="/img/digital-marketing/int-icon/drive.svg"
                    alt="icon"
                  />
                </li>
                <li>
                  <img
                    src="/img/digital-marketing/int-icon/in.svg"
                    alt="icon"
                  />
                </li>
                <li>
                  <img
                    src="/img/digital-marketing/int-icon/star.svg"
                    alt="icon"
                  />
                </li>
                <li>
                  <img
                    src="/img/digital-marketing/int-icon/twi.svg"
                    alt="icon"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
