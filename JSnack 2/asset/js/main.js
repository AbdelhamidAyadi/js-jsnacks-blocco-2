var container = document.getElementById("container");
var namesList = ["Liam","Noah","Oliver","Emma","Charlotte","Benjamin","Lucas" ];
var surnamesList = ["Smith","Johnson","Williams","Brown","Jones","Garcia","Harris" ];


var fullnamesList = [];


//Primo metodo.

for( i = 0 ; i <= 20; i++){
    var randomName = Math.floor(Math.random()* namesList.length);
    var randomSurname = Math.floor(Math.random()* surnamesList.length);

    fullnamesList.push( namesList[randomName] + " " +surnamesList[randomSurname]+ " ")

}
container.innerHTML = `<div>${fullnamesList}</div>`;

//Secondo metodo.

for( i = 0 ; i <= 20; i++){
    var randomName = Math.floor(Math.random()* namesList.length);
    var randomSurname = Math.floor(Math.random()* surnamesList.length);  
    container.innerHTML += `<div>${namesList[randomName] + " " +surnamesList[randomSurname]+ " "}</div><br>`;
}





