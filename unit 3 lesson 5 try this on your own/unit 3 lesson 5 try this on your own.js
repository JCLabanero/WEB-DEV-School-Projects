var thisIsArray = ["12046,Hanie,Gabay,BSIT","12050,Karla,Primo,BSM","12051,Gelanne,Teodoro,BIT/CT","12052,Eris,Ocado,BEED","12057,Albert,Reyes,BSIT","12060,Ruben,Ramos,BIT/FT"];

function searchID(){
    var idNumber = prompt("Enter the ID that will be edited","12345");
    var cntr=0;
    while(cntr<thisIsArray.length){
        var arr = thisIsArray[cntr].split(",");
        // document.write(cntr+" "+arr[0]+"<br>");
        if(arr[0]==idNumber)
            return cntr;
        cntr++;
    }
    alert("ID doesn't exist");
    return -1;
}
function editData(){
    var index = searchID();
    if(index<0)
        return false;
    var selectToChange = prompt("Choose what to edit:[1]ID[2]First Name[3]Last Name[4]Course");
}

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