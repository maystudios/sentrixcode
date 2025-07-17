const JobFinderCountries = () => {
  return (
    <>
      <div className="ptb-120">
        <div className="container">
          <div className="row align-items-center justify-content-between g-4">
            <div className="col-lg-6">
              <img
                src="/img/home_38/map_img.png"
                alt="Image"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-5">
              <h2 className="home-38-title fs-48 mb-3">
                Onboard Your{" "}
                <span className="home-38-color-brand">Freelancers</span>
                From 186 Countries
              </h2>
              <p className="mb-3">
                Onboard your own talent pool to Quitey, invite them to projects,
                sign contracts and kick off the projects Employers can post job
                listings, access a pool of interview tips.
              </p>
              <ul className="list-unstyled d-flex flex-column gap-2 mb-5">
                <li className="d-flex align-items-center gap-2">
                  <i className="fa-solid fa-circle text-black fs_6"></i>
                  <p className="text-black fw-semibold mb-0">
                    Fast Freelance Onboarding
                  </p>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <i className="fa-solid fa-circle text-black fs_6"></i>
                  <p className="text-black fw-semibold mb-0">
                    Onboarding Available from 186 countries
                  </p>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <i className="fa-solid fa-circle text-black fs_6"></i>
                  <p className="text-black fw-semibold mb-0">
                    Built-in freelance identity verification
                  </p>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <i className="fa-solid fa-circle text-black fs_6"></i>
                  <p className="text-black fw-semibold mb-0">
                    Contracts, NDAs and IP agreements
                  </p>
                </li>
              </ul>
              <a
                href="#"
                className="btn bg-dark text-white fw-medium rounded-5"
              >
                Explore More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobFinderCountries;
