// Object Creation 

// const product = {
//     title: "Ball pen",
//     rating:4,
//     offer:5,
//     price:270,  
// };

// console.log(product);

// const profile = {
//     username: "Lakshay Raj",
//     isFollow: false,
//     followers: 123,
//     following: 123,
// };

// console.log(profile);


// Condition OPR

// let num = 10;
// if (num % 2 === 0){
//     console.log(num, "is even");
// }
// else{
//     console.log(num, "is odd");
// }

// else if cond

// let mode2  = "dark"
// let color;

// if (mode2 === "dark") {
//     color = "black";
// } else if (mode2 === "blue"){
//     color = "blue";
// }else if (mode2 === "pink" ){
//     color =  "pink"
// }else if (mode2 === "light"){
//     color = "white"
// }else {
//     color = "brown"
// }

// console.log(color);

// if (mode2 === "dark"){ 
//     console.log(mode2);
// }

// User input

// let num4 = prompt("Enter a number")

// if (num4 % 5 === 0){
//     console.log(num4, "is divisible by 5");
// }else{
//     console.log(num4, "is not divisible by 5"   )
// }

// Scores Grade

// let grade = prompt("Enter your grade")

// if (grade >= 80 && grade <= 100){
//     console.log("You got A grade")
// } else if (grade >= 70 && grade < 89){
//     console.log("You got B grade")
// } else if (grade >= 60 && grade < 69){
//     console.log("You got C grade")
// } else if (grade >= 50 && grade < 59){
//     console.log("You got D grade")
//  }else if (grade >= 40 && grade < 49){
//     console.log("Sorry, You are FAIL")
// } 


// LOOP PRACTISE

// for (let num = 0 ; num <= 100; num++){
//     console.log("num = ", num)
// }

// for(let num = 0; num <= 100; num++){
//     if (num % 2 == 0){
//         console.log(num, "is even")
//     }else{
//         console.log(num, "is odd")
//     }
// }


// let gameNUM = 25;

// let userNum = prompt("Enter a number")
// // Game main
// while(userNum != gameNUM){
//     userNum = prompt("you entered wrong number, Guess again")    

// }

// console.log("you won")


// STRING 

// let userName = prompt("Enter your name");
// let lengthA = (userName.length);
// new_userName = "@" + userName + lengthA;
// console.log(new_userName);


// ARRAYS  looping

// let marks = [85, 97, 44, 37, 76, 60];

// let sum = 0

// for(let mark of marks){
//     sum += mark;
// }

// let average = sum / marks.length;

// console.log(`the average marks is ${average}`);

// items = [250, 645, 300, 900, 50];
// new_items = [];

// for(let item of items){
//     dis = item * 0.1;   
//     new_price = (item - dis);
//     new_items.push(new_price);
// };

// console.log(new_items);

// ARRAYS PRACTICE

// let companies = ['Bloomberg', "Microsoft", "Uber", "Google", "Facebook", "Ibm"];
// // companies.shift();
// // console.log(companies)

// // companies.splice(2,1, "ola")
// // console.log(companies)

// companies.push("Amazon");
// console.log(companies)


// FUNCTION PRACTICE

// function countVowels(str){
//     let count = 0;
//     for (let chr of str.toLowerCase()){
//         if (chr == "a" || chr == "e" || chr == "i" || chr == "o" || chr == "u"){
//             count += 1;
//             // console.log(chr);
           

//         }
        
//     }
//      console.log(count);
        
// }

// countVowels("Education is a beautiful journey of imagination and curiosity")

// FOREACH 

// let arr = [2, 3, 4, 5, 6, 7, 8, 9]

// arr.forEach(function Square(arr){
//     console.log(`the sqaure of ${arr} is ${arr * arr}`);
   
// })

// let n = prompt("Enter a number")

// let arr = []

// for (let i = 1; i <= n; i++){
//     arr[i - 1] = i
// }

// console.log(arr)

// let newArr = arr.reduce((res, curr) => {
//     return res + curr;
// })

// console.log(newArr)

// Append item in str DOM

// let h1 = document.querySelector("h1");
// console.dir(h1);

// h1.innerText = h1.innerText + " from Lakshay Raj" // Concatinate for 2 strs


// let divs = document.querySelectorAll(".box");
// console.log(divs);

// let idx = 1;

// for(div of divs) {
//     div.innerText = "new unique value"
// }


// divs[0].innerText = "new Unique value1";
// divs[1].innerText = "new Unique value2";
// divs[2].innerText = "new unique value3";


// // Create button and give color

// newBtn = document.createElement("button");
// newBtn.innerText = "Click me"
// document.querySelector("body").prepend(newBtn)

// newBtn.style.color = "White";
// newBtn.style.backgroundColor = "red"; 


// Change the theme

let modeBtn = document.querySelector("#mode")
let currMode = "light";

modeBtn.addEventListener("click", () => {
    if (currMode === "light"){
        currMode = "dark";

        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("body").style.color = "white";
        

    } else {
        currMode = "light";

        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("body").style.color = "black";
    }
    console.log(currMode);
})