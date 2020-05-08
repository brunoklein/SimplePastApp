import axios from 'axios';

const http = axios.create({
  baseURL: 'https://simple-past-service.herokuapp.com/',
  headers: {
    apikey: '12312738921789372189731',
  },
});

export default http;
