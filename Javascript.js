// define variables
var a = 5;
var b = a + 2;
var z = a ** b;
var p1 = (p1 || 0); //initializig the value with p1, or if not defined zero
var p2 = (p2 || 4); //initializig the value with p1, or if not defined four
var fullName = {firstName:"Peter", lastName:"Parker"}; // Object
var clock = "way to late";
var ingredients = ["banana", "nutbutter","milk"];

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

function changeFontSize() {
    document.getElementById("date").style.fontSize = "60px"; 
    document.getElementById("date").style.color = "black";   
}
function deleteAll() {
    document.write("all Information has been deleted")
}
function alertWindow() {
    window.alert("Please check all input")
}
function exponentialOutput() {
    document.getElementById("body").innerHTML = fullName.firstName + " " + fullName.lastName;
}


// do addition (no funtion necessary btw)
    document.getElementById("count").innerHTML = + z;

// Automatic html filler
    document.getElementById("count").innerHTML = clock;


// Debugging w/ console
function debugConsole () {
    console.log("Tracking: Secondary button has been clicked");
}