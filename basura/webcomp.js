//componente para busqueda con autocompletado

class Busqueda extends HTMLElement {
    constructor(){
        super();
    }
    connectedCallback(){
    let shadowRoot = this.attachShadow({mode:'open'})
    shadowRoot.innerHTML = `  
            <div>
                <button> Comprar Ahora</button>
            </div>
       ` 
    }

}
let eljson;
let elArray = [];

 function obtenerPath(ruta){
    
    fetch(ruta)  //Realiza la peticion
        .then(r => r.json()) //convierte el response de la promesa en tipo json
        .then(data =>{
            //console.log(data);
            eljson = data;
        }) //manda el json a la consola
        .catch(e => console.error('Algo salio mal')); //en caso de error en el servidor
}



obtenerPath('https://jsonplaceholder.typicode.com/users');

window.customElements.define('webcomp-busqueda', Busqueda)