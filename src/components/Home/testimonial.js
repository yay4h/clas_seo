import React from "react"
import Fade from "react-reveal/Fade"

const Testimonial = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 mt-14 mb-14">
      <Fade bottom>
        <div className="w-full h-full flex flex-row justify-between align-middle bg-[url('/images/holographic-background.webp')] bg-cover bg-center p-12 rounded-lg xxs:flex-col xs:flex-col sm:flex-row xxs:p-5 lg:p-12">
          <div className="w-3/4 xxs:w-full xs:w-full backdrop-blur-sm bg-white/30 p-10 rounded-lg lg:p-10">
            <div className="text-black font-semibold text-xl xxs:text-s xxs:font-normal sm:text-xl font-notoserif">
              {/* "Al Miftahul Huda adalah tempat kegiatan keagamaan untuk masyarakat yang ingin belajar dan memperdalam ilmu agama dengan suasana yang santai dan nyaman. Di sini sering diadakan pengajian, dzikir, dan kegiatan yang membantu orang-orang lebih dekat kepada Allah." */}
            </div>
            <div className="mt-10">
              <h3 className="text-black text-2xl font-smibold"></h3>
              <p className="text-black text-sm font-semibold opacity-50"></p>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default Testimonial