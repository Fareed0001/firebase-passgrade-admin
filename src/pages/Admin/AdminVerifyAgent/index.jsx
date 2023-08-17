import React, { useEffect, useState } from "react";
import { Approve, Reject } from "@/utils/queries";
import Cookies from "js-cookie";
import Axios from "@/utils/Axios";
import { RiCrossFill, RiDeleteBack2Fill } from "react-icons/ri";
import { BiCheck } from "react-icons/bi";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
const agenturl = "/agents";

const Index = () => {
  const [Loading, setLoading] = useState(false);
  const [agents, setAgents] = useState([]);
  const router = useRouter();
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

  return (
    <section className="bg-[#ebeefd] h-full fixed w-full overflow-auto py-10">
      <div class="container  new-course-container">
        <p class="admin-header-text">Verify new agent</p>

        <div class="agent-verification-div grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {agents.map((agent) => (
            <AgentCard key={agent._id} agent={agent} />
          ))}
        </div>
      </div>

      {/* <!-- NEW AGENT CARD END  --> */}
    </section>
  );
};

export default Index;

function AgentCard({ agent }) {
  const { firstname, lastname, email, phone, account_status, company, _id } =
    agent;
  const router = useRouter();
  let buttonstatus;
  if (account_status === "pending") {
    buttonstatus = "not yet approved";
  } else if (account_status === "approved") {
    buttonstatus = "approved";
  } else {
    buttonstatus = "rejected";
  }

  let button;
  if (account_status === "pending") {
    button = (
      <div class="row">
        <div class="col-6 d-grid">
          <button
            onClick={() => {
              Approve(_id);
              toast.success(`${firstname} ${lastname} has being approved`);
            }}
            type="button"
            className=" gap-x-3 border-2 border-blue-700 rounded-lg py-2 text-blue-700 hover:bg-blue-700 transition-all delay-100 hover:text-white px-2 btn-outline-danger flex flex-row items-center justify-center w-32 "
          >
            <BiCheck />
            Accept
          </button>
        </div>
        <div class="col-6 d-grid">
          <button
            onClick={() => {
              router.reload();
              Reject(_id);
              toast.error(`${firstname} ${lastname} has being rejected`);
            }}
            type="button"
            className=" gap-x-3 border-2 border-red-400 rounded-lg py-2 text-red-500 hover:bg-red-400 transition-all delay-100 hover:text-white px-2 btn-outline-danger flex flex-row items-center justify-center w-32 "
          >
            <RiDeleteBack2Fill />
            <span className="">Reject</span>
          </button>
        </div>
      </div>
    );
  } else if (account_status === "approved") {
    button = (
      <p className="w-full items-center justify-center font-semibold">
        Approved
      </p>
    );
  } else {
    button = <p>rejected</p>;
  }
  return (
    <div class="row row-cols-1 row-cols-md-2  row-cols-lg-3 g-4">
      <div class="col agent-col">
        <div class="new-agent-card">
          <div class="agent-card-body">
            <p class="agent-card-title">
              {firstname}
              {lastname}
            </p>
            <p class="agent-card-title">{email}</p>
            <p class="agent-card-title">{phone}</p>
            <p class="agent-card-title">{company}</p>
          </div>
          <p className="w-full items-center justify-center p-4">{button}</p>
        </div>
      </div>
    </div>
  );
}