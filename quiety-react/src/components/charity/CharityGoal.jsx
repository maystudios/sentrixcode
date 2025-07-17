import React from "react";

const goalsData = [
  {
    id: 1,
    imgSrc: "/img/home_40/g_icon_1.png",
    title: "Health & Wellness",
    description:
      "Our organization is driven by a clear mission to deliver innovative solutions that empower",
    link: "http://www.youtube.com/watch?v=hAP2QF--2Dg",
  },
  {
    id: 2,
    imgSrc: "/img/home_40/g_icon_2.png",
    title: "Education for All",
    description:
      "Our organization is driven by a clear mission to deliver innovative solutions that empower",
    link: "http://www.youtube.com/watch?v=hAP2QF--2Dg",
  },
  {
    id: 3,
    imgSrc: "/img/home_40/g_icon_3.png",
    title: "Community Development",
    description:
      "Our organization is driven by a clear mission to deliver innovative solutions that empower",
    link: "http://www.youtube.com/watch?v=hAP2QF--2Dg",
  },
  {
    id: 4,
    imgSrc: "/img/home_40/g_icon_4.png",
    title: "Disaster Relief",
    description:
      "Our organization is driven by a clear mission to deliver innovative solutions that empower",
    link: "http://www.youtube.com/watch?v=hAP2QF--2Dg",
  },
];

const CharityGoal = () => {
  return (
    <section className="px-2 px-sm-5">
      <div className="bg-black pt-120 pb-120 rounded-3 position-relative z-2">
        <img
          src="/home_40/goal_shape.png"
          alt="Image"
          className="img-fluid position-absolute bottom-0 left-0 z--1 opacity-15"
        />
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-xxl-5">
              <div className="d-inline-block px-4 py-1 rounded-pill border border-warning mb-3">
                <p className="ma-warning-text fw-bold mb-0">How it Work</p>
              </div>
              <h2 className="home-38-title text-white fs-48 mb-4">
                Defining Our Purpose{" "}
                <span className="ma-warning-text">Mission</span> & Goals
              </h2>
              <p className="text-white mb-5">
                Our organization is driven by a clear mission to deliver
                innovative solutions that empower individuals and businesses to
                achieve their goals effectively. We strive to create value
                through collaboration, innovation, and excellence, ensuring that
                our services are both impactful and sustainable.
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
            <div className="col-xxl-7">
              <div className="pt-4 pt-xxl-0">
                <div className="row g-4">
                  {goalsData.map((goal) => (
                    <div className="col-lg-6" key={goal.id}>
                      <div className="goal_item bg-white rounded-4 h-100">
                        <img
                          src={goal.imgSrc}
                          alt="Image"
                          className="img-fluid mb-4"
                        />
                        <h6 className="fs-24 fw-medium mb-3">{goal.title}</h6>
                        <p className="mb-4">{goal.description}</p>
                        <div className="text-end">
                          <a
                            href={goal.link}
                            className="icon-box d-inline-block mb-0 text-white"
                          >
                            <i className="fa-solid fa-arrow-right bg-black text-white fs-14 rounded-circle"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharityGoal;
