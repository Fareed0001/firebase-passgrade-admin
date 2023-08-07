import React, { useRef } from "react";
import Axios from "@/utils/Axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";

const AdminUrl = "/create";

const Index = () => {
  const router = useRouter();
  const instFirstnameref = useRef(null);
  const instLastnameref = useRef(null);
  const instEmailref = useRef(null);
  const instPasswordref = useRef(null);

  const submitHandler = async (event) => {
    event.preventDefault();
    const firstname = instFirstnameref.current.value;
    const lastname = instLastnameref.current.value;
    const email = instEmailref.current.value;
    const password = instPasswordref.current.value;

    const adminData = {
      firstname,
      lastname,
      email,
      password,
    };

    try {
      const response = await Axios.post(AdminUrl, adminData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Cookies.get("authToken")}`,
        },
      });
      router.push("/Admin"); // Make sure this path is correct
      instLastnameref.current.value = "";
      instFirstnameref.current.value = "";
      instEmailref.current.value = "";
      instPasswordref.current.value = "";
      toast.success("Admin created successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <section className="addNewCourse">
      <div className="container body-content">
        <p className="admin-header-text">Create an admin</p>
        <form onSubmit={submitHandler}>
          <div className="row container">

            <div className="input-field-div col-12 col-md-6 col-lg-6">
              <label
                htmlFor="adminFname"
                className="form-label admin-form-label"
              >
                First name
              </label>
              <input
                ref={instFirstnameref}
                type="text"
                className="form-control"
                placeholder="Enter admin's first name"
                id="adminFname"
              />
            </div>

            <div className="input-field-div col-12 col-md-6 col-lg-6">
              <label
                htmlFor="adminLname"
                className="form-label admin-form-label"
              >
                Last name
              </label>
              <input
                ref={instLastnameref}
                type="text"
                className="form-control"
                placeholder="Enter admin's last name"
                id="adminLname"
              />
            </div>
            <div className="input-field-div col-12 col-md-6 col-lg-6">
              <label
                htmlFor="adminEmail"
                className="form-label admin-form-label"
              >
                Email
              </label>
              <input
                ref={instEmailref}
                type="email"
                className="form-control"
                placeholder="Enter admin's Email"
                id="adminEmail"
              />
            </div>
            <div className="input-field-div col-12 col-md-6 col-lg-6">
              <label
                htmlFor="adminPassword"
                className="form-label admin-form-label"
              >
                Password
              </label>
              <input
                ref={instPasswordref}
                type="password"
                className="form-control"
                placeholder="Enter admin's password"
                id="adminPassword"
              />
            </div>
          </div>
          <button
            className="btn btn-primary  add-new-course-button"
            type="submit"
          >
            Create admin
          </button>
        </form>
      </div>
    </section>
  );
};

export default Index;
