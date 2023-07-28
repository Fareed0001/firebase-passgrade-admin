import React, { useState } from "react";
import Cookies from "js-cookie";
import Axios from "@/utils/Axios";
import StudentCard from "./StudentCard";

const StudentList = ({ studentdata, onDelete }) => {
  const handleDelete = async (id) => {
    try {
      const authToken = Cookies.get("authToken");
      if (!authToken) {
        return null;
      }

      const response = await Axios.delete(
        `https://api.passgrades.com/api/v1/admin/students/${id}/delete`,
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
    <ul className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
      {studentdata.map((student) => (
        <StudentCard
          onDelete={(id) => {
            handleDelete(id);
          }}
          photo={student.photo}
          firstName={student.firstname}
          lastName={student.lastname}
          email={student.email}
          phone={student.phone}
          key={student._id}
          id={student._id}
        />
      ))}
    </ul>
  );
};

export default StudentList;
