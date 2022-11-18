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
    var selectToChange = prompt("Choose what to edit:\n[1]ID\n[2]First Name\n[3]Last Name\n[4]Course");

    
    var toChange = prompt("");
}

function closeAndReturn(){
    let table = document.getElementById("table");
    for(var a=0; a<thisIsArray.length;a++){
        var cut = thisIsArray[a].split(",");
        insertData(cut[0],cut[1],cut[2],cut[3]);
        // var row = table.insertRow();
        // var cell0 = row.insertCell(0);
        // var cell1 = row.insertCell(1);
        // var cell2 = row.insertCell(2);
        // var cell3 = row.insertCell(3);
        // cell0.innerHTML = cut[0];
        // cell1.innerHTML = cut[1];
        // cell2.innerHTML = cut[2];
        // cell3.innerHTML = cut[3];
    }
}
//

function addFunction(){
    var inputID = addForm.i01.value;
    var inputFName = addForm.i02.value;
    var inputLName = addForm.i03.value;
    var inputCourse = addForm.i04.value;
    thisIsArray.push(inputID+","+inputFName+","+inputLName+","+inputCourse);
    insertData(inputID,inputFName,inputLName,inputCourse);
    // var inputID = prompt("Input ID number: ", "12345");
    // var inputFName = prompt("Input First Name: ", "John");
    // var inputLName = prompt("Input Last Name: ", "Labanero");
    // var inputCourse = prompt("Input Course: ", "BSIT");
    // var check = confirm("Are you sure you want to add?");
    // if(check){
    //     window.close();
    //     insertData(inputID,inputFName,inputLName,inputCourse);
    // }
}
function insertData(id,fname,lname,course){
    var row = table.insertRow();
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    cell0.innerHTML = id;
    cell1.innerHTML = fname;
    cell2.innerHTML = lname;
    cell3.innerHTML = course;
}