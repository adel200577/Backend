function userID(id) {
  console.log("reading from db...");
  const userdata = [
    { id: 1, name: "Adel", purchasecount: 3 },
    { id: 2, name: "Ali", purchasecount: 5 },
    { id: 3, name: "Ahmad", purchasecount: 4 },
  ];
}

function userEmail(name, message) {
  console.log("Email sent");
}

module.exports = { userID, userEmail };
