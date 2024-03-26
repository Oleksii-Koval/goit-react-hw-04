import axios from 'axios';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://api.unsplash.com/';
const ACCESS_KEY = 'VIZGRTcoNutqD_FAx7Xu7jxDe-vh7CdUCVELNwmATQ4';

export const fetchImages = async (searchQuery, page) => {
  const response = await axios.get('search/photos', {
    params: {
      query: searchQuery,
      per_page: 12,
      page: page,
      orientation: 'landscape',
      client_id: ACCESS_KEY,
    },
  });
  if (!response.data.total) {
    toast.error('No images found for this query.');
  }

  return {
    data: response.data.results,
    totalPages: response.data.total_pages,
  };
};
