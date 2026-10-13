import { create } from 'axios';

const api = create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  headers: {
    Accept: 'application/json',
  },
});

export { api };
