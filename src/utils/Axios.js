import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://passmark.eu-north-1.elasticbeanstalk.com/api/v1/admin";

export default axios.create({
  baseURL: BASE_URL,
});
