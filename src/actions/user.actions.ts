import { GENDER } from 'enums/gender.enum';
import axios from 'axios';

type TSignUpData = {
  email: string;
  password: string;
  name: string;
  gender: GENDER;
};

type TSignInData = {
  email: string;
  password: string;
};

const usersApi = (function() {
  axios.defaults.baseURL = `${process.env.PUBLIC_URL}/api/auth`;
  return axios;
})();

export const usersActions = {
  signUp: (data: TSignUpData) => usersApi.post('/signUp', data),
  signIn: (data: TSignInData) => usersApi.post('/signIn', data),
  me: () => usersApi.get('/me'),
};
