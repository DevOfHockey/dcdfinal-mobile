
import '../styles/globals.css'
import '../styles/menubar.css'
import styles from "../styles/Home.module.css"
import FlowerTopRight from "../comps/flower"; //use app.js to import this all pages!


function MyApp({ Component, pageProps }) {
  return (
  <>
    <Component {...pageProps} />
    <FlowerTopRight/>
  </>
  )
}
export default MyApp
