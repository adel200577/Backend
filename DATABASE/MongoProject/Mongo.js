const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/mongoproject")
  .then(() => {
    console.log("Connection Successful");
  })
  .catch(() => {
    console.error("Connection Failed");
  });

//we use schema in "mongoose" to determine how a collection's document must contain and what type of data it must have. It is like a blueprint of the document.
//basically we determine a field for our document and then we determine the type of data that field must have.
//For example, if we want to create a document for a user, we can create a schema for it and then
// we can determine the fields for the user document like name, age, email, etc. and then
// we can determine the type of data that field must have like name must be a string, age must be a number, email must be a string, etc.

//schema is not related to mongodb and it's more like a mongoose functionality. It is used to
//determine the structure of the document and the type of data that field must have.

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: { type: String, required: true },
  salary: {
    type: Number,
    required: true,
    set: (v) => Math.round(v),
    get: (v) => Math.round(v),
  },
  favourites: {
    type: [String],
    required: true,
    validate: {
      validator: function (v) {
        return v && v.length > 0;
      },
      message: "favourites field must not be empty",
    },
    enum: ["Aviation", "Aerospace", "Military", "USAF", "Politics"],
  },
  date: { type: Date, default: Date.now },
  admin: Boolean,
});

//most used field data types:
//String, Number, Date, Buffer, Boolean, Mixed, ObjectId, Array

//ModelClass:Compiling a Schema to a ModelClass
//A model is a class with which we construct documents. In this case, each document will be an instance of the User model.
//Models are responsible for creating and reading documents from the underlying MongoDB database.
//inshort,with models we can create objects and with those objects we can perform CRUD operations on the database.
//and save them in our documents

//We have to create a model for our schema to perform CRUD operations on the database.
//We can create a model by using the mongoose.model() method. It takes two arguments, the first argument is the name of the model and the second argument is the schema that we want to use for the model.
//Once the model is created, we can use it to create documents and perform CRUD operations on the database.
//NOTICE:We have to use async function to handle the user's mappimg to the database
//So handle the mapping process via putting it in an async function and using await ot then/catch

const User = mongoose.model("User", userSchema);
//this will create a collection named "users" in the database and it will have the structure defined in the userSchema.

async function createUser() {
  const user1 = new User({
    salary: 25.6,
    first_name: "Vincent",
    last_name: "Smasher",
    favourites: ["Military"],
    admin: false,
  });

  const result = await user1.save();
  console.log(result);
}

//Query Writing:
async function getUsers() {
  //The find method returns an object document query which is a promise and should be handled via then/catch or await methods:
  const users = await User.find({_id:"6a437d2cc04837013971d48e"});
  console.log(users[0].salary);
  //pagination:
  //Use limit and skip methods to deploy pagination:
  // const pageNumber = 1;
  // const pageSize = 8;
  // const users1 = await User
  // .find()
  // .skip((pageNumber - 1) * pageSize)
  // .limit(pageSize);

  //You can imple,ent a filter to the find method
  //The filter is an object that has key values which will apply a filter to our documents in order to identify which
  //Document should be returned and impleented in the array:
  const users2 = await User.find({ first_name: "John", admin: true });
  //.limit():to specify the amount of documnets that can be returned
  //.sort():to sort documents according to the key value of it's object argument (1  0 -1)
  //.select(): to access and print the key values given to it
  //.count(): to count the number of documents which have the requierd conditions
  // console.log(users);
  console.log(users2);
}

//How to update a document:
//Method one:retrieve,modify,save the target document:
async function updateUser(id) {
  const user = await User.findById(id);
  if (!user) {
    return;
  }
  // user.admin = true;
  // user.first_name = "Alex";

  //OR:
  user.set({
    first_name: "Alex",
    admin: true,
  });

  //   const result = await user.save();
  //   console.log(result);
  // const user = await User.findOne({id:id});
  // const user = await User.find({__id:id});
}

//Method Two:
//Directly access and modify the document without retrieving it from the DB:
//Using Uopdate Method:
async function userUpdate(id) {
  //   const result = await User.updateOne(
  //     { _id: id },
  //     { $set:{ first_name: "Jack", last_name: "Snake", admin: true } },
  //   );
  //   console.log(result);
  // }

  const result = await User.findByIdAndUpdate(
    id,
    {
      $set: { first_name: "Jack", last_name: "Snake", admin: true },
    },
    { new: true },
  );
  console.log(result);
}

async function removeUser(id) {
  const result = await User.deleteOne({ _id: id });
  //You can use deleteMany to delete multiple documents
  //You can also use findByIdAndRemove with passing the id as an argument to it so
  //you can see the deleted document in the terminal
  console.log(result);
}

getUsers();
// updateUser("6a4106e769a9407567e4c778");
// userUpdate("6a41079aeb6a91e6f3d4e582");
// removeUser("6a41082e615df9a9fd7a5d97");
// createUser();

//Operators in Mongo:
//Comparison Operators: eq-nq-gt-gte-Lt-Lte-in-nin
//or and queries:
//.or([{},{}])
//.and([{},{}])

//Deleting a document:
//DeleteOne()
//DeleteMany

//Require validator:

//Schema type:String: lowercase:true , uppercase: true,trim:true
//All types:set and get
