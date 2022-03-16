let container = document.getElementById("container");

var primoArray = [1,5,65,54,23,54,8,2,45,21,98,57,34,76,85674,58,586,76,65,54,34,43,65,86,89,09];
var secondoArray = [2,13,5,67,87,54,87,4,90];


for(i=0 ; i < primoArray.length || i < secondoArray.length ; i++){
    if( primoArray.length > secondoArray.length ){
        var random = Math.floor(Math.random() * 100);
        secondoArray.push( random );
    }else if( primoArray.length < secondoArray.length ){
        var random = Math.floor(Math.random() * 100);
        primoArray.push( random );
    }
}


console.log(primoArray);
console.log(secondoArray);