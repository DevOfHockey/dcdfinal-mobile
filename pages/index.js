
import Menubar from "../comps/menubar";
import HeaderImgs from "../comps/headerimage";
import GreenBar from "../comps/greenbar";
import styles from "../styles/Home.module.css";
import {headerImgs} from "../data/headimgs";
import {useRouter} from 'next/router';
import {HiArrowNarrowLeft} from 'react-icons/hi';



export default function Home(){
    const r = useRouter();

    return <div className={styles.main}>
        <div className="pagetitle">
        <h1 className="header">Home</h1>
        </div>
        <br />
        <HeaderImgs arr={headerImgs} />
         <br />
        <div onClick={
            ()=>r.push("/about")
        }><GreenBar name="About Revived" /></div>
        <div onClick={
            ()=>r.push("/about")
        }><GreenBar name="Fast Fashion Topics" /></div>
     
    </div>

    

} 

//We can begin however we wish here 
//Feel free to keep or delete the code below, we can refer to the code from week13-14 for organizing our components!
//Delete this comment after viewing - Liam


// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

// // import Lists from '../comps/Lists'
// import Lists, {Item, ListFooter}  from '../comps/Lists';

// import {
//   headTitle,
//   homeArr
// } from "../data/indexcontent"

// export default function Home() {

//   // var bag2 = [];
//   // for (var i = 0; i<homeArr.length; i++) {
//   //   bag2.push(<h3>{home.arr[i]}</h3>)
//   // }

//   return (
//     <div className={styles.container}>
//       <h1>{headTitle}</h1>
//       {/* {bag2} */}
//       {/* {homeArr.map((o,i)=><h3>{o}</h3>)} */}
//       <Lists />
      
//       <ul>
//         <Item txt="My Items"/>
//       </ul>

//       <ListFooter />

//       {/* go to /about page to view your page */}

//     </div>
//   )
// }


