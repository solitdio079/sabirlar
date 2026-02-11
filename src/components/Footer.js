import * as React from "react" 

import logo from "../images/logo.png"
import { Link } from "gatsby"
export default function Footer(){
    return (<>
    <footer className="footer bg-base-200/60 p-10">
  <aside className="gap-6">
    <div className="flex items-center gap-2 text-xl font-bold text-base-content">
     
      <Link to="/"><img src={logo} className="w-24" /></Link>
    </div>
    <p className="text-base-content text-sm">Most developer friendly & highly <br />customisable Tailwind UI Kit. </p>
  </aside>
  <nav className="text-base-content">
    <h6 className="footer-title">Services</h6>
    <a href="#" className="link link-hover">Branding</a>
    <a href="#" className="link link-hover">Design</a>
    <a href="#" className="link link-hover">Marketing</a>
    <a href="#" className="link link-hover">Advertisement</a>
  </nav>
  <nav className="text-base-content">
    <h6 className="footer-title">Company</h6>
    <a href="#" className="link link-hover">About us</a>
    <a href="#" className="link link-hover">Contact</a>
    <a href="#" className="link link-hover">Jobs</a>
    <a href="#" className="link link-hover">Press kit</a>
  </nav>
  <nav className="text-base-content">
    <h6 className="footer-title">Legal</h6>
    <a href="#" className="link link-hover">Terms of use</a>
    <a href="#" className="link link-hover">Privacy policy</a>
    <a href="#" className="link link-hover">Cookie policy</a>
  </nav>
</footer>
    </>)
}