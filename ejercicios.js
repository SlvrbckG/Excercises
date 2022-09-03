let firstName = "Slvrbck";
let lastName = "G";

let fullName = firstName + " " + lastName;

console.log(fullName)

let name = "Rod";
let greeting = "Hi there"

function fullGreeting() {
   console.log(greeting + ", " + name + "!")
}

fullGreeting()

let myPoints = 3;

function add3Points() {
    myPoints += 3;
}
function remove1Point() {
    myPoints -= 1;
}
add3Points()
add3Points()
add3Points()
remove1Point()
remove1Point()

console.log(myPoints)

let age = 26;

if (age < 21) {
   console.log("Sorry boo, not tonight!")
}
else {
    console.log("Welcome, go have fun!")
}

let myAge = 100

if (myAge < 100) {
    console.log("Not elegible")
} else if (myAge === 100) {
    console.log("Here is you're b-day card from the King")
} else {
    console.log("Not elegible, you have already gotten one")
}

let me = ["Rodrigo", 26, true];

message.push(newMessage)
message.pop()

for (let count = 10; count < 101; count += 10);

let cards = [7, 3, 9]

for (let i = 0; i < cards.length; i += 1){
    console.log(cards[i])
}

function totalRaceTime() {
    player1Time + player2Time

    
}

function rollDice() {
   let randomNumber = Math.floor(Math.random() * 6 ) + 1
   return randomNumber 
}

let hasSolvedChallenge = false
let hasHintsLeft = false

if (hasSolvedChallenge === false && hasHintsLeft === false) {
    showSolution()
}

function showSolution() {
    console.log("Showing the solution....")
}

let likesDocumentaries = true
let likesStartups = true

if (likesDocumentaries === true || likesStartups === true) {
   recommendMovie()
}
function recommendMovie() {
    console.log("Hey, check out this new film we think you will like!")
}

let airbnbCastle = {
    castlesName: "Castillo_de_Chapultepec",
    smokingAllowed: true,
    rooms: 6,
    characteristics: [cold, haunted, involved_in_a_war, peoples_favorite]
    

}  
console.log(airbnbCastle.rooms)


let person = {
    name: "Rdrgo Mnss",
    age: 26,
    country: "Mexico"
} 
function logData() {
    console.log(person.name + " is " + person.age + " years old and lives in " + person.country + ".")
}
logData()

let theAge = 26;

if (theAge < 6) {
    console.log("free")
} else if (theAge < 18) {
    console.log("child discount")
} else if (theAge < 27) {
    console.log("student discount")
} else if(theAge < 67) {
    console.log("full price")
} else {
    console.log("senior citizen discount")
}

let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

for(let k=0; k < largeCountries.length; k++) {
    console.log("-" + largeCountries[i])
}
let myLargeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

myLargeCountries.pop()
myLargeCountries.push("Pakistan")
myLargeCountries.shift()
myLargeCountries.unshift("China")

console.log(myLargeCountries)


let dayOfMonth = 31
let weekday = "Friday"

if (dayOfMonth === 13 && weekday === "Friday") {
    console.log("😱")
}

let hands = ["rock", "paper", "scissor"]

function rockPaperScissors() {
    let randomHand = Math.floor (Math.random() * 3)
    return hands[randomHand]
}

let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function pickFighter() {
   let randomFighter = Math.floor (Math.random() * 17)
   stageEl.textContent = (fighters[randomFighter + " v.s. " + randomFighter])
}) 

let fruit = ["apple", "orange", "apple", "apple", "orange"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

function sortFruit () {
   for (let i = 0; i < fruit.length; i++)
      if (fruit[i] === "apple") {
        appleShelf.textContent += "apple"
      } else if (fruit[i] === "orange") {
        orangeShelf.textContent += "orange"
      }

   }

sortFruit()

