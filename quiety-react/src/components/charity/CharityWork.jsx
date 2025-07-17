const CharityWork = () => {
  return (
    <>
      <section class="work_40_area bg-light-subtle pt-120 pb-120">
        <div class="container">
          <div class="row align-items-center g-4">
            <div class="col-xl-6">
              <div class="d-inline-block px-4 py-1 rounded-pill border border-warning mb-3">
                <p class="ma-warning-text fw-bold mb-0">How it Work</p>
              </div>
              <h2 class="home-38-title fs-48 mb-5">
                Discover Ways to Make a Difference Today
              </h2>
              <div class="job-tabs style_40">
                <ul
                  class="nav nav-pills d-flex flex-column"
                  id="pills-tab"
                  role="tablist"
                >
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link text-black fs-24 fw-bold active"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      <span>1. Create Accounts</span>
                      <span class="tab_sub_content d-inline-block text-body fs-16 fw-normal">
                        Depending on the delivery option you selected at
                        checkout, we’ll email you a tracking link after your
                        order has been shipped. Enterprise resource planning
                        (ERP) is a single platform . We’ve spent over a decade
                        refining Todoist to be an extension of your organize
                        tasks instantly using easy-flowing.
                      </span>
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link text-black fs-24 fw-bold"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                      <span>2. Complete Your Profile</span>
                      <span class="tab_sub_content d-inline-block text-body fs-16 fw-normal">
                        Depending on the delivery option you selected at
                        checkout, we’ll email you a tracking link after your
                        order has been shipped. Enterprise resource planning
                        (ERP) is a single platform . We’ve spent over a decade
                        refining Todoist to be an extension of your organize
                        tasks instantly using easy-flowing.
                      </span>
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link text-black fs-24 fw-bold"
                      id="pills-contact-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-contact"
                      type="button"
                      role="tab"
                      aria-controls="pills-contact"
                      aria-selected="false"
                    >
                      <span>3. Apply Job Or Hire</span>
                      <span class="tab_sub_content d-inline-block text-body fs-16 fw-normal">
                        Depending on the delivery option you selected at
                        checkout, we’ll email you a tracking link after your
                        order has been shipped. Enterprise resource planning
                        (ERP) is a single platform . We’ve spent over a decade
                        refining Todoist to be an extension of your organize
                        tasks instantly using easy-flowing.
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-xl-6">
              <div class="bg-white w-100 shadow-sm px-4 py-5 rounded-4">
                <p class="ma-warning-text fw-bold mb-2">Donate now</p>
                <h5 class="fs-28 fch-30 mb-4">
                  Enable Us to Fund Innovative Research
                </h5>
                <div class="d-flex align-items-center gap-2">
                  <p class="text-black fs-14 mb-0">Monthly</p>
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckDefault"
                    />
                  </div>
                  <p class="text-black fs-14 mb-0">One-Off</p>
                </div>
                <ul class="list-unstyled d-flex align-items-center gap-2 mb-4 mt-4">
                  <li>
                    <label class="select-img pointer" for="selectColor4">
                      <input
                        class="select-img__input"
                        type="radio"
                        id="selectColor4"
                        name="select-color"
                        checked=""
                      />
                      <span class="select-color">
                        <span class="fs-14 fw-medium clr-title">5$</span>
                      </span>
                    </label>
                  </li>
                  <li>
                    <label class="select-img pointer" for="selectColor5">
                      <input
                        class="select-img__input"
                        type="radio"
                        id="selectColor5"
                        name="select-color"
                        checked=""
                      />
                      <span class="select-color">
                        <span class="fs-14 fw-medium clr-title">10$</span>
                      </span>
                    </label>
                  </li>
                  <li>
                    <label class="select-img pointer" for="selectColor6">
                      <input
                        class="select-img__input"
                        type="radio"
                        id="selectColor6"
                        name="select-color"
                        checked=""
                      />
                      <span class="select-color">
                        <span class="fs-14 fw-medium clr-title">15$</span>
                      </span>
                    </label>
                  </li>
                </ul>
                <form action="#">
                  <input
                    type="email"
                    class="form-control px-3 border border-opacity-25"
                    id="Email"
                    required=""
                    placeholder="Other Amount"
                  />
                  <textarea
                    class="form-control px-3 border border-opacity-25 mt-3"
                    placeholder="Description"
                    style={{ height: "120px" }}
                  ></textarea>
                  <button
                    type="button"
                    class="bg-dark px-4 py-2 text-white fw-bold border-0 rounded-pill mt-5"
                  >
                    Donate Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CharityWork;
