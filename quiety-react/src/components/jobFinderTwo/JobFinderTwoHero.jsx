import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
const JobFinderTwoHero = () => {
  return (
    <>
      <section className="hero_39 bg-brand-39 pt-200 pb-80 overflow-hidden">
        <div className="container">
          <div className="row justify-content-center g-4">
            <div className="col-xxl-8">
              <div className="text-center mb-4">
                <h1 className="text-white fs-72 mb-0">
                  Build & Ship a job Board Fast with Quiety
                </h1>
              </div>
              <div className="search_39 rounded-pill mx-auto">
                <form action="" className="search_form_39 rounded-pill">
                  <input
                    type="text"
                    className="form-control px-4 py-3 rounded-pill"
                    placeholder="etc: Search Your Needs"
                  />
                  <div className="content d-flex align-items-center gap-3">
                    <select className="text-white" name="budget" id="budget">
                      <option value="budget1">Web Devleoment</option>
                      <option value="budget1">Web Devleoment</option>
                    </select>
                    <button className="form_btn bg-brand-39-2">
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
                        ></path>
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
              <div className="d-flex justify-content-center">
                <div className="d-flex align-items-center gap-3 flex-wrap flex-md-nowrap mt-4">
                  <p className="text-white fs-14 mb-0">Popular Jobs: </p>
                  <div className="d-flex align-items-center gap-2 flex-wrap">
                    <span className="tag_39 d-inline-block btn btn-sm text-white fs-14 fw-medium border border-white border-opacity-25 rounded-pill">
                      Business
                    </span>
                    <span className="tag_39 d-inline-block btn btn-sm text-white fs-14 fw-medium border border-white border-opacity-25 rounded-pill">
                      eCommerce
                    </span>
                    <span className="tag_39 d-inline-block btn btn-sm text-white fs-14 fw-medium border border-white border-opacity-25 rounded-pill">
                      Health{" "}
                    </span>
                    <span className="tag_39 d-inline-block btn btn-sm text-white fs-14 fw-medium border border-white border-opacity-25 rounded-pill">
                      Portfolio
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-10">
              <div className="position-relative text-center mt-4">
                <img
                  src="/img/home_39/hero_img.png"
                  alt="Image"
                  className="img-fluid"
                />
                <a href="#" className="btn-38-style d-none d-md-flex">
                  <span className="hover-style bg-brand-39-2">
                    <span className="arrow-style">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.21766 15.0584C1.21766 15.0584 7.75258 8.52338 15.2261 1.04991M15.2261 1.04991C9.82726 6.44871 3.31475 1.92927 3.31475 1.92927M15.2261 1.04991C9.82726 6.44871 14.3467 12.9612 14.3467 12.9612"
                          stroke="#010101"
                          strokeWidth="1.42857"
                        ></path>
                      </svg>
                    </span>
                    <span className="arrow-style">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.21766 15.0584C1.21766 15.0584 7.75258 8.52338 15.2261 1.04991M15.2261 1.04991C9.82726 6.44871 3.31475 1.92927 3.31475 1.92927M15.2261 1.04991C9.82726 6.44871 14.3467 12.9612 14.3467 12.9612"
                          stroke="#010101"
                          strokeWidth="1.42857"
                        ></path>
                      </svg>
                    </span>
                  </span>
                </a>
                <img
                  src="/img/home_39/hero_icon.png"
                  alt="Image"
                  className="img-fluid shape d-none d-md-block"
                />
                <img
                  src="/img/home_39/shape_1.png"
                  alt="Image"
                  className="img-fluid shape_2"
                />
              </div>
            </div>
          </div>
          <div className="pt-60">
            <div className="row align-items-center g-4">
              <div className="col-lg-2">
                <h6 className="text-white fs-20 mb-0">
                  Trusted By 1M+ Business
                </h6>
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
      </section>
    </>
  );
};

export default JobFinderTwoHero;
