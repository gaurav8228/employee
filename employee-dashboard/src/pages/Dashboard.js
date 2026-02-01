
// ===== src/pages/Dashboard.js =====
import React, { useEffect, useState } from "react";
import EmployeeCard from "../components/EmployeeCard";

export default function Dashboard() {
  const [employees, setEmployees] = useState([]);
  const [searchId, setSearchId] = useState("");
  const [selected, setSelected] = useState([]);

 useEffect(() => {
  fetch("https://dummy.restapiexample.com/api/v1/employees")
    .then((res) => {
      if (!res.ok) {
        throw new Error("API rate limit exceeded");
      }
      return res.json();
    })
    .then((data) => setEmployees(data.data || []))
    .catch((error) => {
      console.error(error);
      setEmployees([]);
    });
}, []);


  const handleDelete = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
    setSelected(selected.filter((sid) => sid !== id));
  };

  const handleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const deleteSelected = () => {
    setEmployees(employees.filter((emp) => !selected.includes(emp.id)));
    setSelected([]);
  };

  const filteredEmployees = searchId
    ? employees.filter((emp) => emp.id.toString() === searchId)
    : employees;

  return (
    <div className="container">
      <h1>Employee Dashboard</h1>
      <p className="description">
        Search employees by ID, click cards to view details, edit or delete
        employees. You can also select multiple employees and delete them.
      </p>

      <div className="search-box">
        <input
          type="number"
          placeholder="Search by Employee ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <button onClick={() => {}}>Search</button>
        {selected.length > 0 && (
          <button className="danger" onClick={deleteSelected}>
            Delete Selected ({selected.length})
          </button>
        )}
      </div>
      {employees.length === 0 && (
        <p style={{ color: "red" }}>
             Unable to load employees. API limit exceeded. Please try again later.
        </p>
        )}


      <div className="grid">
        {filteredEmployees.map((emp) => (
          <EmployeeCard
            key={emp.id}
            employee={emp}
            onDelete={handleDelete}
            onSelect={handleSelect}
            selected={selected.includes(emp.id)}
          />
        ))}
      </div>
    </div>
  );
}