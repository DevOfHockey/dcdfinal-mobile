//MUST HAVE - CREATE A TEMPLATE TAG
var template_clothingimage = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_clothingimage.innerHTML = `
<style>
.image{
width: 160px;
height: 175px;
font-weight: 700;
display: flex;
justify-content:center;
align-items: center;
background: url();
border: 1px solid rgba(142, 142, 142, 0.5);
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
border-radius: 15px;
background-color:pink;
}

</style>

<div class="image">
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class Clothingimage extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_clothingimage.content.cloneNode(true)); //use the template to make a clone
        if(this.getAttribute("text")){
            this.shadowRoot.querySelector(".image").innerText = this.getAttribute("text");
          }
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("clothing-image", Clothingimage)