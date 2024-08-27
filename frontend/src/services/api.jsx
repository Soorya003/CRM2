import axios from 'axios';

const API_URL = 'http://localhost:3000/api/';

export const login = (credentials) => axios.post(`${API_URL}login`, credentials);
export const register = (userData) => axios.post(`${API_URL}register`, userData);
export const fetchCustomerProfiles = () => axios.get(`${API_URL}customers`);
export const fetchCustomerProfile = (id) => axios.get(`${API_URL}customers/${id}`);
export const sendFeedback = (feedbackData) => axios.post(`${API_URL}feedback`, feedbackData);
