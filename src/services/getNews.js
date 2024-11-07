import axios from 'axios';

const NEWS_API_BASE_URL = import.meta.env.VITE_NEWS_API_BASE_URL;
const NEWS_API_KEY = import.meta.env.VITE_API_KEY;

export const getNews = async ({ searchQuery = 'technology' }) => {
  try {
    const path = '/everything';
    const query = `?q=${searchQuery}&apikey=${NEWS_API_KEY}`;
    const endpointURL = `${NEWS_API_BASE_URL}${path}${query}`;

    const res = await axios.get(endpointURL);

    if (res.status == 200) {
      const addtionalObj = {
        category: searchQuery,
      };
      const resData = {
        ...res.data,
        ...addtionalObj,
      }
      return resData
    }

  } catch (error) {
    console.error('Error getting Tech News: ', error)
  }
}