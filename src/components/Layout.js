import * as React from "react"
//import {Link} from "gatsby"
//import logo from "./logo.png"
import Navbar from "./Navbar"
import Footer from "./Footer"
import ObserverProvider from "./ObserverProvider.js"
const Layout = ({children}) => {
    return (
      <div data-theme="perplexity">
        <ObserverProvider>
        <Navbar/>
        {children}
        <Footer/>
        <a href="https://wa.me/905326861522" target="_blank" className="btn fixed btn-xl bottom-6 right-6 btn-circle btn-gradient btn-success" aria-label="Circle Gradient Icon Button"> <span className="icon-[tabler--brand-whatsapp] size-10 shrink-0"></span></a>
        </ObserverProvider>
      </div>
    )
}

export default Layout