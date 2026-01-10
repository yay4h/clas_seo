/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import Navbar from "./navbar"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <div>
      {/* NAVBAR */}
      <Navbar />

      {/* KONTEN HALAMAN */}
      <main>{children}</main>

      {/* FOOTER */}
      <Footer />

      {/* ICON WHATSAPP FLOATING */}
      <a
        href="https://wa.me/6285892401837"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg z-[9999]"
      >
        <img
          src="/wa-icon.png"
          alt="Chat WhatsApp"
          className="h-7 w-7"
        />
      </a>
    </div>
  )
}

export default Layout
