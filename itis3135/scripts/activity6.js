var name = document.getElementById('name').value;
var numberOfSides = document.getElementById('side').value;

function polyFinder(numberOfSides)
{
    x = Math.round(Math.abs(numberOfSides));
        switch(x)
        {
            case 0:
                return errorPrompt()
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
                
        }
}
function errorPrompt()
{
    return "please enter a NONZERO number between 1 and 10."
}