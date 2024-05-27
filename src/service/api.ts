import axios from "axios";
import { studentData } from "./interface";

const apiUrl = "http://localhost:4000";

const api = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

const apiService = {
  getAllStudents() {
    return api.get("/student");
  },

  getStudent(id: number) {
    return api.get(`student/${id}`);
  },

  createStudent(studentData: studentData) {
    return api.post("/student", studentData);
  },

  updateStudent(id: number, studentData: studentData) {
    return api.put(`student/${id}`, studentData);
  },

  deleteStudent(id: number) {
    return api.delete(`/student/${id}`);
  },
};

export default apiService;
