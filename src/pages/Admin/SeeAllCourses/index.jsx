import CourseCard from "@/Components/CourseCard";
import Axios from "@/utils/Axios";
import { getcourses } from "@/utils/queries";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";


const courseurl = "/courses";
const Index = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const authToken = Cookies.get("authToken");
        if (!authToken) {
          return null;
        }

        const response = await Axios.get(courseurl, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });

        const responseData = response.data;
        setCourses(responseData?.data);

        toast.success(responseData?.message);
      } catch (error) {
        console.log("Error fetching course data:", error.message);
        return null;
      }
    };

    fetchCourses();
  }, []);


  return (
    <section className="addNewCourse">
      <div className="container body-content">
        <p className="admin-header-text">See all Courses</p>

        <div className="see-all-div">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">

            {courses.map((Courses) => (
              <CourseCard
                key={Courses._id}
                title={Courses.title}
                cover_image={Courses.cover_image}
              />
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
