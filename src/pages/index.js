import * as React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import About from "../components/About"
export default function IndexPage() {
  return (
    <Layout>
      <Hero/>
      <About/>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>
