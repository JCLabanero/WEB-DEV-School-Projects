
function closeAndReturn(){
    
}
function addFunction(){
    var inputID = prompt("Input ID number: ", "12345");
    var inputFName = prompt("Input First Name: ", "John");
    var inputLName = prompt("Input Last Name: ", "Labanero");
    var inputCourse = prompt("Input Course: ", "BSIT");
    var check = confirm("Are you sure you want to add?");
    if(check){
        location.href("unit 3 lesson 5 try this on your own.html","_self");
        window.open("unit 3 lesson 5 try this on your own.html");
    }
}