//Route Refactoring

const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
let User = require("../UserFile");
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/", (req, res) => {
  res.json({
    data: User,
    message: "OK",
  });
});

//Getting one user:
router.get("/:id", (req, res) => {
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
router.post(
  "/",
  [
    body("email", "VALID EMAIL").isEmail(),
    body("first_name", "VALID first_name").notEmpty(),
    body("last_name", "VALID last_name").notEmpty(),
  ],
  (req, res) => {
    ////urlencode middleware:
    //return console.log(req.body);
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
router.put(
  "/:id",
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
router.delete("/:id", (req, res) => {
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

module.exports = router;
