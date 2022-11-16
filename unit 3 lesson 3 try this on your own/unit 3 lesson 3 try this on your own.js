var fnumber=39;
var snumber=50;
var tnumber=11;

var temp = [fnumber, snumber,tnumber];

for(a=0; a<3; a++){
    while(temp[a]>9){
        temp[a]-=10;
    }
}

document.write(temp[0]+" "+temp[1]+" "+temp[2])+"<br>";

if(temp[0]==temp[1]){
    document.write("true");
} else
if(temp[0]==temp[2]){
    document.write("true");
} else 
if(temp[2]==temp[3]){
    document.write("true");
} else {
    document.write("false");
}