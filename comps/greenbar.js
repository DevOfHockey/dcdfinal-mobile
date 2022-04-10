//MUST HAVE - CREATE A TEMPLATE TAG
var template_greenbar = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_greenbar.innerHTML = `
<style>
.green{
font-family: 'Open Sans';
font-style: normal;
width: 340px;
height: 120px;
font-weight: 700;
font-size: 24px;
line-height: 33px;
display: flex;
justify-content:center;
align-items: center;
text-align: center;
border-radius: 60px;
color: white;
background-color:#45602B;
}

</style>

<div class="green">
About Revived
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class Greenbar extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_greenbar.content.cloneNode(true)); //use the template to make a clone
        if(this.getAttribute("text")){
            this.shadowRoot.querySelector(".green").innerText = this.getAttribute("text");
          }
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("green-bar", Greenbar)