import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import AboutHeader from "../components/about/aboutHeader"
import AboutPage from "../components/about/aboutPage"
import AboutGrid from "../components/about/aboutGrid"
import AboutExtra from "../components/about/aboutExtra"

const About = () => {
  return (
    <Layout>
      <AboutHeader />
      <AboutPage />
      <AboutGrid />
      <AboutExtra />
    </Layout>
  )
}

export default About

// ⬇️ INI SATU-SATUNYA TEMPAT SEO DI GATSBY v5
export const Head = () => (
  <Seo
    title="Pondok Pesantren"
    description="Pondok Pesantren Al Ittihad sebagai lembaga pendidikan Islam yang membina generasi berilmu dan berakhlak mulia."
  />
)
