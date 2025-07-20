import { Link } from "react-router-dom";

const ItCompanyTeam = () => {
  return (
    <>
      <div className="it-company-team-area it-company-bg-two ptb-120 position-relative z-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center">
                <h2 className="it-company-title it-company-color fs-40 fw-600 flh-56 mb-30">
                  Our Expert Team Members
                </h2>
              </div>
            </div>
          </div>
          {/* We adjust the grid to center the two team members */}
          <div className="row justify-content-center">
            {/* Team Member 1: Sven Maibaum */}
            <div className="col-xl-4 col-md-6">
              <div className="it-company-team-item bg-white text-center p-50 rounded-12 mt-20 position-relative">
                <img
                  src="https://placehold.co/200x200/EBF4F5/333333?text=Sven"
                  alt="Sven Maibaum"
                  className="mb-30 img-fluid rounded-circle"
                  onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/200x200/EBF4F5/333333?text=Image+Missing'; }}
                />
                <h5 className="it-company-color fs-20 fw-700">
                  Sven Maibaum
                </h5>
                <p className="clr-paragraph flh-24 mb-0">CTO & Software Architect</p>
                <div className="it-company-team-social">
                  <Link
                    to="#" // Replace with actual social media link
                    className="it-company-team-social-icon it-company-bg text-white d-inline-flex align-items-center justify-content-center rounded-circle"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                  <Link
                    to="#" // Replace with actual social media link
                    className="it-company-team-social-icon it-company-bg-four text-white d-inline-flex align-items-center justify-content-center rounded-circle"
                  >
                    <i className="fab fa-xing"></i>
                  </Link>
                  <Link
                    to="#" // Replace with actual social media link
                    className="it-company-team-social-icon it-company-bg-five text-white d-inline-flex align-items-center justify-content-center rounded-circle"
                  >
                    <i className="fab fa-github"></i>
                  </Link>
                </div>
              </div>
            </div>
            {/* Team Member 2: Luca Wiegand */}
            <div className="col-xl-4 col-md-6">
              <div className="it-company-team-item bg-white text-center p-50 rounded-12 mt-20 position-relative">
                <img
                  src="https://placehold.co/200x200/EBF4F5/333333?text=Luca"
                  alt="Luca Wiegand"
                  className="mb-30 img-fluid rounded-circle"
                  onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/200x200/EBF4F5/333333?text=Image+Missing'; }}
                />
                <h5 className="it-company-color fs-20 fw-700">
                  Luca Wiegand
                </h5>
                <p className="clr-paragraph flh-24 mb-0">CEO & Web Developer</p>
                <div className="it-company-team-social">
                   <Link
                    to="#" // Replace with actual social media link
                    className="it-company-team-social-icon it-company-bg text-white d-inline-flex align-items-center justify-content-center rounded-circle"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                  <Link
                    to="#" // Replace with actual social media link
                    className="it-company-team-social-icon it-company-bg-four text-white d-inline-flex align-items-center justify-content-center rounded-circle"
                  >
                    <i className="fab fa-xing"></i>
                  </Link>
                  <Link
                    to="#" // Replace with actual social media link
                    className="it-company-team-social-icon it-company-bg-five text-white d-inline-flex align-items-center justify-content-center rounded-circle"
                  >
                    <i className="fab fa-dribbble"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItCompanyTeam;
