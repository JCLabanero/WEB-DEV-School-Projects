function totalInput(){
    var total = document.getElementById("numberTotal").innerHTML;
    var totalInt = eval(total);
    document.getElementById("numberTotal").innerHTML = totalInt;
}
function checkFront(){
    var checker = document.getElementById("numberTotal").innerHTML;
    if(checker.charAt(0)=='0')
    document.getElementById("numberTotal").innerHTML = checker.slice(1);
}
function addZero(){
    checkFront();
    document.getElementById("numberTotal").innerHTML+=0;
}
function addOne(){
    checkFront();
    document.getElementById("numberTotal").innerHTML+=1;
}
function addTwo(){
    checkFront();
    document.getElementById("numberTotal").innerHTML+=2;
}
function addThree(){
    checkFront();
    document.getElementById("numberTotal").innerHTML+=3;
}
function addFour(){
    checkFront();
    document.getElementById("numberTotal").innerHTML+=4;
}
function addFive(){
    checkFront();
    document.getElementById("numberTotal").innerHTML+=5;
}
function addSix(){
    checkFront();
    document.getElementById("numberTotal").innerHTML+=6;
}
function addSeven(){
    checkFront();
    document.getElementById("numberTotal").innerHTML+=7;
}
function addEight(){
    checkFront();
    document.getElementById("numberTotal").innerHTML+=8;
}
function addNine(){
    checkFront();
    document.getElementById("numberTotal").innerHTML+=9;
}
function addMultiply(){
    checkFront();
    document.getElementById("numberTotal").innerHTML+="*";
}
function addDivide(){
    checkFront();
    document.getElementById("numberTotal").innerHTML+="/";
}
function addAdd(){
    checkFront();
    document.getElementById("numberTotal").innerHTML+="+";
}
function addSubtract(){
    checkFront();
    document.getElementById("numberTotal").innerHTML+="-";
}
function addClear(){
    document.getElementById("numberTotal").innerHTML="0";
}