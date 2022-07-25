import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import {useState, useEffect }from "react"
//component
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";

const MyApp = ({ Component, pageProps }: AppProps) => {

  const [isSSR, setisSSR] = useState(true);

  useEffect(() => {
    setisSSR(false)
  }, [])
  
  if(isSSR) return null;

  return (
   <div>
     <Navbar/>
     <div className="app-container">
      <div className=".sidebar-container"><Sidebar/></div>
      <div className="content-container"><Component {...pageProps} /></div>
    </div>
   </div>
  )
}

export default MyApp
