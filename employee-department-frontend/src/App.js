//import logo from './logo.svg';
import './App.css';


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import EmployeeList from "./components/EmployeeList";
import AddEmployee from "./components/AddEmployee";
import DepartmentList from "./components/DepartmentList";
import AddDepartment from "./components/AddDepartment";

function App() {
    return (
        <Router>
            <Navbar />
            <div className="container mt-4">
                <Routes>
                    <Route path="/" element={<EmployeeList />} />
                    <Route path="/employees" element={<EmployeeList />} />
                    <Route path="/add-employee" element={<AddEmployee />} />
                    <Route path="/edit-employee/:id" element={<AddEmployee />} />
                    <Route path="/departments" element={<DepartmentList />} />
                    <Route path="/add-department" element={<AddDepartment />} />
                    <Route path="/edit-department/:id" element={<AddDepartment />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

/**
 * 
 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; **/



