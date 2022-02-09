import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

class ListEmployee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
    };

    this.addEmployee = this.addEmployee.bind(this);
    this.editEmployee = this.editEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }

  componentDidMount() {
    EmployeeService.getEmployees().then((res) => {
      this.setState({ employees: res.data });
    });
  }

  viewEmployee(id) {
    this.props.history.push(`/view-employee/${id}`);
  }

  deleteEmployee(id) {
    EmployeeService.deleteEmployee(id).then((res) => {
      this.setState({
        employees: this.state.employees.filter(
          (employee) => employee.id !== id
        ),
      });
    });
  }

  editEmployee(id) {
    this.props.history.push(`/add-employee/${id}`);
  }

  addEmployee() {
    this.props.history.push("/add-employee/_add");
  }

  render() {
    return (
      <div className="mt-5">
        <h2 className="text-center">Employee List</h2>
        <div className="row">
          <button className="btn btn-sm btn-primary" onClick={this.addEmployee}>
            Add Employee
          </button>
        </div>
        <div className="row pt-3">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th className="text-center">First Name</th>
                <th className="text-center">Last Name</th>
                <th className="text-center">Email</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.emailId}</td>
                  <td>
                    <button
                      onClick={() => this.editEmployee(employee.id)}
                      className="btn btn-sm btn-info mr-1"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => this.deleteEmployee(employee.id)}
                      className="btn btn-sm btn-danger mr-1"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => this.viewEmployee(employee.id)}
                      className="btn btn-sm btn-warning mr-1"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListEmployee;
