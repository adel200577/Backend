//Route Refactoring
const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const User = require("../Models/Models");
router.use(express.json());
router.use(express.urlencoded({ extended: true }));


router.get("/", async (req, res) => {
  const users = await User.find();
  res.json({
    data: users,
    message: "OK",
  });
});

//Getting one user:
router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
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
  async (req, res) => {
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
    // res.send("Developing");
    let newUser = new User({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
    });
    newUser = await newUser.save();
    res.json({
      data: newUser,
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
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        data: null,
        errors: errors.array(),
        message: "validation error",
      });
    }

    const user = await User.findByIdAndUpdate(
      req.params.id,
      {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
      },
      { new: true },
    );
    if (!user) {
      return res.status(404).json({
        data: null,
        message: "user not found",
      });
    }

    res.json({ data: user, message: "OK" });
  },
);

//DELETE API:
router.delete("/:id", async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) {
    return res.status(404).json({
      data: null,
      message: "user not found",
    });
  }
  res.json({ data: user, message: "OK" });
});

module.exports = router;
