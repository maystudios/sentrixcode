import React, { useEffect } from "react";

const CharityFeedback = () => {
  useEffect(() => {
    // Select all scroller-y elements
    const scrollersY = document.querySelectorAll(".scroller-y");

    scrollersY.forEach((scroller) => {
      scroller.setAttribute("data-animated", true);
      const scrollerInner = scroller.querySelector(".scroller-y__list");
      const scrollerContent = Array.from(scrollerInner.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }, []); // Empty dependency array means it only runs once after the component mounts.

  return (
    <section className="home-40-brand-bg pt-120 position-relative z-2">
      <img
        src="/img/home_40/feedback_shape.png"
        alt="Image"
        className="img-fluid position-absolute bottom-0 left-0 z--1"
      />
      <div className="container">
        <div className="row g-4">
          <div className="col-xl-5">
            <div className="d-inline-block px-4 py-1 rounded-pill border border-warning mb-3">
              <p className="ma-warning-text fw-bold mb-0">Our Testimonials</p>
            </div>
            <h2 className="home-38-title fs-48 mb-3">
              Let the Numbers Speak for themselves
            </h2>
            <p className="mb-4">
              Discover the Power of Testimonials: Learn How Our Movement is
              Making an Impact, One Voice at a Time!
            </p>
            <a
              href="#"
              className="btn btn-warning ma-warning-bg fw-medium rounded-5 d-inline-flex align-items-center gap-2 text-white"
            >
              Donate Now{" "}
              <span>
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </a>
          </div>
          <div className="col-xl-7">
            <div className="feedback_wrapper_40">
              <div className="row g-4">
                <div className="col-sm-6">
                  <div className="scroller_wrapper overflow-hidden">
                    <div
                      className="scroller-y"
                      data-direction="top"
                      data-speed="slow"
                      data-animated="true"
                    >
                      <ul className="list gap-5 scroller-y__list">
                        <li>
                          <div className="bg-white p-4 rounded-4">
                            <div className="d-flex align-items-center gap-4 mb-3">
                              <img
                                src="/img/home_40/feedback_people.png"
                                alt="Image"
                                className="img-fluid"
                              />
                              <div className="mt-2">
                                <h6 className="mb-0">Emily Johnson</h6>
                                <p className="ma-warning-text mb-0">
                                  Environmental Activist
                                </p>
                              </div>
                            </div>
                            <p className="text-black mb-0">
                              This initiative has truly inspired me to take
                              action and make a difference in our environment.
                              Together, we can create a sustainable future.
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="bg-white p-4 rounded-4">
                            <div className="d-flex align-items-center gap-4 mb-3">
                              <img
                                src="/img/home_40/feedback_people.png"
                                alt="Image"
                                className="img-fluid"
                              />
                              <div className="mt-2">
                                <h6 className="mb-0">Emily Johnson</h6>
                                <p className="ma-warning-text mb-0">
                                  Environmental Activist
                                </p>
                              </div>
                            </div>
                            <p className="text-black mb-0">
                              This initiative has truly inspired me to take
                              action and make a difference in our environment.
                              Together, we can create a sustainable future.
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="bg-white p-4 rounded-4">
                            <div className="d-flex align-items-center gap-4 mb-3">
                              <img
                                src="/img/home_40/feedback_people.png"
                                alt="Image"
                                className="img-fluid"
                              />
                              <div className="mt-2">
                                <h6 className="mb-0">Emily Johnson</h6>
                                <p className="ma-warning-text mb-0">
                                  Environmental Activist
                                </p>
                              </div>
                            </div>
                            <p className="text-black mb-0">
                              This initiative has truly inspired me to take
                              action and make a difference in our environment.
                              Together, we can create a sustainable future.
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="bg-white p-4 rounded-4">
                            <div className="d-flex align-items-center gap-4 mb-3">
                              <img
                                src="/img/home_40/feedback_people.png"
                                alt="Image"
                                className="img-fluid"
                              />
                              <div className="mt-2">
                                <h6 className="mb-0">Emily Johnson</h6>
                                <p className="ma-warning-text mb-0">
                                  Environmental Activist
                                </p>
                              </div>
                            </div>
                            <p className="text-black mb-0">
                              This initiative has truly inspired me to take
                              action and make a difference in our environment.
                              Together, we can create a sustainable future.
                            </p>
                          </div>
                        </li>
                        {/* Repeat the <li> element for more items */}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="scroller_wrapper overflow-hidden d-none d-sm-block">
                    <div
                      className="scroller-y"
                      data-direction="bottom"
                      data-speed="slow"
                      data-animated="true"
                    >
                      <ul className="list gap-5 scroller-y__list">
                        <li>
                          <div className="bg-white p-4 rounded-4">
                            <div className="d-flex align-items-center gap-4 mb-3">
                              <img
                                src="/img/home_40/feedback_people.png"
                                alt="Image"
                                className="img-fluid"
                              />
                              <div className="mt-2">
                                <h6 className="mb-0">Emily Johnson</h6>
                                <p className="ma-warning-text mb-0">
                                  Environmental Activist
                                </p>
                              </div>
                            </div>
                            <p className="text-black mb-0">
                              This initiative has truly inspired me to take
                              action and make a difference in our environment.
                              Together, we can create a sustainable future.
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="bg-white p-4 rounded-4">
                            <div className="d-flex align-items-center gap-4 mb-3">
                              <img
                                src="/img/home_40/feedback_people.png"
                                alt="Image"
                                className="img-fluid"
                              />
                              <div className="mt-2">
                                <h6 className="mb-0">Emily Johnson</h6>
                                <p className="ma-warning-text mb-0">
                                  Environmental Activist
                                </p>
                              </div>
                            </div>
                            <p className="text-black mb-0">
                              This initiative has truly inspired me to take
                              action and make a difference in our environment.
                              Together, we can create a sustainable future.
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="bg-white p-4 rounded-4">
                            <div className="d-flex align-items-center gap-4 mb-3">
                              <img
                                src="/img/home_40/feedback_people.png"
                                alt="Image"
                                className="img-fluid"
                              />
                              <div className="mt-2">
                                <h6 className="mb-0">Emily Johnson</h6>
                                <p className="ma-warning-text mb-0">
                                  Environmental Activist
                                </p>
                              </div>
                            </div>
                            <p className="text-black mb-0">
                              This initiative has truly inspired me to take
                              action and make a difference in our environment.
                              Together, we can create a sustainable future.
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="bg-white p-4 rounded-4">
                            <div className="d-flex align-items-center gap-4 mb-3">
                              <img
                                src="/img/home_40/feedback_people.png"
                                alt="Image"
                                className="img-fluid"
                              />
                              <div className="mt-2">
                                <h6 className="mb-0">Emily Johnson</h6>
                                <p className="ma-warning-text mb-0">
                                  Environmental Activist
                                </p>
                              </div>
                            </div>
                            <p className="text-black mb-0">
                              This initiative has truly inspired me to take
                              action and make a difference in our environment.
                              Together, we can create a sustainable future.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharityFeedback;
