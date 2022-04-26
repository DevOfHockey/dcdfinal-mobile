import { savedImgs, savedTxt } from "../data/saveditems";
import LinearImgs from "../comps/linearimgs";
import SavedTxt from "../comps/savedtext";
import {HiArrowNarrowLeft} from 'react-icons/hi';
import {useRouter} from 'next/router';

export default function Saved() {
    const r = useRouter();
    return <div class="pagetitle">

    <div className="arrow" onClick={
            ()=>r.push("/shopping")
        }><HiArrowNarrowLeft size="45px" color="black" /></div>

    <h1 class="header">Saved</h1>
    <p class="subheading">Get back to your list of favorite fashion hacks and tips</p>

    <div class="savedImgs">
        <LinearImgs arr={savedImgs} />
        <SavedTxt arr={savedTxt} />
    </div>

    </div>
}