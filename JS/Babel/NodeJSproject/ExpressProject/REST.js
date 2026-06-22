//API From Scratch:
const express = require("express");
const { body, validationResult } = require("express-validator");
let User = require("./UserFile");
const app = express();
app.use(express.json());
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
//Getting all users
app.get("/api/users", (req, res) => {
  res.json({
    data: User,
    message: "OK",
  });
});

app.use((req, res, next) => {
  console.log("midd3");
  next();
  
});

//Getting one user:
app.get("/api/users/:id", (req, res) => {
  const user = User.find((u) => u.id === parseInt(req.params.id));
  console.log(user);
  if (!user) {
    return res.status(404).json({
      data: null,
      message: "No user with the given id found",
    });
  }
  res.json({
    data: user,
    message: "OK",
  });
});

//Post API:
app.post(
  "/api/users",
  [
    body("email", "VALID EMAIL").isEmail(),
    body("first_name", "VALID first_name").notEmpty(),
    body("last_name", "VALID last_name").notEmpty(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        data: null,
        errors: errors.array(),
        message: "validation error",
      });
    }
    console.log(req.body);
    res.send("Developing");
    User.push({ id: User.length + 1, ...req.body });
    res.json({
      data: User,
      message: "OK",
    });
  },
);

//PUT API:
app.put(
  "/api/users/:id",
  [
    body("email", "VALID EMAIL").isEmail(),
    body("first_name", "VALID first_name").notEmpty(),
    body("last_name", "VALID last_name").notEmpty(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    const user = User.find((u) => u.id == req.params.id);
    if (!user) {
      return res.status(404).json({
        data: null,
        message: "user not found",
      });
    }
    if (!errors.isEmpty()) {
      return res.status(400).json({
        data: null,
        errors: errors.array(),
        message: "validation error",
      });
    }
    User = User.map((user) => {
      if (user.id == req.params.id) {
        return { ...user, ...req.body };
      }
      return user;
    });
    res.json({ data: User, message: "OK" });
  },
);

//DELETE API:
app.delete("/api/users/:id", (req, res) => {
  const user = User.find((u) => u.id == req.params.id);
  if (!user) {
    return res.status(404).json({
      data: null,
      message: "user not found",
    });
  }
  const index = User.indexOf(user);
  User.splice(index, 1);
  res.json({ data: User, message: "OK" });
});

//console.log(User);
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
//   req.body.username = "Ezio";
//   req.user = { id: 9, name: "Altair" };
//   res.send("A message from a fine middleware1 dear noble man ");
//   console.log("midd1");
//   next();
// });
//the next() function is what decides if we should pass the data to the next middleware or not
