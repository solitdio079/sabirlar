import * as React from "react";
import Seo from "../components/Seo";
import Breadcrumb from "../components/Breadcrumb";
import Layout from "../components/Layout";
import AboutCard from "../components/AboutCard";
import AboutAvatars from "../components/AboutAvatars";
import About from "../components/About";
import Process from "../components/Process";
import Team from "../components/Team";
export default function AboutPage() {
  return (
    <>
      <Layout>
        <Breadcrumb title={"Hakkımızda"} />
        <AboutCard/>
        <AboutAvatars/>
        <About/>
        <Process/>
        <Team/>
      </Layout>
    </>
  );
}

export const Head = () => <Seo title={"Hakkımızda"} />;
