import AgentList from "@/Components/AgentList";
import Axios from "@/utils/Axios";

import Cookies from "js-cookie";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { BiLoader } from "react-icons/bi";

const agenturl = "/agents";

const Index = () => {
  const [Loading, setLoading] = useState(false);
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    const fetchAgents = async () => {
      setLoading(true);
      try {
        const authToken = Cookies.get("authToken");
        if (!authToken) {
          return null;
        }

        const response = await Axios.get(agenturl, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });

        const responseData = response.data;
        setAgents(responseData?.data);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching agent data:", error.message);
        setLoading(false);
        return null;
      }
    };

    fetchAgents();
  }, []);

  const HandleDeleteItem = (AgentID) => {
    setAgents((previtem) => {
      const filteredArray = previtem.filter((item) => item._id !== AgentID);
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
              loading available agents
            </span>
          </div>
        </div>
      ) : (
        <section className="bg-[#ebeefd] h-full fixed w-full overflow-auto">
          <div className="container body-content">
            <p className="admin-header-text">See all Agents</p>

            {agents.length === 0 ? (
              <div className="fixed h-screen w-screen top-0 left-0 flex items-center justify-center text-4xl font-bold capitalize">
                no available agent
              </div>
            ) : (
              <div className="see-all-div">
                <AgentList
                  Agentdata={agents}
                  onDelete={(id) => {
                    HandleDeleteItem(id);
                  }}
                  key={agents.length}
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
