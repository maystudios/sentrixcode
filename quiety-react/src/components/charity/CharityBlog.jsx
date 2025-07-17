import React from "react";

const blogData = [
  {
    id: 1,
    image: "/img/home_40/blog_1.png",
    donationRange: "$7,500 - 9,000",
    title: "Big Charity: Build School for Poor Children",
    link: "#",
  },
  {
    id: 2,
    image: "/img/home_40/blog_1.png",
    donationRange: "$7,500 - 9,000",
    title: "Big Charity: Build School for Poor Children",
    link: "#",
  },
  {
    id: 3,
    image: "/img/home_40/blog_1.png",
    donationRange: "$7,500 - 9,000",
    title: "Big Charity: Build School for Poor Children",
    link: "#",
  },
];

const CharityBlog = () => {
  return (
    <section className="pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            {/* Add any additional content or titles here */}
          </div>
        </div>
        <div className="mt-40">
          <div className="row justify-content-center g-4">
            {blogData.map((blog) => (
              <div className="col-md-6 col-xl-4" key={blog.id}>
                <div className="blog_40_item bg-white p-4 rounded-4 shadow-sm">
                  <img
                    src={blog.image}
                    alt="Image"
                    className="img-fluid w-100 mb-3"
                  />
                  <div className="text-center pt-3">
                    <p className="fs-14 mb-2">
                      Donations:{" "}
                      <span className="fw-semibold">
                        <span className="ma-warning-text">
                          {blog.donationRange}
                        </span>
                      </span>
                    </p>
                    <a href={blog.link}>
                      <h6 className="fs-24 fw-medium mb-0">{blog.title}</h6>
                    </a>
                    <a
                      href={blog.link}
                      className="d-inline-block btn bg-dark text-white fw-medium rounded-pill mt-4"
                    >
                      Donate Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharityBlog;
