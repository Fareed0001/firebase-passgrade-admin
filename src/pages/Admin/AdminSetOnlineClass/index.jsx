import Axios from "@/utils/Axios";
import { getcourses } from "@/utils/queries";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React, { useRef, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { BiLoaderAlt, BiLoaderCircle } from "react-icons/bi";

const addcourseUrl = "/message/normal/add";

const Index = () => {
  const router = useRouter();
  const [Courses, setCourses] = useState([]);
  const [Loading, setLoading] = useState(false);
  const classtitleRef = useRef();
  const instructorRef = useRef();
  const descriptionRef = useRef();
  const courseRef = useRef();
  const dateRef = useRef();
  const timeRef = useRef();

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await getcourses();
      setCourses(response.data);
    };
    fetchCourses();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const classtitle = classtitleRef.current.value;
    const instructor = instructorRef.current.value;
    const description = descriptionRef.current.value;
    const course_id = courseRef.current.value;
    const date = dateRef.current.value;
    const time = timeRef.current.value;

    const requestData = {
      title: classtitle,
      description: description,
      course_id: course_id,
      instructor: instructor,
      date: date,
      time: time,
    };

    setLoading(true);

    try {
      const response = await Axios.post(addcourseUrl, requestData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Cookies.get("authToken")}`,
        },
      });

      setLoading(false);
      router.push("/Admin");
      toast.success("Class scheduled successfully");
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <section className="addNewCourse h-screen flex items-center justify-center">
      {Loading && (
        <div className="h-screen fixed w-screen z-20 top-0 left-0 flex  bg-black/30 items-center justify-center">
          <BiLoaderCircle className="animate-spin text-white text-4xl z-[500000]" />{" "}
        </div>
      )}

      <div className="container max-h-screen">
        <p className="admin-header-text">Schedule an online class</p>
        <form onSubmit={handleSubmit}>
          <div className="row container">
            <div className="input-field-div col-12 col-lg-6">
              <label htmlFor="classTitle" className="form-label admin-form-label">
                Class title
              </label>
              <input
                type="text"
                ref={classtitleRef}
                className="form-control"
                placeholder="Enter class name title"
                id="classTitle"
              />
            </div>

            <div className="input-field-div col-12 col-lg-6">
              <label htmlFor="classInstructor" className="form-label admin-form-label">
                Class instructor
              </label>
              <input
                type="text"
                ref={instructorRef}
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
                ref={descriptionRef}
                placeholder="Enter the className description"
                id="classDescription"
              ></textarea>
            </div>

            <div className="input-field-div col-lg-12">
              <label className="form-label admin-form-label" htmlFor="">
                Select course
              </label>
              <select className="form-select" ref={courseRef} required>
                <option value="" disabled>Select course to add class name to</option>
                {Courses.map((course) => (
                  <option key={course._id} value={course._id}>
                    {course.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="input-field-div col-lg-6">
              <label className="form-label admin-form-label" htmlFor="classDate">
                Select class date
              </label>
              <input
                id="classDate"
                ref={dateRef}
                className="form-control"
                type="date"
              />
            </div>

            <div className="input-field-div col-lg-6">
              <label className="form-label admin-form-label" htmlFor="classTime">
                Select class time
              </label>
              <input
                id="classTime"
                ref={timeRef}
                className="form-control"
                type="time"

              />
            </div>
          </div>
          <button
            className="btn btn-primary add-new-course-button flex items-center justify-center "
            type="submit"
            disabled={Loading}
          >
            <div className="flex items-center justify-center gap-x-2">
              <span className="">
                {Loading ? "Loading..." : "Schedule an online class"}
              </span>
              <span>
                {Loading ? <BiLoaderAlt className="animate-spin" /> : " "}
              </span>
            </div>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Index;
