import { Link } from "react-router-dom";

const JobFinderHire = () => {
  return (
    <>
      <div className="ptb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="text-center mb-30">
                <h2 className="home-38-title fs-48 mb-1">Hire by Profession</h2>
                <p className="mb-0 fw-medium">
                  Onboard your own talent pool to Quitey, invite them to
                  projects, sign contracts and kick off the projects simpler
                  than ever.
                </p>
              </div>
            </div>
          </div>
          <div className="job-tab">
            <div className="service-tabs">
              <ul
                className="nav nav-pills d-flex justify-content-center"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active me-4"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    <span> Design/ Creative</span>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link me-4"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    <span>Web Developer</span>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-contact-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-contact"
                    type="button"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                  >
                    <span>Production/Operation</span>
                  </button>
                </li>
              </ul>
            </div>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div className="tab-content-wrapper pt-60">
                  <div className="row justify-content-center g-4">
                    <div className="col-md-6 col-xl-4">
                      <div className="hire-item bg-white p-2 rounded-3">
                        <div className="home-38-bg p-4 rounded-3">
                          <div className="d-flex align-items-center gap-3 mb-3">
                            <div className="bg-white p-2 rounded-circle">
                              <img
                                src="/img/home_38/hire-people.png"
                                alt="Image"
                                className="img-fluid rounded-circle"
                              />
                            </div>
                            <div>
                              <h6 className="fs-24 mb-0">Saiful Talukder</h6>
                              <p className="fw-medium mb-0">Sr. UI Designer</p>
                            </div>
                          </div>
                          <div className="d-flex align-items-center justify-content-between gap-4 flex-wrap flex-lg-nowrap mb-4">
                            <div className="px-3 py-1 rounded-2 border w-100">
                              <p className="fs-14 fw-medium mb-0">
                                Availability
                              </p>
                              <div className="d-flex align-items-center gap-1 mt-n-8">
                                <span>
                                  <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clipPath="url(#clip0_524_5412)">
                                      <path
                                        d="M9 4.5V9L7.125 12M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z"
                                        stroke="#251C29"
                                        strokeOpacity="0.7"
                                        strokeWidth="1.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></path>
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_524_5412">
                                        <rect
                                          width="18"
                                          height="18"
                                          fill="white"
                                        ></rect>
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </span>
                                <h6 className="fs-16 text-black text-opacity-75 fw-medium mb-0 pt-1">
                                  Open to Work
                                </h6>
                              </div>
                            </div>
                            <div className="px-3 py-1 rounded-2 border w-100">
                              <p className="fs-14 fw-medium mb-0">Location</p>
                              <div className="d-flex align-items-center gap-1 mt-n-8">
                                <span>
                                  <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M13.3333 6.66659C13.3333 9.99525 9.64063 13.4619 8.40063 14.5326C8.28511 14.6194 8.14449 14.6664 7.99996 14.6664C7.85543 14.6664 7.71481 14.6194 7.59929 14.5326C6.35929 13.4619 2.66663 9.99525 2.66663 6.66659C2.66663 5.2521 3.22853 3.89554 4.22872 2.89535C5.22892 1.89516 6.58547 1.33325 7.99996 1.33325C9.41445 1.33325 10.771 1.89516 11.7712 2.89535C12.7714 3.89554 13.3333 5.2521 13.3333 6.66659Z"
                                      stroke="#251C29"
                                      strokeOpacity="0.7"
                                      strokeWidth="1.15556"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M7.99996 8.66659C9.10453 8.66659 9.99996 7.77115 9.99996 6.66659C9.99996 5.56202 9.10453 4.66659 7.99996 4.66659C6.89539 4.66659 5.99996 5.56202 5.99996 6.66659C5.99996 7.77115 6.89539 8.66659 7.99996 8.66659Z"
                                      stroke="#251C29"
                                      strokeOpacity="0.7"
                                      strokeWidth="1.15556"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </span>
                                <h6 className="fs-16 text-black text-opacity-75 fw-medium mb-0 pt-1">
                                  Dhaka
                                </h6>
                              </div>
                            </div>
                          </div>
                          <h6 className="text-black text-opacity-50 mb-2">
                            Tags
                          </h6>
                          <div className="d-flex align-items-center gap-2 flex-wrap flex-sm-nowrap mb-4">
                            <a
                              href="#"
                              className="hire-tag w-100 d-inline-block text-body px-3 py-1 rounded-pill fs-14 fw-semibold border text-center"
                            >
                              UI
                            </a>
                            <a
                              href="#"
                              className="hire-tag w-100 d-inline-block text-body px-3 py-1 rounded-pill fs-14 fw-semibold border text-center"
                            >
                              Design
                            </a>
                            <a
                              href="#"
                              className="hire-tag w-100 d-inline-block text-body px-3 py-1 rounded-pill fs-14 fw-semibold border text-center"
                            >
                              Website
                            </a>
                          </div>
                          <Link
                            to="/request-demo"
                            className="btn btn-sm btn-38-outline text-black fw-medium rounded-5"
                          >
                            View Profile
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-xl-4">
                      <div className="hire-item bg-white p-2 rounded-3">
                        <div className="home-38-bg p-4 rounded-3">
                          <div className="d-flex align-items-center gap-3 mb-3">
                            <div className="bg-white p-2 rounded-circle">
                              <img
                                src="/img/home_38/hire-people.png"
                                alt="Image"
                                className="img-fluid rounded-circle"
                              />
                            </div>
                            <div>
                              <h6 className="fs-24 mb-0">Aminul Islam</h6>
                              <p className="fw-medium mb-0">Sr. UI Designer</p>
                            </div>
                          </div>
                          <div className="d-flex align-items-center justify-content-between gap-4 flex-wrap flex-lg-nowrap mb-4">
                            <div className="px-3 py-1 rounded-2 border w-100">
                              <p className="fs-14 fw-medium mb-0">
                                Availability
                              </p>
                              <div className="d-flex align-items-center gap-1 mt-n-8">
                                <span>
                                  <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clipPath="url(#clip0_524_5412)">
                                      <path
                                        d="M9 4.5V9L7.125 12M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z"
                                        stroke="#251C29"
                                        strokeOpacity="0.7"
                                        strokeWidth="1.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></path>
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_524_5412">
                                        <rect
                                          width="18"
                                          height="18"
                                          fill="white"
                                        ></rect>
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </span>
                                <h6 className="fs-16 text-black text-opacity-75 fw-medium mb-0 pt-1">
                                  Open to Work
                                </h6>
                              </div>
                            </div>
                            <div className="px-3 py-1 rounded-2 border w-100">
                              <p className="fs-14 fw-medium mb-0">Location</p>
                              <div className="d-flex align-items-center gap-1 mt-n-8">
                                <span>
                                  <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M13.3333 6.66659C13.3333 9.99525 9.64063 13.4619 8.40063 14.5326C8.28511 14.6194 8.14449 14.6664 7.99996 14.6664C7.85543 14.6664 7.71481 14.6194 7.59929 14.5326C6.35929 13.4619 2.66663 9.99525 2.66663 6.66659C2.66663 5.2521 3.22853 3.89554 4.22872 2.89535C5.22892 1.89516 6.58547 1.33325 7.99996 1.33325C9.41445 1.33325 10.771 1.89516 11.7712 2.89535C12.7714 3.89554 13.3333 5.2521 13.3333 6.66659Z"
                                      stroke="#251C29"
                                      strokeOpacity="0.7"
                                      strokeWidth="1.15556"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M7.99996 8.66659C9.10453 8.66659 9.99996 7.77115 9.99996 6.66659C9.99996 5.56202 9.10453 4.66659 7.99996 4.66659C6.89539 4.66659 5.99996 5.56202 5.99996 6.66659C5.99996 7.77115 6.89539 8.66659 7.99996 8.66659Z"
                                      stroke="#251C29"
                                      strokeOpacity="0.7"
                                      strokeWidth="1.15556"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </span>
                                <h6 className="fs-16 text-black text-opacity-75 fw-medium mb-0 pt-1">
                                  Dhaka
                                </h6>
                              </div>
                            </div>
                          </div>
                          <h6 className="text-black text-opacity-50 mb-2">
                            Tags
                          </h6>
                          <div className="d-flex align-items-center gap-2 flex-wrap flex-sm-nowrap mb-4">
                            <a
                              href="#"
                              className="hire-tag w-100 d-inline-block text-body px-3 py-1 rounded-pill fs-14 fw-semibold border text-center"
                            >
                              UI
                            </a>
                            <a
                              href="#"
                              className="hire-tag w-100 d-inline-block text-body px-3 py-1 rounded-pill fs-14 fw-semibold border text-center"
                            >
                              Design
                            </a>
                            <a
                              href="#"
                              className="hire-tag w-100 d-inline-block text-body px-3 py-1 rounded-pill fs-14 fw-semibold border text-center"
                            >
                              Website
                            </a>
                          </div>
                          <Link
                            to="/request-demo"
                            className="btn btn-sm btn-38-outline text-black fw-medium rounded-5"
                          >
                            View Profile
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-xl-4">
                      <div className="hire-item bg-white p-2 rounded-3">
                        <div className="home-38-bg p-4 rounded-3">
                          <div className="d-flex align-items-center gap-3 mb-3">
                            <div className="bg-white p-2 rounded-circle">
                              <img
                                src="/img/home_38/hire-people.png"
                                alt="Image"
                                className="img-fluid rounded-circle"
                              />
                            </div>
                            <div>
                              <h6 className="fs-24 mb-0">Showrob</h6>
                              <p className="fw-medium mb-0">Sr. UI Designer</p>
                            </div>
                          </div>
                          <div className="d-flex align-items-center justify-content-between gap-4 flex-wrap flex-lg-nowrap mb-4">
                            <div className="px-3 py-1 rounded-2 border w-100">
                              <p className="fs-14 fw-medium mb-0">
                                Availability
                              </p>
                              <div className="d-flex align-items-center gap-1 mt-n-8">
                                <span>
                                  <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clipPath="url(#clip0_524_5412)">
                                      <path
                                        d="M9 4.5V9L7.125 12M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z"
                                        stroke="#251C29"
                                        strokeOpacity="0.7"
                                        strokeWidth="1.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></path>
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_524_5412">
                                        <rect
                                          width="18"
                                          height="18"
                                          fill="white"
                                        ></rect>
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </span>
                                <h6 className="fs-16 text-black text-opacity-75 fw-medium mb-0 pt-1">
                                  Open to Work
                                </h6>
                              </div>
                            </div>
                            <div className="px-3 py-1 rounded-2 border w-100">
                              <p className="fs-14 fw-medium mb-0">Location</p>
                              <div className="d-flex align-items-center gap-1 mt-n-8">
                                <span>
                                  <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M13.3333 6.66659C13.3333 9.99525 9.64063 13.4619 8.40063 14.5326C8.28511 14.6194 8.14449 14.6664 7.99996 14.6664C7.85543 14.6664 7.71481 14.6194 7.59929 14.5326C6.35929 13.4619 2.66663 9.99525 2.66663 6.66659C2.66663 5.2521 3.22853 3.89554 4.22872 2.89535C5.22892 1.89516 6.58547 1.33325 7.99996 1.33325C9.41445 1.33325 10.771 1.89516 11.7712 2.89535C12.7714 3.89554 13.3333 5.2521 13.3333 6.66659Z"
                                      stroke="#251C29"
                                      strokeOpacity="0.7"
                                      strokeWidth="1.15556"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M7.99996 8.66659C9.10453 8.66659 9.99996 7.77115 9.99996 6.66659C9.99996 5.56202 9.10453 4.66659 7.99996 4.66659C6.89539 4.66659 5.99996 5.56202 5.99996 6.66659C5.99996 7.77115 6.89539 8.66659 7.99996 8.66659Z"
                                      stroke="#251C29"
                                      strokeOpacity="0.7"
                                      strokeWidth="1.15556"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </span>
                                <h6 className="fs-16 text-black text-opacity-75 fw-medium mb-0 pt-1">
                                  Dhaka
                                </h6>
                              </div>
                            </div>
                          </div>
                          <h6 className="text-black text-opacity-50 mb-2">
                            Tags
                          </h6>
                          <div className="d-flex align-items-center gap-2 flex-wrap flex-sm-nowrap mb-4">
                            <a
                              href="#"
                              className="hire-tag w-100 d-inline-block text-body px-3 py-1 rounded-pill fs-14 fw-semibold border text-center"
                            >
                              UI
                            </a>
                            <a
                              href="#"
                              className="hire-tag w-100 d-inline-block text-body px-3 py-1 rounded-pill fs-14 fw-semibold border text-center"
                            >
                              Design
                            </a>
                            <a
                              href="#"
                              className="hire-tag w-100 d-inline-block text-body px-3 py-1 rounded-pill fs-14 fw-semibold border text-center"
                            >
                              Website
                            </a>
                          </div>
                          <Link
                            to="/request-demo"
                            className="btn btn-sm btn-38-outline text-black fw-medium rounded-5"
                          >
                            View Profile
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <div className="tab-content-wrapper pt-60">
                  <div className="row justify-content-center g-4">
                    <div className="col-md-6 col-xl-4">
                      <div className="hire-item bg-white p-2 rounded-3">
                        <div className="home-38-bg p-4 rounded-3">
                          <div className="d-flex align-items-center gap-3 mb-3">
                            <div className="bg-white p-2 rounded-circle">
                              <img
                                src="/img/home_38/hire-people.png"
                                alt="Image"
                                className="img-fluid rounded-circle"
                              />
                            </div>
                            <div>
                              <h6 className="fs-24 mb-0">Saiful Talukder</h6>
                              <p className="fw-medium mb-0">Sr. UI Designer</p>
                            </div>
                          </div>
                          <div className="d-flex align-items-center justify-content-between gap-4 flex-wrap flex-lg-nowrap mb-4">
                            <div className="px-3 py-1 rounded-2 border w-100">
                              <p className="fs-14 fw-medium mb-0">
                                Availability
                              </p>
                              <div className="d-flex align-items-center gap-1 mt-n-8">
                                <span>
                                  <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clipPath="url(#clip0_524_5412)">
                                      <path
                                        d="M9 4.5V9L7.125 12M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z"
                                        stroke="#251C29"
                                        strokeOpacity="0.7"
                                        strokeWidth="1.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></path>
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_524_5412">
                                        <rect
                                          width="18"
                                          height="18"
                                          fill="white"
                                        ></rect>
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </span>
                                <h6 className="fs-16 text-black text-opacity-75 fw-medium mb-0 pt-1">
                                  Open to Work
                                </h6>
                              </div>
                            </div>
                            <div className="px-3 py-1 rounded-2 border w-100">
                              <p className="fs-14 fw-medium mb-0">Location</p>
                              <div className="d-flex align-items-center gap-1 mt-n-8">
                                <span>
                                  <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M13.3333 6.66659C13.3333 9.99525 9.64063 13.4619 8.40063 14.5326C8.28511 14.6194 8.14449 14.6664 7.99996 14.6664C7.85543 14.6664 7.71481 14.6194 7.59929 14.5326C6.35929 13.4619 2.66663 9.99525 2.66663 6.66659C2.66663 5.2521 3.22853 3.89554 4.22872 2.89535C5.22892 1.89516 6.58547 1.33325 7.99996 1.33325C9.41445 1.33325 10.771 1.89516 11.7712 2.89535C12.7714 3.89554 13.3333 5.2521 13.3333 6.66659Z"
                                      stroke="#251C29"
                                      strokeOpacity="0.7"
                                      strokeWidth="1.15556"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M7.99996 8.66659C9.10453 8.66659 9.99996 7.77115 9.99996 6.66659C9.99996 5.56202 9.10453 4.66659 7.99996 4.66659C6.89539 4.66659 5.99996 5.56202 5.99996 6.66659C5.99996 7.77115 6.89539 8.66659 7.99996 8.66659Z"
                                      stroke="#251C29"
                                      strokeOpacity="0.7"
                                      strokeWidth="1.15556"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </span>
                                <h6 className="fs-16 text-black text-opacity-75 fw-medium mb-0 pt-1">
                                  Dhaka
                                </h6>
                              </div>
                            </div>
                          </div>
                          <h6 className="text-black text-opacity-50 mb-2">
                            Tags
                          </h6>
                          <div className="d-flex align-items-center gap-2 flex-wrap flex-sm-nowrap mb-4">
                            <a
                              href="#"
                              className="hire-tag w-100 d-inline-block text-body px-3 py-1 rounded-pill fs-14 fw-semibold border text-center"
                            >
                              UI
                            </a>
                            <a
                              href="#"
                              className="hire-tag w-100 d-inline-block text-body px-3 py-1 rounded-pill fs-14 fw-semibold border text-center"
                            >
                              Design
                            </a>
                            <a
                              href="#"
                              className="hire-tag w-100 d-inline-block text-body px-3 py-1 rounded-pill fs-14 fw-semibold border text-center"
                            >
                              Website
                            </a>
                          </div>
                          <Link
                            to="/request-demo"
                            className="btn btn-sm btn-38-outline text-black fw-medium rounded-5"
                          >
                            View Profile
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-xl-4">
                      <div className="hire-item bg-white p-2 rounded-3">
                        <div className="home-38-bg p-4 rounded-3">
                          <div className="d-flex align-items-center gap-3 mb-3">
                            <div className="bg-white p-2 rounded-circle">
                              <img
                                src="/img/home_38/hire-people.png"
                                alt="Image"
                                className="img-fluid rounded-circle"
                              />
                            </div>
                            <div>
                              <h6 className="fs-24 mb-0">Aminul Islam</h6>
                              <p className="fw-medium mb-0">Sr. UI Designer</p>
                            </div>
                          </div>
                          <div className="d-flex align-items-center justify-content-between gap-4 flex-wrap flex-lg-nowrap mb-4">
                            <div className="px-3 py-1 rounded-2 border w-100">
                              <p className="fs-14 fw-medium mb-0">
                                Availability
                              </p>
                              <div className="d-flex align-items-center gap-1 mt-n-8">
                                <span>
                                  <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clipPath="url(#clip0_524_5412)">
                                      <path
                                        d="M9 4.5V9L7.125 12M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z"
                                        stroke="#251C29"
                                        strokeOpacity="0.7"
                                        strokeWidth="1.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></path>
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_524_5412">
                                        <rect
                                          width="18"
                                          height="18"
                                          fill="white"
                                        ></rect>
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </span>
                                <h6 className="fs-16 text-black text-opacity-75 fw-medium mb-0 pt-1">
                                  Open to Work
                                </h6>
                              </div>
                            </div>
                            <div className="px-3 py-1 rounded-2 border w-100">
                              <p className="fs-14 fw-medium mb-0">Location</p>
                              <div className="d-flex align-items-center gap-1 mt-n-8">
                                <span>
                                  <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M13.3333 6.66659C13.3333 9.99525 9.64063 13.4619 8.40063 14.5326C8.28511 14.6194 8.14449 14.6664 7.99996 14.6664C7.85543 14.6664 7.71481 14.6194 7.59929 14.5326C6.35929 13.4619 2.66663 9.99525 2.66663 6.66659C2.66663 5.2521 3.22853 3.89554 4.22872 2.89535C5.22892 1.89516 6.58547 1.33325 7.99996 1.33325C9.41445 1.33325 10.771 1.89516 11.7712 2.89535C12.7714 3.89554 13.3333 5.2521 13.3333 6.66659Z"
                                      stroke="#251C29"
                                      strokeOpacity="0.7"
                                      strokeWidth="1.15556"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M7.99996 8.66659C9.10453 8.66659 9.99996 7.77115 9.99996 6.66659C9.99996 5.56202 9.10453 4.66659 7.99996 4.66659C6.89539 4.66659 5.99996 5.56202 5.99996 6.66659C5.99996 7.77115 6.89539 8.66659 7.99996 8.66659Z"
                                      stroke="#251C29"
                                      strokeOpacity="0.7"
                                      strokeWidth="1.15556"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </span>
                                <h6 className="fs-16 text-black text-opacity-75 fw-medium mb-0 pt-1">
                                  Dhaka
                                </h6>
                              </div>
                            </div>
                          </div>
                          <h6 className="text-black text-opacity-50 mb-2">
                            Tags
                          </h6>
                          <div className="d-flex align-items-center gap-2 flex-wrap flex-sm-nowrap mb-4">
                            <a
                              href="#"
                              className="hire-tag w-100 d-inline-block text-body px-3 py-1 rounded-pill fs-14 fw-semibold border text-center"
                            >
                              UI
                            </a>
                            <a
                              href="#"
                              className="hire-tag w-100 d-inline-block text-body px-3 py-1 rounded-pill fs-14 fw-semibold border text-center"
                            >
                              Design
                            </a>
                            <a
                              href="#"
                              className="hire-tag w-100 d-inline-block text-body px-3 py-1 rounded-pill fs-14 fw-semibold border text-center"
                            >
                              Website
                            </a>
                          </div>
                          <Link
                            to="/request-demo"
                            className="btn btn-sm btn-38-outline text-black fw-medium rounded-5"
                          >
                            View Profile
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-xl-4">
                      <div className="hire-item bg-white p-2 rounded-3">
                        <div className="home-38-bg p-4 rounded-3">
                          <div className="d-flex align-items-center gap-3 mb-3">
                            <div className="bg-white p-2 rounded-circle">
                              <img
                                src="/img/home_38/hire-people.png"
                                alt="Image"
                                className="img-fluid rounded-circle"
                              />
                            </div>
                            <div>
                              <h6 className="fs-24 mb-0">Showrob</h6>
                              <p className="fw-medium mb-0">Sr. UI Designer</p>
                            </div>
                          </div>
                          <div className="d-flex align-items-center justify-content-between gap-4 flex-wrap flex-lg-nowrap mb-4">
                            <div className="px-3 py-1 rounded-2 border w-100">
                              <p className="fs-14 fw-medium mb-0">
                                Availability
                              </p>
                              <div className="d-flex align-items-center gap-1 mt-n-8">
                                <span>
                                  <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clipPath="url(#clip0_524_5412)">
                                      <path
                                        d="M9 4.5V9L7.125 12M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z"
                                        stroke="#251C29"
                                        strokeOpacity="0.7"
                                        strokeWidth="1.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></path>
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_524_5412">
                                        <rect
                                          width="18"
                                          height="18"
                                          fill="white"
                                        ></rect>
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </span>
                                <h6 className="fs-16 text-black text-opacity-75 fw-medium mb-0 pt-1">
                                  Open to Work
                                </h6>
                              </div>
                            </div>
                            <div className="px-3 py-1 rounded-2 border w-100">
                              <p className="fs-14 fw-medium mb-0">Location</p>
                              <div className="d-flex align-items-center gap-1 mt-n-8">
                                <span>
                                  <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M13.3333 6.66659C13.3333 9.99525 9.64063 13.4619 8.40063 14.5326C8.28511 14.6194 8.14449 14.6664 7.99996 14.6664C7.85543 14.6664 7.71481 14.6194 7.59929 14.5326C6.35929 13.4619 2.66663 9.99525 2.66663 6.66659C2.66663 5.2521 3.22853 3.89554 4.22872 2.89535C5.22892 1.89516 6.58547 1.33325 7.99996 1.33325C9.41445 1.33325 10.771 1.89516 11.7712 2.89535C12.7714 3.89554 13.3333 5.2521 13.3333 6.66659Z"
                                      stroke="#251C29"
                                      strokeOpacity="0.7"
                                      strokeWidth="1.15556"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M7.99996 8.66659C9.10453 8.66659 9.99996 7.77115 9.99996 6.66659C9.99996 5.56202 9.10453 4.66659 7.99996 4.66659C6.89539 4.66659 5.99996 5.56202 5.99996 6.66659C5.99996 7.77115 6.89539 8.66659 7.99996 8.66659Z"
                                      stroke="#251C29"
                                      strokeOpacity="0.7"
                                      strokeWidth="1.15556"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </span>
                                <h6 className="fs-16 text-black text-opacity-75 fw-medium mb-0 pt-1">
                                  Dhaka
                                </h6>
                              </div>
                            </div>
                          </div>
                          <h6 className="text-black text-opacity-50 mb-2">
                            Tags
                          </h6>
                          <div className="d-flex align-items-center gap-2 flex-wrap flex-sm-nowrap mb-4">
                            <a
                              href="#"
                              className="hire-tag w-100 d-inline-block text-body px-3 py-1 rounded-pill fs-14 fw-semibold border text-center"
                            >
                              UI
                            </a>
                            <a
                              href="#"
                              className="hire-tag w-100 d-inline-block text-body px-3 py-1 rounded-pill fs-14 fw-semibold border text-center"
                            >
                              Design
                            </a>
                            <a
                              href="#"
                              className="hire-tag w-100 d-inline-block text-body px-3 py-1 rounded-pill fs-14 fw-semibold border text-center"
                            >
                              Website
                            </a>
                          </div>
                          <Link
                            to="/request-demo"
                            className="btn btn-sm btn-38-outline text-black fw-medium rounded-5"
                          >
                            View Profile
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
              >
                <div className="tab-content-wrapper pt-60">
                  <div className="row justify-content-center g-4">
                    <div className="col-md-6 col-xl-4">
                      <div className="hire-item bg-white p-2 rounded-3">
                        <div className="home-38-bg p-4 rounded-3">
                          <div className="d-flex align-items-center gap-3 mb-3">
                            <div className="bg-white p-2 rounded-circle">
                              <img
                                src="/img/home_38/hire-people.png"
                                alt="Image"
                                className="img-fluid rounded-circle"
                              />
                            </div>
                            <div>
                              <h6 className="fs-24 mb-0">Saiful Talukder</h6>
                              <p className="fw-medium mb-0">Sr. UI Designer</p>
                            </div>
                          </div>
                          <div className="d-flex align-items-center justify-content-between gap-4 flex-wrap flex-lg-nowrap mb-4">
                            <div className="px-3 py-1 rounded-2 border w-100">
                              <p className="fs-14 fw-medium mb-0">
                                Availability
                              </p>
                              <div className="d-flex align-items-center gap-1 mt-n-8">
                                <span>
                                  <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clipPath="url(#clip0_524_5412)">
                                      <path
                                        d="M9 4.5V9L7.125 12M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z"
                                        stroke="#251C29"
                                        strokeOpacity="0.7"
                                        strokeWidth="1.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></path>
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_524_5412">
                                        <rect
                                          width="18"
                                          height="18"
                                          fill="white"
                                        ></rect>
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </span>
                                <h6 className="fs-16 text-black text-opacity-75 fw-medium mb-0 pt-1">
                                  Open to Work
                                </h6>
                              </div>
                            </div>
                            <div className="px-3 py-1 rounded-2 border w-100">
                              <p className="fs-14 fw-medium mb-0">Location</p>
                              <div className="d-flex align-items-center gap-1 mt-n-8">
                                <span>
                                  <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M13.3333 6.66659C13.3333 9.99525 9.64063 13.4619 8.40063 14.5326C8.28511 14.6194 8.14449 14.6664 7.99996 14.6664C7.85543 14.6664 7.71481 14.6194 7.59929 14.5326C6.35929 13.4619 2.66663 9.99525 2.66663 6.66659C2.66663 5.2521 3.22853 3.89554 4.22872 2.89535C5.22892 1.89516 6.58547 1.33325 7.99996 1.33325C9.41445 1.33325 10.771 1.89516 11.7712 2.89535C12.7714 3.89554 13.3333 5.2521 13.3333 6.66659Z"
                                      stroke="#251C29"
                                      strokeOpacity="0.7"
                                      strokeWidth="1.15556"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M7.99996 8.66659C9.10453 8.66659 9.99996 7.77115 9.99996 6.66659C9.99996 5.56202 9.10453 4.66659 7.99996 4.66659C6.89539 4.66659 5.99996 5.56202 5.99996 6.66659C5.99996 7.77115 6.89539 8.66659 7.99996 8.66659Z"
                                      stroke="#251C29"
                                      strokeOpacity="0.7"
                                      strokeWidth="1.15556"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </span>
                                <h6 className="fs-16 text-black text-opacity-75 fw-medium mb-0 pt-1">
                                  Dhaka
                                </h6>
                              </div>
                            </div>
                          </div>
                          <h6 className="text-black text-opacity-50 mb-2">
                            Tags
                          </h6>
                          <div className="d-flex align-items-center gap-2 flex-wrap flex-sm-nowrap mb-4">
                            <a
                              href="#"
                              className="hire-tag w-100 d-inline-block text-body px-3 py-1 rounded-pill fs-14 fw-semibold border text-center"
                            >
                              UI
                            </a>
                            <a
                              href="#"
                              className="hire-tag w-100 d-inline-block text-body px-3 py-1 rounded-pill fs-14 fw-semibold border text-center"
                            >
                              Design
                            </a>
                            <a
                              href="#"
                              className="hire-tag w-100 d-inline-block text-body px-3 py-1 rounded-pill fs-14 fw-semibold border text-center"
                            >
                              Website
                            </a>
                          </div>
                          <Link
                            to="/request-demo"
                            className="btn btn-sm btn-38-outline text-black fw-medium rounded-5"
                          >
                            View Profile
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-xl-4">
                      <div className="hire-item bg-white p-2 rounded-3">
                        <div className="home-38-bg p-4 rounded-3">
                          <div className="d-flex align-items-center gap-3 mb-3">
                            <div className="bg-white p-2 rounded-circle">
                              <img
                                src="/img/home_38/hire-people.png"
                                alt="Image"
                                className="img-fluid rounded-circle"
                              />
                            </div>
                            <div>
                              <h6 className="fs-24 mb-0">Aminul Islam</h6>
                              <p className="fw-medium mb-0">Sr. UI Designer</p>
                            </div>
                          </div>
                          <div className="d-flex align-items-center justify-content-between gap-4 flex-wrap flex-lg-nowrap mb-4">
                            <div className="px-3 py-1 rounded-2 border w-100">
                              <p className="fs-14 fw-medium mb-0">
                                Availability
                              </p>
                              <div className="d-flex align-items-center gap-1 mt-n-8">
                                <span>
                                  <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clipPath="url(#clip0_524_5412)">
                                      <path
                                        d="M9 4.5V9L7.125 12M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z"
                                        stroke="#251C29"
                                        strokeOpacity="0.7"
                                        strokeWidth="1.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></path>
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_524_5412">
                                        <rect
                                          width="18"
                                          height="18"
                                          fill="white"
                                        ></rect>
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </span>
                                <h6 className="fs-16 text-black text-opacity-75 fw-medium mb-0 pt-1">
                                  Open to Work
                                </h6>
                              </div>
                            </div>
                            <div className="px-3 py-1 rounded-2 border w-100">
                              <p className="fs-14 fw-medium mb-0">Location</p>
                              <div className="d-flex align-items-center gap-1 mt-n-8">
                                <span>
                                  <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M13.3333 6.66659C13.3333 9.99525 9.64063 13.4619 8.40063 14.5326C8.28511 14.6194 8.14449 14.6664 7.99996 14.6664C7.85543 14.6664 7.71481 14.6194 7.59929 14.5326C6.35929 13.4619 2.66663 9.99525 2.66663 6.66659C2.66663 5.2521 3.22853 3.89554 4.22872 2.89535C5.22892 1.89516 6.58547 1.33325 7.99996 1.33325C9.41445 1.33325 10.771 1.89516 11.7712 2.89535C12.7714 3.89554 13.3333 5.2521 13.3333 6.66659Z"
                                      stroke="#251C29"
                                      strokeOpacity="0.7"
                                      strokeWidth="1.15556"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M7.99996 8.66659C9.10453 8.66659 9.99996 7.77115 9.99996 6.66659C9.99996 5.56202 9.10453 4.66659 7.99996 4.66659C6.89539 4.66659 5.99996 5.56202 5.99996 6.66659C5.99996 7.77115 6.89539 8.66659 7.99996 8.66659Z"
                                      stroke="#251C29"
                                      strokeOpacity="0.7"
                                      strokeWidth="1.15556"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </span>
                                <h6 className="fs-16 text-black text-opacity-75 fw-medium mb-0 pt-1">
                                  Dhaka
                                </h6>
                              </div>
                            </div>
                          </div>
                          <h6 className="text-black text-opacity-50 mb-2">
                            Tags
                          </h6>
                          <div className="d-flex align-items-center gap-2 flex-wrap flex-sm-nowrap mb-4">
                            <a
                              href="#"
                              className="hire-tag w-100 d-inline-block text-body px-3 py-1 rounded-pill fs-14 fw-semibold border text-center"
                            >
                              UI
                            </a>
                            <a
                              href="#"
                              className="hire-tag w-100 d-inline-block text-body px-3 py-1 rounded-pill fs-14 fw-semibold border text-center"
                            >
                              Design
                            </a>
                            <a
                              href="#"
                              className="hire-tag w-100 d-inline-block text-body px-3 py-1 rounded-pill fs-14 fw-semibold border text-center"
                            >
                              Website
                            </a>
                          </div>
                          <Link
                            to="/request-demo"
                            className="btn btn-sm btn-38-outline text-black fw-medium rounded-5"
                          >
                            View Profile
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-xl-4">
                      <div className="hire-item bg-white p-2 rounded-3">
                        <div className="home-38-bg p-4 rounded-3">
                          <div className="d-flex align-items-center gap-3 mb-3">
                            <div className="bg-white p-2 rounded-circle">
                              <img
                                src="/img/home_38/hire-people.png"
                                alt="Image"
                                className="img-fluid rounded-circle"
                              />
                            </div>
                            <div>
                              <h6 className="fs-24 mb-0">Showrob</h6>
                              <p className="fw-medium mb-0">Sr. UI Designer</p>
                            </div>
                          </div>
                          <div className="d-flex align-items-center justify-content-between gap-4 flex-wrap flex-lg-nowrap mb-4">
                            <div className="px-3 py-1 rounded-2 border w-100">
                              <p className="fs-14 fw-medium mb-0">
                                Availability
                              </p>
                              <div className="d-flex align-items-center gap-1 mt-n-8">
                                <span>
                                  <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clipPath="url(#clip0_524_5412)">
                                      <path
                                        d="M9 4.5V9L7.125 12M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z"
                                        stroke="#251C29"
                                        strokeOpacity="0.7"
                                        strokeWidth="1.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></path>
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_524_5412">
                                        <rect
                                          width="18"
                                          height="18"
                                          fill="white"
                                        ></rect>
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </span>
                                <h6 className="fs-16 text-black text-opacity-75 fw-medium mb-0 pt-1">
                                  Open to Work
                                </h6>
                              </div>
                            </div>
                            <div className="px-3 py-1 rounded-2 border w-100">
                              <p className="fs-14 fw-medium mb-0">Location</p>
                              <div className="d-flex align-items-center gap-1 mt-n-8">
                                <span>
                                  <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M13.3333 6.66659C13.3333 9.99525 9.64063 13.4619 8.40063 14.5326C8.28511 14.6194 8.14449 14.6664 7.99996 14.6664C7.85543 14.6664 7.71481 14.6194 7.59929 14.5326C6.35929 13.4619 2.66663 9.99525 2.66663 6.66659C2.66663 5.2521 3.22853 3.89554 4.22872 2.89535C5.22892 1.89516 6.58547 1.33325 7.99996 1.33325C9.41445 1.33325 10.771 1.89516 11.7712 2.89535C12.7714 3.89554 13.3333 5.2521 13.3333 6.66659Z"
                                      stroke="#251C29"
                                      strokeOpacity="0.7"
                                      strokeWidth="1.15556"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M7.99996 8.66659C9.10453 8.66659 9.99996 7.77115 9.99996 6.66659C9.99996 5.56202 9.10453 4.66659 7.99996 4.66659C6.89539 4.66659 5.99996 5.56202 5.99996 6.66659C5.99996 7.77115 6.89539 8.66659 7.99996 8.66659Z"
                                      stroke="#251C29"
                                      strokeOpacity="0.7"
                                      strokeWidth="1.15556"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </span>
                                <h6 className="fs-16 text-black text-opacity-75 fw-medium mb-0 pt-1">
                                  Dhaka
                                </h6>
                              </div>
                            </div>
                          </div>
                          <h6 className="text-black text-opacity-50 mb-2">
                            Tags
                          </h6>
                          <div className="d-flex align-items-center gap-2 flex-wrap flex-sm-nowrap mb-4">
                            <a
                              href="#"
                              className="hire-tag w-100 d-inline-block text-body px-3 py-1 rounded-pill fs-14 fw-semibold border text-center"
                            >
                              UI
                            </a>
                            <a
                              href="#"
                              className="hire-tag w-100 d-inline-block text-body px-3 py-1 rounded-pill fs-14 fw-semibold border text-center"
                            >
                              Design
                            </a>
                            <a
                              href="#"
                              className="hire-tag w-100 d-inline-block text-body px-3 py-1 rounded-pill fs-14 fw-semibold border text-center"
                            >
                              Website
                            </a>
                          </div>
                          <Link
                            to="/request-demo"
                            className="btn btn-sm btn-38-outline text-black fw-medium rounded-5"
                          >
                            View Profile
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobFinderHire;
