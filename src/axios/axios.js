import axios from "axios";

const URL = axios.create({
    baseURL: process.env.API_URL,
    timeout: 5000,
    params: {
        token: process.env.API_KEY,
        cv: 1647878475,
        version: "draft"
    }   
});

export default URL;