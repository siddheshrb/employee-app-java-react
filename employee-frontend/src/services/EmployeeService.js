import axios from 'axios';

const URL = "http://localhost:8081/employees" 

class EmployeeService {

    //1. Fetch All employees JSON Data
    getAllEmployees() {
        return axios.get(`${URL}/all`);
    }

    //2. Delete Employee
    deleteEmployee(id) {
        return axios.delete(`${URL}/delete/${id}`);
    }

}

export default new EmployeeService();