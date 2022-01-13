import '../styles/globals.css'
import Script from 'next/script'
import Head from 'next/head'

const MyApp = ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />
  </>
)

export default MyApp
