import axios from "axios";

export default axios.create({
  baseURL: "http://passmark.eu-north-1.elasticbeanstalk.com/api/v1/admin",
});
