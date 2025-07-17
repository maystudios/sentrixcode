const CharityWorkTwo = () => {
  return (
    <>
      <section class="work_2_40 pt-120 pb-120">
        <div class="container">
          <div class="row align-items-end g-4">
            <div class="col-xl-6">
              <div class="ps-xl-4">
                <div class="volunteer_form bg-white w-100 shadow-sm rounded-4">
                  <h5 class="fs-28 mb-4">Become a Volunteer</h5>
                  <form action="#" class="d-flex flex-column gap-3">
                    <div>
                      <label for="name" class="d-block fs-16 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        class="form-control px-3 border border-opacity-25"
                        id="Email"
                        required=""
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <label for="name" class="d-block fs-16 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        class="form-control px-3 border border-opacity-25"
                        id="Email"
                        required=""
                        placeholder="Enter you Email adress"
                      />
                    </div>
                    <div>
                      <label for="name" class="d-block fs-16 mb-1">
                        Phone No
                      </label>
                      <input
                        type="text"
                        class="form-control px-3 border border-opacity-25"
                        id="Email"
                        required=""
                        placeholder="Number"
                      />
                    </div>
                    <div>
                      <label for="name" class="d-block fs-16 mb-1">
                        Description
                      </label>
                      <textarea
                        class="form-control px-3 border border-opacity-25"
                        placeholder="Description"
                        style={{ height: "120px" }}
                      ></textarea>
                    </div>
                    <div>
                      <button
                        type="button"
                        class="bg-dark px-4 py-2 text-white fw-bold border-0 rounded-pill mt-3"
                      >
                        Donate Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-xl-6">
              <div class="ps-xl-4">
                <div class="d-inline-block px-4 py-1 rounded-pill border border-warning mb-3">
                  <p class="ma-warning-text fw-bold mb-0">Join With Us</p>
                </div>
                <h2 class="home-38-title fs-48 mb-3">
                  Join Hands to Give Education & Hope to{" "}
                  <span class="ma-warning-text">Children.</span>
                </h2>
                <p class="mb-4">
                  Join us in the fight against poverty! By becoming a Champion
                  for the poor you can create your own webpage.
                </p>
                <a
                  href="#"
                  class="btn btn-warning ma-warning-bg fw-medium rounded-5 d-inline-flex align-items-center gap-2 text-white"
                >
                  Donate Now{" "}
                  <span>
                    <i class="fa-solid fa-arrow-right"></i>
                  </span>
                </a>
                <img
                  src="/img/home_40/w2_img.png"
                  alt="Image"
                  class="img-fluid mt-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CharityWorkTwo;
