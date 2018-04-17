var people = [];
let datajson;


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
    for(let i=0; i<10;i++){
        people[i] = datajson[i]["name"];
    }
}



console.log("Hola");
console.log(datajson);

window.onload = obtenerPath('https://jsonplaceholder.typicode.com/users');
//rellenarArray();

console.log("Adios");
console.log(datajson);

setTimeout(()=>{
    console.log("tiempo 3seg");
    rellenarArray();    
}, 100);