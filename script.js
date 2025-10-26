// Q1. What is Function Declaration?
// Function Declaration is a way to define a function using the 'function' keyword followed by the function name and parentheses. It is hoisted, meaning it can be called before its definition in the code.

function square(num){
     return (num*num);
}

//Q2 What is Function Expression?

const square2 = function(num){
    console.log(num*num);
}

// it can also be called as normal function is called
square2(5);
//output: 25    

// Q3 what are first class functions?
// First class functions means that functions are treated as first-class citizens in a programming language. This means that functions can be assigned to variables, passed as arguments to other functions, and returned from other functions.


function displaySquare(fn){
       console.log("Sqaure is:" + fn(6));
}

displaySquare(square);

//output : Sqaure is:36

//Q4. What is IIFE(Immediately Invoked Function Expression)?

(function(){
    console.log("IIFE executed");
})();
// OR
(function text(text){
        console.log("test no is: "+ text);
 })(9);

 //output: test no is: 9
// OR What is output:
(
 function(x){
    return (function(y){
        console.log(x);
    })(2)
 })(1);
 // output: 1

 //Q6. Function Scope
    function funcScope(){
        var a = 10;
        console.log(a);
    }
    funcScope();
    // console.log(a); // Error: a is not defined
    // output: 10
// Q7. Block Scope
    {
        let b = 20;
        console.log(b);
    }
    // console.log(b); // Error: b is not defined
    // output: 20
// Q8. Lexical Scope
    function outerFunction(){
        let outerVar = 'I am outside!';

        function innerFunction(){
            console.log(outerVar);
        }
        innerFunction();
    }

    outerFunction();
    // output: I am outside!
// Q9. Closure
    function makeCounter() {
        let count = 0;
        return function() {
            count++;
            return count;
        }

    }

    const counter = makeCounter();
    console.log(counter()); // Output: 1
    console.log(counter()); // Output: 2
    console.log(counter()); // Output: 3



//Q10. Function Scoped output based questions
for(var i=0;i<5;i++){
    setTimeout(function(){
        console.log(i);
    },i*1000);
}
//output: 5 printed 5 times after every second

//why??
// Because 'var' is function-scoped, the variable 'i' is shared across all iterations of the loop. By the time the setTimeout callbacks execute, the loop has completed and 'i' has the value 5.

for(let i=0;i<5;i++){
    setTimeout(function(){
        console.log(i);
    },i*1000);
}
//output: 0 1 2 3 4 printed after every second




