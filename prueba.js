// variables
var input = document.querySelector('input');
//var people = ['john doe', 'maria', 'paul', 'george', 'jimmy'];
var people = [];
let datajson;
var results;


function obtenerPath(ruta){
    
    fetch(ruta)  //Realiza la peticion
        .then(r => r.json()) //convierte el response de la promesa en tipo json
        .then(data =>{
            //console.log(data);
            datajson = data;
        }) //manda el json a la consola / ahora lo manda a la variable datajson
        .catch(e => console.error('Algo salio mal')); //en caso de error en el servidor
}

function rellenarArray(){
    for(let i=0; i<=10;i++){
        people[i] = datajson[i]["name"];
    }
}


console.log("Hola");

window.onload = obtenerPath('https://jsonplaceholder.typicode.com/users');
//window.onload = rellenarArray();
//console.log(datajson[0]["name"]);

// functions
function autocomplete(val) {
   
  var people_return = [];

  for (i = 0; i < people.length; i++) {
    if (val === people[i].slice(0, val.length)) {
      people_return.push(people[i]);
    }
  }

  return people_return;
}
rellenarArray(); // LLAMO AL METODO PERO LA CONSOLA DICE QUE EL datajson ESTA VACIO (SINO SE LLAMA SI SE LLENA EL METODO)
// events
input.onkeyup = function(e) {
  input_val = this.value; // updates the variable on each ocurrence

  if (input_val.length > 0) {
    var people_to_show = [];

    autocomplete_results = document.getElementById("autocomplete-results");
    autocomplete_results.innerHTML = '';
    people_to_show = autocomplete(input_val);
    
    for (i = 0; i < people_to_show.length; i++) {
      autocomplete_results.innerHTML += '<li>' + people_to_show[i] + '</li>';

    }
    autocomplete_results.style.display = 'block';
  } else {
    people_to_show = [];
    autocomplete_results.innerHTML = '';
  }
}