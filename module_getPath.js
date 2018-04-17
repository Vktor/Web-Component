//Encargado de llenar arreglos proviniente de los json obtenidos de las peticiones get

let datajson = []; //arreglo de objetos obtenidos del json
let soloArreglo = []; //arreglo con los nombres a sugerir en el buscador

function obtenerPath(ruta){
    fetch(ruta)  //Realiza la peticion
        .then(r => r.json()) //convierte el response de la promesa en tipo json
        .then(data =>{
            datajson = data; // ahora lo manda al arreglo datajson
        }) 
        .catch(e => console.error('Algo salio mal')); //en caso de error en el servidor
    }

function cumpliendoPromesa(extra){ //extra en caso de ser matriz
    setTimeout(()=>{ //se le hace espera para la respuesta del servidor
        if(extra!= null){
        console.log("tiempo 0.5seg");
            for(let i=0; i<10;i++){
                soloArreglo[i] = datajson[i][extra]; //se llena el arreglo con los nombres a sugerir
            }
        }else{
            for(let i=0; i<10;i++){
                soloArreglo[i] = datajson[i]; //se llena el arreglo con los nombres a sugerir
            }
        }
    }, 500);
}

// PARA TEST 
/*
obtenerPath('https://jsonplaceholder.typicode.com/users');
cumpliendoPromesa('name'); //en este caso se busca el valor "name" que esta dentro de cada objeto en el array 

ESTRUCTURA DEL JSON (ARREGLO)
  {
    "id": 1,
    "name": "Leanne Graham", <-- Se genera la lista de nombres y se guarda en soloArreglo
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }

*/