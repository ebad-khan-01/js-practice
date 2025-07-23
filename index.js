// const compare = (a,b)=>{
//     return b-a
// }
// console.log(compare(2,3))

// const Practice = [1, 522, 4563, 334, 25];
// const result =  Practice.slice(0,2);
// console.log(Practice)
// console.log(result);

// const fruits = ["Apple", "Banana", "Cherry", "Date"];
// const removed = fruits.splice(1, 2); // Remove 2 elements starting at index 1
// console.log(fruits); // ["Apple", "Date"]
// console.log(removed); // ["Banana", "Cherry"]

// Prompt user for marks
// const marks = parseFloat(prompt("Enter the student's marks:"));

//   // Check if the student passed or failed
//   if (marks >= 40) {
//     console.log("The student has passed.");
//   } else {
//     console.log("The student has failed.");
//   }

// const number = parseFloat(prompt("Enter a number:"));

// Check if the number is positive, negative, or zero
// if (number > 0) {
//   console.log(`${number} is positive.`);
// } else if (number < 0) {
//   console.log(`${number} is negative.`);
// } else {
//   console.log(`${number} is zero.`);
// }

// let arr = [1,2,3,4,5,6,7]
// let a = prompt("hello")
// a = Number.parseInt(a)
// arr.push(a)
// console.log(arr)
// let arr = [1,2,3,4,5,6,7,30,50]
//   let a;
// do {
//   a = prompt("hello")
//   a = Number.parseInt(a)
//   arr.push(a)
// } while (a!=0);
// console.log(arr)
// console.log(arr.length)

// let arr = [1,2,3,4,5,6,7,30,50]
// let sqaure = arr.map((x)=>{
// return x*2
// })
// console.log(sqaure)

// let arr = [1,2,3,4,5]
// let factorial = arr.reduce((x,x2)=>{
// return x*x2
// })
// console.log( factorial)

// Generate a random number between 1 and 100
// const randomNumber = Math.floor(Math.random() * 100) + 1;

// let guess = null;
// let attempts = 0;

// console.log("Guess the number (between 1 and 100):");

// while(guess !== randomNumber){
//  guess = parseInt(prompt("enter your guess num"))
//  attempts++;

// if(guess === randomNumber){
//   console.log(`you are guess correct ${randomNumber}`)
//   console.log(`it tooks you num ${attempts}`)

// }else if (guess > randomNumber) {
//   console.log("Too high! Try again.");
// } else if (guess < randomNumber) {
//   console.log("Too low! Try again.");
// }
// }

// let color = prompt("enter the page background colour")

// if(color >= "4"){
//   document.body.style.backgroundColor = "yellow" && "black"
//   alert("Background color changed to light blue!");
// }else{
//   alert("Input is not 4. Background color remains unchanged.");

// }
// let fruits = ["apple", "banana", "cherry"];

// fruits.push("kela")  //add to the end
// fruits.unshift("amrudd")  //add to the begining
// fruits.pop()   //remove from the begining
// fruits.shift()  //remove from the end

// const index = fruits.indexOf("banana")
// console.log(fruits, index)

// let arr = ["a", "b", "c"];
// let obj = { x: 1, y: 2 };

// for (let i = 0; i < arr.length; i++ ){
//   console.log(arr[i])
// }
// for (let value of arr) console.log(value);
// for (let key in obj) console.log(key, obj[key])
// function outerFunction(outerVar) {
//   return function innerFunction(innerVar) {
//     console.log(`Outer: ${outerVar}, Inner: ${innerVar}`);
//   };
// }

// let closureFunc = outerFunction("Hello");
// closureFunc("World");
// const obj = {
//   name: "alice",
//   regularFunc: function () {
//     console.log(this.name);
//   },
//   arrowFunc: () => {
//     const check = "error" && console.log(this.name);
//     return check;
//   }
// };

// obj.regularFunc();
// obj.arrowFunc();

// let number = prompt("enter your num")
// number = Number.parseInt(number)

// if(number >= 4){
//   window.open("https://www.google.co.uk/", "_blank");
// }

// function snakeWaterGunGame() {
//   const choices = ["snake", "water", "gun"];

//   // Get player choice
//   let playerChoice = prompt("Enter your choice (snake, water, gun):").toLowerCase();

//   // Validate player choice
//   if (!choices.includes(playerChoice)) {
//     alert("Invalid choice. Please refresh and enter snake, water, or gun.");
//     return;
//   }

//   // Generate computer's choice
//   const computerChoice = choices[Math.floor(Math.random() * choices.length)];
//   console.log(computerChoice)

//   // Determine the winner
//   let result = "";
//   if (playerChoice === computerChoice) {
//     result = "It's a tie!";
//   } else if (
//     (playerChoice === "snake" && computerChoice === "water") ||
//     (playerChoice === "water" && computerChoice === "gun") ||
//     (playerChoice === "gun" && computerChoice === "snake")
//   ) {
//     result = "You win!";
//   } else {
//     result = "Computer wins!";
//   }

//   // Display results
//   alert(`You chose: ${playerChoice}\nComputer chose: ${computerChoice}\n${result}`);
// }

// // Run the game
// snakeWaterGunGame();

// const mypromise = new Promise((resolve,reject)=>{
//  const success = false

//  if(success){
//   console.log("hello")
//   resolve()
//  }else{
//   console.log(Error)
//   reject()
//  }
// })

// const myPromise = new Promise((resolve, reject) => {
//   const result = true; // Simulate success or failure

//   setTimeout(() => {
//     console.log(result); // Log the result

//     if (result) {
//       resolve("Successful");
//     } else {
//       reject("Error");
//     }
//   }, 1000);
// });

// // Handling the promise
// myPromise
//   .then((message) => {
//     alert(message); // Alert when resolved
//   })
//   .catch((error) => {
//     alert(error); // Alert when rejected
//   });

// const callbackFunction = (value, callback) => {
//   setTimeout(() => callback(value * 2), 1000);
// };
// // console.log("Start");
// callbackFunction(10, (result1) => {
//   console.log(`First: ${result1}`);
//   callbackFunction(result1, (result2) => {
//     console.log(`Second: ${result2}`);
//     callbackFunction(result2, (result3) => {
//       console.log(`Third: ${result3}`);
//     });
//   });
// });
// for (let i = 1; i <= 1000; i++) {
//   document.write(`maaf krdo`);
// }

// var names = ["name","asad","umar"]
// const getNames = (name1,name2,name3) =>{
//   console.log(name1,name2,name3)
// }
// getNames(names)

// const students = {
//   name:"ebad",
//   age:"18",
//   hobbies:"cricket"
// }
// const newStudent = {
//   ...students,
//   age:"19"
// }
// console.log(newStudent)

// const endDate = "21 march 2020 :11:00 pm"
// document.getElementById("end-date").innerText = endDate;
// const inputs = document.querySelectorAll("input")

// const clock = (()=>{
//   const end = new Date(endDate)
//   const now = new Date()
//   const diff = (end - now ) / 1000;
//   inputs[0].value = Math.floor(diff / 3600 / 24)
// })
// clock()

// const endDate = "March 7, 2025 3:00 PM"; // Corrected date format
// document.getElementById("end-date").innerText = endDate;
// const inputs = document.querySelectorAll("input");

// const clock = () => {
//   const end = new Date(endDate);
//   const now = new Date();
//   const diff = (end - now) / 1000;

//   if (diff < 0) {
//     inputs[0].value = 0;
//     inputs[1].value = 0;
//     inputs[2].value = 0;
//     inputs[3].value = 0;
//     return;
//   }

//   inputs[0].value = Math.floor(diff / 3600 / 24); // Days
//   inputs[1].value = Math.floor((diff / 3600) % 24); // Hours
//   inputs[2].value = Math.floor((diff / 60) % 60); // Minutes
//   inputs[3].value = Math.floor(diff % 60); // Seconds
// };

// Run the function every second to update the countdown
// setInterval(clock, 1000);
// clock(); // Initial call to set values immediately

// const name = "muneeb";
// name = "ebad";
// console.log(name);
// let age = 16;
// age = 15;
// console.log(age);
// const name = "ebad";
// console.log(name);

// let age = null;
// console.log(age);

// let arr = [1, 2, 3, 4];

// let doubled = arr.map((num) => num * 2);
// console.log(doubled);
// let even = arr.filter((num) => num % 2 === 0);
// console.log(even);
// let total = arr.reduce((sum, num) => sum + num, 0);
// console.log(total);

// localStorage.setItem("token", "123abc");
// const token = localStorage.getItem("token");
// console.log(token);
