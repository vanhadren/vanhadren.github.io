var polyType = getNumSides();
var i = 0;
var x;



while (i==0)
    {  
         if(validateEntry(sides))
        { 
        var type = polyFinder(sides);
        alert (type);       
        i=1;
        }
        else
            {
            polyType = "Please enter a Nonzero number between 1 and 10"
            }
    
    function getNumSides()
{
    var sides = prompt("welcome. enter number of sides");
        return sides;
}
function polyFinder() 
{
        if (validateEntry(sides)) 
        {
            x = Math.round(Math.abs(sides));
            switch (x) 
                {
                    case 0:
                        return"entry can not be ZERO";
                        break;
                    case 1:
                        return "1 side = Henagon";
                        break;
                    case 2:
                        return "2 side = Digon";
                        break;
                    case 3:
                        return "3 side = Trigon";
                        break;
                    case 4:
                        return "4 side = Tetragon";
                        break;
                    case 5:
                        return "5 side = Pentagon";
                        break;
                    case 6:
                        return "6 side = Hexagon";
                        break;
                    case 7:
                        return "7 side = Heptagon";
                        break;
                    case 8:
                        return "8 side = Octagon";
                        break;
                    case 9:
                        return "9 side = Nonagon";
                        break;
                    case 10:
                        return "10 side = Decagon";
                        break;
                    default:
                        return "please enter a NONZERO number between 1 and 10.";
                        break;

                }
        }
        else 
        {


            sides = prompt("please enter a number between 1 and 10");

        }

        function validateEntry(sides) 
        {
            if (typeof sides == "number") 
            {
                if (sides >= -10 && sides <= 10) 
                {
                    return (true);
                }
            }
            else {
                return false;
            }
        }
    }
}
