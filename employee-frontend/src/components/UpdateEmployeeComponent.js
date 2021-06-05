import React, {Component} from "react";
import EmployeeService from "../services/EmployeeService";

class UpdateEmployeeComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            name: '',
            salary: '',
            department: ''
        }

        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeSalaryHandler = this.changeSalaryHandler.bind(this);
        this.changeDepartmentHandler = this.changeDepartmentHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }

    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then(response => {
                let employee = response.data;
                this.setState({
                        name: employee.name,
                        salary: employee.salary,
                        department: employee.department
                    });
            });
    }

    changeNameHandler = (event) => {
        this.setState({name: event.target.value});
    }

    changeSalaryHandler = (event) => {
        this.setState({salary: event.target.value});
    }

    changeDepartmentHandler = (event) => {
        this.setState({department: event.target.value});
    }

    updateEmployee = (e) => {
        e.preventDefault();

        let employee = {
            name: this.state.name,
            salary: this.state.salary,
            department: this.state.department
        };
        console.log('employee => ' + JSON.stringify(employee));
        //EmployeeService.updateEmployee(employee).then(response => {

        //})
    }

    cancel() {
        this.props.history.push('/employees');
    }

    render() {
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <div>
                                <h3 className="card-header">Update Employee</h3>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input placeholder="Name" name="name" className="form-control"
                                               value={this.state.name} onChange={this.changeNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Salary</label>
                                        <input placeholder="Salary" name="salary" className="form-control"
                                               value={this.state.salary} onChange={this.changeSalaryHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Department</label>
                                        <input placeholder="Department" name="department" className="form-control"
                                               value={this.state.department} onChange={this.changeDepartmentHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <button className = "btn btn-success" onClick={this.updateEmployee}>Save</button>
                                        <button className = "btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UpdateEmployeeComponent;