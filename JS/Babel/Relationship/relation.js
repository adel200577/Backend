const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/Relation")
  .then(() => console.log("Connected to Db"))
  .catch(() => console.log("Failed to connect to DB"));

const Book = mongoose.model(
  "Book",
  new mongoose.Schema({
    title: String,
    pages: Number,
  }),
);

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    first_name: String,
    last_name: String,
    book: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
    },
  }),
);

async function createUser(fname, lname, id) {
  const user = new User({
    first_name: fname,
    last_name: lname,
    book : id,
  });
  const result = await user.save();
  console.log(result);
}

async function createBook(title, pages) {
  const book = new Book({
    title,
    pages,
  });
  const result = await book.save();
  console.log(result);
}

async function getUsers() {
  const users = await User.find().populate("book");
  console.log(users);
}

// // createBook("OS Dev" , 100);
// // createUser("Adel", "Sharifi", "6a43bdd5ab6f1b4e18407b2d");
getUsers();
