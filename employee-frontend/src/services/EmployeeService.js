import axios from 'axios';

const URL = "http://localhost:8081/employees/" 

class EmployeeService {

    //1. Fetch All employees JSON Data
    getAllEmployee() {
        axios.get(`${URL}/all`);
    }

}

export default new EmployeeService();