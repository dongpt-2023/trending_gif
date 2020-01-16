import axios from 'axios';

export default function getTrending() {
  return axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_API_KEY}`, {
    params: {
      limit: 20,
      rating: 'PG',
    },
  }).then((res) => res.data.data)
    .catch((error) => {
      console.log(error);
    });
}

export const searchGifByKey = (key) => axios.get('https://api.giphy.com/v1/gifs/search?', {
  params: {
    api_key: process.env.REACT_APP_API_KEY,
    q: key,
    limit: 20,
    rating: 'PG',
  },
}).then((res) => res.data.data)
  .catch((message) => {
    console.log(message);
  });
