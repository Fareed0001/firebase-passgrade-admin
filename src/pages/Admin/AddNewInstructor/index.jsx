import React, { useRef } from "react";
import Axios from "@/utils/Axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";

const InstructorUrl = "/create/instructor";

const Index = () => {
  const router = useRouter();
  const instFirstnameref = useRef(null);
  const instLastnameref = useRef(null);
  const instEmailref = useRef(null);
  const instPasswordref = useRef(null);
  // Temi this line is to create the reference for the file input
  const coverImageRef = useRef(null); 

  const submitHandler = async (event) => {
    event.preventDefault();
    const firstname = instFirstnameref.current.value;
    const lastname = instLastnameref.current.value;
    const email = instEmailref.current.value;
    const password = instPasswordref.current.value;
    // and this one is to get the selected image file
    const photo = coverImageRef.current.files[0]; 
    
    const formdata = new FormData();
    formdata.append("firstname", firstname);
    formdata.append("lastname", lastname);
    formdata.append("email", email);
    formdata.append("password", password);
    // then append the selected image with the key 'photo'
    formdata.append("photo", photo); 


    try {
      const response = await Axios.post(InstructorUrl, formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${Cookies.get("authToken")}`,
        },
      });
      router.push("/Admin");
      instLastnameref.current.value = "";
      instFirstnameref.current.value = "";
      instEmailref.current.value = "";
      instPasswordref.current.value = "";
      toast.success("Instructor created successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <section className="addNewCourse">
      <div className="container body-content">
        <p className="admin-header-text">Add a new instructor</p>
        <form onSubmit={submitHandler}>
          <div className="row container">
            <div className="input-field-div col-12 col-lg-12">
              <label
                htmlFor="coverImage"
                className="form-label admin-form-label"
              >
                Instructors profile picture
              </label>
              <input
                ref={coverImageRef}
                className="form-control"
                type="file"
                id="coverImage"
                accept="image/*"
              />
            </div>

            <div className="input-field-div col-12 col-md-6 col-lg-6">
              <label
                htmlFor="instructorFname"
                className="form-label admin-form-label"
              >
                Instructors first name
              </label>
              <input
                ref={instFirstnameref}
                type="text"
                className="form-control"
                placeholder="Enter instructor's first name"
                id="instructorFname"
              />
            </div>

            <div className="input-field-div col-12 col-md-6 col-lg-6">
              <label
                htmlFor="instructorLname"
                className="form-label admin-form-label"
              >
                Instructors last name
              </label>
              <input
                ref={instLastnameref}
                type="text"
                className="form-control"
                placeholder="Enter instructor's last name"
                id="instructorLname"
              />
            </div>
            <div className="input-field-div col-12 col-md-6 col-lg-6">
              <label
                htmlFor="instructorEmail"
                className="form-label admin-form-label"
              >
                Instructors Email
              </label>
              <input
                ref={instEmailref}
                type="email"
                className="form-control"
                placeholder="Enter instructor's Email"
                id="instructorEmail"
              />
            </div>
            <div className="input-field-div col-12 col-md-6 col-lg-6">
              <label
                htmlFor="instructorPassword"
                className="form-label admin-form-label"
              >
                Password
              </label>
              <input
                ref={instPasswordref}
                type="password"
                className="form-control"
                placeholder="Enter instructor's password"
                id="instructorPassword"
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

export default Index;
