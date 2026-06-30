//API From Scratch:
const express = require("express");
const app = express();
const helmet = require("helmet");
const morgan = require("morgan");
const config = require("config");
const debug = require("debug")("app:main");
const userRouter = require("./routes/UserRoutes");
app.use(express.json());
const mongoose = require("mongoose");
app.use((req, res, next) => {
  req.body = req.body || {};
  req.body.username = "Ezio";
  req.user = { id: 9, name: "Altair" };
  //res.send("A message from a fine middleware1 dear noble man ");
  console.log("midd1");
  next();
});
app.use((req, res, next) => {
  console.log("midd2");
  console.log(req.body);
  console.log(req.user);
  next();
});

//console.log(userRouter);
app.use("/api/users", userRouter);

//Getting all users
//console.log(User);

mongoose
  .connect("mongodb://localhost:27017/Express")
  .then(() => console.log("Connected to ExpressDB"))
  .catch(() => console.log("Connection Failed!"));
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servre is online / port ${port}`);
});

//Status Code : 200 (Everything was successful)
//The infamous 404 is used for errors as in line 19

//middleware:
//a middleware can modify the req res objects
//it has read and write authority for req and can create the respond for res
//a middleware can decide to stop the data flow when neccessary
//middleware is sequential and thus the order you put them in is important
//Every Route you define in express is considered a middleware

//Custom Middlewares:
//app.use(<middleware function>)
//app.use((req,res,next)=>{})
// app.use((req, res, next) => {
//   req.body = req.body || {};
//   req.body.username = "Ezio";
//   req.user = { id: 9, name: "Altair" };
//   res.send("A message from a fine middleware1 dear noble man ");
//   console.log("midd1");
//   next();
// });
// app.use((req, res, next) => {
//   console.log("midd2");
//   console.log(req.body);
//   console.log(req.user);
//   next();
// });
// app.use((req, res, next) => {
//   console.log("midd3");
//   next();
// });
//the next() function is what decides if we should pass the data to the next middleware or not
