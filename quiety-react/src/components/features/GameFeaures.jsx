import React from "react";

export default function GameFeatures() {
  return (
    <section className="ptb-120 overflow-hidden position-relative">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title mb-5 text-center">
              <h2 className="text-white">An Amazing Control Panel</h2>
              <p className="text-off-white">
                Give your Website the speed, security, and uptime it deserves
                and become part of the fastest Web Hosting.
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-12 col-sm-12">
            <div className="game-features mb-5 mb-lg-0">
              <div className="game-feature d-flex align-items-center mb-4">
                <div className="game-feature-icon flex-shrink-0">
                  <img src="/img/ti1.png" className="img-fluid" alt="" />
                </div>
                <div className="ms-3">
                  <h5 className="text-white">Easy Configuration</h5>
                  <p className="m-0 text-off-white">
                    Drop down menus and elegant sliders configuring server a
                    pleasure.
                  </p>
                </div>
              </div>
              <div className="game-feature d-flex align-items-center mb-4">
                <div className="game-feature-icon flex-shrink-0">
                  <img src="/img/ti2.png" className="img-fluid" alt="" />
                </div>
                <div className="ms-3">
                  <h5 className="text-white">Hostim For Experts</h5>
                  <p className="m-0 text-off-white">
                    Experts can utilize our text editors and full FTP access to
                    if they choose.
                  </p>
                </div>
              </div>
              <div className="game-feature d-flex align-items-center">
                <div className="game-feature-icon flex-shrink-0">
                  <img src="/img/ti3.png" className="img-fluid" alt="" />
                </div>
                <div className="ms-3">
                  <h5 className="text-white">Best Sub Users</h5>
                  <p className="m-0 text-off-white">
                    Experts can utilize our text editors and full FTP access to
                    if they choose.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-12 col-sm-12">
            <div className="game-feature-img position-relative">
              <img
                src="/img/ti-img.png"
                className="img-fluid position-relative z-5"
                alt="laptop"
              />
              <img
                src="/img/ellipse.png"
                className="feature-ellipse"
                alt="ellipse"
              />
            </div>
          </div>
        </div>
      </div>
      <img
        src="/img/big-circle.png"
        className="big-circle img-fluid"
        alt="circle"
      />
    </section>
  );
}
