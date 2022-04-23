import styled from "styled-components";
// import {useRouter} from "next/router";

const FunctionName = styled.div`
  display: block;`
;

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Component {...pageProps} /> 
  </>
  )
}

export default MyApp
