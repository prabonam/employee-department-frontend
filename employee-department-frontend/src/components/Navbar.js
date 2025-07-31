import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">EmployeeDeptApp</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/employees">Employees</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/departments">Departments</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Navbar;
