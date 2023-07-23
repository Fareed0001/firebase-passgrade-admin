import React from "react";

const index = () => {
  return (
    <section className="addNewCourse">
      <div className="container body-content">
        <p className="admin-header-text">Add a new instructor</p>
        <form action="">
          <div className="row container">
            <div className="input-field-div col-12 col-lg-12">
              <label
                htmlFor="coverImage"
                className="form-label admin-form-label"
              >
                Instructors profile picture
              </label>
              <input
                className="form-control"
                type="file"
                id="coverImage"
                accept="image/*"
              />
            </div>

            <div className="input-field-div col-12 col-lg-6">
              <label
                htmlFor="instructorFname"
                className="form-label admin-form-label"
              >
                Instructors first name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter instructor's first name"
                id="instructorFname"
              />
            </div>

            <div className="input-field-div col-12 col-lg-6">
              <label
                htmlFor="instructorLname"
                className="form-label admin-form-label"
              >
                Instructors last name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter instructor's last name"
                id="instructorLname"
              />
            </div>
          </div>
          <button
            className="btn btn-primary  add-new-course-button"
            type="submit"
          >
            Add new instructor
          </button>
        </form>
      </div>
    </section>
  );
};

export default index;
