import { Link } from "react-router-dom";

import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import VideoModal from "../common/VideoModal";

const HelpDeskCta = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <VideoModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <section className="hd-cta-section pb-120">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="hd-cta-box bg-danger-subtle position-relative z-1 overflow-hidden">
                <img
                  src="/img/shape/box-shape.png"
                  alt="box shape"
                  className="box-shape z--1 position-absolute"
                />
                <img
                  src="/img/shape/box-shape.png"
                  alt="box shape"
                  className="box-shape-2 z--1 position-absolute"
                />
                <div className="hd-cta-box-content">
                  <div className="hd-title text-center">
                    <h2 className="mb-0 clr-text">
                      We're ready to talk about{" "}
                      <mark className="bg-transparent p-0 position-relative">
                        opportunities{" "}
                        <img
                          src="/img/shape/line-shape.png"
                          alt="line-shape"
                          className="position-absolute line-shape"
                        />{" "}
                      </mark>
                    </h2>
                  </div>
                  <div className="mt-40 d-flex align-items-center justify-content-center cta-btns flex-wrap">
                    <Link href="/contact-us" className="btn hd-secondary-btn">
                      Get Started
                    </Link>
                    <a
                      href="#"
                      type="submit"
                      onClick={() => setIsOpen(true)}
                      className="hd-video-btn popup-youtube d-inline-flex align-items-center cursor-pointer "
                    >
                      <span className="me-3 d-inline-flex align-items-center justify-content-center rounded-circle cursor-pointer">
                        <FaPlay />
                      </span>
                      Play Video
                    </a>
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

export default HelpDeskCta;
