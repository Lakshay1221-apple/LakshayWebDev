
const btn = document.getElementById("mode");

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode"); 

    if (document.body.classList.contains("dark-mode")) {
        btn.innerText = "Light mode";
        // It's better to handle styling in a separate CSS file.
        // Example CSS:
        // body.dark-mode { background-color: black; color: white; }
        // body.dark-mode button { background-color: white; color: black; }
        console.log("Enabled dark mode");
    } else {
        btn.innerText = "Dark mode";
        // Styles for light mode should be the default in your CSS.
        console.log("Enabled light mode");
    }
});
 
// String, Number, and Boolean Variables
const firstName = "Lakshay";
const favouriteFood = "Pizza";
const email = "your@gmail.com";
const isOnline = false;
const isForSale = false;
let student = 10;

console.log(`My name is ${firstName}. My favourite food is ${favouriteFood}. My email is ${email}.`);
console.log(`I am a student: ${student}. I am online: ${isOnline}. This item is for sale: ${isForSale}.`);

document.getElementById("text").innerText = `My name is ${firstName}. My favourite food is ${favouriteFood}. My email is ${email}. I am a student: ${student}. I am online: ${isOnline}. This item is for sale: ${isForSale}.`;

student += 1;
console.log(student);
console.log(typeof student);

// Dynamically Creating and Styling an HTML Element
const newParagraph = document.createElement('p');
newParagraph.textContent = `I study in a class of ${student} students.`;

newParagraph.style.fontSize = '20px';
newParagraph.style.fontWeight = 'bold';
newParagraph.style.color = 'red';

const parentContainer = document.getElementById('cont');
parentContainer.appendChild(newParagraph);

// Handling User Input from a Form
let username;

document.getElementById("mysubmit").onclick = () => {
    username = document.getElementById("mytext").value;
    alert(`Hello ${username}, welcome to my website!`);
    document.getElementById("title").innerText = `${username}'s Website`;
}

// Circle Circumference Calculator with Unique ID
const PI = 3.14; 
let radius;
let circumference;

document.getElementById("mySubmit1").onclick = () => {
    radius = document.getElementById("myText2").value; // Corrected ID
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("demo").innerText = `The circumference is ${circumference}`;
}

// Random Number Generator
const myButton = document.getElementById('myButton');
const myLabel = document.getElementById('myLabel');

const min = 1;
const max = 6;

myButton.onclick = () => {
    const randomNumber = Math.floor(Math.random() * max) + min;
    myLabel.innerText = `You rolled a ${randomNumber}`;
}

// IF-ELSE IF-ELSE Statement
let age = 101;

if (age >= 100){
    console.log("you are old enough to enter this site");
}
else if (age >= 18){
    console.log("You are an adult");
}
else if (age < 0){
    console.log("You haven't been born yet");
}
else{
    console.log("you must be 18+ to enter the site");
}

// Checkbox and Radio Button Logic
const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit2 = document.getElementById("mySubmit2");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit2.onclick = () => {
    const isSubscribed = myCheckBox.checked;
    if (isSubscribed) {
        subResult.innerText = "You have subscribed to our newsletter";
    } else {
        subResult.innerText = "You have not subscribed to our newsletter";
    }

    if (visaBtn.checked) {
        paymentResult.innerText = "You have selected Visa as your payment method";
    } else if (masterCardBtn.checked){
        paymentResult.innerText = "You have selected Master Card as your payment method";
    } else if (payPalBtn.checked){
        paymentResult.innerText = "You have selected PayPal as your payment method";
    }
    else {
        paymentResult.innerText = "You have not selected any payment method";
    }
}

// Ternary Operator
let age2 = 21;
const message = age2 >= 18 ? "you're an adult" : "you are a minor";
console.log(message);

// Switch Statement with 'break'
let day1 = 1;

switch(day1){
    case 1:
        console.log("Monday");
        break; // Added break
    case 2:
        console.log("Tuesday");
        break; // Added break
    case 3:
        console.log("Wednesday");
        break; // Added break
    case 4:
        console.log("Thursday");
        break; // Added break
    case 5:
        console.log("Friday");
        break; // Added break
    case 6:
        console.log("Saturday");
        break; // Added break
    case 7:
        console.log("Sunday");
        break; // Added break
    default:
        console.log(`${day1} is not a day`);
}

// String Slicing
const fullName = "Lakshay raj";

const firstName1 = fullName.slice(0, fullName.indexOf(" "));
const lastName1 = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName1);
console.log(lastName1);

// Method Chaining
// let username3 = window.prompt("Enter your username: ");
// console.log("Original username: " + username3);

// username3 = username3.trim();
// console.log("After trim(): " + username3);

// let letter = username3.charAt(0);  
// letter = letter.toUpperCase();
// console.log("Capitalized first letter: " + letter);

// let extraChars = username3.slice(1);
// extraChars = extraChars.toLowerCase();
// console.log("Remaining characters (lowercase): " + extraChars);

// username3 = letter + extraChars;

// console.log("Final formatted username: " + username3);

// While Loop for User Login


// let loggedIn = false;
// let username4;  
// let password;

// while(!loggedIn){
//     username4 = window.prompt("Enter your username: ");
//     password =  window.prompt('Enter your password: '); 

//     if(username4 === "myUsername" && password === "myPassword"){
//         loggedIn = true;
//         console.log("you are logged in");
//     }
//     else{
//         console.log("invalid try again");
//     }
// }

//  FOR LOOP

// for( let i = 0; i <= 10; i++){
//     console.log(i);

// }

// Number guessing game

// let secretNumber = Math.floor(Math.random() * 10) + 1;
// let userGuess;
// const maxAttempts = 3;

// for (let i = 1; i <= maxAttempts; i++) {
//     // userGuess = window.prompt(`Attempt ${i} of ${maxAttempts}. Guess a number between 1 and 10:`);  
 
//     if (userGuess == secretNumber) {
//         console.log(`Correct! You guessed the number ${secretNumber} in ${i} attempts.`);
//         break;
//     } else {
//         console.log("Wrong guess. Try again.");
//     }
    
//     if (i === maxAttempts) {
//         console.log(`Sorry, you've run out of attempts. The number was ${secretNumber}.`);
//     }
// }

// FUNCTION IN js 

// function happyBirthday(name, age){
//     console.log(`Happy Birthday ${name}! You are now ${age} years old!`);   
// }

// happyBirthday("lakshay", 19);

// function isValidEmail(email){

//     if(email.includes("@")){
//         return true;
//     }
//     else{
//         return false;
//     }
    
// }

// console.log(isValidEmail("la@fake.com"))

// // Temperature Converter
// const textBox = document.getElementById("textBox");
// const toFahrenheit = document.getElementById("toFahrenheit");
// const toCelsius = document.getElementById("toCelsius");
// const result = document.getElementById("result");

// function convert() {
//   const temp = Number(textBox.value);

//   if (isNaN(temp)) {
//     result.textContent = "Please enter a valid number.";
//     return;
//   }

//   if (toFahrenheit.checked) {
//     result.textContent = ((temp * 9 / 5) + 32).toFixed(2) + " °F";
//   } else if (toCelsius.checked) {
//     result.textContent = ((temp - 32) * 5 / 9).toFixed(2) + " °C";
//   } else {
//     result.textContent = "Please select a unit before converting.";
//   }
// } 


// // SPREAD OPERATOR IN js

// let fruits = ["apple", "banana", "orange"];
// let vegetables = ["carrots", "celery", "potatoes"]

// const foods = [...fruits, ...vegetables, "grapes", "kiwi"]

// console.log(foods);


// //  RANDOM PASSWORD GENERATOR

// function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {

//     const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
//     const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const numberChars = "0123456789";
//     const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

//     let allowedChars = "";
//     let password = "";

//     allowedChars += includeLowercase ? lowercaseChars : "";
//     allowedChars += includeUppercase ? uppercaseChars : "";
//     allowedChars += includeNumbers ? numberChars : "";
//     allowedChars += includeSymbols ? symbolChars : "";

//     // Validation
//     if (length <= 0) {
//         return "(password length must be at least 1)";
//     }

//     if (allowedChars.length === 0) {
//         return "(at least 1 set of character needs to be selected)";
//     }

//     // Generate password
//     for (let i = 0; i < length; i++) {
//         const randomIndex = Math.floor(Math.random() * allowedChars.length);
//         password += allowedChars[randomIndex];
//     }

//     return password;
// }

// // Parameters
// const passwordLength = 12;
// const includeLowercase = true;
// const includeUppercase = true;
// const includeNumbers = true;
// const includeSymbols = true;

// // Generate password
// const generatedPassword = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);

// console.log(`Generated password: ${generatedPassword}`);


//   CALL BACK IN js  = function that is passed as an argument to another function

// hello(wait);


// function hello(callback){
//     console.log("hello!");
//     callback();
// }

// function wait(){
//     console.log('wait!')
// }

// function leave(){
//     console.log('Leave!')
// }

// function goodbye(){
//     console.log("GoodBye!");
// }


// sum(displayConsole ,1 ,2);

// function sum(callback, x, y){
//     let result =  x + y;
//     callback(result);
// }

// function displayConsole(result){
//     console.log(result);
// }

// function displayPage(result){
//     document.getElementById("myH1").textContent = result;
// }



//  FOR EACH METHOD : USED TO IRRATE OVER THE ARRAY

// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach(display);
// numbers.forEach(double);


// function double(element, index, array){
//     array[index] = element * 2;


// }

// function display(element){
//     console.log(element);
// }

// let fruits = ["apple", "bananna", "orange", "mango"]


// fruits.forEach(lowerCase);
// fruits.forEach(display);

// function upperCase(element, index, array){
//     array[index] = element.toUpperCase();

// }


// function lowerCase(element, index, array){
//     array[index] = element.toLowerCase();

// }


// function capitalize(element, index, array){
//     array[index] = element.charAt(0).toUpperCase() + element.slice(1);

// }


// function display(element){
//     console.log(element);
// }


// MAP = ACCEPT A CALLBACK AND APPLIES THEAT FUNCTION, just like for each but just cretes a new element 


// const numbers  = [1 , 2, 3, 4, 5];
// const squares = numbers.map(square);
// const cubes = numbers.map(cube);

// console.log(cubes);

// function square(element){
//     return Math.pow(element, 2);
// }

// function cube(element){
//     return Math.pow(element, 3);

// }


// const students = ["sppoendog", "ptrick", "james", "robert"]

// const studentsUpper = students.map(upperCase);
// const studentsLower = students.map(lowerCase);
// console.log(studentsUpper)

// function upperCase(element){
//     return element.toUpperCase()
// }

// function lowerCase(element){
//     return element.toLowerCase()
// }


// const dates = ["2024-1-10", "2025-2-20", "2026-3-30"]
// const formattedDates = dates.map(formatDates);
// console.log(formatDates);

// function formatDates(element){
//     const parts = element.split("-");
//     return `${parts[1]}/${parts[2]}/${parts[0]}`

// }


//  FILTER METHOD FILTERS THE ELEMENTS OF ARRAY AND CREATE NEW ELEMENT

// let numebers = [1,2,3,4,5,6,7];
// let evenNums = numebers.filter(isEven);
// let oddNums = numebers.filter(isOdd);

// console.log(evenNums)
// console.log(oddNums);

// function isEven(element){
//     return element % 2 === 0;
// }

// function isOdd(element){
//     return element % 2 !== 0;
// }


// REDUCE = REDUCE THE ELEMENT OF ARRAY INTO SIGLE VALUE

// const grades = [75, 50, 90, 80, 65, 95];

// const maximum = grades.reduce(getMax);
// const minimum = grades.reduce(getMin);

// console.log(maximum);
// console.log(minimum);

// function getMax(accumulator, element){
//     return Math.max(accumulator, element);
// }

// function getMin(accumulator, element){
//     return Math.min(accumulator, element)
// }


// ARROW FUNCTION : SIMPLE WAY TO WRITE AN FUNCTION


// const hello = (name) => console.log(`Hello ${name}!`);

// hello("Lakshay");


// const numebers = [1, 2, 3, 4, 5];


// const numSqr = (element) => Math.pow(element, 2);

// const squares = numebers.map(numSqr);

// console.log(squares); 

// OBJECTS IN JS

// const person1 = {
//     firstName: "Spongsbob",
//     lastName: "SquarePants",
//     age: 30,
//     isEmployed: true,
//     sayHello: function(){console.log("Hi! I am Spongebob")},
//     sayBye: function(){console.log("GoodBye")}
// }

// const person2 = {
//     firstName: "Pattrick",
//     lastName: "Star",
//     age: 30,
//     isEmployed: true,
//     sayHello: function(){console.log(`Hi i am this${this.fistName}`)},
//     sayBye: function(){console.log("GoodBye")}
// }

// console.log(person1.firstName);
// console.log(person1.lastName);
// console.log(person1.age);
// console.log(person1.isEmployed)


// CONSTRUCTOR = SPECIAL METHOD FOR  CREATING OBBJECTS

// function Car(make, model, year, color){
//     this.make = make, 
//     this.model = model;
//     this.year = year;
//     this.color = color;
//     this.drive = function(){console.log(`You Drive the ${this.model}`)}
// }


// const car1 = new Car("Toyota", "Camry", 2022, "Blue");
// console.log(car1.make);
// console.log(car1.model);
// console.log(car1.year);
// console.log(car1.color);


//  CLASSES IN JS : MORE STRUCTURE AND CLEANER WAY TO WORK WITH OBJECTS

// function Product(name, price){

//     this.name = name;
//     this.price = price;

//     this.displayProduct = function(){
//         console.log(`Product: ${this.name}`);
//         console.log(`Price:$${this.price.toFixed(2)}`);

//     };

//     this.calculateTotal = function(salesTax){
//         return this.price + (this.price * salesTax)
//     }

// }

// const salesTax = 0.05;

// const product1 = new Product("Shirt", 19.99);
// const product2 = new Product("Pants", 22.99);
// const product3 = new Product("Underware", 100.99);

// product1.displayProduct();

// const totalPrice = product1.calculateTotal(salesTax);

// console.log(`Total price (with tax): $${totalPrice.toFixed(2)}`)


// STATIC KEYWORD = DEFINES METHODS FOR A CLASS

// class MathUtil{
//     static PI = 3.14159;

//     static getDiameter(radius){
//         return radius* 2;
//     }

//     static getCicumference(radius){
//         return 2 * this.PI * radius;
//     }

//     static getArea(radius){
//         return this.PI * radius * radius;
//     }
// }

// console.log(MathUtil.PI);
// console.log(MathUtil.getDiameter(10));


// INHERITANCE = ALLOWS TO CALL METHODS FROM DIFFERENT CLASS

// class Animal{
//     constructor() {
//         this.alive = true;
//     }

//     eat(){
//         console.log(`This ${this.name} is eating`);

//     }

//     sleep(){
//         console.log(`This ${this.name} is sleeping`)
//     }

// }

// class Rabbit extends Animal{
//     name = "Rabbit";
// }


// class Fish extends Animal{
//     name = "Fish";
// }


// class Hawk extends Animal{
//     constructor(name, age, runSpeed){
//         this.name = name;
//         this.age = age;
//         this.runSpeed = runSpeed;
//     }

    
// }

// const rabbit = new Rabbit();
// const fish = new Fish();
// const hawk = new Hawk();

// console.log(rabbit.alive);
// rabbit.eat();
// rabbit.sleep();


// GETTER = MAKE A PROPERTY set  Readable
// SETTER = MAKE A PROPERTY WRITEBLE

// class Reactangle{
//     constructor(width, height){
//         this.width = width;
//         this.height = height;
//     }

//     set width(newWidth){
//         if(newWidth > 0){
//             this._width = newWidth;
//         }
//         else{
//             console.error("Width must be greater than 0");
//         }
    
//     }

//     set height(newHeight){
//         if(newHeight > 0){
//             this._height = newHeight;
//         }
//         else{
//             console.error("Height must be greater than 0");
//         }
//     }

//     get width(){
//         return this._width;
//     }

//     get height(){
//         return this._height;
//     }

//     get area(){
//         return (this._width * this._height).toFixed(1);
//     }
// }


// const rectangle = new Reactangle(3, 4);

// rectangle.width  = 5;
// rectangle.height = 6;

// console.log(rectangle.width);
// console.log(rectangle.height);
// console.log(rectangle.area);

// Destructuring = Extract value from arrays and objects then assign them to variable in a convenient way
//                 [] to perform array Destructuring
//                 {} to perform object destructuring

// let a = 1;
// let b = 2;

// [a ,b] = [b, a];

// console.log(a);
// console.log(b);

// const colors = ["red", "blue", "green", "red", "yellow"];

// [colors[0], colors[4]] = [colors[4], colors[0]];
// const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

// console.log(colors);

// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(extraColors);


// const person1 = {
//     pfirstName : "bob",
//     lastName : "the builder",
//     page : 10,
//     isEmployed : false,
// }

// const {pfirstName, lastName, page, isEmployed} = person1;

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(isEmployed);


// NESTED OBJECT = OBJECT INSIDE OTHER OBJECT

// const simplePersonProfile = {
    
//     name: "Charlie Brown",
//     age: 8,

//     // nested array
//     hobbies: [
//         "Flying kites",
//         "Playing baseball (badly)",
//         "Trying to kick the football"
//     ],

//     // nested object
//     address: {
//         street: "101 Apple Lane",
//         city: "Suburban Town",
//         state: "CA",
//         zipCode: "90001"
//     }
// };


// console.log(`Name: ${simplePersonProfile.name}`);      
// console.log(`Age: ${simplePersonProfile.age}`);       
// console.log(`Primary Hobby: ${simplePersonProfile.hobbies[0]}`); 

// console.log(`City: ${simplePersonProfile.address.city}`); 
// console.log(`Full Address: ${simplePersonProfile.address.street}, ${simplePersonProfile.address.city}`); 


//  ARRAYS OF OBJECTS

// const fruits = [{name:"apple", color:"red", calories: 95},
//                 {name:"orange", color:"orange", calories: 55}, 
//                 {name:"banana", color:"yellow", calories: 105}, 
//                 {name:"graphes", color:"green", calories: 66},
//                 {name:"pomegranate", color:"red", calories: 100}
//             ];
// fruits.push({name : "coconut", color: "white", calories: "62"});
// console.log(fruits);
// console.log(fruits[0].name);
// fruits.pop();
// console.log(fruits);
// fruits.slice(1 ,3);
// console.log(fruits);

// fruits.forEach(fruits => console.log(fruits));

// const fruitNames = fruits.map(fruit => fruit.name);
// const fruitColors = fruits.map(fruit => fruit.color);

// console.log(fruitNames);
// console.log(fruitColors);

// const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
// console.log(yellowFruits);

// SHUFFLE ELEMENTS IN JS

// const cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

// // FISHER GATES ALGOREITH

// function shuffle(array){
//     for(let i = array.lenght - 1; i > 0; i--){
//         const random = Math.floor(Math.random() * (i + 1));

//         array[i], array[random] = [array[random], array[i]]
//     }
// }

// console.log(cards);

// DATA OBJECTS IN JS = OBJECT THAT CONTAIN  VALUES THAT REPRESENT DATES AND TIME , THESE CAN BE CHANGED AND FORMATED

// const date = new Date(2025, 0, 1, 2, 3 , 4, 5);

// console.log(date);

// const date = new Date();

// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDate();
// const hour = date.getHours();
// const minutes = date.getMinutes();
// const seconds = date.getSeconds();

// console.log(year);
// console.log(month);
// console.log(day);
// console.log(hour);
// console.log(minutes);
// console.log(seconds);

// CLOSURE = A FUNCTION DEFINED INSIDE OF ANOTHER FUNCTION

// function outer(){
//     let message = "Hello";

//     function inner(){
//         console.log(message);
//     }

//     inner();
// }

// outer();


// let score = 0

// function increaseScore(points){
//     score += points;
//     console.log(`+${points}pts`);
// }

// function decreaseScore(points){
//     score -= points;
//     console.log(`-${points}pts`);
// }

// function getScore(){
//     return score;
// }

// increaseScore(5);
// decreaseScore(4);
// console.log(getScore());

// TIMEOUT ID = useCallback, DELAY, CLEAR TIMEOUT CAN CANCLE TIMEOUT BEFORE

// let timeoutId;

// function startTimer(){
//     timeoutId = setTimeout(() => window.alert("Hello"), 3000);
//     console.log("Starter")
// }

// function clearTimer(){
//     clearTimeout(timeoutId);
//     console.log("CLEARED");
// }

// SYNCHRONOUS = EXECUTES CODE LINE BY LINE,ASYNCHRONOUS = EXECUTES CODE PRALLEL MANNER

// function func1(callback){
//     setTimeout(() => {console.log("Task 1");
//     }, 3000);

// }

// function func2(){
//     console.log("Task2");
//     console.log("Task3");
//     console.log("Task4");
// }
// func1(func2);



// error = An object that is created to represent a problem that occurs often with user input or establishing a connection

// try = Encloses code that might potentially cause an error
// catch = Catch and handle any throne errors from try
// finally = (optional) Always executes used mostly for clean example close files close connections release resources

// try{
//     console.log(x);
// }
// catch(error){
//     console.error(error);
// }
// finally{
//     console.log("this always executes")
// }

// console.log("You have reached the end!")

// try {
//     const divisor = window.prompt("Enter a dividend: ");
//     const dividend = window.prompt("Enter a dividend: ");

//     if(divisor == 0){
//         throw new Error("You can't divide by 0");
//     }
//     const result = dividend / divisor;
//     console.log(result);
// }

// catch (error){
//     console.error(error);
// }

// console.log("You have reached the end!");

// DOM IN JS 

// const fruits = document.getElementsByClassName("fruits");

// Array.from(fruits).forEach(fruit => {
//     fruit.style.backgroundColor = "blue";
//     fruit.style.display = "inline-block"
// });

// const h4Elements = document.getElementsByTagName("h4");
// const liElements = document.getElementsByTagName("li");

// // h4Elements[0].style.backgroundColor = "purple"

// for(let h4Element of h4Elements){
//     h4Element.style.color = "purple";
// }

// for(let liElement of liElements){
//     liElement.style.backgroundColor = 'lightgreen';
   
// }
// // querySelector only returns the one element, the first match or no
// const element = documen;t.querySelector(".fruits"); 

// element.style.backgroundColor = "red";


// ADD AND CHNAGE ELEMENTS USING js

// step 1 = create a element
const newH1 = document.createElement("h1");

// step2 = add some attribute to the element
// newH1.textContent = "I Like Pizza";
// newH1.id = "myNH1";
// newH1.style.color = "tomato";
// newH1.style.textAlign = "center"

// step3 = append the new element into the Dom

document.getElementById("box11").append(newH1);

// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1, box2);
 