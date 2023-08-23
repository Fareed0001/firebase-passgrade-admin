import AdminCard from "@/Components/AdminCard";
import { DataTable } from "@/SharedComponents/DataTable";
import { SearchBar } from "@/SharedComponents/SearchBar";
import Axios from "@/utils/Axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { FaTrash } from "react-icons/fa";
import moment from 'moment/moment';
import Container from "@/SharedComponents/Container";
import { Pagination } from "@/SharedComponents/Pagintion";

const adminurl = "/userData";

// ONLY RETURNS CURRENT UserActivation, I NEED TO SEE ALL ADMINS IN AN ARRAY 

const Index = () => {
  const [admins, setAdmins] = useState([]);
console.log(admins, 'addd')
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
      accessorKey: "createdAt",
      header: "Date Created",
      width: '15%',
      cell: (params) => moment(params.value).format('YYYY-MM-DD'),
    },
   
    {
      accessorKey: "action",
      header: () => <div className="text-right">Action</div>,
      cell: ({ row }) => {
     
        return <div className="flex items-center justify-center space-x-2">
             <FaTrash
               className="cursor-pointer text-red-600 hover:text-red-800"
               onClick={() => HandleDeleteItem(row._id)}
              />
              </div>
      },
    },
  ] 


// Add a serial number field to each entry
// const dataWithSerialNumbers = admins?.map((entry, index) => ({
// ...entry,
// serialNumber: index + 1,
// }));
  return (
    <section className="addNewCourse h-screen">
      <div className="container body-content">
        {/*<p className="admin-header-text">See all Admins</p> */}

        <div className="">
          {admins.length === 0 ? (
            <div className="fixed h-screen w-screen top-0 left-0 flex items-center justify-center text-4xl font-bold capitalize">
              No available Admins
            </div>
          ) : (
  //           <ul className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-4">
  //             {/* {admins.map((admin) => ( */}
  //               <AdminCard
  //                 key={admins._id}
  //                 firstName={admins.firstname}
  //                 lastName={admins.lastname}
  //                 email={admins.email}
  //               />
  //                <SearchBar />
  //  <DataTable columns={columns} data={admins}/>
  
  //           </ul>
            <Container title="Admins" subTitle="Manage Admin Accounts">

            <div className="py-10 bg-white rounded-md px-3">
<SearchBar />
<DataTable columns={columns} data={admins}/>
<Pagination/>

</div>
</Container>

          )}
        </div>
      </div>
    </section>
  );
};

export default Index;