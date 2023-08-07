import Cookies from "js-cookie";

//hey farid dont do anything here

import axios from "axios";
// import { Config } from "./Config";
import Axios from "./Axios";

export const login = async (Api_Url, data) => {
  const url = `${Config.key.apiBaseUrl}${Api_Url}`;
  try {
    const response = await axios.post(url, {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const token = response.data.token;
    Cookies.set("authToken", token, { expires: 7 });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

// FOR STUDENTS START
const studenturl = "/students";
export const getstudents = async () => {
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

    // Assuming the API returns a "data" object in the response, extract it and return
    const responseData = response.data;
    console.log(responseData);

    return responseData;
  } catch (error) {
    console.log("Error fetching student data:", error.message);
    return null;
  }
};
// https://api.passgrades.com/api/v1/admin/students
// FOR STUDENTS END 




// FOR INSTRUCTORS START 
const instructorurl = "/instructors";
export const getinstructors = async () => {
  try {
    const authToken = Cookies.get("authToken");
    if (!authToken) {
      return null;
    }

    const response = await Axios.get(instructorurl, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    // Assuming the API returns a "data" object in the response, extract it and return
    const responseData = response.data;
    console.log(responseData);

    return responseData;
  } catch (error) {
    console.log("Error fetching instructor data:", error.message);
    return null;
  }
};
getinstructors();
// https://api.passgrades.com/api/v1/admin/instructors
// FOR INSTRUCTORS END 





// FOR COURSES START 
const courseurl = "/courses";
export const getcourses = async () => {
  try {
    const authToken = Cookies.get("authToken");
    if (!authToken) {
      return null;
    }

    const response = await Axios.get(courseurl, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    // Assuming the API returns a "data" object in the response, extract it and return
    const responseData = response.data;
    console.log(responseData);

    return responseData;
  } catch (error) {
    console.log("Error fetching instructor data:", error.message);
    return null;
  }
};
getcourses();
// https://api.passgrades.com/api/v1/admin/courses
// FOR COURSES END 




// GET AGENTS START 
const agenturl = "/agents";
export const getagents = async () => {
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

    // Assuming the API returns a "data" object in the response, extract it and return
    const responseData = response.data;
    console.log(responseData);

    return responseData;
  } catch (error) {
    console.log("Error fetching agent data:", error.message);
    return null;
  }
};
// https://api.passgrades.com/api/v1/admin/agents
// GET AGENTS END 




// GET ADMIN START 
const adminurl = "/userdata";
export const getadmins = async () => {
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

    // Assuming the API returns a "data" object in the response, extract it and return
    const responseData = response.data;
    console.log(responseData);

    return responseData;
  } catch (error) {
    console.log("Error fetching admin data:", error.message);
    return null;
  }
};
// GET ADMIN END 






// https://api.passgrades.com/api/v1/admin/instructors/64bee0429f0e8d226dd5a15a/delete

// export const deleteItem = async (id, deleteItem) => {
//   try {
//     const authToken = Cookies.get("authToken");
//     if (!authToken) {
//       return null;
//     }
//     const response = await Axios.delete(`instructors/${id}/delete`, {
//       headers: {
//         Authorization: `Bearer ${authToken}`,
//       },
//     });

//     const responseData = response.data;
//     return responseData;
//   } catch (error) {}
// };
