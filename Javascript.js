// define variables
var a = 5;
var b = a + 2;
var z = a ** b;
var zMoney = z.toFixed(2) // rounds var z to 2 decimals, e.g. for money conversion
var p1 = (p1 || 0); //initializig the value with p1, or if not defined zero
var p2 = (p2 || 4); //initializig the value with p1, or if not defined four
var FontSizeRandom = "45px";
var fullName = {firstName:"Peter", lastName:"Parker"}; // Object
var clock = "way to late";
var ingredients = ["banana", "nutbutter","milk"]; //ingredients is an array
var shape = ["round", "edgy", "quadratic"]; // shapes is an array as well
var pancakes = {ingredients:"banana",ingredients:"milk", shape:"round"}; // pancakes is an object described by 
var helpCom = "help.com";
var alertMsg = "Please check all input, for more information please visit";
var studentAge = [19,15,18,17];
var ableToDrink = studentAge.filter(age => age >= 18); // limit to drink requires age 18 or older
var studentYrs = studentAge.map(years => years + " " + "years"); // adds years to student agevar
var studentAgeLog = studentAge.forEach( ageclass => console.log(ageclass + " years"));
//
// document.getElementById("valueAdded").innerHTML = clock;

//only active when function is called upon
function displayNone() {
    document.getElementById("button").style.display = "none";
}

function boolean() {
    document.getElementById("count").innerHTML = a == b;
}

function addition(p1, p2) {
    return p1 + p2;
}
function countAddition (p1, p2) {
    document.getElementById("count").innerHTML = addition(p1, p2);
}

function randomFontSize() {
    var FontSizeRandom = Math.random() *100  + "px";
    console.log("Randomizing complete with " + FontSizeRandom)
}

function changeFontSize() {
    document.getElementById("date").style.fontSize = "60px"; 
    document.getElementById("date").style.color = "black";
    document.getElementById("subline").style.marginLeft = "20px";
    document.getElementById("subline").style.fontSize = FontSizeRandom;   

}
function deleteAll() {
    document.write("all Information has been deleted")
}

// Showcasing: No links possible in alertWindow
function alertWindow() {
    window.alert(alertMsg + " " + helpCom.link("https://www.help.com")); 
}

function exponentialOutput() {
    document.getElementById("body").innerHTML = fullName.firstName + " " + fullName.lastName;
}
function keydown() {
    this.innerHTML = "Hi There";
}

// do addition (no funtion necessary btw)
    document.getElementById("count").innerHTML = + z;

// Automatic html filler
    document.getElementById("count").innerHTML = clock;


// Student age with years
function studentAge(){
    document.getElementById("subline").innerHTML = studentYrs;
}

// Debugging w/ console
function debugConsole () {
    console.log("Tracking: Secondary button has been clicked")
}
function debugConsole1 () {
    console.log("Button removed from view " + clock.length + fullName.firstName.slice(2,4)); //length string method
}

window.addEventListener("load", function(log) {
    console.log("All elements have loaded"); // loading logger
});

const spinner = document.querySelector("h1");
const label = document.querySelector("label");
let movecount = 0
const update = () => {
  movecount++
  label.innerText = `Moved left to right ${movecount} times!`
}

spinner.addEventListener('animationiteration', update)