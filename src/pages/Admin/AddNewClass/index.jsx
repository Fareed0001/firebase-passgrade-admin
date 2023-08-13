import Axios from "@/utils/Axios";
import { getcourses } from "@/utils/queries";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React, { useRef, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { BiLoaderAlt, BiLoaderCircle } from "react-icons/bi";

const addcourseUrl = "/course/class/add";

const Index = () => {
  const router = useRouter();
  const [Courses, setCourses] = useState([]);
  const [Loading, setLoading] = useState(false);
  const videoref = useRef();
  const resourceRef = useRef();
  const classtitleref = useRef();
  const instructorRef = useRef();
  const descriptionRef = useRef();
  const Courseref = useRef();

  useEffect(() => {
    const courses = async () => {
      const courses = await getcourses();

      setCourses(courses.data);
    };
    courses();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const video = videoref.current.files[0];
    const resource = resourceRef.current.files[0];
    const classtitle = classtitleref.current.value;
    const instructor = instructorRef.current.value;
    const description = descriptionRef.current.value;
    const course_id = Courseref.current.value;

    const formdata = new FormData();
    formdata.append("title", classtitle);
    formdata.append("description", description);
    formdata.append("course_id", course_id);
    formdata.append("video", video);
    formdata.append("resource", resource);
    formdata.append("instructor", instructor);

    setLoading(true);

    try {
      const response = await Axios.post(addcourseUrl, formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${Cookies.get("authToken")}`,
        },
      });

      setLoading(false);
      router.push("/Admin");
      toast.success("Class added successfully");
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
      <div className="container new-course-container max-h-screen">
        <p className="admin-header-text ">Add a new class</p>
        <form onSubmit={handleSubmit}>
          <div className="row container">
            <div className="input-field-div col-12 col-lg-6">
              <label
                htmlFor="classVideo"
                className="form-label admin-form-label"
              >
                Select class video
              </label>
              <input
                className="form-control"
                type="file"
                id="classVideo"
                ref={videoref}
                accept="video/mp4, video/x-m4v, video/*"
              />
            </div>

            <div className="input-field-div col-12 col-lg-6">
              <label htmlFor="classPDF" className="form-label admin-form-label">
                Select class resource
              </label>
              <input
                ref={resourceRef}
                className="form-control"
                type="file"
                id="classPDF"
                accept="
                  application/pdf,
                  application/vnd.ms-excel,
                  application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,  
                  application/msword,
                  application/vnd.openxmlformats-officedocument.wordprocessingml.document, 
                  application/vnd.ms-powerpoint,
                  application/vnd.openxmlformats-officedocument.presentationml.presentation,
                  text/plain,
                  application/epub,
                  application/mobi,
                  image/*"
              />

            </div>

            <div className="input-field-div col-12 col-lg-6">
              <label
                htmlFor="classTitle"
                className="form-label admin-form-label"
              >
                Class title
              </label>
              <input
                type="text"
                ref={classtitleref}
                className="form-control"
                placeholder="Enter class name title"
                id="classTitle"
              />
            </div>

            <div className="input-field-div col-12 col-lg-6">
              <label
                htmlFor="classInstructor"
                className="form-label admin-form-label"
              >
                Class instructor
              </label>
              <input
                ref={instructorRef}
                type="text"
                className="form-control"
                placeholder="Enter class name instructor"
                id="classInstructor"
              />
            </div>

            <div className="input-field-div col-lg-12">
              <label
                htmlFor="classDescription"
                className="form-label admin-form-label"
              >
                Class description
              </label>
              <textarea
                ref={descriptionRef}
                className="form-control admin-text-area"
                placeholder="Enter the class name description"
                id="classDescription"
              ></textarea>
            </div>

            <div className="input-field-div col-lg-12">
              <label className="form-label admin-form-label" htmlFor="">
                Select course
              </label>
              <select className="form-select" ref={Courseref} required>
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
                {Loading ? "Loading..." : "Add new class"}
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
