import Menubar from '../comps/menubar';
import '../styles/globals.css'
import '../styles/menubar.css'
import styles from "../styles/Home.module.css"
import FlowerTopRight from '../comps/flower'; //important! to import


function MyApp({ Component, pageProps }) {
  return (
  <>
    <Component {...pageProps} />
    <FlowerTopRight/>
    <Menubar />
  </>
  )
}
export default MyApp
