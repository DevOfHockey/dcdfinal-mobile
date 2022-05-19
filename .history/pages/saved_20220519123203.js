import { savedImgs, savedTxt } from "../data/saveditems";
import LinearImgs from "../comps/linearimgs";
import SavedTxt from "../comps/savedtext";
import Fade from 'react-reveal/Fade';

export default function Saved() {
    return <div className="pagetitle">
    <h1 className="header">Saved</h1>
    <p className="subheading">Get back to your list of favorite <br/> fashion hacks and tips</p>

    <Fade bottom>
    <div className="savedImgs">
        <LinearImgs arr={savedImgs} /> 
        <SavedTxt arr={savedTxt} />
    </div>
    </Fade>

    </div>
}