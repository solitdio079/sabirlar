import * as React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import About from "../components/About"
import SliderText from "../components/SliderText"
import Services from "../components/Services"
import Choose from "../components/Choose"
import IconBanner from "../components/IconBanner"
import Team from "../components/Team"
import Process from "../components/Process"
import FAQ from "../components/FAQ"
import Seo from "../components/Seo"
import HeroYoutubeBg from "../components/HeroVideo"
export default function IndexPage() {
  return (
    <Layout>
      <HeroYoutubeBg/>
      <About/>
      <SliderText/>
      <Services/>
      <Choose/>
      <IconBanner/>
      <Team/>
      <Process/>
      <FAQ/>
    </Layout>
  )
}

export const Head = () => <Seo title={"Ana Sayfa"} />;
