import {View, Text} from 'react-native';
import React from 'react';
import axios from 'axios';

export default function useAPI() {
  const baseURL = '';

  const get = (url: string) => {
    return axios.get(`${baseURL}${url}`);
  };

  return {
    baseURL,
    get,
  };
}
