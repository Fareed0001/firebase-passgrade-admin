import StudentList from "@/Components/StudentList";
import { DataTable } from "@/SharedComponents/DataTable";
import { Pagination } from "@/SharedComponents/Pagintion";
import { SearchBar } from "@/SharedComponents/SearchBar";
import Axios from "@/utils/Axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { FaTrash } from "react-icons/fa";
import moment from 'moment/moment';
import Container from "@/SharedComponents/Container";

const studenturl = "/students";

const Index = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const authToken = Cookies.get("authToken");
        if (!authToken) {
          return null;
        }

        const response = await Axios.get(studenturl, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });

        const responseData = response.data;
        setStudents(responseData?.data);

        toast.success(responseData?.message);
      } catch (error) {
        console.log("Error fetching student data:", error.message);
        return null;
      }
    };

    fetchStudents();
  }, []);

  const HandleDeleteItem = (studentID) => {
    setStudents((previtem) => {
      const filteredArray = previtem.filter((item) => item._id !== studentID);
      toast.success("deleted");
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
          accessorKey: "phone",
          header: "Phone",
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
const dataWithSerialNumbers = students.map((entry, index) => ({
  ...entry,
  serialNumber: index + 1,
}));
  return (
    <section className="addNewCourse bg-[#ebeefd] h-full w-full overflow-auto">
      <div className="container body-content">
        {/* <p className="admin-header-text">See all Students</p> */}

        <div className="">
          {students.length === 0 ? (
            <div className="fixed h-screen w-screen top-0 left-0 flex items-center justify-center text-4xl font-bold capitalize">
              no available Students
            </div>
          ) : (
            <div className="">
              {/* <StudentList
                studentdata={students}
                onDelete={(id) => {
                  HandleDeleteItem(id);
                }}
                key={students.length}
              /> */}
                <Container title="Students" subTitle="Manage Student Accounts">

                       <div className="py-10 bg-white rounded-md px-3">
    <SearchBar />
   <DataTable columns={columns} data={dataWithSerialNumbers}/>
   <Pagination/>

   </div>
   </Container>

            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Index;
