// var thisIsArray = ["12046,Hanie,Gabay,BSIT","12050,Karla,Primo,BSM","12051,Gelanne,Teodoro,BIT/CT","12052,Eris,Ocado,BEED","12057,Albert,Reyes,BSIT","12060,Ruben,Ramos,BIT/FT"];


// function searchID(){
//     var idNumber = prompt("Enter the ID that will be edited","12345");
//     var cntr=0;
//     while(cntr<thisIsArray.length){
//         var arr = thisIsArray[cntr].split(",");
//         // document.write(cntr+" "+arr[0]+"<br>");
//         if(arr[0]==idNumber)
//             return cntr;
//         cntr++;
//     }
//     alert("ID doesn't exist");
//     return -1;
// }
// function editData(){
//     var index = searchID();
//     if(index<0)
//         return false;
//     var selectToChange = prompt("Choose what to edit:\n[1]ID\n[2]First Name\n[3]Last Name\n[4]Course");

    
//     var toChange = prompt("");
// }

function addFunction(){
    var inputID = addForm.i01.value;
    var inputFName = addForm.i02.value;
    var inputLName = addForm.i03.value;
    var inputCourse = addForm.i04.value;
    // thisIsArray.push(inputID+","+inputFName+","+inputLName+","+inputCourse);
    // for(var a=0; a<thisIsArray.length; a++){
    //     hold = thisIsArray[a]+"\n";
    // }

    var newData = inputID+","+inputFName+","+inputLName+","+inputCourse;
    if(localStorage.getItem('data')==null)
        localStorage.setItem('data','[]');

    var oldData = JSON.parse(localStorage.getItem('data'));
    oldData.push(newData);

    localStorage.setItem('data',JSON.stringify(oldData));

    alert(newData+" added successfully!");
}
function editFuntion(){
    if(searchByID>0)
        return;

    if(localStorage.getItem('data')==null)
        localStorage.setItem('data','[]');
        
    var oldData = JSON.parse(localStorage.getItem('data'));
    
}
function searchByID(){
    if(localStorage.getItem('data')==null)
        localStorage.setItem('data','[]');
        
    var oldData = JSON.parse(localStorage.getItem('data'));

    var search = prompt("Enter the ID that will be edited","12345");

    for(var a=0; a<oldData.length;a++){
        var arr = storedData[a].split(",");
        if(search==arr[0])
            return a;
    }
    return -1;
}
// function viewLocalData(){
//     if(localStorage.getItem('data') != null){
//         var storedData = JSON.parse(localStorage.getItem('data'));
//     }
// }
function initialLoad(){
    if(localStorage.getItem('data')==null)
        localStorage.setItem('data','["12046,Hanie,Gabay,BSIT","12050,Karla,Primo,BSM","12051,Gelanne,Teodoro,BIT/CT","12052,Eris,Ocado,BEED","12057,Albert,Reyes,BSIT","12060,Ruben,Ramos,BIT/FT"]');
    var storedData = JSON.parse(localStorage.getItem('data'));
    for(var a=0; a<storedData.length; a++){
        var arr = storedData[a].split(",");
        updateTable(arr[0],arr[1],arr[2],arr[3]);
    }
}
function updateTable(id,fname,lname,course){
    let table = document.getElementById("table");
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