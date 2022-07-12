import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import {useState, useEffect }from "react"

const MyApp = ({ Component, pageProps }: AppProps) => {

  const [isSSR, setisSSR] = useState(true);

  useEffect(() => {
    setisSSR(false)
  }, [])
  
  if(isSSR) return null;

  return (
    <div className="app-container">
      Navbar
      <div className=".sidebar-container">Sidebar</div>
      <div className="content-container"><Component {...pageProps} /></div>
      
    </div>
  )
}

export default MyApp
