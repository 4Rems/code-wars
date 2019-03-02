/*

function shoeMaker (color, size) {
    console.log(color + " " + "size " + size + " " + "shoe")
}

shoeMaker ("blue", 9);

*/


/* 
function giveMe7 () {
    return 7;
}

var bigResult = giveMe7() + 12;

console.log(bigResult);
*/

/*
function add(num1, num2) {
    return num1 + num2;
}

I am making a change

var sum1 = add(1, 2);
var sum2 = add (sum1, 2);

console.log(sum2);
*/

/* 
function add(num1, num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

var addSubtractDivide = add (5, 1)/subtract(3, 1);

console.log(addSubtractDivide);

*/

/*
function add(num1, num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

var addSubtractDivide = subtract(add(5, 2), 3);

console.log(addSubtractDivide);

*/

// FUNCTION Witin a FUNCTION

/* 
function shoeMachineMaker(color) {
    return function () {
        return color + " " + "shoe";
    }
};

var blueShoeMaker = shoeMachineMaker("blue")

var machineB = blueShoeMaker();

console.log(machineB);
*/

/* 
function shoeModelMaker(color, laces, soles, glitter) {
    return function (size) {
        return color + " shoe with " + laces + " laces, " + soles + " soles, and " + glitter + " glitter" + " in size " + size;
    }
};

var moonJumperMaker = shoeModelMaker("magenta", "yellow", "green", "pink");

var machineB = moonJumperMaker(11);

console.log(machineB);
*/

// FUNCTION DECLARATION vs FUNCTION EXPRESSION

// FUNCTION EXPRESSION
/* 
var func1 = function (){

}
*/

// FUNCTION DECLARATION
/* 
function myFunc (){

}
*/

// making a change for testing purposes with gitHub