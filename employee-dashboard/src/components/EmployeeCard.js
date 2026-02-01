// ===== src/components/EmployeeCard.js =====
import React from "react";
import { useNavigate } from "react-router-dom";
import "./EmployeeCard.css";

export default function EmployeeCard({ employee, onDelete, onSelect, selected }) {
  const navigate = useNavigate();

  return (
    <div className={`card ${selected ? "selected" : ""}`}>
      <input
        type="checkbox"
        checked={selected}
        onChange={() => onSelect(employee.id)}
      />
      <h3 onClick={() => navigate(`/employee/${employee.id}`)}>
        {employee.employee_name}
      </h3>
      <p>Age: {employee.employee_age}</p>
      <p>Salary: ₹{employee.employee_salary}</p>
      <div className="actions">
        <button className="edit">Edit</button>
        <button className="delete" onClick={() => onDelete(employee.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
