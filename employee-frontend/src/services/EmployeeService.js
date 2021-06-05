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

    //3. Create Employee
    createEmployee(employee) {
        return axios.post(URL + '/save', employee);
    }

    //4. Get Employee by Id
    getEmployeeById(employeeId) {
        return axios.get(URL + '/one/' + employeeId);
    }

    //5. Update Employee
    updateEmployee(employee, employeeId) {
        return axios.put(URL + '/modify/' + employeeId, employee);
    }

}

export default new EmployeeService();