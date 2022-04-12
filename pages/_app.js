import '../styles/globals.css'
import Menubar from '../comps/menubar'
import '../styles/menubar.css'

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Component {...pageProps} />
  <Menubar />
  </>
  )
}

export default MyApp
