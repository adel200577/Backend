//API From Scratch:
const express = require("express");
const { body, validationResult } = require("express-validator");
let User = require("./UserFile");
const app = express();
app.use(express.json());
//Getting all users
app.get("/api/users", (req, res) => {
  res.json({
    data: User,
    message: "OK",
  });
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
    body("last_name", "VALID last_name").notEmpty()
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

console.log(User);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servre is online / port ${port}`);
});

//Status Code : 200 (Everything was successful)
//The infamous 404 is used for errors as in line 19
