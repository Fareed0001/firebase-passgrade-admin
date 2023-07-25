import StudentCard from "@/Components/StudentCard";
import Axios from "@/utils/Axios";
import { getstudent, getstudents } from "@/utils/queries";
import Cookies from "js-cookie";
import Image from "next/image";
//import your use effects and usestate
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const studenturl = "/students";
const Index = () => {
  // copy but change according to pagename
  const [students, setstudents] = useState([]);

  // start copying
  useEffect(() => {
    const getstudents = async () => {
      try {
        const authToken = Cookies.get("authToken");
        if (!authToken) {
          return null;
        }

        const response = await Axios.get(studenturl, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });

        // Assuming the API returns a "data" object in the response, extract it and return
        const responseData = response.data;

        // set your students state to save the data
        setstudents(responseData?.data);
        console.log(students);

        toast.success(responseData?.message);
      } catch (error) {
        console.log("Error fetching student data:", error.message);
        return null;
      }
    };

    getstudents();
  }, []);

  // end copying here

  return (
    <section className="addNewCourse">
      <div className="container body-content">
        <p className="admin-header-text">See all Students</p>

        <div className="see-all-div flex gap-x-20 mc-auto ">
          {/* heres where i map the student array fetched */}
          {/* note this is based on the data gotten */}
          {students.map((students) => (
            <StudentCard
              key={students._id}
              firstName={students.firstname}
              lastname={students.lastname}
              // email={students.email}
              number={students.number}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Index;
