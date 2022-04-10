//MUST HAVE - CREATE A TEMPLATE TAG
var template_bodytext = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_bodytext.innerHTML = `
<style>
.body{
font-family: 'Open Sans';
font-style: normal;
width: 321px;
height: 82px;
font-weight: 400;
font-size: 18px;
line-height: 137.19%;
display: flex;
left: 43px;
top: 476px;
width: 321px;
height: 82px;
}

</style>

<div class="body">
Revived
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class Bodytext extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_bodytext.content.cloneNode(true)); //use the template to make a clone
        if(this.getAttribute("text")){
            this.shadowRoot.querySelector(".body").innerText = this.getAttribute("text");
          }
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("body-text", Bodytext)