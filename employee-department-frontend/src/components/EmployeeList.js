//EmployeeList
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllEmployees, deleteEmployee } from "../api/apiService";

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    const fetchEmployees = async () => {
        const res = await getAllEmployees();
        setEmployees(res.data);
    };

    useEffect(() => {
        fetchEmployees();
    }, []);

    const handleDelete = async (id) => {
        await deleteEmployee(id);
        fetchEmployees();
    };


  return (
    <div>
      <h2>Employees</h2>
      <Link to="/add-employee" className="btn btn-primary mb-2">Add Employee</Link>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Designation</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.designation}</td>
              <td>{emp.department?.name || "N/A"}</td>
              <td>
                <Link to={`/edit-employee/${emp.id}`} className="btn btn-warning btn-sm me-2">Edit</Link>
                <button onClick={() => deleteEmployee(emp.id)} className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;