import axios from 'axios';

export const BASE_URL = 'https://www.googleapis.com/youtube/v3';

// const options = {
//   params: {
//     maxResults: 50,
//   },
//   headers: {
//     'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY,
//     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
//   },
// };
//
// export const fetchFromAPI = async (url) => {
//   const { data } = await axios.get(`${BASE_URL}/${url}`, options);
//
//   return data;
// };

export default axios.create({
    baseURL: BASE_URL,
    params: {
        part: 'snippet',
        maxResults: 50,
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
    },
});