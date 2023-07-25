import InstructorCard from "@/Components/InstructorCard";
import Axios from "@/utils/Axios";
import { getinstructors } from "@/utils/queries";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const instructorsurl = "/instructors"; // Change instructorurl to instructorsurl

const Index = () => {
  const [instructors, setInstructors] = useState([]); // Change setstudents to setInstructors

  useEffect(() => {
    const fetchInstructors = async () => { // Change getinstructors to fetchInstructors
      try {
        const authToken = Cookies.get("authToken");
        if (!authToken) {
          return null;
        }

        const response = await Axios.get(instructorsurl, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });

        const responseData = response.data;
        setInstructors(responseData?.data); // Change students to instructors

        toast.success(responseData?.message);
      } catch (error) {
        console.log("Error fetching instructor data:", error.message);
        return null;
      }
    };

    fetchInstructors(); // Change getinstructors() to fetchInstructors()
  }, []);

  return (
    <section className="addNewCourse">
      <div className="container body-content">
        <p className="admin-header-text">See all Instructors</p>

        <div className="see-all-div">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">

            {instructors.map((instructors) => (
              <InstructorCard
                key={instructors._id}
                firstName={instructors.firstname}
                lastName={instructors.lastname}
                photo={instructors.photo} // Pass the photo prop here
              />
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
