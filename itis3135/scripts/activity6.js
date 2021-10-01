
var i = 0;
var x = 0;

function validateEntry(sides) {
    if (typeof sides == "number") {
        if (sides >= -10 && sides <= 10) {
            return (true);
        }
    }
    else {
        return false;
    }
}

function polyFinder(x) {
    //set variables with prompt
    var sides = prompt("welcome. enter number of sides");
    while (i = 0) {
        if (validateEntry(sides)) {
            x = Math.round(Math.abs(sides));
            console.log(x);
            switch (x) {
                case 0:
                    alert("entry can not be ZERO");
                    break;
                case 1:
                    alert("1 side = Henagon");
                    break;
                case 2:
                    alert("2 side = Digon");
                    break;
                case 3:
                    alert("3 side = Trigon");
                    break;
                case 4:
                    alert("4 side = Tetragon");
                    break;
                case 5:
                    alert("5 side = Pentagon");
                    break;
                case 6:
                    alert("6 side = Hexagon");
                    break;
                case 7:
                    alert("7 side = Heptagon");
                    break;
                case 8:
                    alert("8 side = Octagon");
                    break;
                case 9:
                    alert("9 side = Nonagon");
                    break;
                case 10:
                    alert("10 side = Decagon");
                    break;
                default:
                    alert("please enter a NONZERO number between 1 and 10.");
                    break;

            }
        }
        else {


            sides = prompt("please enter a number between 1 and 10");

        }
    }
}
