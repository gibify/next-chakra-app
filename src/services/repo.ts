import axios from 'axios';
import { Data } from '../pages/api/partners';

export const ReposService = {
  getRepos: async () => {
    return axios.get<Data>('https://api.github.com/users/gibify/repos');
  }
}