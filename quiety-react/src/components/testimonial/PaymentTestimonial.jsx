import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export default function PaymentTestimonial() {
  const swiperOption = {
    slidesPerView: 2,
    spaceBetween: 24,
    speed: 1000,
    autoplay: {
      delay: 3000,
    },
    slidesPerGroup: 1,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  };
  return (
    <section className="payment-testimonial bg-white-light ptb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="text-center mb-5">
              <h2 className="mb-3">Trusted Customers Are Saying.</h2>
              <p className="m-0">
                Globally envisioneer an expanded array of methods of empowerment
                and out-of-the-box ideas. Completely deliver open-source
                strategic theme.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Swiper {...swiperOption} className="payment-testimonial-slider">
              <SwiperSlide>
                <div className="single-payment-testimonial bg-white py-5 px-4 rounded-custom">
                  <img
                    src="/img/testimonial/quotes-p.svg"
                    className="mb-4"
                    alt="quotes"
                  />
                  <h5 className="mb-3">Absolutely Superb!</h5>
                  <p className="mb-3">
                    Synergistically integrate dynamic solutions vis-a-vis
                    resource maximizing ROI. Appropriately target leadership.
                    Interactively orchestrate open-source mindshare without
                    emerging web services.
                  </p>
                  <ul className="list-unstyled rating-list list-inline mb-4">
                    <li className="list-inline-item">
                      <i className="fas fa-star text-warning"></i>
                    </li>
                    <li className="list-inline-item">
                      <i className="fas fa-star text-warning"></i>
                    </li>
                    <li className="list-inline-item">
                      <i className="fas fa-star text-warning"></i>
                    </li>
                    <li className="list-inline-item">
                      <i className="fas fa-star text-warning"></i>
                    </li>
                    <li className="list-inline-item">
                      <i className="fas fa-star text-warning"></i>
                    </li>
                  </ul>
                  <div className="payment-t-author d-flex align-items-center">
                    <div className="payment-auth-img me-3">
                      <img src="/img/testimonial/tp-1.png" alt="author" />
                    </div>
                    <div className="payment-auth-info">
                      <h5 className="h6 m-0">Leslie Alexander</h5>
                      <small>Design Director </small>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="single-payment-testimonial bg-white py-5 px-4 rounded-custom">
                  <img
                    src="/img/testimonial/quotes-p.svg"
                    className="mb-4"
                    alt="quotes"
                  />
                  <h5 className="mb-3">Amazing Service!</h5>
                  <p className="mb-3">
                    Synergistically integrate dynamic solutions vis-a-vis
                    resource maximizing ROI. Appropriately target leadership.
                    Interactively orchestrate open-source mindshare without
                    emerging web services.
                  </p>
                  <ul className="list-unstyled rating-list list-inline mb-4">
                    <li className="list-inline-item">
                      <i className="fas fa-star text-warning"></i>
                    </li>
                    <li className="list-inline-item">
                      <i className="fas fa-star text-warning"></i>
                    </li>
                    <li className="list-inline-item">
                      <i className="fas fa-star text-warning"></i>
                    </li>
                    <li className="list-inline-item">
                      <i className="fas fa-star text-warning"></i>
                    </li>
                    <li className="list-inline-item">
                      <i className="fas fa-star text-warning"></i>
                    </li>
                  </ul>
                  <div className="payment-t-author d-flex align-items-center">
                    <div className="payment-auth-img me-3">
                      <img src="/img/testimonial/tp-2.png" alt="author" />
                    </div>
                    <div className="payment-auth-info">
                      <h5 className="h6 m-0">Leslie Alexander</h5>
                      <small>Design Director </small>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" single-payment-testimonial bg-white py-5 px-4 rounded-custom">
                  <img
                    src="/img/testimonial/quotes-p.svg"
                    className="mb-4"
                    alt="quotes"
                  />
                  <h5 className="mb-3">Amaizing Support!</h5>
                  <p className="mb-3">
                    Synergistically integrate dynamic solutions vis-a-vis
                    resource maximizing ROI. Appropriately target leadership.
                    Interactively orchestrate open-source mindshare without
                    emerging web services.
                  </p>
                  <ul className="list-unstyled rating-list list-inline mb-4">
                    <li className="list-inline-item">
                      <i className="fas fa-star text-warning"></i>
                    </li>
                    <li className="list-inline-item">
                      <i className="fas fa-star text-warning"></i>
                    </li>
                    <li className="list-inline-item">
                      <i className="fas fa-star text-warning"></i>
                    </li>
                    <li className="list-inline-item">
                      <i className="fas fa-star text-warning"></i>
                    </li>
                    <li className="list-inline-item">
                      <i className="fas fa-star text-warning"></i>
                    </li>
                  </ul>
                  <div className="payment-t-author d-flex align-items-center">
                    <div className="payment-auth-img me-3">
                      <img src="/img/testimonial/tp-3.png" alt="author" />
                    </div>
                    <div className="payment-auth-info">
                      <h5 className="h6 m-0">Leslie Alexander</h5>
                      <small>Design Director </small>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
