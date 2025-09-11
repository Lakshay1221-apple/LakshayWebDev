// console.log("Hello, World!");
 
// // This is a simple JavaScript file that logs "Hello, World!" to the console.


// let name = "Lakshay Raj"; // Variable declaration and initialization, name can not be a reserved keyword, name should not start with a number, name can contain letters, digits, underscores, and dollar signs
// console.log(name); // Output: undefined , Js variables are case sensitive


// let firstName = "Lakshay"; // Variable declaration and initialization
// let lastName = "Raj"; // Variable declaration and initialization


// let intrestRate = 0.3; // Variable declaration and initialization
// intrestRate = 1; // Variable reassignment , Dynamic typing, only _ ,letter and & can be first character
// console.log(intrestRate); // Output: 1



// const birthYear = 2004; // Constant variable declaration and initialization
// // birthYear = 2005; // Error: Assignment to constant variable
// console.log(birthYear); // Output: 2004



// // Primitives (value types) - stored in stack memory ex: strigs, numbers, booleans, undefined, null

// // Data Type
// let name1 =  "John"; // String 
// let age = 30; // Number
// let isApproved = true; // Boolean type value can be either true or false
// let isUnApproved = false; // Boolean false value
// let lastName1 = null; // Null , if we want to clear the value of a variable we can set it to null
// let firstName1 = undefined; // Undefined  
// let bigInt = 123456789012345678901234567890
// let symbol = Symbol("a unique symbol"); // Symbol type

 
// // Reference types - stored in heap memory ex: objects, arrays, functions

// // let name2 = "mosh" // String type independent of object
// // let age1 = 30; // Number type independent of object

// // Object type, collection of values , decleared under curly brackets

// const person = {   // const object names can be changed
//     name2: "mosh",
//     age1: 30
// };

// console.log(person["name2"]);
// person["name2"] = "Lakshay";
// console.log(person["name2"]);





// // Dot notation

// person.name2 = "Jhon"; // Object property value update


// // Bracket notation

// person["name2"] = "Marry"; // Object property value update

// console.log(person.name2); // Output: Jhon


// // Arrays

// let selectedColors = ["red", "blue"]; // Array declaration and initialization
// console.log(selectedColors);
// console.log(selectedColors[0]); // Output: red
// console.log(selectedColors[1]); // Output: blue
// selectedColors[2] = "green"; // Array element addition
// console.log(selectedColors.length); // Output: 3
// console.log(selectedColors); // Output: ["red", "blue", "green"]



// // Functions
// // Types of Functtions

// // 1st Performing a task 

// function greet(name, lastname) {
//     console.log("Hello" + " " + name + " " + lastname)
// }

// greet("Lakshay", "Raj"); // Function call with arguments

// // 2nd Calculating a value

// function square(number) {
//     return number * number; // Return statement
// }
// console.log(square(2)); // Output: 4  // Function call with argument



// // Variable scope----------------

// // Global scope (we dont need to use var part of ES5, let or const to declare a global variable which are part of ES6)
// var globalVar = "I am a global variable"; // Global variable

// // Local scope
// let localVar = "I am a local variable"; // Local variable(block scope)

// // Constant Scope
// const age5  = 25; // Constant variable, the value of a constant can not be changed now




// // BLOCKS
// // Every curly bracket create a new block
// { 
//     let a = 5;
//     console.log(a); // Output: 5

// }

// {
//     let a = 10;
//     console.log(a); // Output: 10

// }

// // Operators in JS------------------------

// // Arithmetic Operators

// let a = 10;
// let b = 2;
// console.log("a = ",a, "& b = ", b);
// console.log("a + b = ", a + b); // Output: 12
// console.log("a - b = ", a - b)
// console.log("a * b = ", a * b)
// console.log("a / b = ", a / b)
// console.log("a % b = ", a % b)
// console.log("a ** b = ", a ** b)

// // Unary operator

// a = a + 1;
// console.log(a);
// a++;
// console.log(a);
// a--;
// console.log(a);

// // Assignment Operators

// a += 1;
// console.log(a);

// a -= 1;
// console.log(a);

// a *= 2;
// console.log(a);

// a /= 2;
// console.log(a);

// a %= 2;
// console.log(a);

// // Comparison Opertor

// let num1 = 2;
// let num2 = 2;
// console.log(num1 == num2); // Output: true
// console.log(num1 === num2); // Output: true , value and type
// console.log(num1 != num2); // Output: false
// console.log(num1 !== num2); // Output: false, value and type
// console.log(num1 > num2); // Output: false
// console.log(num1 < num2); // Output: false
// console.log(num1 >= num2); // Output: true
// console.log(num1 <= num2); // Output: true 


// // Conditional Statements

// // if statement
// let age3 = 25;

// if (age3 >= 18) {
//     console.log("You are an adult");
// }

// // if - else Statement
// let mode  = "dark";

// if (mode = "dark") {
//     color = "black"
// } else {
//     color = "white"
// }

// console.log(color); 


// // else - if  statement

// age4 = 67;

// if (age  < 18){
//     console.log("junior")
// } else if (age > 60){
//     console.log("senior")
// } else{
//     console.log("super senior")
// }

// // Ternary Operator (for short conditions(compact))

// // Condition  age > 18 ? "adult" : "not adult";

// let age6 = 25

// age6 > 18 ? console.log("adult") : console.log("not adult"); // Output: adult

// // Loops in JS

// // FOR LOOPS

// for (let i = 1; i <= 5; i++){
//     console.log("Lakshay");
// }

// for(let count = 1; count <= 5; count++){
//     console.log(count);
// []
// };

// let sum = 0;
// for (let i3 = 1; i3 <= 5; i3++){
//     sum = sum  + i3;
// }
// console.log("sum = ",sum); // Output: 15 
// console.log("loop has ended");

// // INFINITE LOOP (NEVER DO)

// // for (let i = 1; i <= 5; i++){
// //     console.log("Lakshay");

// // }

// // WHILE LOOP

// let i2 = 1; // condition checked at first 
// while (i2 <= 5){
//     console.log("Lakshay");
//     i2++;
// }

// // DO WHILE LOOP

// let i1 = 20;
// do {
//     console.log("Lakshay");
//     i1++;
// } while (i1 <= 5);  // condition checked at last 

// // FOR-OF LOOP (used for string and arrays)

// let str = "lakshay";
// for (let char of str){
//     console.log(char);
// }


// // FOR-IN LOOP (used for objects)

// let me = {
//     nam: "Lucky",
//     occu: "student",
//     cgpa: 7.8,
//     isPass: true,
// };

// for (let key in me){
//     console.log("key = ",key, "value = ", me[key]);
// }


// STRING IN JS --------- (immutable)

// let str = "Lakshay Raj";
// console.log(str.length); // Output: 10"

// // String indexing

// console.log(str[0]); // Output: L
// console.log(str[1]); // Output: a)

// // TEMPLATE LITERALS (special kind of string)   expression embedded 

// let obj = {
//     item: "pen",
//     price: 10,
// };

// let output  = `the cost of ${obj.item} is ${obj.price} rupees`; // Template literal with inter colations
// console.log(output);

// let special_string = `This is a template literal ${1 + 2 + 3}`;
// console.log(special_string)


// console.log("The cost if", obj.item, "is", obj.price, "rupees")

// let sentence = "this is a temlate literal";
// console.log(sentence);

// // Next line chr

// console.log("hey \nhow are you")



// STRING METHODS

// let str = "Apna Colleage"

// console.log(str.length); // Output: 13
// console.log(str.toUpperCase()); // Output: APNA COLLEAGE
// console.log(str.toLowerCase()); // Output: apna college
// console.log(str.trim()) // remove spaces from starting and end of the str

// // STRING SLICING

// let str1 = "Lakshay"
// console.log(str1.slice(0, 3));// the last index i.e 3, is non inclusive


// console.log(str.concat(str1)); // adds two strings 

// console.log(str1.replace("a", "A")) // replace the value of first by second ,relaceall does with all the matching value




// ARRAYS IN JS (collection of item, mutable) prefered of same type

// let heroes = ['ironman', 'thor', 'caption america'];
// console.log(heroes);
// console.log(heroes.length)

// console.log(typeof heroes)
// console.log(heroes[0])


// // Loopin over an array

// let heroes = ['ironman', 'thor', 'caption america'];
// for(let chr of heroes){ // for-of loop generally used
//     // console.log(chr);
//     console.log(chr.toUpperCase());
// };
 

// for(let i = 0; i < 4; i++){ // for loop
//     console.log(heroes[i]);
   
// }

// ARRAY METHOD

// PUSH METHOD

// let foodItems = ["potato", "apple", "litchi", "banana"];
// console.log(foodItems);

// foodItems.push("tomato"); //adds the new item in the ending
// console.log(foodItems)
// // POP METHOD
// D = foodItems.pop(); //remove the last item
// console.log(D) // prints the deleted item
// console.log(foodItems)

// // TO STRING METHOD
// console.log(foodItems.toString()) // convert the arrays value to string

// // CONCAT METHOD (adds to arrays)
// let junk = ["chips", "maggie", "biscuits"]
// console.log(foodItems.concat(junk))

// // UNSHIFT METHOD / SHIFT
// foodItems.unshift("rice") //  add a element in the starting
// console.log(foodItems)

// foodItems.shift() // delete the first element in the string
// console.log(foodItems)

// SLICE/ SPLICE

// SLICE, just like in strings, but does not change the original arrays

// console.log(foodItems.slice(1, 4))

// // SPLICE, change the original array, add/remove/replace

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // delete and replace items 
// arr.splice(2, 2, 101, 102);
// console.log(arr);


// FUNCTIONS IN JAVA SCRIPT (block of code does a specific task)

// function myFunction() {
//     console.log("Welcome to JS");
//     console.log("We are learning JS");
// }

// myFunction();



// function myname(msg) { // argument
//     console.log(msg);    
// }

// myname("Lakshay Raj");



// function mysum(num1, num2) { // argument num1 and num2 act as the local variables for this function
//     // console.log(`${num1} + ${num2} = ${num1 + num2}`);
//     return num1 + num2; // if you used return statement in the function then any thing writte after that return statement wont be executed
// }

// console.log("10 + 20 =", mysum(10, 20));

//  ARROW FUNCTION( => )

// function sum(a, b){ // normal version
//     return a + b;
// }; 

// Arrow version (introduced in modern JS)

// const arrowSum = (a, b) => { // function stored inside a variable
//     console.log(a + b)
// }

// arrowSum(10, 20);
 


// function multi(a, b){
//     return a * b;
// }
 

// FOR EACH FUNCTION (only for ARRS) for Each is itself a loop which does the operation at each val of arr
 
// let arr = ["apple", "banana", "orange"];

// arr.forEach(function printVal(val, idx, arr) { // forEach function is a higher order function, HOF are those which take other functions as parameters or return other functions
//     console.log(val.toUpperCase(), idx, arr);

// })


// MAP METHOD(FOR ARRAS ONLY) map method copies a array aplies opr to it and make a new array

// let nums = [67, 52, 39]

// let newArr  = nums.map((val) => {
//     return val;
// });

// console.log(newArr);


// FILTER METHOD (ARRAYS ONLY) it filters the val of array on basics of a given codn


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let newARR = arr.filter((val) => {
//     return val % 2 == 0;
     
// })
// console.log("The original values are", arr)
// console.log("The even values are", newARR)


// REDUCE METHOD (ONLY FOR ARRAYS) takes a array , does opr and gives a single val

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// let newArr = arr.reduce((res, curr) => {
//     return res + curr;
// });

// console.log(newArr);



//  DOM SELECTOR different ways to select html elements for Js


// let headings = document.getElementsByClassName("heading-class");
// console.dir(headings);
// console.log(headings);

// let heading = document.getElementById("heading");
// console.dir(heading);
// console.log(heading);

// let paras = document.getElementsByTagName("p");
// console.dir(paras);
// console.log(paras);


// // QUERY SELECTOR  (id, tag and class all three could be pass in this and it will auto detect)

// let firstelement = document.querySelector("p");
// console.dir(firstelement);

// let allEl = document.querySelectorAll("p");
// console.dir(allEl)

// Dom manipulation

// let div = document.querySelector("div");
// console.dir(div);


// DOM MANIPULATION (ATTR)

// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id)


// let name = div.getAttribute("name");
// console.log(name);

// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));


// DOM INSERT ELEMENTS

// let newBtn = document.createElement("button");
// newBtn.innerText = "Click me";

// console.log(newBtn)

//Append (adds element in the end)

// let div = document.querySelector("div");
// div.appendChild(newBtn);


//PREPEND  (adds element in the start)


// let div = document.querySelector("div");
// div.prepend(newBtn);


// let Newheading = document.createElement("h1")
// Newheading.innerHTML = "<i>hi, i am lakshay</i>"
// document.querySelector("body").prepend(Newheading)

// // Remove

// let para = document.querySelector("p");
// para.remove();



// EVENTS IN JS , change the state of an object is called event , used to triger a work, user interaction

// let btn = document.querySelector("#btn1");

// btn1.onclick = () => { // as we used onclick event for this tag , cant be used in the same tag again
//     console.log("btn1 was clicked");
//     let a = 25;
//     a++;
//     console.log(a);
// };


// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);

// }

// let div = document.querySelector("div");

// div.onmouseover = () => {
//     console.log("you are insdie div");
    
// }


// EVENT LISTENERS  for one event multiple listeners could be created

// let btn1 = document.querySelector("#btn1");

// btn1.addEventListener("click", (evt) => { // evt contains all the event details 
//     console.log("btn1 was clicked handler-1");
//     console.log(evt);
//     console.log(evt.type);
// });


// btn1.addEventListener("click", () => {
//     console.log("btn1 was clicked handler-2");
// });

// const handler3 = () => {
//     console.log("btn1 was clicked handler-3");
// };


// btn1.addEventListener("click", handler3); 


// btn1.addEventListener("click", () => {
//     console.log("btn1 was clicked handler-4");
// });


// btn1.removeEventListener("click", handler3); // to remove a function, first use need to add the function to a variable