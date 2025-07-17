import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

const CharityFaq = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const accordionData = [
    {
      id: "collapseOne",
      title: "How Does we Works?",
      body: "Distinctively initiate viral ideas for goal-oriented partnerships. Appropriately network cross-media platform total linkage. Uniquely create turnkey",
    },
    {
      id: "collapseTwo",
      title: "How long does a project last?",
      body: "Distinctively initiate viral ideas for goal-oriented partnerships. Appropriately network cross-media platform total linkage. Uniquely create turnkey",
    },
    {
      id: "collapseThree",
      title: "IT help desk for internal teams",
      body: "Distinctively initiate viral ideas for goal-oriented partnerships. Appropriately network cross-media platform total linkage. Uniquely create turnkey",
    },
    {
      id: "collapse4",
      title: "Where can I view store locations and hours?",
      body: "Distinctively initiate viral ideas for goal-oriented partnerships. Appropriately network cross-media platform total linkage. Uniquely create turnkey",
    },
    {
      id: "collapse5",
      title: "Where can I view store locations and hours?",
      body: "Distinctively initiate viral ideas for goal-oriented partnerships. Appropriately network cross-media platform total linkage. Uniquely create turnkey",
    },
  ];

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id); // Toggle the accordion
  };

  return (
    <section className="faq_40 pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="text-center mb-40">
              <h2 className="home-38-title fs-48 mb-3">
                Frequently Asked Question
              </h2>
              <p className="mb-0">
                Onboard your own talent pool to Quitey, invite them to projects,
                sign contracts and kick off the projects simpler than ever.
              </p>
            </div>
          </div>
          <div className="col-xl-8">
            <div
              className="accordion ca-accordion home-38 style_40"
              id="technologicalQuery"
            >
              {accordionData.map((item, index) => (
                <div key={index} className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button d-flex align-items-center justify-content-between ${
                        activeAccordion === item.id ? "" : "collapsed"
                      }`}
                      type="button"
                      onClick={() => toggleAccordion(item.id)} // Handle click event
                      aria-expanded={
                        activeAccordion === item.id ? "true" : "false"
                      }
                      aria-controls={item.id}
                    >
                      {item.title}
                      <span>
                        {activeAccordion === item.id ? (
                          <FaMinus size={20} />
                        ) : (
                          <FaPlus size={20} />
                        )}
                      </span>
                    </button>
                  </h2>
                  <div
                    id={item.id}
                    className={`accordion-collapse collapse ${
                      activeAccordion === item.id ? "show" : ""
                    }`}
                    data-bs-parent="#technologicalQuery"
                  >
                    <div className="accordion-body">{item.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharityFaq;
