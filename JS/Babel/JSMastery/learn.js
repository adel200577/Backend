//Node Check
console.log("Hello, World!");

//Variable Log Test
let name = "Heil!";
console.log(name);

//Constants
const name1 = "Alex";
console.log(name1);

//Primitive(Value)Types:
//String :
let name2 = "Max";
console.log(name2);
//Number :
let age = 20;
console.log(age);
//Boolean :
let admin = true;
console.log(admin);
//Undefined :
let Var;
let VAR = undefined;
console.log(Var, VAR);
//Null :
let empty = null;
console.log(empty);

//typeof function:
let adj = "good";
console.log(adj);
typeof adj;

//see typeof function identifying a variables's type in the console:
console.log(typeof adj);

//variables's value reassignment:
adj = "bad";
console.log(typeof adj);
adj = 1;
console.log(typeof adj);
adj = 1.5;
console.log(typeof adj);
//Terminal output implies once the adj variable was assigned
//to an integer or a float,the JS reassigned the variable's type to Number
//NOTE:in JavaScript we only have one type to identify integers, floats, and doubles
//NOTE:JavaScript is dynamic

//undefined is both a type and a value

//ReferenceTypeValue:
//Object:
let a = null;
console.log(typeof a);
//a is an object which is null

//Object Definition:
let Person = {
  fname: "Adel",
  agenum: 21,
  LivingStatus: true,
};

//{} is an object literal

//inside an object literal our data should be in key(property) and value assignment

//NOTICE:Key is the object's property
//In the example above, fname, agenum and LivingStatus considered
//as the Person's object property (or key)
//after each property, we declare the property's related value
//by : operator and assign the value to the object's property afterwards

//Printing all properties related to an object:
console.log(Person);

//Printing a specifies property's value:
//1.DotNotation: console.log(Object.PropertyName); :
console.log(Person.fname);
//2.BracketNotation: console.log(Object["PropertyName"]); :
console.log(Person["agenum"]);

//Array Definition:
let Users = ["Adel", "Ali"];
//[] is an array literal

//Printing an array: console.log(ArrayName); :
console.log(Users);

//Printing a specific element in an array:
//console.log(ArrayName[element's relevant index]); :
console.log(Users[1]);

//NOTICE: once you exceed the number of elements in an array
//and get a log for it you'll see undefined:
console.log(Users[25]);

//As a dynamic language, in JS you and the language itself
//can modify and change an array's length:
Users[2] = "Jack";
console.log(Users);
console.log(Users[2]);
//and the array's element can be modified as well:
Users[0] = "JohnDoe";
console.log(Users);
console.log(Users[0]);

//Your array's elements types can vary as well:
Users[3] = 25;
Users[4] = true;
console.log(Users);
console.log(Users[3]);
console.log(Users[4]);

Users = ["James", 35, true];
console.log(Users);
console.log(Users[0]);
console.log(Users[1]);
console.log(Users[2]);

//An array is also an object
// which keys are element's index numbers and values are the element's value:
console.log(typeof Users);
//As an object, you can find the arrays related properties by typing User.
//for instance, the following will print an array's length accordingly:
console.log(Users.length);

//Function Definition:
function example(name, age) {
  let result = 2 + 2;
  console.log("This is a function");
  console.log("Previats\t" + name + "\tyour age is\t" + age);
  console.log(result);
}
//To call a function and eventually get a log out of it
//simply do : FunctionName(); :
example("Adel", 21);
//Let's create a function that returns sth:
function square(number) {
  let result = number * number;
  return result;
}
// function square(number) {
//   return number * number;
// }
let result = square(40);
console.log(result);
//FunFact: console.log is also a function

//Arithmetic Operators:
// [+ , - , / , % , * , ** , ++ , --]
//x++:assigns x = x+1;
//but prints x

//++x:assigns x = x+1
//and prints x+1;

//x--:assigns x = x-1;
//but prints x

//--x:assigns x = x-1
//and prints x-1;

//Assignment Operators:
//[= , += , -= , *= , /= , %=]

//Comparison Operators:
//relational:
//[< , > , <= , >=]

//Equality:
//Lose equality:
//[== , !=]

//Strict equality:
//[=== , !===]:
console.log("1" == 1);
// == operator ignore's the type and seeks the value
console.log("1" === 1);
// === operator seeks type and value both

//NOTE:Comparison Operator's result is boolean

//Ternary Operator:
let authenticated = true;
//let ButtonText = __ ? __ : __ ; (structure)
let ButtonText = authenticated === true ? " dashboard" : "Login";
console.log(ButtonText);

//Logical Operators:
//Logical AND : &&:
let Count = 2;
let Price = 1000;
let Credit = 5000;
let buy = Count > 0 && Credit > Price;
console.log(buy);

//Logical OR : ||
buy = Count > 0 || Credit > Price;

//Logical NOT : !
console.log(!buy);

//Logical Operators doesn't always have boolean output:
let LO = true || "Adel";
console.log(LO);

//false results in the perspective of Logical Operators:
//false , undefined , null , 0 , '' , "" , NaN

//True results in the perspective of Logical Operators:
//anything which is not false

//Bitwise operators:
//Decimal Numbers:1 2 30 100
//binary: 101010 00001 10000101
//Bitwise AND : &
//Bitwise OR : |
console.log(1 | 2);
// 1 = 001
// 2 = 010
// 1 | 2 = 0|0 0|1  1|0 = 011 = 3
//Output = 3
console.log(1 & 2);
// 1 & 2 = 0&0 0&1 1&0 = 000 = 0
//Output = 0

//Operator Precedence:
//Use () for your desired order of operators to be executed

//for-if && for-of:
const person = { name: "Adel", age: 21 };
const colors = ["red", "blue", "green"];
for (let key in person) {
  console.log(key);
  console.log(person[key]);
}

for (let color of colors) {
  console.log(color);
}

//OOp(FUCK):

//OBJECT:

//FactoryFunction:
function CreateCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}

let circle1 = CreateCircle(1);
console.log(circle1);

let circle2 = CreateCircle(2);
console.log(circle2);

//ConstructorFunction:

//camel notation: oneTwoThree(for factoryfunction)
//pascal notation: oneTwoThree(for constructorfunction)

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(3);
console.log(circle);

//Object in JS are dynamic
const circle3 = {
  radius: 1,
};
circle3.color = "red";
circle3.draw = function () {};

delete circle3.radius;
delete circle3.draw; 

console.log(circle3);

//Note that i used const but still could modified
//the object,because a const will not allow reassignment
//but new modifications are allowed

//ConstructorProperty:

console.log(circle.constructor);
//CustomConstructor
console.log(circle2.constructor);
console.log(circle3.constructor);
//Pre-Build Constructor

//when defining an object using ConstructorFunction, you are programming
//the constructor itself while in FactoryFunction and ObjectLiteral
//methods, the JS engine will construct the related object's constructor by itself

//Different types of JS engine constructors:

//For Strings:
let name3 = "Adel";
new String("Adel");

//For Boolean:
let admin3 = true;
new Boolean(admin);

//For Number:
let num3 = 10;
new Number(10);

//FuckingFunFact: Functions Are OBJECTS! (Blyat):
Circle.length;
//AND THEY HAVE CONSTRUCTORS!:
console.log(Circle.constructor);

const circle4 = new Function(
  "radius",
  `this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };`,
);

//some methods for a function object:
Circle.call({}, 9);  
Circle.apply({}, [12]);

//What's the difference between primitive and reference types:
//primitive types:
//Number
//Boolean
//String
//undefined
//null
//Symbol

//Reference types(object types):
//object
//function
//array

let x = 10;
let y = x;
x = 20;
console.log(y);
//Primitive types are separate and independent from each other

let x1 = { value: 10 };
let y1 = x1;

x1.value = 20;
console.log(y1);
//Reference types use address based assignment and therefore
//they are related

let number = 10;
function increase(number) {
  number++;
}
increase(number);
console.log(number);

// let obj = { value: 10 };
// function increase(obj) {
//   obj.value++;
// }
// increase(obj);
// console.log(obj);

//object iteration:
const obj1 = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

for (let key in obj1) {
  console.log(obj1[key]);
}

//for-in loop works with objects because they are iterable with it

/*for(let key of obj1){
  console.log(obj1[key]);
}*/

//for-of loop doesn't work with objects because they are not iterable with it
//it only works with arrays and strings because they are iterable with it

let obj1keys = Object.keys(obj1);
console.log(obj1keys);
//Object.keys() method returns an array of a given object's own enumerable property names
//iterated in the same order that a normal loop would.

for (let key of obj1keys) {
  console.log(key);
  console.log(obj1[key]);
}
//we can also do it in one line:
for (let key of Object.keys(obj1)) {
  console.log(key);
  console.log(obj1[key]);
}

//Object.entries() method:
let obj1Entries = Object.entries(obj1);
console.log(obj1Entries);

//Object.entries() method returns an
//array of a given object's own enumerable string-keyed property [key, value] pairs

console.log(Object.entries(obj1));
//a shorter way to do it without the need to assign the result of Object.entries() method to a variable

for (let key in Object.entries(obj1)) {
  console.log(key);
  console.log(Object.entries(obj1)[key]);
}

//but the above code is not the best way to do it because it will print the index of the entries array instead of the key and value of the object

for (let entry of Object.entries(obj1)) {
  console.log(entry);
}
//the above code will print the key and value of the object in an array format

for (let [key, value] of Object.entries(obj1)) {
  console.log(key);
  console.log(value);
}
//the best way to do it is to use destructuring assignment to get the key and value of the object from the entries array

//Now to check if an object has a specific property we can use the in operator:

console.log("radius" in obj1);
console.log("color" in obj1);

//the above code will return true if the object has the property and false if it doesn't

//Or:

if ("radius" in obj1) {
  console.log("radius is a property of obj1");
}

//Object.hasOwnProperty() method:
console.log(obj1.hasOwnProperty("radius"));
console.log(obj1.hasOwnProperty("color"));
//the above code will return true if the object has the property and false if it doesn't

//Object cloning:

//Solution 1:
const tmp = {};
for (let key in obj1) {
  tmp[key] = obj1[key];
}
console.log(tmp);
//the above code will create a new object and copy the properties of the original object to the new object
//In this method,the objects tmp and obj1 are completely independent

const obj2 = Object.assign({}, obj1);
console.log(obj2);
//Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.

//you can assign a property to the object you're assigning to independently from the former object:
const obj3 = Object.assign({ location: 1 }, obj1);
console.log(obj3);

//Spread Operator:
const obj4 = { ...obj1 };
console.log(obj4);

//like the previous example,you can assign an independent property from the former object to the target object by this method as well:
const obj5 = { color: "red", ...obj1 };
console.log("\t", obj5);

//Garbage collection:
//Unlike c family languages and more,the JS engine
//automatically allocates and destructs objects
//and the garbage data

//MathObject:
Math.PI;
Math.random();
console.log(Math.PI, Math.random());

//Random numbers is specified lengths:
function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}
console.log(getRandom(2.12, 25));

//if you want to desclude the floating part:
// function getRandom(min, max) {
//   return Math.floor(Math.random()) * (max - min) + min;
// }
// console.log(getRandom(2.12, 25));

//to round a number :
console.log(Math.round(1.365));
console.log(Math.round(1.965));

//max and minimum number in a group:
console.log(Math.max(2, 3, 4, 55));
console.log(Math.min(23, 27, -3, 70));

//absolute:
console.log(Math.abs(-183.236));

//StringPrimitive:
const message = '  neon \n" vivla da  ';

//StringObject:
const char = new String("Neon");

//When using the dot notation on an object literal
//the JS engine will automatically convert the literal object
//to an object which we can observe it's properties and methods:
console.log(message.length);
console.log(message[3]);
console.log(message.includes("N"));
console.log(message.startsWith("neon"));
console.log(message.endsWith("No"));
console.log(message.indexOf("neon"));
console.log(message.replace("vivla", "viva"));
//replace method replaces a part of the string without
//affecting the main string in which if you want to
//actually affect the main string you'll probably wanna:
//message = message.replace("vivla", "viva");
//but since message is a const this is invalid
//and you can do this to a string which is defined by
//let.
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.trim());
console.log(message.trimStart());
console.log(message.trimEnd());
console.log(message.split(" "));

//template literal
//let's make the sentence sexy! :
const output = "Viva . \n" + "Romanum Imperum";
console.log(output);
//still look like shit!
//alright,literal review:
//{}:Object
//true , false:Boolean
// ' "" :String
// ` :Templateliteral
const another = `'Viva'  
Romanum Imperum`;
console.log(another);

//PlaceHolder via template literal:
//PlaceHolder is called via ${}; :
let nam = "Adel";
let msg = `Hello ${nam}
Welcome back!`;
console.log(msg);
//Inside the placeholder anything that has an output (calculations,functions,objects etc)
//can be implemented: ${ 2 + 2 }; will show 4 in the terminal

//Date Object:
const now = new Date();
const date1 = new Date(" June 09 2005 20:40");
const date2 = new Date(2005, 9, 5, 20, 40);

//Date in String Format:
console.log(now.toDateString());
console.log(date1.toDateString());
console.log(date2.toDateString());

//Standard Date Format:
console.log(now.toISOString());
console.log(date1.toISOString());
console.log(date2.toISOString());

//getDate( is used for Day):
console.log(now.getDate());
console.log(date1.getDate());
console.log(date2.getDate());

//Day of the week:
//getDay():
console.log(now.getDay());
console.log(date1.getDay());
console.log(date2.getDay());

//Year of the date:
console.log(now.getFullYear());
console.log(date1.getFullYear());
console.log(date2.getFullYear());

//Month of the date:
console.log(now.getMonth());
console.log(date1.getMonth());
console.log(date2.getMonth());

//Hour of the date:
console.log(now.getHours());
console.log(date1.getHours());
console.log(date2.getHours());

//set will change the Date Object's property values:
now.setFullYear(2077);
date1.setDate(3);
date2.setMonth(10);
console.log(now);
console.log(date1);
console.log(date2);

//Adding elements to an array:
const array = [8, 98];
console.log(array);
array.push(5);
array.unshift(6, 7);
array.splice(2, 0, "A", "b");
console.log(array);

//Finding an array's element:
//1.Primitive type array:
const num = [1, 2, 3, 4, 5, 2];
console.log(num.indexOf(1));
//Watch for the data type you're putting in indexOf()
//in case you have the same element in different places
//and wanna locate the related index to the latter element:
console.log(num.lastIndexOf(2));

//How to check element existence in an array:
if (num.includes(1)) {
  console.log("JA");
}

//the index method related arguments have secondary argument
//Declaring from the start of which exact index should js looks for:
console.log(num.indexOf(2, 2));

//2.Reference type array:
const refs = [
  { id: 21, name: "Adel" },
  { id: 24, name: "Ali" },
];
console.log(
  refs.find(function (ref) {
    return ref.id === 21;
  }),
);
console.log(
  refs.findIndex(function (ref) {
    return ref.id === 21;
  }),
);

//ArrowFunction:
console.log(
  refs.find((ref) => {
    return (ref.id === 21, ref.name === "Adel");
  }),
);

//Deleting an element from an array:
//Same as adding:
//Delete from the end:
const last = num.pop();
console.log(num);
console.log(last);
//Delete from the start:
const first = num.shift();
console.log(num);
console.log(first);

//from anywhere:
const free = num.splice(3, 1);

//NUKES:Deleting all elements of an array:
let sth = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let thing = sth;
//sth = [];
console.log(sth);
console.log(thing);
//But what if it you wanted to make all index's empty? :
sth.length = 0;
console.log(sth);

//now let's delete them all from wherever we like:
num.splice(0, num.length);

//slicing and combining arrays to each other:
const former = [1, 2, 3];
const latter = [4, 5, 6];
const combined = former.concat(latter);
console.log(combined);
//The concat method doesn't affect the first and the second array
//simply combining them and pointing the result to a specified memory location

//slice:
const slice = combined.slice(2, 4);
console.log(slice);
//if you simply type slice() it'll make a copy of the former array

//Spread operator in arrays:
const combined1 = ["a", ...former, ...latter, "b"];
console.log(combined1);
const slice1 = [...combined1];
console.log(combined1);

//Array iteration:
const arr = [36, -1, 25, 47];
arr.forEach(function (number) {
  console.log(number);
});
arr.forEach((number) => {
  console.log(number);
});
arr.forEach((number, i) => console.log(i, number));

//Joining an array:
//it'll convert an array to a string
const joined = arr.join(" ");
console.log(joined);
console.log(typeof joined);
//Splitting a string:
//it'll convert a string to an array
const str = "I am death";
console.log(str.split(" "));
const split = str.split(" ");
const convert = split.join("-");
console.log(convert);
//The method above is used to desclude URl empty spaces

//sort an array:
arr.sort();
console.log(arr);
//reverse an array:
arr.reverse();
console.log(arr);
//Sorting an object array:
const OBJECT = [
  { id: 1, name: "John" },
  { id: 2, name: "Max" },
];
OBJECT.sort(function (a, b) {
  let nameA = a.name.toLowerCase();
  let nameB = b.name.toLowerCase();
  //Because the comparison is using ASCII code
  //we lowercase all elements of a string
  if (nameA < nameB) {
    return -1;
  }
  if (nameB > nameA) {
    return 1;
  }
  return 0;
});
OBJECT.sort((a, b) => {
  let nameA = a.name.toLowerCase();
  let nameB = b.name.toLowerCase();
  //Because the comparison is using ASCII code
  //we lowercase all elements of a string
  if (nameA < nameB) {
    return -1;
  }
  if (nameB > nameA) {
    return 1;
  }
  return 0;
});
console.log(OBJECT);

//Testing array element:
//arr.every(function(value,index,array))
//all the arguments of the function
const allPositive = arr.every(function (value) {
  return value >= 0;
});
arr.every((value) => value >= 0);
console.log(allPositive);

const atLeastOnePositive = arr.some(function (value) {
  return value >= 0;
});
const atleastOnePositive = arr.some((value) => value >= 0);

console.log(atleastOnePositive);

//Filtering an array:
const Filtered = arr.filter(function (value) {
  return value >= 0;
});
const filtered = arr.filter((value) => value >= 0);
console.log(filtered);
console.log(Filtered);

const users = [
  { name: "JACK", age: 20 },
  { name: "JACK", age: 25 },
  { name: "JACK", age: 374 },
  { name: "JACK", age: 5356 },
  { name: "JACK", age: 55 },
  { name: "JACK", age: 85 },
  { name: "JACK", age: 55 },
  { name: "JACK", age: 28 },
];
const agenum = users.filter((user) => user.age > 20);
console.log(agenum);

//mapping an array:
//it'll apply an effect on all elements of an array:
const map = arr.map((value) => value * 2);
console.log(map);

//WebDev example:
const products = ["html", "css", "js"];
const items = products.map((product) => `<li>${product}</li>`);
console.log(items);
const html = `<ul>${items.join("")}</ul>`;
console.log(html);

//mapping a string array to an object array:
const obj7 = products.map((product) => ({ value: product }));
console.log(obj7);

//filter and map methods are chainable:
const int = [5, 65, 23, 14, -7, 0, 123];
const chain = int.filter((v) => v > 0).map((n) => ({ value: n }));
console.log(chain);

//what does the "this" do:
//a function related to an object is called a method
//the "this" inside a method points to the object itself
//method -> object
//function -> global(window,global)
//BUT
//if the function is not considered as a method (just a regular function)
//than "this" points to the JS engine global object
//if the code is running in a browser, the global object is "WINDOW"
//if the code is running in a node, the global object is "GLOBAL"

//global object in browser ---> window
// //global object in node ---> global

const video = {
  title: "a",
  play() {
    console.log(this);
  },
};

function playVideo() {
  console.log(this);
}

function Video(title) {
  this.title = title;
  console.log(this);
}

video.play();
playVideo();
const v = new Video("abc");

const Tag = {
  title: "T",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach((tag) => console.log(this.title, tag));
    this.tags.forEach(function (tag) {
      console.log(this.title, tag);
    }, this);
    this.tags.forEach(
      function (tag) {
        console.log(this, tag);
      },
      { name: "Adel" },
    );
  },
};
Tag.showTags();

//What if we couldn't do assign two parameters ?
//Hoisting:
//if you declare a function and call it before it's declared
//the js engine will set function declared above the call line
//this is known as hosting and it's exclusive to this
//Function Declaration
function walk() {
  console.log("walk");
}
walk();

//but function expression doesn't have hoisting
//Function Expression:
let run = function () {
  console.log("run");
};
let move = run;
run();
move();

//Arguments:
function sum(a, b) {
  console.log(arguments);
  let total = 0;
  for (let value of arguments) {
    total += value;
  }
  return total;
}
console.log(sum(1, 2, 3, 5, 6));
//a function is an object and we said that we can't iterate
//an object with for-of loop
//BUT
//it's more precise to say that we can iterate an object
//which has an iterator (like the function above)
//as a general rule, custom-defined objects don't have iterators

//Reduce method in arrays:
const reduce = [1, 2, 3, 4, -1];
let sum1 = reduce.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
);
console.log(sum1);

//DefaultValue Parameter assignment:
//NewWayAround:
function interest(principal, rate = 3.5, years = 5) {
  //OldFashionWay:
  //rate = rate || 2.5;
  //years = years || 5;
  return ((principal * rate) / 100) * years;
}
console.log(interest(10000));

//Getters and Setters:
//getters => access properties
//setters => change (mutate)

const person4 = {
  fname: "Adel",
  lname: "Sharifi",
  get fullName() {
    return `${person4.fname} ${person4.lname}`;
  },
  set fullName(value) {
    const pieces = value.split(" ");
    this.fname = pieces[0];
    this.lname = pieces[1];
  },
};
console.log(person4.fullName);

//Rest Operator:
function sum6(discount, ...arg) {
  console.log(arg);
  const price6 = arg.reduce((a, b) => a + b);
  return price6 * (1 - discount);
}
console.log(sum6(0.5, 1, 2, 3, 5, 6));

//Scopes:
//The scope defines when and where we can access a variable or object

const letter = "Adel";

console.log(letter);

//Var variable declaration:
var x10 = 6;
//var => function scoped
//let const => block scoped

//Try and catch:

const person9 = {
  fname: "Adel",
  lname: "Sharifi",
  get fullName() {
    return `${person9.fname} ${person9.lname}`;
  },
  set fullName(value) {
    /*if(typeof(value) !== 'string'){
      return;
    }*/
    if (typeof value !== "string") {
      throw new Error("value is not a string");
    }
    const pieces8 = value.split(" ");
    this.fname = pieces[0];
    this.lname = pieces[1];
  },
};
try {
  //...
  person9.fullName = true;
  //...
} catch (e) {
  console.log(e);
}
console.log(person9.fullName);

//use call apply bind to change "this";

//OOP FUCK:
//Concepts:
//incapsulation , abstraction , inheritance , polymorphism

//ProtoType:
//The parent to all classes and objects

//multi-layered inheritance:
//array proto uses object proto

//Object.key returns instance members

//for-in loop returns all instance and prototype properties
//Class is a constructor function
//setTimeout();
//Promise:
function ball1() {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("reach1");
    } else {
      reject("Fail1");
    }
  });
}

function ball2() {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve("reach2");
    } else {
      reject("Fail2");
    }
  });
}

function ball3() {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("reach3");
    } else {
      reject("Fail3");
    }
  });
}

ball1()
  .then((text) => {
    console.log(text);
    return ball2();
  })
  .then((text2) => {
    console.log(text2);
    return ball3();
  })
  .then((text3) => {
    console.log(text3);
  })
  .catch((err) => {
    console.log(err);
  });

//The OOP concepts are trash same as cpp so fuck off!

//async and await:The Best

async function ball_1() {
  if (true) {
    return "reach";
  } else {
    throw new Error("Fail1");
  }
}

async function ball_2() {
  if (false) {
    return "reach2";
  } else {
    throw new Error("Fail2");
  }
}

async function ball_3() {
  if (true) {
    return "reach3";
  } else {
    throw new Error("Fail3");
  }
}

console.log(ball1());

ball1()
  .then((text) => {
    console.log(text);
    return ball2();
  })
  .then((text2) => {
    console.log(text2);
    return ball3();
  })
  .then((text3) => {
    console.log(text3);
  })
  .catch((err) => {
    console.log(err);
  });

async function execute() {
  try {
    console.log(await ball1());
    console.log(await ball2());
    console.log(await ball3());
  } catch (e) {
    console.log(e);
  }
}
execute();
