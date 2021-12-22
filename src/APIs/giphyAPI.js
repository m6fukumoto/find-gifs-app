import axios from 'axios';

const giphyApi = (word) => {
  const search = word;
  const key = 'o3bvVm3Ts2Hmg40WCa1iaaKZtux7TImm';
  const limit = 50;
  const url = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${key}&limit=${limit}`;

  return axios.get(url);
};

export default giphyApi;
