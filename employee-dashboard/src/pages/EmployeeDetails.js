
// ===== src/pages/EmployeeDetail.js =====
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./EmployeeDetails.css";

export default function EmployeeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    fetch(`https://dummy.restapiexample.com/api/v1/employee/${id}`)
      .then((res) => res.json())
      .then((data) => setEmployee(data.data));
  }, [id]);

  if (!employee) return <p>Loading...</p>;

  return (
    <div className="detail-container">
      <h2>Employee Details</h2>
      <p><strong>ID:</strong> {employee.id}</p>
      <p><strong>Name:</strong> {employee.employee_name}</p>
      <p><strong>Age:</strong> {employee.employee_age}</p>
      <p><strong>Salary:</strong> ₹{employee.employee_salary}</p>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}