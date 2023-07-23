import Cookies from "js-cookie";
import axios from "axios";
import { Config } from "./Config";

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

//     import axios from "axios";
// import Cookies from "js-cookie";
// import config from "../utils/config";
// import BACKEND_URLS from "./urls";

// export const configOptions = () => {
//   if (typeof window === "undefined") return {};

//   if (!Cookies.get(config.key.token)) return {};

//   const accessToken = Cookies.get(config.key.token);

//   if (accessToken) {
//     return {
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//     };
//   }
//   return {};
// };
