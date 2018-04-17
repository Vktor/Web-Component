datajson = [];
people = [];

function obtenerPath(ruta){
    
    fetch(ruta)  //Realiza la peticion
        .then(r => r.json()) //convierte el response de la promesa en tipo json
        .then(data =>{
            //console.log(data);
            datajson = data;
        }) //manda el json a la consola / ahora lo manda a la variable datajson
        .catch(e => console.error('Algo salio mal')); //en caso de error en el servidor
}
obtenerPath('https://jsonplaceholder.typicode.com/users');

setTimeout(()=>{
    console.log("tiempo 1seg");
    console.log(datajson);
    console.log(datajson[0]['name']);
}, 1000);

setTimeout(()=>{
    console.log("tiempo 3seg");
    for(let i=0; i<10;i++){
        console.log(datajson[0]['name']);
        people[i] = datajson[i]['name'];
    }
    
}, 3000);