const JobFinderTwoBrand = () => {
  const logoImages = [
    "/img/home_39/slide_logo_1.png",
    "/img/home_39/slide_logo_2.png",
    "/img/home_39/slide_logo_3.png",
    "/img/home_39/slide_logo_4.png",
    "/img/home_39/slide_logo_5.png",
    "/img/home_39/slide_logo_6.png",
    "/img/home_39/slide_logo_7.png",
  ];
  return (
    <>
      <section className="pt-60 pb-60">
        <div className="container">
          <div className="row g-3">
            <div className="col-lg-8">
              <div className="bg-dark rounded-4 overflow-hidden pb-4">
                <div className="p-4">
                  <div className="d-flex align-items-center justify-content-between gap-3 flex-wrap">
                    <h5 className="text-white fs-36 fch-20 mb-0">
                      Integrations with your Favorite Apps
                    </h5>
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
                  </div>
                </div>
                {/*  */}
                <div
                  className="scroller-x mt-1"
                  data-direction="left"
                  data-speed="slow"
                >
                  <ul className="list-unstyled p-0 m-0 d-flex gap-4 scroller-x__list">
                    {logoImages.concat(logoImages).map((src, index) => (
                      <li key={index}>
                        <img src={src} alt="image" className="img-fluid" />
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className="scroller-x mt-1"
                  data-direction="right"
                  data-speed="slow"
                >
                  <ul className="list-unstyled p-0 m-0 d-flex gap-4 scroller-x__list">
                    {logoImages.concat(logoImages).map((src, index) => (
                      <li key={index}>
                        <img src={src} alt="image" className="img-fluid" />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="bg-brand-39-3 p-4 rounded-4 h-100 d-flex flex-column justify-content-between gap-3 ">
                <div className="text-center">
                  <a
                    href="#"
                    className="d-inline-block bg-black px-3 py-1 rounded-pill text-white fs-14 fw-medium"
                  >
                    Career
                  </a>
                  <h6 className="fs-28 mb-4 mt-3">
                    Join to Help Businesses for Growth
                  </h6>
                  <p className="mb-0">
                    Post your job today and quickly connect with top talent.{" "}
                  </p>
                </div>
                <div className="text-center">
                  <a
                    href="#"
                    className="btn btn-sm btn-light bg-brand-39-2 text-black fw-medium rounded-5"
                  >
                    Post Job On Quiety
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobFinderTwoBrand;
