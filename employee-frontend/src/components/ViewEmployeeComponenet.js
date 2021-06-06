import React, {Component} from "react";
import EmployeeService from "../services/EmployeeService";

class ViewEmployeeComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then(response=> {
            this.setState({
                employee: response.data
            });
        });
    }

    cancel() {
        this.props.history.push('/employees');
    }

    render() {
        return(
            <div className="container-fluid">
                <div className="card col-md-6 offset-md-3" style={{marginTop:"20px"}}>
                    <div className="card-header text-center">
                        <h2>EMPLOYEE DETAILS</h2>
                    </div>
                    <div className="card-body">
                        <table className="table table-hover">
                            <thead>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{fontWeight: "bold", fontFamily: "cursive"}}>NAME</td>
                                    <td>{this.state.employee.name}</td>
                                </tr>
                                <tr>
                                    <td style={{fontWeight: "bold", fontFamily: "monospace"}}>SALARY</td>
                                    <td>{this.state.employee.salary}</td>
                                </tr>
                                <tr>
                                    <td style={{fontWeight: "bold", fontFamily: "sans-serif"}}>DEPARTMENT</td>
                                    <td>{this.state.employee.department}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="card col-md-6 offset-md-3" style={{marginTop: "25px"}}>
                    <div className="card-body">
                        <div className="row">
                            <label>Name:</label>
                            <span>{this.state.employee.name}</span>
                        </div>
                        <div className="row">
                            <label>Salary: </label>
                            <span>{this.state.employee.salary}</span>
                        </div>
                        <div className="row">
                            <label>Department:</label>
                            <span>{this.state.employee.department}</span>
                        </div>
                    </div>
                </div>
                <div className="col-form-label offset-md-3" style={{marginTop: "25px"}}>
                    <button className="btn-primary" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>BACK</button>
                </div>
            </div>
        )
    }


}

export default ViewEmployeeComponent;