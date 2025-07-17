import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
const JobFinderTwoTeam = () => {
  const teamMembers = [
    {
      name: "Grace J. Park",
      position: "Digital Marketer",
      image: "/img/home_39/team_1.png",
      regions: ["North America"],
    },
    {
      name: "Nina Nesdoly",
      position: "Digital Marketer",
      image: "/img/home_39/team_4.png",
      regions: ["North America"],
    },
    {
      name: "Melissa Sampson",
      position: "Digital Marketer",
      image: "/img/home_39/team_2.png",
      regions: ["North America"],
    },
    {
      name: "Lori Schkufza",
      position: "Digital Marketer",
      image: "/img/home_39/team_3.png",
      regions: ["North America"],
    },

    {
      name: "Nina Nesdoly-s",
      position: "Digital Marketer",
      image: "/img/home_39/team_4.png",
      regions: ["North America"],
    },
  ];
  return (
    <>
      <section className="ptb-120 overflow-hidden">
        <div className="container">
          <div className="mb-30">
            <div className="row align-items-center g-4">
              <div className="col-lg-7">
                <h2 className="home-38-title fs-48 mb-3">
                  Creative Profiles Make your Profile & get Eyeballs{" "}
                  <span>
                    <img
                      src="/img/home_39/eye.svg"
                      alt="Image"
                      className="img-fluid"
                    />
                  </span>{" "}
                </h2>
              </div>
              <div className="col-lg-5">
                <div className="d-flex justify-content-lg-end">
                  <div>
                    <a
                      href="#"
                      className="btn btn-sm bg-dark text-white fw-medium rounded-5"
                    >
                      Browse the Team
                    </a>
                    <div className="d-flex align-items-center justify-content-lg-end gap-7 mt-4 position-relative">
                      <div
                        className="swiper-button-prev home-38-slider-nav bg-transparent w-auto h-auto p-2"
                        style={{ position: "inherit" }}
                      >
                        <span className="text-black">
                          <i className="fa-solid fa-chevron-left"></i>
                        </span>
                      </div>
                      <div
                        style={{ position: "inherit" }}
                        className="swiper-button-next home-38-slider-nav bg-transparent w-auto h-auto p-2"
                      >
                        <span className="text-black">
                          <i className="fa-solid fa-chevron-right"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="team_39 swiper">
                <Swiper
                  modules={[Navigation, Autoplay]}
                  className="swiper-wrapper"
                  spaceBetween={24}
                  speed={1000}
                  autoplay={true}
                  slidesPerGroup={1}
                  loop={true}
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }}
                  breakpoints={{
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                    992: {
                      slidesPerView: 3,
                    },
                    1200: {
                      slidesPerView: 5,
                    },
                  }}
                >
                  {teamMembers.map((member, index) => (
                    <SwiperSlide key={index}>
                      <div className="team_39_item">
                        <img
                          src={member.image}
                          alt="Image"
                          className="img-fluid team_thumb w-100"
                        />
                        <div className="d-flex align-items-center gap-2 mt-4 mb-3">
                          {member.regions.map((region, idx) => (
                            <a
                              key={idx}
                              href=""
                              className="px-3 py-0 text-black fs-14 border border-dark border-opacity-25 rounded-pill"
                            >
                              {region}
                            </a>
                          ))}
                        </div>
                        <a href="">
                          <h5 className="text-black fs-24 mb-0">
                            {member.name}
                          </h5>
                        </a>
                        <p className="text-black mb-0">{member.position}</p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobFinderTwoTeam;
