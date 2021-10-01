var name = document.getElementById('name').value;
var numberOfSides = document.getElementById('side').value;

function polyFinder(x)
{
    x = Math.round(Math.abs(numberOfSides));
        switch(x)
        {
            case 0:
                return "entry can not be ZERO";
                break;
                case 1:
                return prompt("1 side = Henagon");
                break;
                case 2:
                return prompt("2 side = Digon");
                break;
                case 3:
                return prompt("3 side = Trigon");
                break;    
                case 4:
                return  prompt("4 side = Tetragon");
                break;
                case 5:
                return  prompt("5 side = Pentagon");
                break;
                case 6:
                return  prompt("6 side = Hexagon");
                break;
                case 7:
                return  prompt("7 side = Heptagon");
                break;
                case 8:
                return  prompt("8 side = Octagon");
                break;
                case 9:
                return  prompt("9 side = Nonagon");
                break;
                case 10:
                return  prompt("10 side = Decagon");
                break;
                default:
                return "please enter a NONZERO number between 1 and 10.";
                break;
                
        }
}
