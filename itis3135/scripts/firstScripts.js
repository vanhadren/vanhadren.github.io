var companyName = 'Tryanical Rotts';
var name;
var feeling;
window.onload= function()
      {
          setName(prompt("what is your name? "))
          setFeeling(prompt("how do you feel today? "))
            timeNdate();
          document.getElementById("sumButton").onclick = sumOfThree;
          document.getElementById("difButton").onclick = diffOfThree;
          
      }

      function getName(name)
      {
          return name;
      }
      function setName(name)
      {
          this.name = name;
      }
      function setFeeling(feeling)
      {
          this.feeling  = feeling;
      }

      function sumOfThree()
      {
          alert(" the find the sum of 3 numbers application");
          let num1 = parseInt(prompt("enter the first number"));
          let num2 = parseInt(prompt("enter the second number"));
          let num3 = parseInt(prompt("enter the third number"));
          let sum = num1 + num2 + num3;
          alert("the sum of the three numbers you entered are: " + sum);
      }
      function diffOfThree()
      {
          alert(" the find the difference of 3 numbers application");
          let num1 = parseInt(prompt("enter the first number"));
          let num2 = parseInt(prompt("enter the second number"));
          let num3 = parseInt(prompt("enter the third number"));
          let sum = num1 - num2 - num3;
          alert("the difference of the three numbers you entered are: " + sum);
      }
      function timeNdate()
      {
          var today = new Date();
          document.getElementById("timeNdate").innerHTML ="Today is " + today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear() + "<br>" + "The time is: " + today.getHours() + ":" + today.getMinutes() + "<br>"
          document.getElementById("welcome").innerHTML = companyName + " welcomes you, " + getName() + "!" + "<br>"
          document.getElementById("feeling").innerHTML ="We're glad you are doing " + feeling + "!";
      }
          
      function concatStrings()
      {
          alert(" concat 2 strings");
          var num1 = prompt("enter the first string");
          var num2 = prompt("enter the second string");
          let sum = num1 + " " + num2;
          alert("the concatanated string is: " + sum);
      }

      function calcSalesTax()
      {
          alert(" find sales tax");
          let subtotal = parseInt(prompt("enter the subtotal"));
          const salestax = .07;
          let tax_amount = subtotal * salestax;
          let total = subtotal + tax_amount;
          alert("the total amount is: " + total);
      }
          
      function AreaOfRectangle()
      {
          alert(" find the area of any rectangle application");
          let num1 = parseInt(prompt("enter the width"));
          let num2 = parseInt(prompt("enter the length"));
          let sum = (2 * num1) + ((2 * num2));
          alert("the area of the rectangle is: " + sum);
      }
          