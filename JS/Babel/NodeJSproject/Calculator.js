//this is a module:
//Module wrapper function:
// (function(exports ,require ,module, __filename, __dirname){
//   module_code
// })

function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

//a module should be exported because all the objects defined in a module are private
//thus we export what we desire from a module:

// module.exports.addition = addition;
// module.exports.subtraction = subtraction;
// module.exports.multiplication = multiplication;
// module.exports.division = division;

module.exports = {
  addition,
  subtraction,
  multiplication,
  division,
};
