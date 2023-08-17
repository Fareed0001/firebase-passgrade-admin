import React, { useEffect, useState } from "react";
import { getadmins } from "@/utils/queries"; // Import the correct function name
import {
  BiBookAdd,
  BiCheckCircle,
  BiClipboard,
  BiShieldMinus,
  BiSolidContact,
  BiSolidCameraHome,
  BiUserCheck,
  BiSolidUserDetail,
  BiSolidBookContent,
  BiSolidUserRectangle,
} from "react-icons/bi";
import { RiAdminFill, RiAdminLine, RiMessage2Fill, RiMessage3Fill } from "react-icons/ri";
import Link from "next/link";

const Index = () => {
  const [AdminData, setAdminData] = useState(null);

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const adminData = await getadmins(); // Use the correct function name here
        setAdminData(adminData);
      } catch (error) {
        console.log("Error fetching admin data:", error.message);
      }
    };

    fetchAdmins();
  }, []);

  return (
    <section className="adminIndex">
      {AdminData && (
        <p className="greeting-text">
          Welcome back {AdminData?.data?.firstname} {AdminData?.data?.lastname}
        </p>
      )}

      <div className="container admin-container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">

          <Link className="admin-card-link" href="Admin/AddNewAdmin">
            <div className="admin-card-div card mb-3">
              <div className="card-body flex items-center justify-center flex-col">
                <RiAdminFill className="admin-card-icon" />
                <p className="admin-card-div-text card-text">
                  Create an admin
                </p>
              </div>
            </div>
          </Link>

          <Link className="admin-card-link" href="/Admin/AddCourse">
            <div className="admin-card-div card mb-3">
              <div className="card-body flex items-center justify-center flex-col">
                <BiBookAdd className=" admin-card-icon" />
                <p className="admin-card-div-text card-text">Add new course</p>
              </div>
            </div>
          </Link>

          <Link className="admin-card-link " href="/Admin/AddNewClass">
            <div className="admin-card-div card mb-3">
              <div className="card-body flex items-center justify-center flex-col">
                <BiClipboard className=" admin-card-icon" />
                <p className="admin-card-div-text card-text">Add new class</p>
              </div>
            </div>
          </Link>

          <Link className="admin-card-link" href="/Admin/AdminSetOnlineClass">
            <div className="admin-card-div card mb-3">
              <div className="card-body flex items-center justify-center flex-col">
                <BiShieldMinus className="admin-card-icon" />
                <p className="admin-card-div-text card-text">
                  Schedule online class
                </p>
              </div>
            </div>
          </Link>

          <Link className="admin-card-link" href="/Admin/AdminVerifyAgent">
            <div className="admin-card-div card mb-3">
              <div className="card-body flex items-center justify-center flex-col">
                <BiCheckCircle className="admin-card-icon" />
                <p className="admin-card-div-text card-text">
                  Verify new agents
                </p>
              </div>
            </div>
          </Link>

          <Link className="admin-card-link" href="Admin/AddNewInstructor">
            <div className="admin-card-div card mb-3">
              <div className="card-body flex items-center justify-center flex-col">
                <BiSolidContact className="admin-card-icon" />
                <p className="admin-card-div-text card-text">
                  Add new instructor
                </p>
              </div>
            </div>
          </Link>

          <Link className="admin-card-link" href="Admin/SendMessage">
            <div className="admin-card-div card mb-3">
              <div className="card-body flex items-center justify-center flex-col">
                <RiMessage2Fill className="admin-card-icon" />
                <p className="admin-card-div-text card-text">
                  Send bulk message
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="container admin-container admin-second-div">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          <Link className="admin-card-link" href="/Admin/AdminStartOnlineClass">
            <div className="admin-card-div0 card mb-3">
              <div className="card-body flex items-center justify-center flex-col">
                <BiSolidCameraHome className="admin-card-icon" />
                <p className="admin-card-div-text card-text">
                  Start online class
                </p>
              </div>
            </div>
          </Link>

          <Link className="admin-card-link" href="/Admin/SeeAllAdmins">
            <div className="admin-card-div0 card mb-3">
              <div className="card-body flex items-center justify-center flex-col">
                <RiAdminLine className="admin-card-icon" />
                <p className="admin-card-div-text card-text">See all admins</p>
              </div>
            </div>
          </Link>

          <Link className="admin-card-link" href="/Admin/SeeAllAgents">
            <div className="admin-card-div0 card mb-3">
              <div className="card-body flex items-center justify-center flex-col">
                <BiUserCheck className="admin-card-icon" />
                <p className="admin-card-div-text card-text">See all agents</p>
              </div>
            </div>
          </Link>

          <Link className="admin-card-link" href="/Admin/SeeAllInstructors">
            <div className="admin-card-div0 card mb-3">
              <div className="card-body flex items-center justify-center flex-col">
                <BiSolidUserDetail className="admin-card-icon" />
                <p className="admin-card-div-text card-text">
                  See all instructors
                </p>
              </div>
            </div>
          </Link>

          <Link className="admin-card-link" href="/Admin/SeeAllCourses">
            <div className="admin-card-div0 card mb-3">
              <div className="card-body flex items-center justify-center flex-col">
                <BiSolidBookContent className="admin-card-icon" />
                <p className="admin-card-div-text card-text">See all courses</p>
              </div>
            </div>
          </Link>

          <Link className="admin-card-link" href="/Admin/SeeAllStudents">
            <div className="admin-card-div0 card mb-3">
              <div className="card-body flex items-center justify-center flex-col">
                <BiSolidUserRectangle className="admin-card-icon" />
                <p className="admin-card-div-text card-text">
                  See all students
                </p>
              </div>
            </div>
          </Link>

          <Link className="admin-card-link" href="/Admin/RecieveMessage">
            <div className="admin-card-div0 card mb-3">
              <div className="card-body flex items-center justify-center flex-col">
                <RiMessage3Fill className="admin-card-icon" />
                <p className="admin-card-div-text card-text">
                  Recieved messages
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Index;
