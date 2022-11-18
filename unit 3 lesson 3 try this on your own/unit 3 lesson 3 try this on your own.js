var inputfnumber=prompt("Enter first number: ", "39");
var inputsnumber=prompt("Enter second number: ", "50");
var inputtnumber=prompt("Enter second number: ", "11");
var fnumber=parseInt(inputfnumber);
var snumber=parseInt(inputsnumber);
var tnumber=parseInt(inputtnumber);

var temp = [fnumber, snumber,tnumber];

for(a=0; a<3; a++){
    while(temp[a]>9){
        temp[a]-=10;
    }
}

var check = confirm("Are you sure?");
if(check==true){
    changeValue();
}

function changeValue(){
    var fnumberHTML = document.getElementById("f1");
    var snumberHTML = document.getElementById("s2");
    var tnumberHTML = document.getElementById("t3");
    var outputHTML = document.getElementById("o4");
    fnumberHTML.innerHTML = fnumber;
    snumberHTML.innerHTML = snumber;
    tnumberHTML.innerHTML = tnumber;

    if(temp[0]==temp[1]){
        outputHTML.innerHTML = "true";
    } else
    if(temp[0]==temp[2]){
        outputHTML.innerHTML = "true";
    } else 
    if(temp[2]==temp[3]){
        outputHTML.innerHTML = "true";
    } else {
        outputHTML.innerHTML = "false";
    }
}