import axios from "axios";

const URL = axios.create({
    baseURL: process.env.API_URL,
    timeout: 5000   
});

export default URL;