// Question 2: setTimeout with var in for loop
function a(){
    for(var i=0;i<3;i++){
    setTimeout(function log(){
        console.log(i); // What is logged?
    },i*1000);
}
}
a(); // output: 3,3,3 after 0,1,2 seconds
//Solution: Using let instead of var
function b(){
    for(let i=0;i<3;i++){
        setTimeout(function log(){
            console.log(i); // What is logged?
        }
        ,i*1000);
    }
}
b();

//how you will do this using var only??
// use clouser
function c(){
    for(var i=0;i<3;i++){
        (function(index){
            setTimeout(function log(){
                console.log(index); // What is logged?
            },index*1000);
        })(i);
    }
}
c();