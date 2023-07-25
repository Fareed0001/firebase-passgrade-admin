import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <section className="addNewCourse">
      <div className="container body-content">
        <p className="admin-header-text">See all Agents</p>

        <div className="see-all-div">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            
            <div className="col see-all-col">
              <div className="see-all-card">
                <Image
                  src=""
                  className="card-img-top see-all-card-img"
                  alt=""
                />
                <div className="see-all-card-body">
                  <p className="see-all-card-title">Name</p>
                  <div class="d-grid">
                    <button type="button" class="btn btn-outline-danger">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
