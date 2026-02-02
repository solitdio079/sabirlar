import React, { useState, useEffect } from "react"
import SplashScreen from "./SplashScreen"

const RootWrapper = ({ children }) => {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 2000) // splash duration

    return () => clearTimeout(timer)
  }, [])

  if (showSplash) {
    return <SplashScreen />
  }

  return <>{children}</>
}

export default RootWrapper
