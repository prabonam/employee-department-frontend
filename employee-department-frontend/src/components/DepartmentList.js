import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    getAllDepartments,
    deleteDepartment,
} from "../api/apiService";

const DepartmentList = () => {
    const [departments, setDepartments] = useState([]);

    const fetchDepartments = async () => {
        const res = await getAllDepartments();
        setDepartments(res.data);
    };

    useEffect(() => {
        fetchDepartments();
    }, []);

    const handleDelete = async (id) => {
        await deleteDepartment(id);
        fetchDepartments();
    };

    return (
        <div>
            <h2>Departments</h2>
            <Link to="/add-department" className="btn btn-primary mb-2">
                Add Department
            </Link>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {departments.map((dept) => (
                        <tr key={dept.id}>
                            <td>{dept.name}</td>
                            <td>{dept.location}</td>
                            <td>
                                <Link
                                    to={`/edit-department/${dept.id}`}
                                    className="btn btn-warning btn-sm me-2"
                                >
                                    Edit
                                </Link>
                                <button
                                    onClick={() => handleDelete(dept.id)}
                                    className="btn btn-danger btn-sm"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DepartmentList;
