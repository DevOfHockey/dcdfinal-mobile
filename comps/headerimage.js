//MUST HAVE - CREATE A TEMPLATE TAG
var template_headerimage = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_headerimage.innerHTML = `
<style>
.image{
width: 338px;
height: 240px;
font-weight: 700;
display: flex;
justify-content:center;
align-items: center;
background: url();
border-radius: 24px;
background-color:pink;
border: 1px solid rgba(142, 142, 142, 0.5);
}

</style>

<div class="image">
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class Headerimage extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_headerimage.content.cloneNode(true)); //use the template to make a clone
        if(this.getAttribute("text")){
            this.shadowRoot.querySelector(".image").innerText = this.getAttribute("text");
          }
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("header-image", Headerimage)