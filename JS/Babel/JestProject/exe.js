//Automated Testing:

//1.UnitTest:
//Testing an element of your project regradless of it's external dependencies(DB,HTTP relay,Links etc.) is called a UnitTest
//Due to the fact that UnitTest will test a unit without considering its dependencies
//we have to cut all dependencies(Mocking them technically speaking)

//2.IntegrationTest:
//Opposite of UT,the IT will test the fractures of your program INCLUDING its dependencies

//3.EndtoEndTest:
//ETET is when you test an application via its UI

//The TestPyrami:
//The TP shows you that the majority of your tests will be UT,then IT,then ETET
//Because the UT is fast but unreliable
//IT is mid yet precise
//ETET is slow and time consuming yet possesing the best reliability

//UT is to test your program's logic
//IT is to test how the program handles it's dependencies
//ETET is to test the whole thing

const service = require("./service");
function gte(a, b) {
  return a >= b ? true : false;
}

function welcomeMessage(name) {
  return `Previats ${name}.this is a jest tutorial`;
}

function List() {
  return ["F14", "F15", "F16"];
}

function user() {
  return { id: 1, name: "Adel" };
}

function login(password) {
  if (password !== "1234") {
    throw new Error("invalid password");
  }
  return { token: "jhfjfbhfjkb" };
}

function calculateDiscount(id) {
  const user1 = service.userID(id);
  let discount = 0;
  if (user1.purchasecount > 3) {
    discount = 10;
  }
  service.userEmail(user1.name, `you have got ${discount} percent discount`);
  return discount;
}

module.exports = { gte, welcomeMessage, List, user, login, calculateDiscount };
