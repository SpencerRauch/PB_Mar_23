// for loops

for (
    var i = 0;  // initialization -- where we declare any variables the for loop will need RUNS ONCE AT THE BEGINNING
    i < 10; // condition -- the condition that must be true for the loop to continue CHECKED AT THE BEGINNING OF EACH ITERATION
    i++ // final statement -- this runs once at the end of every loop
    ){
    console.log(i)
}

console.log(i)

i++ //these three lines 
i = i + 1 // 
i += 1 // do the same thing

for (var i = 0; i < 10; i+=2){
    console.log(i)
}

for (var i= 10; i >= 0; i--){
    console.log(i)
}

var x = 15 % 4;
console.log(x)

for (var i = 0; i < 10; i++){
    if (i % 2 === 0) {
        console.log(i)
    } else {
        // console.log("Odd")
    }
}

// == vs === 
// both are equivalency checks 

if ("10" == 10){
    console.log("true")
} else {
    console.log("false")
}

if ("10" === 10){
    console.log("true")
} else {
    console.log("false")
}

// == will attempt a type conversion
// === will only consider the current types/values

// rounding!

var num1 = 7.2
var num2 = 7.8
var num3 = -7.2
var num4 = -7.8

// Math.floor()

console.log(Math.floor(num1)) 
console.log(Math.floor(num2)) 
console.log(Math.floor(num3)) 
console.log(Math.floor(num4)) 

// Math.ceil()

console.log(Math.ceil(num1)) 
console.log(Math.ceil(num2)) 
console.log(Math.ceil(num3)) 
console.log(Math.ceil(num4)) 

// // Math.round()

console.log(Math.round(num1)) 
console.log(Math.round(num2)) 
console.log(Math.round(num3)) 
console.log(Math.round(num4)) 

// Math.trunc()

console.log(Math.trunc(num1)) 
console.log(Math.trunc(num2)) 
console.log(Math.trunc(num3)) 
console.log(Math.trunc(num4)) 

