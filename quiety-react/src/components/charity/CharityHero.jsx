import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { useState } from "react";
import VideoModal from "../helpDeskHome/VideoModal";

const CharityHero = () => {
  const sliderData = [
    {
      imgSrc: "/img/home_40/hero_img.png",
      donations: "$2,500, $10,000",
      title: "Help The Ecosystems To Heal it Selfe in Uganda",
      buttonText: "Donate",
    },
    {
      imgSrc: "/img/home_40/hero_img.png",
      donations: "$2,500, $10,000",
      title: "Help The Ecosystems To Heal it Selfe in Uganda",
      buttonText: "Donate",
    },
    {
      imgSrc: "/img/home_40/hero_img.png",
      donations: "$2,500, $10,000",
      title: "Help The Ecosystems To Heal it Selfe in Uganda",
      buttonText: "Donate",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isOpen && <VideoModal setIsOpen={setIsOpen} isOpen={isOpen} />}
      <section class="hero_40 pt-200 pb-80 ">
        <div class="container">
          <div class="row">
            <div class="col-xl-8">
              <div class="d-inline-block bg-primary px-3 py-1 rounded-pill text-white fs-14 fw-semibold mb-3">
                Start Free Trial
              </div>
              <h1 class="text-white fs-64 mb-2">
                Make Opportunity Universal & Sustainable
              </h1>
              <p class="fs-20 text-white text-opacity-75 fch-55 mb-6">
                We work towards ensuring a life free from inequality and
                discrimination for every children. Depending on the delivery
                option you easy-flowing.
              </p>
              <a
                type="button"
                onClick={() => setIsOpen(true)}
                class="icon-box d-inline-block mb-0 text-white fw-600 popup-youtube d-flex align-items-center gap-3"
              >
                <i class="fas fa-play ma-warning-bg text-white rounded-circle"></i>{" "}
                How it Work
              </a>
            </div>
          </div>
          <div class="pt-xl-10 pt-5">
            <div class="row">
              <div class="col-xl-6">
                <img
                  src="/img/home_40/user_img.png"
                  alt="Image"
                  class="img-fluid mb-4"
                />
                <p class="text-white fs-18 fch-30 mb-0">
                  We work towards{" "}
                  <span class="ma-warning-text fw-bold">ensuring a life</span>{" "}
                  free from inequality.
                </p>
              </div>
              <div className="col-xl-6">
                <div className="ps-xxl-5">
                  <Swiper
                    modules={[Pagination, Navigation]}
                    loop={true}
                    pagination={{
                      clickable: true,
                      el: ".risk-slider__pagination",
                    }}
                    spaceBetween={30}
                    slidesPerView={1}
                    className="hero_40_slider"
                  >
                    {sliderData.map((slide, index) => (
                      <SwiperSlide key={index}>
                        <div className="hero_slider_card p-4 rounded-4">
                          <div className="d-flex align-items-center gap-4 flex-wrap flex-sm-nowrap">
                            <img
                              src={slide.imgSrc}
                              alt="Image"
                              className="img-fluid rounded-circle"
                            />
                            <div>
                              <p className="text-white-70 mb-2">
                                Donations:{" "}
                                <span className="fw-semibold">
                                  <span className="text-warning">
                                    {slide.donations}
                                  </span>
                                </span>
                              </p>
                              <a href="">
                                <h6 className="text-white fs-20 mb-4">
                                  {slide.title}
                                </h6>
                              </a>
                              <a
                                href="#"
                                className="ma-warning-bg px-4 py-2 fw-medium rounded-5 d-inline-flex align-items-center gap-2 text-white"
                              >
                                {slide.buttonText}{" "}
                                <span>
                                  <i className="fa-solid fa-arrow-right"></i>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="risk-slider__controls hero_40_slider_controls">
                    <div className="risk-slider__pagination"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CharityHero;
