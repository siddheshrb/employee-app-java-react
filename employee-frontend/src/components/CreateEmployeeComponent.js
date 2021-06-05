import React, {Component} from "react";

class CreateEmployeeComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            salary: '',
            department: ''
        }

        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeSalaryHandler = this.changeSalaryHandler.bind(this);
        this.changeDepartmentHandler = this.changeDepartmentHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
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

    saveEmployee = (e) => {
        e.preventDefault();

        let employee = {
            name: this.state.name,
            salary: this.state.salary,
            department: this.state.department
        };
        console.log('employee => ' + JSON.stringify(employee));
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
                            <h3 className="text-center">Add Employee</h3>
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
                                        <button className = "btn btn-success" onClick={this.saveEmployee}>Save</button>
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

export default CreateEmployeeComponent;