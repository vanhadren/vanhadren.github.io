
function displayNum()
{
    document.frmCalc.txtNumber.value += this.value;
}
window.onload = function(){

    document.getElementById("1").onclick = num;
}