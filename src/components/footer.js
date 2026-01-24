import { Link } from "gatsby"
import React from "react"

import logo from "../images/logo_alittihad.png"

const Footer = () => {
  return (
    <div className="m-4">
      <div className="max-w-7xl mx-auto mt-10 h-auto lg:mb-8 sm:mb-4 xs:mb-4 xxs:mb-4">
        <div className="footer bg-gradient-to-r from-pink to-purple p-10 mt-10 rounded-xl">
          <div className="grid grid-cols-2 xxs:grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* LEFT CONTENT */}
            <div>
              <img
                className="max-h-28 max-w-xs"
                src={logo}
                alt="Pondok Pesantren Al Ittihad"
              />

              <div className="text-black opacity-70 text-sm mt-5">
                <p>
                  Pondok Pesantren<br />
                  <strong>AL ITTIHAD</strong>
                </p>

                <a
                  href="https://www.google.com/maps/place/VCPW%2BQPH,+Cirumpak,+Kronjo,+Tangerang+Regency,+Banten+15550"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-2 hover:underline"
                >
                  Cirumpak<br />
                  Kronjo, Kab. Tangerang<br />
                  Banten 15550
                </a>
              </div>

              {/* GOOGLE MAPS VIEW */}
              <div className="mt-4 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  title="Lokasi Pondok Pesantren Al Ittihad"
                  src="https://www.google.com/maps?q=VCPW+QPH+Cirumpak+Kronjo+Tangerang+Banten+15550&output=embed"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <p className="text-black font-montserrat font-semibold mt-6">
                &copy; {new Date().getFullYear()} Cirumpak
              </p>

              <div className="text-black font-bold mt-2">
                <a className="block" href="/">
                  Pondok Pesantren Al Ittihad
                </a>

                <a
                  href="https://github.com/lilxyzz/holo-theme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2"
                >
                  <img
                    className="w-5 h-5"
                    src="/img/gatssby.icon.png"
                    alt="GitHub"
                  />
                </a>
              </div>
            </div>

            {/* RIGHT MENU */}
            <div className="place-self-end self-center xxs:hidden lg:block">
              <ul className="text-xl font-montserrat font-medium space-y-2">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
