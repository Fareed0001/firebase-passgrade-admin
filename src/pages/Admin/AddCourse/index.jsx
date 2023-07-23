import React, { useRef } from "react";
import Axios from "@/utils/Axios";
import Cookies from "js-cookie";
import { toast } from "react-hot-toast";

const CourseCreate_URL = "/create/course";

const Index = () => {
  const imageref = useRef(null);
  const coursetitleref = useRef(null);
  const courseDescriptionref = useRef(null);
  const studentPriceref = useRef(null);
  const AgentPriceRef = useRef(null);
  const adddurationref = useRef(null);

  const HandleSubmit = async (event) => {
    event.preventDefault();
    const coverPhoto = imageref.current.files[0];
    const title = coursetitleref.current.value;
    const description = courseDescriptionref.current.value;
    const student_price = studentPriceref.current.value;
    const agent_price = AgentPriceRef.current.value;
    const duration = adddurationref.current.value;

    const formdata = new FormData();

    formdata.append("title", title);
    formdata.append("description", description);
    formdata.append("agent_price", agent_price);
    formdata.append("student_price", student_price);
    formdata.append("duration", duration);
    // formdata.append("coverPhoto", coverPhoto);

    try {
      const response = await Axios.post(CourseCreate_URL, formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${Cookies.get("authToken")}`,
        },
      });

      console.log(response?.status);
      toast.success("sucessfully Added a course");
      imageref.current.value = "";
      courseDescriptionref.current.value = "";
      coursetitleref.current.value = "";
      AgentPriceRef.current.value = "";
      studentPriceref.current.value = "";
      adddurationref.current.value = "";
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <section className="addNewCourse">
      <div class="container new-course-container">
        <p class="admin-header-text">Add a new course</p>
        <form onSubmit={HandleSubmit}>
          <div class="row container">
            <div class="admin-input-field-div col-12 col-lg-6">
              <label htmlFor="coverImage" class="form-label admin-form-label">
                Select course cover image
              </label>
              <input
                ref={imageref}
                class="form-control"
                type="file"
                id="coverImage"
                accept="image/*"
              />
            </div>

            <div class="input-field-div col-12 col-lg-6">
              <label htmlFor="courseTitle" class="form-label admin-form-label">
                Course title
              </label>
              <input
                ref={coursetitleref}
                type="text"
                class="form-control"
                placeholder="Enter course title"
                id="courseTitle"
              />
            </div>

            <div class="input-field-div col-lg-12">
              <label
                htmlFor="courseDescription"
                class="form-label admin-form-label"
              >
                Course description
              </label>
              <textarea
                ref={courseDescriptionref}
                class="form-control admin-text-area"
                placeholder="Enter the course description"
                id="courseDescription"
              ></textarea>
            </div>

            <div class="input-field-div col-12 col-lg-6">
              <label htmlFor="studentPrice" class="form-label admin-form-label">
                Student price
              </label>
              <div class="input-group">
                <span class="input-group-text">₦</span>
                <input
                  ref={studentPriceref}
                  id="studentPrice"
                  type="number"
                  class="form-control"
                  aria-label="Amount (to the nearest naira)"
                />
                <span class="input-group-text">.00</span>
              </div>
            </div>

            <div class="input-field-div col-12 col-lg-6">
              <label htmlFor="agentPrice" class="form-label admin-form-label">
                Agent price
              </label>
              <div class="input-group">
                <span class="input-group-text">₦</span>
                <input
                  ref={AgentPriceRef}
                  id="agentPrice"
                  type="number"
                  class="form-control"
                  aria-label="Amount (to the nearest dollar)"
                />
                <span class="input-group-text">.00</span>
              </div>
            </div>

            <div class="input-field-div col-lg-12">
              <label
                htmlFor="classDuration"
                class="form-label admin-form-label"
              >
                Class duration in days
              </label>
              <input
                ref={adddurationref}
                type="number"
                class="form-control"
                placeholder="Enter class duration in days"
                id="classDuration"
              />
            </div>
          </div>
          <button class="btn btn-primary add-new-course-button" type="submit">
            Add new course
          </button>
        </form>
      </div>
    </section>
  );
};

export default Index;
