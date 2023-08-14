import AdminCard from "@/Components/AdminCard";
import Axios from "@/utils/Axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const adminurl = "/userdata";

// ONLY RETURNS CURRENT UserActivation, I NEED TO SEE ALL ADMINS IN AN ARRAY 

const Index = () => {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const authToken = Cookies.get("authToken");
        if (!authToken) {
          return null;
        }

        const response = await Axios.get(adminurl, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });

        const responseData = response.data;
        setAdmins(responseData?.data);

        toast.success(responseData?.message);
      } catch (error) {
        console.log("Error fetching admin data:", error.message);
      }
    };

    fetchAdmins();
  }, []);

  const HandleDeleteItem = (adminID) => {
    setAdmins((prevItems) => {
      const filteredArray = prevItems.filter((item) => item._id !== adminID);
      toast.success("Deleted");
      return filteredArray;
    });
  };

  return (
    <section className="addNewCourse h-screen">
      <div className="container body-content">
        <p className="admin-header-text">See all Admins</p>

        <div className="see-all-div">
          {admins.length === 0 ? (
            <div className="fixed h-screen w-screen top-0 left-0 flex items-center justify-center text-4xl font-bold capitalize">
              No available Admins
            </div>
          ) : (
            <ul className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-4">
              {/* {admins.map((admin) => ( */}
                <AdminCard
                  key={admins._id}
                  firstName={admins.firstname}
                  lastName={admins.lastname}
                  email={admins.email}
                />
              {/* ))} */}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default Index;