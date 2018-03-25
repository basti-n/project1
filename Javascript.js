// define variables
var a = 5;
var b = a + 2;
var z = a - b;
var clock = "way to late";

//only active when function is called upon
function displayNone() {
    document.getElementById("button").style.display = "none";
}
function changeFontSize() {
    document.getElementById("date").style.fontSize = "60px"; 
    document.getElementById("date").style.color = "black";   
}
function deleteAll() {
    document.write("all has been deleted")
}
function alertWindow() {
    window.alert("Please check all input")
}

// do addition (no funtion necessary btw)
    document.getElementById("count").innerHTML = + z;

// Automatic html filler
    document.getElementById("count").innerHTML = clock;
    

// Debugging w/ console
function debugConsole () {
    console.log("The secondary button has been clicked");
}