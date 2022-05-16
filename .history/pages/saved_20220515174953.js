import Menubar from "../comps/menubar";
import { savedImgs, savedTxt } from "../data/saveditems";
import LinearImgs from "../comps/linearimgs";
import SavedTxt from "../comps/savedtext";
import Fade from 'react-reveal/Fade';

export default function Saved() {
    return <div class="pagetitle">
    <Fade bottom>
    <h1 class="header">Saved</h1>
    <p class="subheading">Get back to your list of favorite <br/> fashion hacks and tips</p>
    </Fade>

    <Fade bottom>
    <div class="savedImgs">
        <LinearImgs arr={savedImgs} /> 
        <SavedTxt arr={savedTxt} />
    </div>
    </Fade>
    <Menubar />
    </div>
}