import Menubar from "../comps/menubar";
import { savedImgs, savedTxt } from "../data/saveditems";
import LinearImgs from "../comps/linearimgs";
import SavedTxt from "../comps/savedtext";

export default function Saved() {
    return <div class="pagetitle">
<<<<<<< HEAD

=======
>>>>>>> f92188f6178f34b2de8f1985b9d252c2ddf64dd0
    <h1 class="header">Saved</h1>
    <p class="subheading">Get back to your list of favorite fashion hacks and tips</p>

    <div class="savedImgs">
        <LinearImgs arr={savedImgs} />
        <SavedTxt arr={savedTxt} />
    </div>

    <Menubar />
    </div>
}