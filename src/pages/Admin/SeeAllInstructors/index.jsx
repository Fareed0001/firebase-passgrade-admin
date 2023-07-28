import InstructorList from "@/Components/InstructorList";
import Axios from "@/utils/Axios";

import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { BiLoader } from "react-icons/bi";

const instructorsurl = "/instructors";

const Index = () => {
  const [Loading, setLoading] = useState(false);
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetchInstructors = async () => {
      // Change getinstructors to fetchInstructors
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
        setInstructors(responseData?.data);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching instructor data:", error.message);
        return null;
      }
    };
    fetchInstructors();
  }, []);

  const HandleDeleteItem = (instructorID) => {
    setInstructors((previtem) => {
      const filteredArray = previtem.filter(
        (item) => item._id !== instructorID
      );
      toast.success("deleted");
      return filteredArray;
    });
  };

  return (
    <>
      {Loading ? (
        <div className="h-screen w-screen bg-white fixed top-0 left-0 flex items-center justify-center">
          <div className="flex items-center justify-center gap-x-3">
            <BiLoader className="animate-spin text-blue-500 text-4xl" />
            <span className="text-base text-blue animate-bounce font-semibold  capitalize ">
              loading available Instructors
            </span>
          </div>
        </div>
      ) : (
        <section className="bg-[#ebeefd] h-full fixed w-full overflow-auto py-10">
          <div className="container body-content">
            <p className="admin-header-text">See all Instructors</p>
            {instructors.length === 0 ? (
              <div className="fixed h-screen w-screen top-0 left-0 flex items-center justify-center text-4xl font-bold capitalize">
                no available instructors
              </div>
            ) : (
              <div className="see-all-div">
                <InstructorList
                  instructordata={instructors}
                  onDelete={(id) => {
                    HandleDeleteItem(id);
                  }}
                  key={instructors.length}
                />
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default Index;
