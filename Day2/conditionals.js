// Let's talk conditionals! 
/*
if (condition) {    
    // what to do if condition is true
    // this can be many lines
}
else if (2nd condition) { // can have 0 to many of these statements    
    // what to do if 2nd condition is true
}
else {  // can have 0 or 1 of these statements    
    // what to do if none of the previous conditions are met
}

*/

// operators for use in conditionals

// ==  equivalency check

if (x == 5){
    console.log("X is 5")
}



// > greater than 
// < lesser than 
else if (x > 5){
    console.log("X is larger than 5")
}
// >= greater than or equal to
// <= lesser than or equal to

// => not the way to write a conditional

// != not equal

var x = 100;
if (x != 100){
    console.log("X is not 100")
} else {
    console.log("the else statement")
}


// T Diagram Code Below

var num1 = 20;
var num2 = 5;
if (num1 < num2) {
    num2 = num2 * num1;
} else {
    num1 = num1 / num2;
    if (num1 < num2){
        num1 = num1 * 2;
    } else if (num1 == num2){
        num2 = num1 * num2;
    } else {
        num2 = num2 * 2;
    }
}
console.log(num1);
console.log(num2);



