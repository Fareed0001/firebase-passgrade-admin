import React from "react";

const index = () => {
  return (
    <section className="addNewCourse">
      <div className="container new-course-container">
        <p className="admin-header-text">Add a new class</p>
        <form action="">
          <div className="row container">
            <div className="input-field-div col-12 col-lg-6">
              <label htmlFor="classVideo" className="form-label admin-form-label">
                Select class video
              </label>
              <input
                className="form-control"
                type="file"
                id="classVideo"
                accept="video/mp4, video/x-m4v, video/*"
              />
            </div>

            <div className="input-field-div col-12 col-lg-6">
              <label htmlFor="classPDF" className="form-label admin-form-label">
                Select class resource
              </label>
              <input
                className="form-control"
                type="file"
                id="classPDF"
                accept="application/pdf, application/vnd.ms-excel, application/epub, application/mobi, application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,
                        text/plain, application/pdf, image/*"
              />
            </div>

            <div className="input-field-div col-12 col-lg-6">
              <label htmlFor="classTitle" className="form-label admin-form-label">
                Class title
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter className title"
                id="classTitle"
              />
            </div>

            <div className="input-field-div col-12 col-lg-6">
              <label htmlFor="classInstructor" className="form-label admin-form-label">
                Class instructor
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter className instructor"
                id="classInstructor"
              />
            </div>

            <div className="input-field-div col-lg-12">
              <label htmlFor="classDescription" className="form-label admin-form-label">
                Class description
              </label>
              <textarea
                className="form-control admin-text-area"
                placeholder="Enter the className description"
                id="classDescription"
              ></textarea>
            </div>

            <div className="input-field-div col-lg-12">
              <label className="form-label admin-form-label" htmlFor="">
                Select course
              </label>
              <select className="form-select">
                <option selected>Select course to add className to</option>
                <option value="1">Course One</option>
                <option value="2">Course Two</option>
                <option value="3">Course Three</option>
              </select>
            </div>
          </div>
          <button
            className="btn btn-primary add-new-course-button"
            type="submit"
          >
            Add new class
          </button>
        </form>
      </div>
    </section>
  );
};

export default index;
