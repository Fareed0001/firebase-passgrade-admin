import Axios from "@/utils/Axios";
import { getcourses } from "@/utils/queries";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React, { useRef, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { BiLoaderAlt, BiLoaderCircle } from "react-icons/bi";

const addcourseUrl = "/message/meeting/add";

const Index = () => {
  const router = useRouter();
  const [Courses, setCourses] = useState([]);
  const [Loading, setLoading] = useState(false);
  const meetinglinkRef = useRef();
  const meetingtitleRef = useRef();
  const courseRef = useRef();

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await getcourses();
      setCourses(response.data);
    };
    fetchCourses();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const meetinglink = meetinglinkRef.current.value;
    const meetingtitle = meetingtitleRef.current.value;
    const course_id = courseRef.current.value;

    const requestData = {
      title: meetingtitle,
      link: meetinglink,
      course_id: course_id,
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
      toast.success("Start class message sent successfully");
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <section className="addNewCourse">
      {Loading && (
        <div className="h-screen fixed w-screen z-20 top-0 left-0 flex  bg-black/30 items-center justify-center">
          <BiLoaderCircle className="animate-spin text-white text-4xl z-[500000]" />{" "}
        </div>
      )}

      <div className="container new-course-container">
        <p className="admin-header-text">Start online class</p>
        <form onSubmit={handleSubmit}>
          <div className="row container">
            <div className="input-field-div col-12 col-lg-6">
              <label htmlFor="meetingLink" className="form-label tutor-form-label">
                Meeting link
              </label>
              <input
                type="text"
                ref={meetinglinkRef}
                className="form-control"
                placeholder="Enter meeting link"
                id="meetingLink"
              />
            </div>

            <div className="input-field-div col-12 col-lg-6">
              <label htmlFor="meetingTitle" className="form-label tutor-form-label">
                Meeting title
              </label>
              <input
                type="text"
                ref={meetingtitleRef}
                className="form-control"
                placeholder="Enter meeting title"
                id="meetingTitle"
              />
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
