import React from "react";
import EmployeeService from "../services/EmployeeService";


export class EmployeeListComponent extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            employees: [],
            message: null
        }
    }
    
    componentDidMount() {
        this.getAllEmployees();
    }

    getAllEmployees() {
        //Make service call --> get data --> Set data to state(employees)
        EmployeeService.getAllEmployees().then((response)=>{
            this.setState({ employees:response.data });
        });
    }

    deleteEmployee(id) {
        EmployeeService.deleteEmployee(id).then(response=>{
            this.setState({message:response.data});
            this.getAllEmployees();
        });
    }

    render() {
            return(
                <div>
                    <h2>EMPLOYEE LIST VIEW</h2>
                    <table className="table table-hover">
                        <thead>
                            <tr className="bg-info text-white">
                                <th>ID</th>
                                <th>NAME</th>
                                <th>SALARY</th>
                                <th>DEPARTMENT</th>
                                <th>OPERATION</th>
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
                                    <td><button className="btn btn-danger" onClick={()=> this.deleteEmployee(emp.id)}>DELETE</button></td>
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