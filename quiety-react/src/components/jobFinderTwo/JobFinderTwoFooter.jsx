import { Link } from "react-router-dom";
import { footerPages, footerPrimaryPages, footerTemplate } from "../../data";
const JobFinderTwoFooter = () => {
  return (
    <>
      <footer className="footer-39">
        <div className="ptb-120">
          <div className="container">
            <div className="d-flex align-items-center gap-4 pb-60">
              <h2 className="fs-64 mb-0">Let’s Contact</h2>
              <a href="" className="btn-38-style">
                <span className="hover-style bg-brand-39-2">
                  <span className="arrow-style">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.21766 15.0584C1.21766 15.0584 7.75258 8.52338 15.2261 1.04991M15.2261 1.04991C9.82726 6.44871 3.31475 1.92927 3.31475 1.92927M15.2261 1.04991C9.82726 6.44871 14.3467 12.9612 14.3467 12.9612"
                        stroke="#010101"
                        strokeWidth="1.42857"
                      ></path>
                    </svg>
                  </span>
                  <span className="arrow-style">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.21766 15.0584C1.21766 15.0584 7.75258 8.52338 15.2261 1.04991M15.2261 1.04991C9.82726 6.44871 3.31475 1.92927 3.31475 1.92927M15.2261 1.04991C9.82726 6.44871 14.3467 12.9612 14.3467 12.9612"
                        stroke="#010101"
                        strokeWidth="1.42857"
                      ></path>
                    </svg>
                  </span>
                </span>
              </a>
            </div>
            <div className="row justify-content-between">
              <div className="col-md-8 col-lg-4 mb-md-4 mb-lg-0">
                <div className="footer-single-col">
                  <div className="footer-single-col mb-4">
                    <img
                      src="/img/logo-color.png"
                      alt="logo"
                      className="img-fluid logo-color"
                    />
                    <img
                      src="/img/logo-white.png"
                      alt="logo"
                      className="img-fluid logo-white"
                    />
                  </div>
                  <p>
                    Onboard your own talent pool to Quitey, invite them to
                    projects, sign contracts and kick off the projects simpler
                    than ever.
                  </p>
                  <ul className="list-unstyled list-inline footer-social-list mb-0">
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fab fa-dribbble"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fab fa-github"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-12 col-lg-7 mt-4 mt-md-0 mt-lg-0">
                <div className="row">
                  <div className="col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0">
                    <div className="footer-single-col">
                      <h3>Primary Pages</h3>
                      <ul className="list-unstyled footer-nav-list mb-lg-0">
                        {footerPrimaryPages.map((primaryPage, i) => (
                          <li key={i + 1}>
                            <Link
                              className="text-decoration-none"
                              to={primaryPage.href}
                            >
                              {primaryPage.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0">
                    <div className="footer-single-col">
                      <h3>Pages</h3>
                      <ul className="list-unstyled footer-nav-list mb-lg-0">
                        {footerPages.map((page, i) => (
                          <li key={i + 1}>
                            <Link
                              className="text-decoration-none"
                              to={page.href}
                            >
                              {" "}
                              {page.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0">
                    <div className="footer-single-col">
                      <h3>Template</h3>
                      <ul className="list-unstyled footer-nav-list mb-lg-0">
                        {footerTemplate.map((template, i) => (
                          <li key={i + 1}>
                            <Link
                              className="text-decoration-none"
                              to={template.href}
                            >
                              {" "}
                              {template.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default JobFinderTwoFooter;
