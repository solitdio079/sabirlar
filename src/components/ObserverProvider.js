import { Observer } from "tailwindcss-intersect";
//import { useEffect } from "react";
import * as React from "react"
 
export default function ObserverProvider({
  children,
}) {
  React.useEffect(() => {
    Observer.start();
  }, []);
 
  return <>{children}</>;
}