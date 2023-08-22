import AgentList from "@/Components/AgentList";
import Axios from "@/utils/Axios";
import { Button } from "@/components/ui/button"
import moment from 'moment/moment';
import { DataTable } from '@/SharedComponents/DataTable'
import { Pagination } from '@/SharedComponents/Pagintion'
import { SearchBar } from "@/SharedComponents/SearchBar"
import Cookies from "js-cookie";
import Image from "next/image";
import '../../../styles/local.css'
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { BiLoader } from "react-icons/bi";
import { FaTrash } from 'react-icons/fa';

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
      toast.success("Deleted");
      return filteredArray;
    });
  };
  



   const columns = [
        {
          accessorKey: "serialNumber",
          header: "S/N",
        },
        {
          accessorKey: "firstname",
          header: "First Name",
        },
        {
          accessorKey: "lastname",
          header: "Last Name",
        },
        {
          accessorKey: "email",
          header: "Email",
        },

        {
          accessorKey: "company",
          header: "Company",
        },
        {
          accessorKey: "phone",
          header: "Phone",
        },
        {
          accessorKey: "createdAt",
          header: "Date Created",
          valueFormatter: (params) => moment(params.value).format('YYYY-MM-DD'),
        },
        {
          accessorKey: "account_status",
          header: "Status",
          cellRenderer: ({ value }) => (
            <div
              className={`status-cell ${
                value === "approved" ? "bg-green-500" : "bg-orange-500"
              } text-white p-2 rounded`}
            >
              {value}
            </div>
          ),
        },
        {
          accessorKey: "actions",
          header: "Actions",
          cellRenderer: ({ row }) => (
            <div className="flex items-center space-x-2">
              <FaTrash
                className="cursor-pointer text-red-600 hover:text-red-800"
                onClick={() => HandleDeleteItem(row._id)}
              />
            </div>
          ),
        },
      ] 

   // Add a serial number field to each entry
const dataWithSerialNumbers = agents.map((entry, index) => ({
  ...entry,
  serialNumber: index + 1,
}));
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
            <p className="admin-header-text ">See all Agents</p>

            {agents.length === 0 ? (
              <div className="fixed h-screen w-screen top-0 left-0 flex items-center justify-center text-4xl font-bold capitalize">
                no available agent
              </div>
            ) : (
              <div className="see-all-div">
                {/* <AgentList
                  Agentdata={agents}
                  onDelete={(id) => {
                    HandleDeleteItem(id);
                  }}
                  key={agents.length}
                /> */}
                <div className="container mx-auto py-10">
    <SearchBar />
   <DataTable columns={columns} data={dataWithSerialNumbers}/>
   <Pagination/>

   </div>
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default Index;
