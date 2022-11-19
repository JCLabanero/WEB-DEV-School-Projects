function addFunction(){
    var inputID = addForm.i01.value;
    var inputFName = addForm.i02.value;
    var inputLName = addForm.i03.value;
    var inputCourse = addForm.i04.value;

    var newData = inputID+","+inputFName+","+inputLName+","+inputCourse;
    if(localStorage.getItem('data')==null)
        localStorage.setItem('data','[]');

    var oldData = JSON.parse(localStorage.getItem('data'));
    oldData.push(newData);

    localStorage.setItem('data',JSON.stringify(oldData));

    alert(newData+" added successfully!");
}

function editFunction(){
    var inputSelectID = addForm.i00.value;
    var inputID2 = addForm.i01.value;
    var inputFName2 = addForm.i02.value;
    var inputLName2 = addForm.i03.value;
    var inputCourse2 = addForm.i04.value;

    var oldData = JSON.parse(localStorage.getItem('data'));
    var index = -2;
    for(var a=0;a<oldData.length;a++){
        var arr = oldData[a].split(",");
        if(inputSelectID==arr[0]){
            index=a;
            break;
        }
    }

    if(index<0)
        return;

    newData = inputID2 +","+inputFName2+","+inputLName2+","+inputCourse2;
    oldData[index] = newData;

    localStorage.setItem('data',JSON.stringify(oldData));
}
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
function deleteFunction(){
    var inputID = addForm.i00.value;
    
    var oldData = JSON.parse(localStorage.getItem('data'));

    var index = -2;
    for(var a=0;a<oldData.length;a++){
        var arr = oldData[a].split(",");
        if(inputID==arr[0]){
            index=a;
            break;
        }
    }
    if(index<0)
        return;
    oldData.splice(index,1);

    localStorage.setItem('data',JSON.stringify(oldData));

    alert(inputID+" removed successfully!");
}
function deleteLast(){
    var oldData = JSON.parse(localStorage.getItem('data'));
    oldData.pop();

    localStorage.setItem('data',JSON.stringify(oldData));

    alert("Last data removed successfully!");
}
function deleteFirst(){
    var oldData = JSON.parse(localStorage.getItem('data'));
    oldData.shift();

    localStorage.setItem('data',JSON.stringify(oldData));

    alert("First data removed successfully!");

}