import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <section className="addNewCourse">
      <div class="container  new-course-container">
        <p class="admin-header-text">Verify new agent</p>

        <div class="agent-verification-div">
          {/* <!-- NEW AGENT CARD START  --> */}
          <div class="row row-cols-1 row-cols-md-2  row-cols-lg-3 g-4">
            <div class="col agent-col">
              <div class="new-agent-card">
                <Image
                  src="https://avatars.githubusercontent.com/u/64348428?v=4"
                  class="card-img-top courses-card-img"
                  alt="sat"
                />
                <div class="agent-card-body">
                  <p class="agent-card-title">Temitope David</p>
                  <div class="row">
                    <div class="col-6 d-grid">
                      <button
                        type="button"
                        class="btn agent-card-button btn-outline-primary"
                      >
                        Accept
                      </button>
                    </div>
                    <div class="col-6 d-grid">
                      <button
                        type="button"
                        class="btn agent-card-button btn-outline-danger"
                      >
                        Reject
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="new-agent-card">
                <Image
                  src="https://avatars.githubusercontent.com/u/64348428?v=4"
                  class="card-img-top courses-card-img"
                  alt="sat"
                />
                <div class="agent-card-body">
                  <p class="agent-card-title">Temitope David</p>
                  <div class="row">
                    <div class="col-6 d-grid">
                      <button
                        type="button"
                        class="btn agent-card-button btn-outline-primary"
                      >
                        Accept
                      </button>
                    </div>
                    <div class="col-6 d-grid">
                      <button
                        type="button"
                        class="btn agent-card-button btn-outline-danger"
                      >
                        Reject
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="new-agent-card">
                <Image
                  src="https://avatars.githubusercontent.com/u/64348428?v=4"
                  class="card-img-top courses-card-img"
                  alt="sat"
                />
                <div class="agent-card-body">
                  <p class="agent-card-title">Temitope David</p>
                  <div class="row">
                    <div class="col-6 d-grid">
                      <button
                        type="button"
                        class="btn agent-card-button btn-outline-primary"
                      >
                        Accept
                      </button>
                    </div>
                    <div class="col-6 d-grid">
                      <button
                        type="button"
                        class="btn agent-card-button btn-outline-danger"
                      >
                        Reject
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- NEW AGENT CARD END  --> */}
    </section>
  );
};

export default index;
