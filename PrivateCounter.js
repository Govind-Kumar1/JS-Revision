//Ques5. How would you use a clouser to create a private counter?

function counter(){
     var _counter = 0; //  convention
     function add(inc){
         _counter+=inc;
     }

     function retrive(){
        return "Counter value: " + _counter;
     }

     return {
        add,
        retrive
     };

}

const c = counter();
c.add(5);
c.add(10);
 console.log( c.retrive()); // output: Counter value: 15


 //Ques 6. What is Module Pattern? How can you implement it using closures?
     
 var Module = ((function(){
    function privateMethod(){
  // do something
  console.log("This is private method");
    }
    return {
        publicMethod:function(){
            console.log("This is public method");
            // can call privateMethod();
            privateMethod();
        },
    }
 }))();

 Module.publicMethod(); // output: This is public method
 //Module.privateMethod(); // Error: privateMethod is not defined  

 // Ques8 . Once Polyfill

function once(fn, context) {
    let ran = false;
    let result;

    return function(){
        if(fn){
            ran = fn.apply(context || this, arguments);
            fn = null;
        }
        return ran;
    };

};

const hello = once((a,b)=> console.log("Hello " + (a+b)));

hello(3,4);
hello(5,6);
