import React from "react";
import { Link } from "react-router-dom";

const PriceThree = () => {
  return (
    <section className="price-two ptb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="section-heading text-center">
              <h2>
                Get our any Service <br />
                With Suitable Pricing
              </h2>
              <p>
                Credibly grow premier ideas rather than bricks-and-clicks
                strategic theme areas distributed for stand-alone web-readiness.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="position-relative single-pricing-wrap rounded-custom bg-white custom-shadow p-5 mb-4 mb-lg-0">
              <div className="pricing-header mb-32">
                <h3 className="package-name text-primary d-block">Stater</h3>
                <h4 className="display-6 fw-semi-bold">
                  $29<span>/month</span>
                </h4>
              </div>
              <div className="pricing-info mb-4">
                <ul className="pricing-feature-list list-unstyled">
                  <li>
                    <i className="far fa-check-circle text-success me-2"></i>
                    Create Unique Websites
                  </li>
                  <li>
                    <i className="far fa-check-circle text-success me-2"></i>
                    Automate Your Busy Work
                  </li>
                  <li>
                    <i className="far fa-times-circle text-muted me-2"></i>
                    Optimize All Your Efforts
                  </li>
                  <li>
                    <i className="far fa-times-circle text-muted me-2"></i>
                    Centralized Teams
                  </li>
                  <li>
                    <i className="far fa-times-circle text-muted me-2"></i>
                    Shareable Team Libraries
                  </li>
                </ul>
              </div>
              <Link to="/request-demo" className="btn btn-outline-primary mt-2">
                Get Started Now
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="position-relative single-pricing-wrap rounded-custom bg-gradient text-white p-5 mb-4 mb-lg-0">
              <div className="pricing-header mb-32">
                <h3 className="package-name text-warning d-block">Advanced</h3>
                <h4 className="display-6 fw-semi-bold">
                  $49<span>/month</span>
                </h4>
              </div>
              <div className="pricing-info mb-4">
                <ul className="pricing-feature-list list-unstyled">
                  <li>
                    <i className="far fa-check-circle text-success me-2"></i>
                    Create Unique Websites
                  </li>
                  <li>
                    <i className="far fa-check-circle text-success me-2"></i>
                    Automate Your Busy Work
                  </li>
                  <li>
                    <i className="far fa-check-circle text-success me-2"></i>
                    Optimize All Your Efforts
                  </li>
                  <li>
                    <i className="far fa-times-circle text-muted me-2"></i>
                    Centralized Teams
                  </li>
                  <li>
                    <i className="far fa-times-circle text-muted me-2"></i>
                    Shareable Team Libraries
                  </li>
                </ul>
              </div>
              <Link to="/request-demo" className="btn btn-primary mt-2">
                Get Started Now
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="position-relative single-pricing-wrap rounded-custom bg-white custom-shadow p-5 mb-4 mb-lg-0">
              <div className="pricing-header mb-32">
                <h3 className="package-name text-primary d-block">Premium</h3>
                <h4 className="display-6 fw-semi-bold">
                  $69<span>/month</span>
                </h4>
              </div>
              <div className="pricing-info mb-4">
                <ul className="pricing-feature-list list-unstyled">
                  <li>
                    <i className="far fa-check-circle text-success me-2"></i>
                    Create Unique Websites
                  </li>
                  <li>
                    <i className="far fa-check-circle text-success me-2"></i>
                    Automate Your Busy Work
                  </li>
                  <li>
                    <i className="far fa-check-circle text-success me-2"></i>
                    Optimize All Your Efforts
                  </li>
                  <li>
                    <i className="far fa-check-circle text-success me-2"></i>{" "}
                    Video Centralized Teams
                  </li>
                  <li>
                    <i className="far fa-check-circle text-success me-2"></i> 40
                    Shareable Team Libraries
                  </li>
                </ul>
              </div>
              <Link to="/request-demo" className="btn btn-outline-primary mt-2">
                Get Started Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceThree;
