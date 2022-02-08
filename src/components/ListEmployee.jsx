import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

class ListEmployee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
    };
  }

  //   componentDidMount() {
  //     EmployeeService.getEmployees().then((res) => {
  //       this.setState({ employees: res.data });
  //     });
  //   }

  render() {
    return (
      <div className="mt-3">
        <h2 className="text-center">Employee List</h2>
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
