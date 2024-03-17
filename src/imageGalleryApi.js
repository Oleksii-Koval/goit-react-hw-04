import axios from "axios";
import toast from 'react-hot-toast';

const ACCESS_KEY="VIZGRTcoNutqD_FAx7Xu7jxDe-vh7CdUCVELNwmATQ4"
axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.headers.common["Authorization"] = `Client-ID ${ACCESS_KEY}`;

export const fetchImages = async (searchQuery) => {
 
    const response = await axios.get("search/photos", {
      params: {
        query: searchQuery,
        orientation: "landscape",
        page: 1,
      },
    });
     
    if (response.data.results.length === 0 ){toast.error('No images found for this query.');}
    
  return {data:response.data.results};
}

