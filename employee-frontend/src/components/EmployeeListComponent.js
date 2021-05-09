import React from "react";
import EmployeeService from "../services/EmployeeService";


export class EmployeeListComponent extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            employees: []
        }
    }
    
    componentDidMount() {
        this.getAllEmployees();
    }

    getAllEmployees() {
        //Make service call --> get data --> Set data to state(employees)
        EmployeeService.getAllEmployees().then((response)=>{
            this.setState({ employees:response.data });
            console.log('Response: ' + this.state.employees[0].name);
        });
    }

    render() {
            return(
                <div>
                    <h2>EMPLOYEE LIST VIEW</h2>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>SALARY</th>
                                <th>DEPARTMENT</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.employees.map(emp=>
                                <tr key={emp.id}>
                                    <td>{emp.id}</td>
                                    <td>{emp.name}</td>
                                    <td>{emp.salary}</td>
                                    <td>{emp.department}</td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            )
        }
}

export default EmployeeListComponent