import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    getAllDepartments,
    getEmployeeById,
    createEmployee,
    updateEmployee,
} from "../api/apiService";

const AddEmployee = () => {
    const [employee, setEmployee] = useState({
        name: "",
        email: "",
        designation: "",
        departmentId: "",
    });
    const [departments, setDepartments] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        loadDepartments();
        if (id) loadEmployee();
    }, [id]);

    const loadDepartments = async () => {
        const res = await getAllDepartments();
        setDepartments(res.data);
    };

    const loadEmployee = async () => {
        const res = await getEmployeeById(id);
        setEmployee({
            name: res.data.name,
            email: res.data.email,
            designation: res.data.designation,
            departmentId: res.data.department?.id || "",
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (id) {
            await updateEmployee(id, employee);
        } else {
            await createEmployee(employee);
        }
        navigate("/employees");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{id ? "Edit" : "Add"} Employee</h2>
            <input
                className="form-control mb-2"
                placeholder="Name"
                value={employee.name}
                onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
                required
            />
            <input
                className="form-control mb-2"
                placeholder="Email"
                value={employee.email}
                onChange={(e) => setEmployee({ ...employee, email: e.target.value })}
                required
            />
            <input
                className="form-control mb-2"
                placeholder="Designation"
                value={employee.designation}
                onChange={(e) =>
                    setEmployee({ ...employee, designation: e.target.value })
                }
                required
            />
            <select
                className="form-control mb-2"
                value={employee.departmentId}
                onChange={(e) =>
                    setEmployee({ ...employee, departmentId: e.target.value })
                }
                required
            >
                <option value="">Select Department</option>
                {departments.map((dept) => (
                    <option key={dept.id} value={dept.id}>
                        {dept.name}
                    </option>
                ))}
            </select>
            <button className="btn btn-success">Save</button>
        </form>
    );
};

export default AddEmployee;


            /**useParams() pulls path variables from the URL (like /edit/:id).
             * 
             * 
             * 
             * 
             * useEffect(() => { ... }, [])
The effect runs only once after the first render (componentDidMount behavior).

It will never run again unless the component unmounts and remounts.

Example:
 
useEffect(() => {
  loadDepartments();
  loadEmployee();
}, []); // Runs only once on mount


2. useEffect(() => { ... }, [id])
The effect runs after the first render, and every time the id value changes.

React compares the previous and current id and runs the effect only if id is different.

Example:
 
useEffect(() => {
  loadDepartments();
  loadEmployee();
}, [id]); // Runs on mount AND whenever 'id' changes
  */