import axios from "axios";
export default axios.create({
  baseURL: "http://192.168.2.170:4200/api",
//   headers: {
//     "Content-type": "application/json"
//   },
});
