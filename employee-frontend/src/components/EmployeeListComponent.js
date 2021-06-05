import React from "react";
import EmployeeService from "../services/EmployeeService";


export class EmployeeListComponent extends React.Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            employees: [],
            message: null
        }
        this.addEmployee = this.addEmployee.bind(this);
    }

    addEmployee() {
        this.props.history.push('/employee/add');
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

    editEmployee(id) {
        this.props.history.push(`/employee/update/${id}`);
    }

    deleteEmployee(id) {
        EmployeeService.deleteEmployee(id).then(response=>{
            this.setState({message:response.data});
            this.getAllEmployees();
        });
    }

    render() {
            return(
                <div className="card">
                    <h2 className="card-header" align="center">EMPLOYEES LIST</h2>
                    <div className="card-body">
                        <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
                    </div>
                    <div className="card-body">
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
                                        <td>
                                            <button className="btn btn-primary" onClick={() => this.editEmployee(employee.id)}>UPDATE</button>
                                            <button className="btn btn-danger" onClick={()=> this.deleteEmployee(employee.id)}>DELETE</button>
                                        </td>
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