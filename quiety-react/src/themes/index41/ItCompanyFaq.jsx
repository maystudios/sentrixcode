import { FaPlus, FaMinus } from "react-icons/fa6";
import { useState } from "react";

// We define all FAQ data in one central array for easier management.
// The content for the first two questions is based on your detailed answers.
const allAccordionData = [
  // --- Column 1: About Our Process & Collaboration ---
  {
    id: "faq1",
    title: "How do we start a project?",
    content:
      "You have several easy ways to get in touch. You can fill out our contact form with your project details, or use our booking tool to schedule a free 20-30 minute initial consultation directly. Alternatively, just send us an email, and we'll find a flexible time that works for you.",
  },
  {
    id: "faq2",
    title: "What if my idea isn't fully fleshed out?",
    content:
      "That's a perfect starting point! We specialize in helping you refine your concept. Through collaborative workshops, detailed discussions, and an iterative process, we work with you to define the requirements, explore the details, and ensure the final product is both powerful and user-friendly.",
  },
  {
    id: "faq3",
    title: "How will I be kept updated during the project?",
    content:
      "[Your answer will be placed here. We will discuss your communication process, including regular meetings, tools like Jira or Trello, and access to demos.]",
  },
  // --- Column 2: Our Services & Technologies ---
  {
    id: "faq4",
    title: "What kind of web applications can you build?",
    content:
      "[Your answer will be placed here. We will list examples like customer portals, internal dashboards, APIs, and other custom solutions.]",
  },
  {
    id: "faq5",
    title: "Which platforms do you support for mobile apps?",
    content:
      "[Your answer will be placed here. We will explain your expertise in cross-platform development with technologies like Flutter for iOS and Android.]",
  },
  {
    id: "faq6",
    title: "Do you also offer UI/UX design services?",
    content:
      "[Your answer will be placed here. We will clarify if design is part of your service package or if clients need to provide their own designs.]",
  },
  // --- Column 3: Project Details, Cost & Support ---
  {
    id: "faq7",
    title: "How is the project cost determined?",
    content:
      "[Your answer will be placed here. We will explain that costs depend on complexity and how you provide transparent, detailed quotes.]",
  },
  {
    id: "faq8",
    title: "Who owns the source code after the project?",
    content:
      "[Your answer will be placed here. We will confirm that the client owns the full intellectual property upon final payment.]",
  },
  {
    id: "faq9",
    title: "Do you offer support and maintenance after launch?",
    content:
      "[Your answer will be placed here. We will describe your post-launch support packages for maintenance, updates, and bug fixes.]",
  },
];

// Split the data into three arrays for the three-column layout
const accordionData = allAccordionData.slice(0, 3);
const accordionDataTwo = allAccordionData.slice(3, 6);
const accordionDataThree = allAccordionData.slice(6, 9);

const ItCompanyFaq = () => {
  // This state will keep track of which accordion item is currently open.
  const [activeAccordion, setActiveAccordion] = useState("faq1");

  const toggleAccordion = (id) => {
    // If the clicked item is already open, close it. Otherwise, open it.
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <>
      <div className="it-company-faq-area ptb-120 position-relative overflow-hidden">
        {/* These images are from the template, you can keep or replace them */}
        <img
          src="/img/it_company/shape/faq.png"
          alt="Decorative Shape 1"
          className="s-one position-absolute"
          onError={(e) => { e.target.style.display='none'; }}
        />
        <img
          src="/img/it_company/shape/faq_2.png"
          alt="Decorative Shape 2"
          className="s-two position-absolute"
          onError={(e) => { e.target.style.display='none'; }}
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center">
                <h2 className="it-company-title it-company-color fs-40 fw-600 flh-56 mb-40">
                  Frequently Asked Questions
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            {/* Column 1 */}
            <div className="col-lg-4">
              <div className="accordion ca-accordion" id="faqColumnOne">
                {accordionData.map((item) => (
                  <div className="accordion-item" key={item.id}>
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button d-flex align-items-center justify-content-between ${
                          activeAccordion === item.id ? "" : "collapsed"
                        }`}
                        type="button"
                        onClick={() => toggleAccordion(item.id)}
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
                      data-bs-parent="#faqColumnOne"
                    >
                      <div className="accordion-body">{item.content}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Column 2 */}
            <div className="col-lg-4">
              <div className="accordion ca-accordion" id="faqColumnTwo">
                {accordionDataTwo.map((item) => (
                  <div className="accordion-item" key={item.id}>
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button d-flex align-items-center justify-content-between ${
                          activeAccordion === item.id ? "" : "collapsed"
                        }`}
                        type="button"
                        onClick={() => toggleAccordion(item.id)}
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
                      data-bs-parent="#faqColumnTwo"
                    >
                      <div className="accordion-body">{item.content}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Column 3 */}
            <div className="col-lg-4">
              <div className="accordion ca-accordion" id="faqColumnThree">
                {accordionDataThree.map((item) => (
                  <div className="accordion-item" key={item.id}>
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button d-flex align-items-center justify-content-between ${
                          activeAccordion === item.id ? "" : "collapsed"
                        }`}
                        type="button"
                        onClick={() => toggleAccordion(item.id)}
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
                      data-bs-parent="#faqColumnThree"
                    >
                      <div className="accordion-body">{item.content}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItCompanyFaq;
