import { savedImgs } from "../data/saveditems";
import LinearImgs from "../comps/linearimgs";

export default function Saved() {
    return <div class="pagetitle">
    <h1 class="header">Saved</h1>
    <p class="subheading">Get back to your list of favorite fashion hacks and tips</p>

    <div class="savedImgs">
        <LinearImgs arr={savedImgs} />
    </div>

    </div>
}