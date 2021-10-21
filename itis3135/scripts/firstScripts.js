  
/*
       

        
       
      
    
        let strBTN = document.createElement("button");
        strBTN.innerHTML = "Concat Strings";
        strBTN.onclick = function () {
            alert(" concat 2 strings");
            var num1 = prompt("enter the first string");
            var num2 = prompt("enter the second string");
            let sum = num1 + " " + num2;
            alert("the concatanated string is: " + sum);
        }
        document.body.appendChild(strBTN);

    
        let taxBTN = document.createElement("button");
        taxBTN.innerHTML = "calculate sales tax";
        taxBTN.onclick = function () {
            alert(" find sales tax");
            let subtotal = parseInt(prompt("enter the subtotal"));
            const salestax = .07;
            let tax_amount = subtotal * salestax;
            let total = subtotal + tax_amount;
            alert("the total amount is: " + total);
        };
        document.body.appendChild(taxBTN);
    
        let areaBTN = document.createElement("button");
        areaBTN.innerHTML = "area of any rectangle";
        areaBTN.onclick = function () {
            alert(" find the area of any rectangle application");
            let num1 = parseInt(prompt("enter the width"));
            let num2 = parseInt(prompt("enter the length"));
            let sum = (2 * num1) + ((2 * num2));
            alert("the area of the rectangle is: " + sum);
        };
        document.body.appendChild(areaBTN);
*/
        window.onload= function()
        {
            timeNdate();
            document.getElementById("sumButton").onclick=sumOfThree();
            document.getElementById("difButton").onclick=difOfThree();
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
            alert("the sum of the three numbers you entered are: " + sum);
        }
        function timeNdate()
        {
            document.write("Today is " + today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear() + "<br>" + "The time is: " + today.getHours() + ":" + today.getMinutes() + "<br>");
            document.write(companyName + " welcomes you, " + name + "!" + "<br>");
            document.write("We're glad you are doing " + feeling + "!");
        }