import axios from "axios";

const BASE_URL = "http://localhost:8080/api";

// EMPLOYEE APIs
export const getAllEmployees = () => axios.get(`${BASE_URL}/employees/getEmployees`);
export const getEmployeeById = (id) => axios.get(`${BASE_URL}/employees/${id}`);
export const createEmployee = (data) => axios.post(`${BASE_URL}/employees/addEmployee`, data);
export const updateEmployee = (id, data) => axios.put(`${BASE_URL}/employees/${id}`, data);
export const deleteEmployee = (id) => axios.delete(`${BASE_URL}/employees/${id}`);

// DEPARTMENT APIs
export const getAllDepartments = () => axios.get(`${BASE_URL}/departments/getDepartments`);
export const getDepartmentById = (id) => axios.get(`${BASE_URL}/departments/${id}`);
export const createDepartment = (data) => axios.post(`${BASE_URL}/departments/addDepartment`, data);
export const updateDepartment = (id, data) => axios.put(`${BASE_URL}/departments/${id}`, data);
export const deleteDepartment = (id) => axios.delete(`${BASE_URL}/departments/${id}`);
