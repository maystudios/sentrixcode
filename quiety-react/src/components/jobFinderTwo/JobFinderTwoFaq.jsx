import React, { useState } from "react";
import { IoAddOutline, IoRemoveOutline } from "react-icons/io5";

const JobFinderTwoFaq = () => {
  const accordionItems = [
    {
      id: 1,
      title: "How Does we Works?",
      content:
        "Distinctively initiate viral ideas for goal-oriented partnerships. Appropriately network cross-media platform total linkage. Uniquely create turnkey",
    },
    {
      id: 2,
      title: "How long does a project last?",
      content:
        "Distinctively initiate viral ideas for goal-oriented partnerships. Appropriately network cross-media platform total linkage. Uniquely create turnkey",
    },
    {
      id: 3,
      title: "IT help desk for internal teams",
      content:
        "Distinctively initiate viral ideas for goal-oriented partnerships. Appropriately network cross-media platform total linkage. Uniquely create turnkey",
    },
    {
      id: 4,
      title: "Where can I view store locations and hours?",
      content:
        "Distinctively initiate viral ideas for goal-oriented partnerships. Appropriately network cross-media platform total linkage. Uniquely create turnkey",
    },
    {
      id: 5,
      title: "Where can I view store locations and hours?",
      content:
        "Distinctively initiate viral ideas for goal-oriented partnerships. Appropriately network cross-media platform total linkage. Uniquely create turnkey",
    },
  ];

  const [openItemId, setOpenItemId] = useState(null);

  const handleToggle = (id) => {
    setOpenItemId((prev) => (prev === id ? null : id));
  };
  return (
    <>
      <section className="pt-60 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="text-center  mb-40">
                <h2 className="home-38-title fs-48 mb-3">
                  Frequently Asked Question
                </h2>
                <p className="mb-0">
                  Onboard your own talent pool to Quitey, invite them to
                  projects, sign contracts and kick off the projects simpler
                  than ever.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div
                className="accordion ca-accordion home-38"
                id="technologicalQuery"
              >
                {accordionItems.map((item) => (
                  <div className="accordion-item" key={item.id}>
                    <h2 className="accordion-header d-flex align-items-center justify-content-between">
                      <button
                        className={`accordion-button  ${
                          openItemId === item.id ? "" : "collapsed"
                        }`}
                        type="button"
                        onClick={() => handleToggle(item.id)}
                      >
                        {item.title}
                      </button>
                      <span
                        type="button"
                        onClick={() => handleToggle(item.id)}
                        className="cursor-pointer"
                      >
                        {openItemId === item.id ? (
                          <IoRemoveOutline size={20} />
                        ) : (
                          <IoAddOutline size={20} />
                        )}
                      </span>
                    </h2>
                    <div
                      id={`collapse${item.id}`}
                      className={`accordion-collapse collapse ${
                        openItemId === item.id ? "show" : ""
                      }`}
                    >
                      <div className="accordion-body">{item.content}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobFinderTwoFaq;
