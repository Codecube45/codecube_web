import axios from "axios";

export const config = {
    appUrl:"/",

}

export const axiosInstance = axios.create({
    baseURL: "https://admin.codecube.co.in/api/",
    headers: {
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin': '*'
    },
  });
  
  
  