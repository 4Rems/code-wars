// use object to organize variables. Objects are bigger buckets to hold other buckets (or variables)
var obj = {
    num: 1,
    str: "hello world",
    "12hello": 'asdf',
}

// dot notation
console.log(obj.num)

// bracket notation
console.log(obj["12hello"])

// nesting objects withing objects
/*var iceCreamStore = {
    orders: {
        tom: {
            icecream: "vanilla"
        }
    }
}

console.log(iceCreamStore.orders.tom.icecream)

var tomsOrder = iceCreamStore.orders.tom
*/

// Arrays, like objects except have a preset order with an index. Can't use dot notation, use bracket notation
// You can have an array with any kind of datatype. Great data structure. Use when you have list of items
var arr = [1, 4, 5, 6, 7, 8, 9];
console.log(arr[0])


// An Array of objects
var won5Students = [
    {
        name: "Bob",
        email: "bob-email@email.com"
    },
    {
        name: "Jill",
        email: "jill-email@email.com"
    },
    {
        name: "Sam",
        email: "sam-email@email.com"
    },
]

// to call Jill
var Jill = won5Students[1];
console.log(Jill)
console.log(Jill.email)

// another example of objects within an object
/* var myPhone = {
    model: "Google Pixel XL",
    manufacturer: "google",
    processor: {
        model: "intel i9",
        manufacturer: "intel",
        powerLimit: "900ghz",
    },
    screen: {
        width: 12,
        height: 11,
    }
}

console.log(myPhone.processor.powerLimit)
*/

/*  var vs let and const. var is a function scope variable let and const are two new ways
to define variables within blocks such as if and for, or they are block scoped. Current standard always use const and let.
"const" won't let you change the value, "let" will let you change the value. Use "const" until you figure out that you need
to reassign it to let */

/* A function is a small machine where you input data and that data is changed in some way and spit out differently
fuction myFunc(input){
    return "something"
}

*/

// a change, how slow or fast is this?