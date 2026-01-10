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
    title="Tentang Pondok Pesantren Al-itthad"
    description="Tentang Pondok Pesantren Al-Ittihad Cirumpak, sejarah berdiri, visi misi, serta komitmen dalam mencetak generasi Islami yang berakhlak dan berwawasan luas."
  />
)
