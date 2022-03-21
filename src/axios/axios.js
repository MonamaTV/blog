import axios from "axios";

const useAxios = () => {
    const URL = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        timeout: 5000   
    });
    return URL;    
}

export default useAxios;