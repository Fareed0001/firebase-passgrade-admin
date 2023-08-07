import React from "react";
import Cookies from "js-cookie";
import Axios from "@/utils/Axios";
import AgentCard from "./AgentCard";

const AgentList = ({ Agentdata, onDelete }) => {
  const handleDelete = async (id) => {
    try {
      const authToken = Cookies.get("authToken");
      if (!authToken) {
        return null;
      }

      const response = await Axios.delete(
        `https://api.passgrades.com/api/v1/admin/agents/${id}/delete`,
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
    } catch (error) { }
  };
  return (
    <ul className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-4">
      {Agentdata.map((Agent) => (
        <AgentCard
          onDelete={(id) => {
            handleDelete(id);
          }}
          photo={Agent.photo}
          firstName={Agent.firstname}
          lastName={Agent.lastname}
          email={Agent.email}
          phone={Agent.phone}
          company={Agent.company}
          key={Agent._id}
          id={Agent._id}
        />
      ))}
    </ul>
  );
};

export default AgentList;
