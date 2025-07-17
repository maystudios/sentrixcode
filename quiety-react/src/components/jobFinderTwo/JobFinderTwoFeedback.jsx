import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
const JobFinderTwoFeedback = () => {
  const feedbacks = [
    {
      text: "The financial analysis and reporting services provided by Fenix have been instrumental in helping us make strategic decisions & drive profitability. Their team's expertise and attention to detail have exceeded our expectations",
      author: "Chauffina Carr",
      role: "Founder",
      image: "/img/testimonial/app-testimonial-2.png",
    },
    {
      text: "It's really easy to use. It makes us look professional and I love the way you can customize your job posts and make them your own. Simple to use and straightforward.",
      author: "Chauffina Carr",
      role: "Founder",
      image: "/img/testimonial/app-testimonial-2.png",
    },
    {
      text: "The career page we've built in Homerun gives candidates a great first impression of the company.",
      author: "Chauffina Carr",
      role: "Founder",
      image: "/img/testimonial/app-testimonial-2.png",
    },
    {
      text: "It's really easy to use. It makes us look professional and I love the way you can customize your job posts and make them your own.",
      author: "Chauffina Carr",
      role: "Founder",
      image: "/img/testimonial/app-testimonial-2.png",
    },
    {
      text: "The financial analysis and reporting services provided by Fenix have been instrumental in helping us make strategic decisions & drive profitability. Their team's expertise and attention to detail have exceeded our expectations",
      author: "Chauffina Carr",
      role: "Founder",
      image: "/img/testimonial/app-testimonial-2.png",
    },
    {
      text: "It's really easy to use. It makes us look professional and I love the way you can customize your job posts and make them your own. Simple to use and straightforward.",
      author: "Chauffina Carr",
      role: "Founder",
      image: "/img/testimonial/app-testimonial-2.png",
    },
  ];
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="bg-brand-39-3 ptb-120 px-3">
                <div className="overflow-hidden">
                  <div className="row justify-content-center">
                    <div className="col-xl-7 col-xxl-6">
                      <div className="text-center mb-40">
                        <h2 className="home-38-title fs-48 mb-3">
                          Why teams love Quiety’s Hiring Software
                        </h2>
                        <p className="mb-4">
                          <span className="text-black fw-bold">
                            Quiety’s Customers
                          </span>{" "}
                          share a passion for nurturing company culture. We all
                          agree hiring can be more meaningful and personal.
                        </p>
                        <a
                          href="#"
                          className="btn btn-light bg-brand-39-2 text-black fw-medium rounded-5"
                        >
                          About Our Customers
                        </a>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="feedback_39_slider">
                        <Swiper
                          modules={[Navigation, Autoplay]}
                          spaceBetween={24}
                          speed={1000}
                          autoplay={{
                            delay: 2500,
                          }}
                          slidesPerGroup={1}
                          loop={true}
                          navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                          }}
                          breakpoints={{
                            768: {
                              slidesPerView: 2,
                              spaceBetween: 30,
                            },
                            992: {
                              slidesPerView: 3,
                            },
                            1200: {
                              slidesPerView: 4,
                            },
                          }}
                        >
                          {feedbacks.map((feedback, index) => (
                            <SwiperSlide key={index}>
                              <div className="bg-white px-4 py-4 rounded-3 shadow-sm">
                                <p className="text-black fs-18 mb-4">
                                  {feedback.text}
                                </p>
                                <div className="d-flex align-items-center">
                                  <img
                                    src={feedback.image}
                                    className="img-fluid me-3 rounded-circle"
                                    width="50"
                                    alt={feedback.author}
                                  />
                                  <div className="author-info">
                                    <h6 className="mb-0">{feedback.author}</h6>
                                    <small>{feedback.role}</small>
                                  </div>
                                </div>
                              </div>
                            </SwiperSlide>
                          ))}
                        </Swiper>

                        {/* Navigation Buttons */}
                        <div className="d-flex align-items-center justify-content-center gap-7 mt-5 position-relative">
                          <div
                            className="swiper-button-prev home-38-slider-nav"
                            style={{ position: "inherit" }}
                          >
                            <span className="text-black">
                              <i className="fa-solid fa-chevron-left"></i>
                            </span>
                          </div>
                          <div
                            className="swiper-button-next home-38-slider-nav"
                            style={{ position: "inherit" }}
                          >
                            <span className="text-black">
                              <i className="fa-solid fa-chevron-right"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default JobFinderTwoFeedback;
