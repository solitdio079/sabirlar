import * as React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import About from "../components/About"
import SliderText from "../components/SliderText"
import Services from "../components/Services"
export default function IndexPage() {
  return (
    <Layout>
      <Hero/>
      <About/>
      <SliderText/>
      <Services/>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>
