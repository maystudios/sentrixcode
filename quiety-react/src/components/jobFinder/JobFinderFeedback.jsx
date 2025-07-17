import React, { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
const JobFinderFeedback = () => {
  const feedbacks = [
    {
      rating: 5,
      text: "Our AI image solutions have exceeded our Customers' invite them to projects, sign contracts and kick off the expectations. they appreciate the Here's a opportunities. Onboard your own talent pool to Quitey, simpler than ever.",
      name: "Logan Jon Deo",
      position: "Director at Webflow",
      imgSrc: "/img/software-company/client-md-1.png",
    },
    {
      rating: 5,
      text: "Our AI image solutions have exceeded our Customers' invite them to projects, sign contracts and kick off the expectations. they appreciate the Here's a opportunities. Onboard your own talent pool to Quitey, simpler than ever.",
      name: "Logan Jon Deo",
      position: "Director at Webflow",
      imgSrc: "/img/software-company/client-md-1.png",
    },
    {
      rating: 5,
      text: "Our AI image solutions have exceeded our Customers' invite them to projects, sign contracts and kick off the expectations. they appreciate the Here's a opportunities. Onboard your own talent pool to Quitey, simpler than ever.",
      name: "Logan Jon Deo",
      position: "Director at Webflow",
      imgSrc: "/img/software-company/client-md-1.png",
    },
    {
      rating: 5,
      text: "Our AI image solutions have exceeded our Customers' invite them to projects, sign contracts and kick off the expectations. they appreciate the Here's a opportunities. Onboard your own talent pool to Quitey, simpler than ever.",
      name: "Logan Jon Deo",
      position: "Director at Webflow",
      imgSrc: "/img/software-company/client-md-1.png",
    },
    // Add more feedback objects here
  ];
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <>
      <div className="overflow-hidden">
        <div className="container-fluid">
          <div className="feedback-38-wrapper ptb-120 rounded-3">
            <div className="container">
              <div className="row g-4">
                <div className="col-xl-5">
                  <div className="h-100 d-flex flex-column justify-content-between gap-3">
                    <div>
                      <h2 className="home-38-title text-white fs-48 mb-1">
                        Reviewed by the Community. Trusted by{" "}
                        <span className="home-38-color-brand-900">
                          Professionals
                        </span>
                      </h2>
                    </div>
                    <div className="d-flex align-items-center gap-7 position-relative">
                      <div
                        ref={prevRef}
                        className="swiper-button-prev home-38-slider-nav  "
                        style={{ position: "inherit" }}
                      >
                        <span>
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M19.2493 19.0348C19.2493 19.0348 10.8846 10.6699 1.31855 1.1039M1.31855 1.1039C8.22901 8.01436 16.565 2.22949 16.565 2.22949M1.31855 1.1039C8.22901 8.01436 2.44414 16.3504 2.44414 16.3504"
                              stroke="#010101"
                              strokeWidth="1.82857"
                            />
                          </svg>
                        </span>
                      </div>
                      <div
                        ref={nextRef}
                        className="swiper-button-next home-38-slider-nav"
                        style={{ position: "inherit" }}
                      >
                        <span>
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0.918644 19.0348C0.918644 19.0348 9.28334 10.6699 18.8494 1.1039M18.8494 1.1039C11.9389 8.01436 3.60291 2.22949 3.60291 2.22949M18.8494 1.1039C11.9389 8.01436 17.7238 16.3504 17.7238 16.3504"
                              stroke="#010101"
                              strokeWidth="1.82857"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-7">
                  <div className="feedback-38-slider-wrapper">
                    <Swiper
                      modules={[Navigation, Pagination, Autoplay]}
                      spaceBetween={30}
                      onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                      }}
                      autoplay={true}
                      speed={2000}
                      loop={true}
                      breakpoints={{
                        320: {
                          slidesPerView: 1,
                          spaceBetween: 30,
                        },
                        992: {
                          slidesPerView: 2,
                        },
                        1200: {
                          slidesPerView: 3,
                        },
                      }}
                    >
                      {feedbacks.map((feedback, index) => (
                        <SwiperSlide key={index}>
                          <div className="bg-white p-4 rounded-3">
                            <ul className="list-unstyled d-flex align-items-center gap-1">
                              {[...Array(feedback.rating)].map((_, i) => (
                                <li key={i} className="text-warning">
                                  <i className="fa-sharp fa-solid fa-star"></i>
                                </li>
                              ))}
                            </ul>
                            <p className="fs-20 fw-medium mb-5">
                              {feedback.text}
                            </p>
                            <div className="d-flex align-items-center gap-3">
                              <img src={feedback.imgSrc} alt={feedback.name} />
                              <div className="ail-content">
                                <h6 className="mb-0">{feedback.name}</h6>
                                <p className="fs-14 ff-dmsans mb-0">
                                  {feedback.position}
                                </p>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobFinderFeedback;
