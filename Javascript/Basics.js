// 1.Hoisting - It is a javascript behavior of moving declarations to the top of their scope during compilation.
console.log(a);
var a = 10;

// 2.Temporal Dead Zone (TDZ) - The time between variable creation and initialization for let and const.
// i.Entering a block scope
// ii.And the actual declaration of a let and const variable
// During this time, the variable exists in memory but cannot be accessed.
// console.log(b); // Reference Error
// const b = 5;

// variable defined with let and const are hoisted to the top of the block, but not initialized.
// Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.

/**
 * -------------------------------------------------------
 * | Feature   | var             | let       | const     |
 * | --------- | --------------- | --------- | --------- |
 * | Scope     | Function        | Block     | Block     |
 * | Hoisting  | Yes (undefined) | Yes (TDZ) | Yes (TDZ) |
 * | Reassign  | Yes             | Yes       | ❌ No     |
 * | Redeclare | Yes             | ❌ No     | ❌ No    |
 * -------------------------------------------------------
 */

// 3.Closure - A function that remembers variables from its outer scope even after the outer function has executed

function outer() {
    let count = 0;
    return function() {
        count++;
        return count;
    }
}

const result = outer();
console.log(result());

// Lexical scope means variables are accessible based on where they are written in the code, not where they are called.
// Example in the above function the count variable is accessed within the inner function.

// 4.this - It refers to the object that is currently executing the function.
// It value is decided at runtime, based on how the function is called, not where it is written.

// Global Context
console.log(this); // In browser it is window, In Node.js it is {} (module.exports)

// Function Invocation
function show() {
    console.log(this);
}
show(); // Non strict mode -> window, strict mode -> undefined

// Method Invocation
const user = {
    name: "Rizwan",
    greet() {
        console.log(this.name);
    }
};

user.greet(); // this points to the object before the dot (user)

// Arrow Functions
const obj = {
    name: "JS",
    greet: () => {
        console.log(this.name);
    }
};

obj.greet(); // undefined because the arrow functions do not have their own this, they inherts this from lexical scope

// call, apply, bind
function greet(city) {
    console.log(this.name, city);
}

greet("Chennai"); // undefined Chennai
greet.call(user, "Chennai");
greet.apply(user, ["Chennai"]);

const boundFn = greet.bind(user);
boundFn("Chennai");

// Constructor Function
function Person(name) {
    this.name = name;
}

const p1 = new Person("Rizwan");
console.log(p1.name); // this referes to the newly created object

// Event handlers (Browser)
// button.addEventListener("click", function() {
    // console.log(this); // button element
// });

// button.addEventListener("click", () => {
    // console.log(this); // window
// });

// Common Interview Trap
const obj1 = {
    name: "JS",
    greet() {
        setTimeout(function () {
            console.log(this.name);
        });
    }
};
obj1.greet(); // undefined
// How to fix: use arrow function in the setTimeout(() => {});
// this refers to the object that calls the function, and its value depends on how the function is invoked.
// Arrow functions don't have their own this.