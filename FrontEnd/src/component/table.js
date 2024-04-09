import React, { useState, useEffect } from "react";
import axios from "axios";

const Table = () => {
  const [userLogs, setUserLogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8095/attendance1")
      .then((response) => {
        setUserLogs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user logs:", error);
      });
  }, []);

  return (
    <div>
      <h2>User Login Information</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>User ID</th>
            <th>Time Activity</th>
            <th>Activity Type</th>
          </tr>
        </thead>
        <tbody>
          {userLogs.map((log, index) => (
            <tr key={index}>
              <td>{log.id}</td>
              <td>{log.Userid}</td>
              <td>{log.Time_activity}</td>
              <td>{log.Activity_type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
