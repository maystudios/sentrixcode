import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
const JobFinderHero = () => {
  return (
    <>
      <div className="hero_38">
        <div className="container-fluid">
          <div className="hero_38_wrapper pt-120 pb-5 rounded-2 position-relative z-2">
            <div className="container">
              <div className="row g-4">
                {/* Left Content */}
                <div className="col-lg-8">
                  <div className="d-inline-block home-38-bg-brand-20 px-3 py-1 rounded-pill home-38-color-brand-900 fs-14 fw-semibold">
                    Start Free Trial
                  </div>
                  <h1 className="fs-72 mb-2">
                    Modernizing Job{" "}
                    <span>
                      <img
                        src="/img/home_38/title-img-1.png"
                        alt="Image"
                        className="img-fluid"
                      />
                    </span>{" "}
                    Search{" "}
                    <span className="home-38-color-brand-900">Experience</span>{" "}
                    <span>
                      <img
                        src="/img/home_38/title-img-2.png"
                        alt="Image"
                        className="img-fluid"
                      />
                    </span>
                  </h1>
                  <p className="text-black fs-20 fw-medium fch-55 mb-5">
                    <span className="home-38-color-brand-900 fw-bold">
                      10248
                    </span>{" "}
                    Job Listed Here! The compliant, blazing-fast way to
                    discover, hire and Manage Freelance talent.
                  </p>
                  <div className="row">
                    <div className="col-xxl-8">
                      <form className="digi-newsletter home-38">
                        <div className="position-relative digi-news-form">
                          <input
                            type="text"
                            className="form-control ps-4"
                            placeholder="etc: Search Your Needs"
                          />
                          <button
                            type="button"
                            className="digi-news-button rounded-pill text-black fw-semibold d-flex align-items-center gap-1"
                          >
                            <span>
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M21 21L16.7 16.7M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                                  stroke="#010101"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                            Search
                          </button>
                        </div>
                      </form>
                      <div className="d-flex align-items-center gap-3 flex-wrap flex-md-nowrap mt-4">
                        <p className="text-black fs-14 mb-0">Popular Jobs: </p>
                        <div className="d-flex align-items-center gap-2 flex-wrap">
                          {["Business", "eCommerce", "Health", "Portfolio"].map(
                            (job, index) => (
                              <span
                                key={index}
                                className="d-inline-block btn btn-sm text-black fs-14 fw-medium btn-38-outline rounded-pill"
                              >
                                {job}
                              </span>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Content */}
                <div className="col-lg-4">
                  <img
                    src="/img/home_38/hero_img.png"
                    alt="Image"
                    className="img-fluid"
                  />
                </div>
              </div>

              {/* Trusted Section */}
              <div className="mt-5 mt-xl-0">
                <div className="row align-items-center g-4">
                  <div className="col-lg-2">
                    <h6 className="fs-20 mb-0">Trusted By 1M+ Business</h6>
                  </div>
                  <div className="col-lg-10">
                    <Swiper
                      modules={[Navigation, Pagination, Autoplay]}
                      className="digi-logo-slider"
                      spaceBetween={10}
                      slidesPerView={5}
                      autoplay={{
                        delay: 0, // Set to 0 for continuous autoplay
                        disableOnInteraction: false, // Keeps autoplay running even after user interaction
                      }}
                      speed={3000}
                      loop={true}
                    >
                      {[
                        "logo.png",
                        "logo_2.png",
                        "logo_3.png",
                        "logo_4.png",
                        "logo_5.png",
                        "logo.png",
                      ].map((logo, index) => (
                        <SwiperSlide key={index}>
                          <div className="single-logo">
                            <img
                              src={`/img/creative-agency-2/${logo}`}
                              className="img-fluid"
                              alt="logo"
                              height="30"
                            />
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

export default JobFinderHero;
