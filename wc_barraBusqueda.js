class Busqueda extends HTMLElement {
    constructor(){
        super();
    }
    connectedCallback(){
        let shadowRoot = this.attachShadow({mode:'open'});
        shadowRoot.innerHTML =  `
        <div id="autocomplete-container">  
            <input type="text" autofocus="true" name="autofocus sample" placeholder="search people" id="autocomplete-input"></input>
            <ul id="autocomplete-results">
            </ul>
        </div>
        `
    }
}

window.customElements.define('webcomp-busqueda', Busqueda);