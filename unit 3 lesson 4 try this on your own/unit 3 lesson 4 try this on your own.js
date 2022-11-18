let thisIsArray = [2,4,6,7,1];

function loadElements(){
    var elementsHTML = document.getElementById("elements");
    elementsHTML.innerHTML = "Elements: " + thisIsArray.toString();
}

document.getElementById("submitButton2").addEventListener('click',actionFunction);

function actionFunction() {
    var p1 = former.position.value;
    var e1 = former.element.value;

    var intPos = parseInt(p1);
    var intEle = parseInt(e1);

    if(intPos<=thisIsArray.length&&intPos>=0){
        thisIsArray[intPos] = intEle;
        loadElements();
    }
};