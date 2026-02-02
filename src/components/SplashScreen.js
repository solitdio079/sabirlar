import React, { useEffect } from "react"
import logo from "../images/icon.png"
import {motion} from "framer-motion"
const SplashScreen = () => {


  return (
    <motion.div
    initial={{ opacity: 1 }}
    animate={{ opacity: 0 }}
    transition={{ delay: 1.5, duration: 0.5 }} className="flex w-full flex-col h-screen gap-3 justify-center items-center">
    <img src={logo} className="w-48 lg:w-96" alt="" />
    <span className="loading loading-ball"></span>

</motion.div>
  )
}

export default SplashScreen
