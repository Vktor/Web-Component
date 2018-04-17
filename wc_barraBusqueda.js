class Busqueda extends HTMLElement {
    constructor(){
        super();
      //  this.importDocument = document.currentScript.ownerDocument;
      this.input = this.input;
    }
    connectedCallback(){
        let shadowRoot = this.attachShadow({mode:'open'});
        shadowRoot.innerHTML =  `
        <div id="autocomplete-container">  
            <input type="text" autofocus="true" name="autofocus sample" placeholder="search people" id="autocomplete-input"></input>
            <ul id="autocomplete-results">
            </ul>
        </div>
        `;
        this.input = document.querySelector('input');
    };


    autocomplete(val) {
        var people_return = [];
 
        for (i = 0; i < soloArreglo.length; i++) {
            if (val === soloArreglo[i].slice(0, val.length)) {
            people_return.push(soloArreglo[i]);
            }
        }
    return people_return;
    };
 
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
}






window.customElements.define('webcomp-busqueda', Busqueda);