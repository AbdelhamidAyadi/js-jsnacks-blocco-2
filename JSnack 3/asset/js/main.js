var container = document.getElementById("container");
var numbers = [];
var somma = 0 ;



for( i = 0; i < 20 ; i++ ){
    var random = Math.floor(Math.random() * 100);
    
    if( random % 2 != 0){
        numbers.push( random );
    }
    
    
   
    
};

for(i=0 ; i < numbers.length ; i++){

    somma += numbers[i];
};
container.innerHTML += `<div>La somma di tutti gli elementi che sono in posizione dispari:${somma}</div>`;
