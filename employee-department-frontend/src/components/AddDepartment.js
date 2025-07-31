import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    getDepartmentById,
    createDepartment,
    updateDepartment,
} from "../api/apiService";

const AddDepartment = () => {
    const [department, setDepartment] = useState({
        name: "",
        location: "",
    });
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) loadDepartment();
    }, [id]);

    const loadDepartment = async () => {
        const res = await getDepartmentById(id);
        setDepartment(res.data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (id) {
            await updateDepartment(id, department);
        } else {
            await createDepartment(department);
        }
        navigate("/departments");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{id ? "Edit" : "Add"} Department</h2>
            <input
                className="form-control mb-2"
                placeholder="Name"
                value={department.name}
                onChange={(e) => setDepartment({ ...department, name: e.target.value })}
                required
            />
            <input
                className="form-control mb-2"
                placeholder="Location"
                value={department.location}
                onChange={(e) =>
                    setDepartment({ ...department, location: e.target.value })
                }
                required
            />
            <button className="btn btn-success">Save</button>
        </form>
    );
};

export default AddDepartment;
