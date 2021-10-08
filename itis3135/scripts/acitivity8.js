var salaries = [];
var people = [];





window.onload = function() 
{
    document.getElementById("DisplayResults").onclick = displayResults;
    document.getElementById("DisplaySalary").onclick = displaySalary;
    document.getElementById("AddSalary").onclick = addSalary;
    document.getElementById("peopleArr").focus();


}


function displayResults ()
{
    let sum=0;
    

    for(let i = 0; i < salaries.length; i++)
    {
         sum += salaries[i];
    }

    let average = sum/salaries.length;
    let largest;

    for(let j=0; j<salaries.length; j++)
    {
        let temp=0;
        if(salaries[j] > temp)
        {
            largest = salaries[j];
        }
    }
document.getElementById("results").innerHTML = "<h2> RESULTS <h2>" + "<p> Largest Salary = " + largest+ "</p>"+"<p> Average Salary = " + average;
}

function displaySalary()
{
    // get names and calues from arrays
    //display them as rows in the HTML table element with id="results_table" 
    var display= ""
    display += "<tr><th> Salary </th> <th> People </th></tr>"
        for(let i=0; i<people.length; i++)
        {
            display +="<tr><td>" +salaries[i]+ "</td><td>"+ people[i] +"</td></tr>";
        }
        display += "</table>";
        document.getElementById("salaryTable").innerHTML = "<h2> SALARIES </h2>" + display;
}

function addSalary()
{   
    var person = document.getElementById("peopleArr").value;
    var salary = document.getElementById("salary").value;
    //add person and salaray to the array
    //data valadation must not be empty and value must be numeric
    if(salary =="" || salary == NaN)
    {
        alert("check your input");
        document.getElementById("name").focus();
    }
    else{
        salary = parseInt(salary);
        salaries.push(salary);
        people.push(person);
        document.getElementById("salary").innerHTML = "";
        document.getElementById("peopleArr").focus();
    }


}

//application move the cursor to the name field on start
// and after name and salasry have beem added
//or when the user clicks the add button

//populate dropdown list with names from array

