import React, { useState } from "react";
import InstructorCard from "./InstructorCard";
import Cookies from "js-cookie";
import Axios from "@/utils/Axios";

const InstructorList = ({ instructordata, onDelete }) => {
  const [ConfirmModal, setConfirmModal] = useState(true);
  const handleDelete = async (id) => {
    try {
      const authToken = Cookies.get("authToken");
      if (!authToken) {
        return null;
      }

      const response = await Axios.delete(
        `https://api.passgrades.com/api/v1/admin/instructors/${id}/delete`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      if (onDelete) {
        onDelete(id);
      }
      const responseData = response.data;
      toast.success("sucessful delete");
      console.log(responseData);

      return responseData;
    } catch (error) {}
  };
  return (
    <ul className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-4">
      {instructordata.map((instructors) => (
        <InstructorCard
          onDelete={(id) => {
            handleDelete(id);
          }}
          key={instructors._id}
          id={instructors._id}
          photo={instructors.photo}
          firstName={instructors.firstname}
          lastName={instructors.lastname}
        />
      ))}
    </ul>
  );
};

export default InstructorList;
