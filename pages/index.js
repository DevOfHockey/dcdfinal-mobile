import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

// import Lists from '../comps/Lists'
import Lists, {Item, ListFooter}  from '../comps/Lists';

import {
  headTitle,
  homeArr
} from "../data/indexcontent"

export default function Home() {

  // var bag2 = [];
  // for (var i = 0; i<homeArr.length; i++) {
  //   bag2.push(<h3>{home.arr[i]}</h3>)
  // }

  return (
    <div className={styles.container}>
      <h1>{headTitle}</h1>
      {/* {bag2} */}
      {/* {homeArr.map((o,i)=><h3>{o}</h3>)} */}
      <Lists />
      
      <ul>
        <Item txt="My Items"/>
      </ul>

      <ListFooter />

      {/* go to /about page to view your page */}

    </div>
  )
}

//DELETE THIS COMMENT WHEN DONE: we can use this or really any file to start our final
