//add information
// update their calorie
//find average calories
// find maximum calories
//cheat day

var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var calories = [3000,2500,1500,4000,2200,1200,4400];

var $ = function(id) { return document.getElementById(id); };

window.onload = function() {
    //event handlers

};
var numCalories = document.$("calories");
var calIndex = document.getElementsByName("dayOfWeek:checked").value;
var dayOfWeek = document.getElementsByName("dayOfWeek:checked").value;

function updateCalorie(calories, numCalories)
{
    calories[dayOfWeek] = numCalories
    alert("Your updated calories details are: "+calories);

}