//Q9. Function hoisting
// Calling the function before its declaration
//Functions are hoisted completely, meaning both their name and body are moved to the top of their scope during the compilation phase.

functionName();
function functionName(){
    console.log("Function hoisting works!");
}

var x =21;

var fun = function(){
    console.log(x);
    var x = 20;
};

fun();

//output: undefined
// Explanation: Due to variable hoisting, the declaration of x inside the function is hoisted to the top, but not its assignment. Therefore, when console.log(x) is executed, x is undefined within the function scope.

//Q10- Parameters vs Arguments

function square(num){ // num is a parameter
    console.log(num * num);
}

square(5); // 5 is the argument passed to the function

//spread vs rest operator
// Spread operator is used to expand an iterable (like an array) into individual elements.
 
// Rest operator is used to collect multiple elements into an array.

// function multiply(num1,num2){
function multiply(...nums){ // rest operator
    console.log( nums[0] * nums[1] );
}

var arr = [5,6];
// multiply(5,6);
multiply(...arr);// spread operator

const fn = (a,x,y,...always_last) =>{ // rest operator --> always_last is an array of remaining arguments because of it take all remaining arguments
    console.log(x,y);
};

//Q12 --> Callback Functions
function greet(name, callback){
    console.log("Hello " + name);
    callback();
}
function callMe(){
    console.log("I am callback function");
}
greet("Govind", callMe);

// Output:
// Hello Govind
// I am callback function

// Q13 --> Arrow Functions
// Arrow functions provide a concise syntax for writing functions using the '=>' syntax. They do not have their own 'this' context and are often used for shorter functions or as callbacks.

const add = (a, b) => {
    return a + b;
}

// difference between regular function and arrow function with this keyword
// 1.Syntax
// 2.Implicit "return " keyword in arrow function
const multiply2 = (a, b) => a * b;
//3. arguments object is not available in arrow functions
(function fn()
{
    console.log(arguments);
})(1,2,3); // output: [1,2,3]

const fn2 = () => {
    // console.log(arguments); // Error: arguments is not defined
}       
fn2(1,2,3);
//4. 'this' keyword behavior
const obj = {
    regularFunction: function() {
        console.log("'this' in regularFunction:", this);
    }
    ,
    arrowFunction: () => {
        console.log("'this' in arrowFunction:", this);
    }
};
obj.regularFunction(); // 'this' refers to obj
obj.arrowFunction(); // 'this' refers to the surrounding lexical context (not obj)



// Q14. Closures

// global scope
function local(){
    //local scope
}

//Lexical Scope

function subscribe(){
    var name  = "Govind";
    function displayName(){ // inner function --> closure
        console.log(name);
     //   alert(name);
    }
    displayName();
}

subscribe(); // output: Govind

//Clouser Scope Chain --> 

function outerFunction(outerVariable){

    return function innerFunction(innerVariable){
        console.log('Outer Variable: ' + outerVariable);
        console.log('Inner Variable: ' + innerVariable);
    }
}

var e = 10;

function sum(a){
    return function(b){
        return function(c){
            return function(d){
                return a + b + c + d + e;
            };
        };
    };
}

console.log(sum(1)(2)(3)(4)); // output: 20


// Ques of closures
let count = 0;

(function printCount(){
    if(count===0){
        let count =1;// block scope
        console.log("Count is: " + count);
    }
    // count is still 0 here
    console.log(count);
})();

//Ques2 : Write a function that would allow you to do this:

var addSix =  createBase(6);
addSix(10); // return 16
addSix(21);// return 27

function createBase(num){
    return function(inner){
        console.log(num + inner);
    };
}