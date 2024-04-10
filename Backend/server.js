const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const server = express();
server.use(bodyParser.json());
var cors = require("cors");
server.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root@1234",
  database: "attendance1",
});

db.connect(function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("successfully connected");
  }
});

server.post("/attendance1", (req, res) => {
  // const { Time_activity } = req.body;
  const { Date } = req.body;
  const { Userid } = req.body;
  const { Activity_type } = req.body;

  // Extract Login_Time from req.body

  // Insert the data into the database
  const sql =
    "INSERT INTO time_table (Date, Userid, Activity_type) VALUES (?, ? ,?)"; // Assuming your table has a column named Login_Time
  db.query(sql, [Date, Userid, Activity_type], (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      res.status(500).send("Error inserting data into database");
    } else {
      console.log("Data inserted successfully");
      // console.log(Time_activity);
      res.status(200).send("Data inserted successfully");
    }
  });
});

server.get("/attendance1", (req, res) => {
  const sql = "SELECT * FROM time_table";
  db.query(sql, (error, data) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    } else {
      return res.json(data);
    }
  });
});

server.listen(8095, () => {
  console.log("Server is running on port 8095");
});

// const express = require("express");

// const bodyParser = require("body-parser");
// const mysql = require("mysql");

// // const {createPool}  = require('mysql')
// const server = express();
// server.use(bodyParser.json());
// var cors = require("cors");
// server.use(cors());
// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "root@1234",
//   database: "attendance1",
//   // connectionLimit : 10,
// });
// // pool.query("select * from employeedata ",(err,result,fields)=>{
// //     if(err){
// //         return console.log(err);
// //     }
// //     return console.log(result);
// // })

// db.connect(function (error) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("successfully connected");
//   }
// });

// // server.post("/attendance", (req, res) => {
// //   const sql =
// //     "INSERT INTO empdata (`ID`,`User_Name`,`Login_Time`,`Logout_Time`,`Breakin_Time`,`Breakout_Time`) Values (?)";
// //   let details = [
// //     req.body.ID,
// //     req.body.User_Name,
// //     req.body.Login_Time,
// //     req.body.Logout_Time,
// //     req.body.Breakin_Time,
// //     req.body.Breakout_Time,
// //   ];
// //   //execute query

// //   db.query(sql, [details], (error, data) => {
// //     if (error) {
// //       console.log(error, "in the insert data");
// //       return res.json(error);
// //     } else {
// //       return res.json(data);
// //     }
// //   });
// // });

// server.post("/attendance1", (req, res) => {
//   const data = req.body.data; // Assuming your frontend sends data in this format

//   // Insert the data into the database
//   const sql =
//     "INSERT INTO new_table (userid,Login_Time,Logout_Time,Breakin_Time,Breakout_Time) VALUES (?)";
//   db.query(sql, [data], (err, result) => {
//     if (err) {
//       console.error("Error inserting data:", err);
//       res.status(500).send("Error inserting data into database");
//       console.log;
//     } else {
//       console.log("Data inserted successfully");
//       console.log(data);
//       res.status(200).send("Data inserted successfully");
//     }
//   });
// });

// server.post("attendance1", (req, res) => {
//     const { ID, User_Name, Login_Time } = req.body;
//     const sql = "INSERT INTO empdata (ID, User_Name, Login_Time) VALUES (45, 'nandhu')";
//     db.query(sql, [ID, User_Name, Login_Time], (error, result) => {
//         if (error) {
//             return res.status(500).json({ error: error.message });
//         } else {
//             return res.json({ message: "Login time stored successfully" });
//         }
//     });
// });

//         server.post("/logout", (req, res) => {
//             const { Logout_Time } = req.body;
//             const sql = "UPDATE empdata SET Logout_Time = ? WHERE ID = ?";
//             db.query(sql, [Logout_Time, req.body.ID], (error, result) => {
//                 if (error) {
//                     return res.status(500).json({ error: error.message });
//                 } else {
//                     return res.json({ message: "Logout time updated successfully" });
//                 }
//             });
//         });

// // Endpoint to fetch attendance data
// server.get("/login", (req, res) => {
//     const sql = "SELECT * FROM empdata"; // Query to select all data from empdata table
//     db.query(sql, (error, data) => {
//         if (error) {
//             return res.status(500).json({ error: error.message });

//         } else {
//             return res.json(data); // Send the fetched data as JSON response
//         }
//     });
// });

// server.post("/attendance", (req, res) => {
//     const { ID, User_Name, Login_Time, Logout_Time, Breakin_Time, Breakout_Time } = req.body;

//     // Check if all required fields are present
//     if (!ID || !User_Name || !Login_Time) {
//         return res.status(400).json({ error: 'Missing required fields' });
//     }

//     const sql = "INSERT INTO empdata (ID, User_Name, Login_Time, Logout_Time, Breakin_Time, Breakout_Time) VALUES (?, ?, ?, ?, ?, ?)";
//     const values = [ID, User_Name, Login_Time, Logout_Time, Breakin_Time, Breakout_Time];

//     db.query(sql, values, (error, result) => {
//         if (error) {
//             console.error('Error inserting data:', error);
//             return res.status(500).json({ error: 'Error inserting data' });
//         }
//         console.log('Data inserted successfully');
//         return res.status(200).json({ message: 'Data inserted successfully' });
//     });
// });

// server.listen(8088, () => {
//     console.log('Server is running on port 8088');
// })

// server.get("/api/employinfo", (req, res) => {
//   let sql = "SELECT * FROM employinfo";
//   db.query(sql, function (error, result) {
//     if (error) {
//       console.log("error");
//     } else {
//       res.send({ status: true, data: result });
//     }
//   });
// });
// server.get("/api/employinfo/:emp_id", (req, res) => {
//   let name = req.params.emp_id;
//   let sql = "SELECT * FROM employinfo where emp_id =" + name;
//   db.query(sql, function (error, result) {
//     if (error) {
//       console.log(error);
//     } else {
//       res.send({ status: true, data: result });
//     }
//   });
// });

// //update the records
// server.put("/api/employinfo/update/:emp_id", (req, res) => {
//   let sql =
//     "update employinfo set empl_name='" +
//     req.body.empl_name +
//     "', emp_phoneno='" +
//     req.body.emp_phoneno +
//     "', emp_add='" +
//     req.body.emp_add +
//     "', emp_age='" +
//     req.body.emp_age +
//     "' where emp_id=" +
//     req.params.emp_id;
//   let a = db.query(sql, (error, result) => {
//     if (error) {
//       res.send({ status: false }); // status: false, message: 'failed'});
//     } else {
//       res.send({ status: true, message: "success" });
//     }
//   });
// });

// //delete the record
// server.delete("/api/employinfo/delete/:emp_id", (req, res) => {
//   let sql = "DELETE FROM employinfo WHERE emp_id=" + req.params.emp_id + "";
//   let query = db.query(sql, (error) => {
//     if (error) {
//       res.send({ status: false, data: "error" });
//       console.log(error);
//     } else {
//       res.send({ status: true, data: "result" });
//     }
//   });
// });

// server.listen(8099, function check(error) {
//   if (error) {
//     console.log("error");
//   } else {
//     console.log("started port");
//   }
// });
// // const express = require('express');
// const bodyParser = require('body-parser');
// const mysql = require('mysql');
// const cors = require('cors');

// const server = express();
// server.use(bodyParser.json());
// server.use(cors());

// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'root@1234',
//     database: 'attendance',
// });

// server.post("/attendance", (req, res) => {
//     const { ID, User_Name, Login_Time, Logout_Time, Breakin_Time, Breakout_Time } = req.body;
//     const sql = "INSERT INTO empdata (ID, User_Name, Login_Time, Logout_Time, Breakin_Time, Breakout_Time) VALUES (?, ?, ?, ?, ?, ?)";
//     db.query(sql, [ID, User_Name, Login_Time, Logout_Time, Breakin_Time, Breakout_Time], (error, data) => {
//         if (error) {
//             return res.status(500).json({ error: error.message });
//         } else {
//             return res.json(data);
//         }
//     });
// });

// server.get("/attendance", (req, res) => {
//     const sql = "SELECT * FROM empdata";
//     db.query(sql, (error, data) => {
//         if (error) {
//             return res.status(500).json({ error: error.message });
//         } else {
//             return res.json(data);
//         }
//     });
// });

// const PORT = process.env.PORT || 8008;
// server.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
