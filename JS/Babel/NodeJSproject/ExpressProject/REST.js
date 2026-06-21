//API From Scratch:
const express = require("express");
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
app.post("/api/users", (req, res) => {
  console.log(req.body);
  res.send("Developing");
});

console.log(User);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servre is online / port ${port}`);
});

//Status Code : 200 (Everything was successful)
//The infamous 404 is used for errors as in line 19
