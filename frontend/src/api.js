import axios from "axios";

const API = axios.create({
  baseURL: "https://fitness-tracker-aqw1.onrender.com/api" 
});

export default API;