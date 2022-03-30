//1-IMPORT YOUR COMPONENTS
import Lists from '../comps/Lists'
//2-IMPORT YOUR DATA
import { headTitle, colorArr } from '../data/aboutcontent'

//3- OBJECTIVE: USE ABOUTCONTENT.JS TO GENERATE A HEADER on main page
//4- OBJECTIVE: MAKE A LIST OF YOUR FAV COLORS
export default function About () {
    return <div>
        <h1>{headTitle}</h1>
        <Lists arr={colorArr}/>
    </div>
}



