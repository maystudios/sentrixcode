import React, { useState } from "react";
import { Link } from "react-router-dom";
import VideoModal from "../common/VideoModal";

const TestimonialModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="customer-info text-white d-flex align-items-center">
        <VideoModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        <Link
          to="#"
          className="video-icon text-decoration-none"
          onClick={() => setIsOpen(true)}
        >
          <i className="fas fa-play"></i>{" "}
          <span className="text-white ms-2 small"> Watch Video</span>
        </Link>
      </div>
    </>
  );
};

export default TestimonialModal;
