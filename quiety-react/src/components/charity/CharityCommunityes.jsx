const CharityCommunityes = () => {
  return (
    <>
      <section className="com_40 pt-120">
        <div className="container">
          <div className="position-relative pb-120 z-1">
            {/* Background Images */}
            <img
              src="/img/home_40/img_v_1.png"
              alt="Image"
              className="img-fluid position-absolute top-0 left-0 z--1 d-none d-xl-block"
            />
            <img
              src="/img/home_40/img_v_2.png"
              alt="Image"
              className="img-fluid position-absolute bottom-0 right-0 z--1 d-none d-xl-block"
            />

            {/* Content */}
            <div className="row justify-content-center">
              <div className="col-xl-6">
                <div className="text-center pt-60">
                  <h3 className="text-black fw-semibold fs-36 flh-44 mb-3">
                    Join us in the Journey to Empower Communities & Transform
                    lives.
                  </h3>
                  <p className="h1 fs_90 mb-4">139,364+</p>
                  <a
                    href="#"
                    className="btn btn-warning ma-warning-bg fw-medium rounded-5 d-inline-flex align-items-center gap-2 text-white"
                  >
                    Join Our Organization{" "}
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
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

export default CharityCommunityes;
