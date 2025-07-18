import React, { useState } from "react";

import { Link } from "react-router-dom";
import VideoModal from "../common/VideoModal";

const CyberVideoPromo = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="counter-with-video pt-60 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div
              className="cyber-video-img"
              style={{
                background:
                  "url('/img/video_bg.png')no-repeat center top/cover",
              }}
            >
              <VideoModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
              <Link
                to="#"
                className="video-icon popup-youtube popup-video-btn text-decoration-none"
                onClick={() => setIsOpen(true)}
              >
                <i className="fas fa-play"></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mt-5 mt-lg-0">
              <div className="section-heading mb-5">
                <h5 className="h6 text-primary">Protect to your life</h5>
                <h2>
                  Partner With One of the Premier as Cyber security Provider
                </h2>
                <p>
                  If you use this site regularly and would like to help keep the
                  site on the Internet, please consider donating a small sum to
                  help pay for the hosting and bandwidth bill
                </p>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="bg-white p-4 cyber-count-box mb-30 mb-lg-0">
                    <h2 className="text-primary">50k+</h2>
                    <h5 className="h-6">Happy Clients</h5>
                    <p>
                      If you use this is regularly keephosting bandwidth bill
                      nostrud amet.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="bg-white p-4 cyber-count-box">
                    <h2 className="text-primary">7 k+</h2>
                    <h5 className="h-6">Success Project</h5>
                    <p>
                      If you use this si regularly keephosting bandwidth bill
                      nostrud amet.
                    </p>
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

export default CyberVideoPromo;
