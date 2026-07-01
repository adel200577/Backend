//Reference:
// const mongoose = require("mongoose");

// mongoose
//   .connect("mongodb://localhost:27017/Relation")
//   .then(() => console.log("Connected to Db"))
//   .catch(() => console.log("Failed to connect to DB"));

// const Book = mongoose.model(
//   "Book",
//   new mongoose.Schema({
//     title: String,
//     pages: Number,
//   }),
// );

// const User = mongoose.model(
//   "User",
//   new mongoose.Schema({
//     first_name: String,
//     last_name: String,
//     book: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Book",
//     },
//   }),
// );

// async function createUser(fname, lname, id) {
//   const user = new User({
//     first_name: fname,
//     last_name: lname,
//     book: id,
//   });
//   const result = await user.save();
//   console.log(result);
// }

// async function createBook(title, pages) {
//   const book = new Book({
//     title,
//     pages,
//   });
//   const result = await book.save();
//   console.log(result);
// }

// async function getUsers() {
//   const users = await User.find().populate("book");
//   console.log(users);
// }

// // // createBook("OS Dev" , 100);
// // // createUser("Adel", "Sharifi", "6a43bdd5ab6f1b4e18407b2d");
// getUsers();

//Embedding:

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/Relation")
  .then(() => console.log("Connected to Db"))
  .catch(() => console.log("Failed to connect to DB"));

const bookSchema = new mongoose.Schema({
  title: String,
  pages: Number,
});

const Book = mongoose.model("Book", bookSchema);

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    first_name: String,
    last_name: String,
    books: [bookSchema],
  }),
);

async function createUser(fname, lname, books) {
  const user = new User({
    first_name: fname,
    last_name: lname,
    books: books,
  });
  const result = await user.save();
  console.log(result);
}

async function getUsers() {
  const users = await User.find();
  console.log(users);
}

// async function updateUser(id) {
// const user = await User.findById(id);
// user.book.title = "OperatingSystemDevelopment";
// const result = await user.save();
// console.log(result);
//DirectUpdate:
//   const user = await User.updateOne({_id:id},{$set:{
//   "book.title" : "OperatingSystemDev"
//   }});
//Deleting a property:
// const user = await User.updateOne({_id:id},{$unset:{
// "book.title" : ""
// }});
// }

async function addBook(userId, book) {
  const user = await User.findById(userId);
  user.books.push(book);
  await user.save();
}

async function removeBook(userId, bookId) {
  const user = await User.findById(userId);
  const book = user.books.id(bookId);
  user.books.pull(bookId);
  await user.save();
}

// createUser("Adel", "Sharifi", [
//   new Book({
//     title: "CPP",
//     pages: 200,
//   }),
//   new Book({
//     title: "C",
//     pages: 400,
//   }),
//   new Book({
//     title: "NASM",
//     pages: 1000,
//   }),
// ]);
// getUsers();
// updateUser("6a44dbea5a6013e17d6fbf54");
// addBook(
//   "6a44e0582d8ea2570469c1fe",
//   new Book({
//     title: "F14 MAnual",
//     pages: 8000,
//   }),
// );
// removeBook("6a44e0582d8ea2570469c1fe","6a44e208a0c861bcb806ee0a");

//ObjectID Validation:
