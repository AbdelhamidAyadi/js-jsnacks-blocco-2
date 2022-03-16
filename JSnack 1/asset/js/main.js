let container = document.getElementById("container");
let number = Number( prompt("Inserisci il numero:"));



if(number % 2 == 0 ){
    container.innerHTML = `<div>${number}</div>`;

}else if( number % 2 != 0 ){
    number = number + 1 ;
    container.innerHTML = `<div>${number}</div>`;
}