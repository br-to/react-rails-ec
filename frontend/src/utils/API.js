import axios from 'axios';

import { REACT_APP_API_URL } from '../constants/constant';

const api = axios.create({
  baseURL: REACT_APP_API_URL,
  timeout: 15000,
  cors: true,
});

class API {
  fetchRestaurants () {
   return api.request({
      method: 'GET',
      headers: {},
      data: {},
      url: '/restaurants'
    })
  }
}

export default new API();
