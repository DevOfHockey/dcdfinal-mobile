import '../styles/globals.css'
import Menubar from '../comps/menubar'
import '../styles/menubar.css'
import styles from "../styles/Home.module.css"



function MyApp({ Component, pageProps }) {
  return (
  <>
    <Component {...pageProps} />
     <Menubar></Menubar>
  </>
  )
}

export default MyApp
