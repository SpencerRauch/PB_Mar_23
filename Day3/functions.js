// Let's talk functions! 

// directions/instructions just waiting to be called

// a reusable block of code! It may take an input, it will send something back -- can be called as many times as we want

//call / invoke --- we just mean run the function

function myFirstFunction(/*parameters go here*/){
    console.log("Hello from my first function!")
    return [1,2,3,4,5,6]
}

// myFirstFunction(/*argument list*/)
// myFirstFunction(/*argument list*/)
// myFirstFunction(/*argument list*/)
// myFirstFunction(/*argument list*/)
// console.log(myFirstFunction(/*argument list*/))

var myAwesomeArray = myFirstFunction();

console.log(myAwesomeArray)
// how do we get information OUT of a function? 
// a function call is REPLACED by the functions return

function countDown(countDownFrom, countDownTo){
    var countDownArray = []
    for (var i = countDownFrom; i >= countDownTo; i--){
        console.log(i)
        countDownArray.push(i)
    }
    return countDownArray
}

var result = countDown(30,20);
console.log(result)

//parameters let us give our function input! the raw values we give our parameters are called arguments




