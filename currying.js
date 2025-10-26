//Currying : Function that takes multiple arguments one at a time
// Example f(a,b) into f(a)(b);
function f(a,b){
    console.log(a,b);
}

function nam(a){
     return function(b){
         return `${a} ${b}`;    
     }
}

// console.log(nam(5));// return a function 

console.log(nam(5)(8)); // output: 5 8

//why currying --> to avoid passing  same variable again and again

function sum(a){
    return function(b){
        return function(c){
            return a + b + c;
        }
    }
}
console.log(sum(2)(3)(4)); // output: 9


// Ques 5 Infite Currying
function infSum(a){
    return function(b){
        if(b){
            return infSum(a + b);
        }
        return a;
    }   
}

console.log(infSum(2)(3)(4)(5)()); // output: 14