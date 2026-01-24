import * as React from "react"
import Footer from "./footer"
import Navbar from "./navbar"

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/6285545131173"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat WhatsApp"
          className="w-14 h-14 rounded-full
                     bg-[#25D366] text-white
                     flex items-center justify-center
                     shadow-lg
                     hover:bg-[#1EBE5D]
                     transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8"
          >
            <path d="M20.52 3.48A11.91 11.91 0 0012.01 0C5.38 0 .02 5.36.02 11.99c0 2.11.55 4.17 1.6 6l-1.7 6.2 6.35-1.67a11.94 11.94 0 005.75 1.46h.01c6.63 0 12-5.36 12-11.99a11.9 11.9 0 00-3.51-8.51zM12.02 21.5a9.45 9.45 0 01-4.82-1.32l-.35-.21-3.77.99 1.01-3.68-.23-.38a9.44 9.44 0 118.16 4.6zm5.17-7.1c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.6.14-.18.28-.7.9-.86 1.09-.16.18-.32.21-.6.07-.28-.14-1.17-.43-2.23-1.37-.82-.73-1.37-1.63-1.53-1.9-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.35-.02-.5-.07-.14-.6-1.44-.82-1.97-.22-.53-.44-.46-.6-.47-.16-.01-.35-.01-.53-.01-.18 0-.46.07-.7.35-.25.28-.92.9-.92 2.2 0 1.3.95 2.55 1.09 2.73.14.18 1.87 2.86 4.53 4.01.63.27 1.12.43 1.5.55.63.2 1.2.17 1.65.1.5-.07 1.65-.67 1.88-1.32.23-.64.23-1.2.16-1.32-.07-.12-.25-.18-.53-.32z" />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default Layout