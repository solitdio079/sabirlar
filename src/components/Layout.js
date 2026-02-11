import * as React from "react"
//import {Link} from "gatsby"
//import logo from "./logo.png"
import Navbar from "./Navbar"
import Footer from "./Footer"
import ObserverProvider from "./ObserverProvider.js"
const Layout = ({children}) => {
    return (
      <div data-theme="light">
        <ObserverProvider>
        <Navbar/>
        {children}
        <Footer/>
        <a href="https://wa.me/905326330986" target="_blank" className="btn z-99 fixed btn-xl bottom-6 right-6 btn-circle btn-gradient btn-success" aria-label="Circle Gradient Icon Button"> <span className="icon-[tabler--brand-whatsapp] size-10 shrink-0"></span></a>
        </ObserverProvider>
      </div>
    )
}

export default Layout