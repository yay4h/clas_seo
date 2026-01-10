import React from "react"
import Gallery from "../components/gallery-page"
import Layout from "../components/layout"
import Seo from "../components/seo"

const GalleryPage = () => {
  return (
    <Layout>
      <Seo
        title="Dokumentasi kegiatan Pondok Pesantren Al-Ittihad"
        description="Galeri kegiatan Pondok Pesantren Al-Ittihad Cirumpak yang menampilkan aktivitas santri, pembelajaran, kegiatan keagamaan, dan momen penting pesantren."
      ></Seo>
      <Gallery></Gallery>
    </Layout>
  )
}

export default GalleryPage
