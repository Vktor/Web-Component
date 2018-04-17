class Busqueda extends HTMLElement {
    constructor(){
        super();
      //  this.importDocument = document.currentScript.ownerDocument;
      let input = this.input;
      //let autoComp = this.autoComp;
      let autocomplete_results = this.autocomplete_results;
    }
    connectedCallback(){
        let shadowRoot = this.attachShadow({mode:'open'});
        shadowRoot.innerHTML =  `
        <div id="autocomplete-container">  
            <input type="text" autofocus="true" name="autofocus sample" placeholder="search people" id="autocomplete-input"></input>
            <ul id="autocomplete-results">
            </ul>
        </div>

        <script>

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






        obtenerPath('https://jsonplaceholder.typicode.com/users');
        cumpliendoPromesa('name');










        var input = document.querySelector('input');
        autocomplete(val) {
            var people_return = [];
     
            for (let i = 0; i < soloArreglo.length; i++) {
                if (val === soloArreglo[0].slice(0, val.length)) {
                people_return.push(soloArreglo[0]);
                }
            }
        return people_return;
        };


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
        </script>


        
        `;
 





    };


 
 // events
 evento(input){

    }
}






window.customElements.define('webcomp-busqueda', Busqueda);