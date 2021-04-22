import axios from 'axios';

export default axios.create({
  baseURL: process.env.REACT_APP_TO_DO_LIST_BACKEND_URL,
  headers: {
    'Content-type': 'application/json'
  }
});
