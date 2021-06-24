/**
 * Secret of Hoisting: 
 * - All the declaration with var (var a, var a = ...) are always be hoisted the left side (var a) to the top of the scope
 * - If the variable is declared with no var (c = 1) in scope, it will be hoisted and (declared + assign value) in global scope
 */

/**
 * Question 1:
 */

var variable = 10;
(() => {
  console.log(variable);
  var variable = 20;
  console.log(variable);
})();

/**
 * undefined 20
 */

/**
 * Question 2:
 */

var variable = 10;
(() => {
  console.log(variable); // undefined
  variable = 20;
  console.log(variable); // 20
})();
var variable = 30;
console.log(variable);

/**
 * 10 20 30
 */

/**
 * Question 3:
 */

var variable = 10;
(() => {
  variable_3 = 35;
  console.log(variable_3);
  var variable_3 = 45;
  variable_2 = 15;
  console.log(variable); // 20
})();

console.log(variable_2);
console.log(variable_3);
var variable = 30;

/**
 * 35 10 15 error
 */

