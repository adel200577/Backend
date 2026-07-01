// const express = require("express");
// const app = express();
// //REST API :
// //you can call all 4 methods of the api using .get , .put , .post , .delete
// //all of the 4 methods above get tewo parameters:1.Route,2.a callback function to handle the request sent to the route which can get two parameters;(req,res)
// app.get("/", (req, res) => {
//   res.send("HelloExpress");
// });
// app.get("/api/users", (req, res) => {
//   console.log(req.query);
//   res.send([
//     { id: 1, name: "User1" },
//     { id: 2, name: "User2" },
//   ]);
// });
// app.get("/api/users/:id", (req, res) => {
//   console.log(req.params);
//   res.send({ id: req.params.id, name: `User${req.params.id}` });
// });

// //nodemon:
// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Server is Online/Port ${port}`);
//   console.log(process.env.PORT);
// });

// //Query String(Used for filters):
// // app.get("/api/users", (req, res) => {
// //   console.log(req.query);
// // });


