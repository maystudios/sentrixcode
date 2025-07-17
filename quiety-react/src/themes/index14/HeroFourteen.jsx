import React, { useState } from "react";
import { Link } from "react-router-dom";
import VideoModal from "../../components/common/VideoModal";

export default function HeroFourteen() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="digi-hero ptb-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-6">
            <div className="digi-hero-text mt-5 mt-lg-0">
              <div>
                <span className="span-arrow">Best Digital Agency</span>
                <img src="/img/arro-right.svg" alt="arrow" />
              </div>
              <h1 className="display-5 fw-bold mb-3">
                We Are the
                <span className="text-orange fw-bold">Brilliants</span>
                in Terms of digital Marketing
              </h1>
              <p className="m-0">
                End-to-end payments and financial management in a single
                solution. Meet the right platform to help realize.
              </p>
              <div className="action-btns mt-4 align-items-center d-block d-sm-flex d-lg-flex d-md-flex">
                <VideoModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
                <Link
                  to="/contact-us"
                  className="btn rounded-pill bg-orange me-3"
                >
                  Download Now
                </Link>
                <Link
                  to="#!"
                  onClick={() => setIsOpen(true)}
                  className="text-decoration-none popup-youtube d-inline-flex align-items-center watch-now-btn mt-3 mt-lg-0 mt-md-0"
                >
                  <i className="fas fa-play"></i> How It Works
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-7 cool-md-6">
            <div className="digi-hero-img text-center position-relative mt-5">
              <img
                src="/img/digi-h-girl.jpg"
                className="img-fluid"
                alt="girl"
              />
              <ul className="list-unstyled d-none d-xl-block">
                <li>
                  <img
                    src="/img/digital-marketing/hero-shape-1.png"
                    alt="shape"
                    className=""
                  />
                </li>
                <li>
                  <img
                    src="/img/digital-marketing/hero-shape-2.png"
                    alt="shape"
                  />
                </li>
                <li>
                  <img
                    src="/img/digital-marketing/hero-shape-3.png"
                    alt="shape"
                  />
                </li>
                <li>
                  <img
                    src="/img/digital-marketing/hero-shape-4.png"
                    alt="shape"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
