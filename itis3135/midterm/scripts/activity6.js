var polyType = getNumSides();
var i = 0;
var x;


//keep looping until entry is valid
while (i==0)
    {  
         if(!validateEntry(polyType))
        { 
        var type = getShape(polyType);
        alert(type);       
        i=1;
        }
        else
            {
            polyType = prompt("Apologies from The Tyrannical Enormous Rottweiler company but please enter a Nonzero number between 1 and 10");
            }
        }
    function getNumSides()
    {
        var sides = prompt("The Tyrannical Enormous Rottweiler company welcomes you, give us a number of sides to find out the polygons name.");
            return sides;
    }
function getShape(sides) 
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
        
        function validateEntry(sides) 
        {
            if (typeof sides == 'number') 
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
    

