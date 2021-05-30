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
                    <h2 className="text-center">EMPLOYEES LIST</h2>
                    <div className="row">
                        <table className="table table-hover">
                            <thead>
                                <tr className="bg-info text-white">
                                    <th>ID</th>
                                    <th>NAME</th>
                                    <th>SALARY</th>
                                    <th>DEPARTMENT</th>
                                    <th>ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.employees.map(employee=>
                                    <tr key={employee.id}>
                                        <td>{employee.id}</td>
                                        <td>{employee.name}</td>
                                        <td>{employee.salary}</td>
                                        <td>{employee.department}</td>
                                        <td><button className="btn btn-danger" onClick={()=> this.deleteEmployee(employee.id)}>DELETE</button></td>
                                    </tr>
                                )
                            }
                            </tbody>
                        </table>
                    </div>
                    {
                        this.state.message && (
                            <div className="alert alert-success">
                                {this.state.message}
                            </div>
                        )
                    }
                </div>
            )
        }
}

export default EmployeeListComponent