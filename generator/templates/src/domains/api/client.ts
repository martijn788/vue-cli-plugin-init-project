import axios, { AxiosInstance } from 'axios'

const client: AxiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})

export default client
