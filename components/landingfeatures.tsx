
export default function LandingFeatures() {
  return (
    <section className="relative">

      {/* Illustration behind hero content */}
      <div className="w-full absolute brightness-50 top-0 pointer-events-none -z-1" aria-hidden="true">
        <img src="/images/digital_background1.png" className="h-[70vh] w-full md:h-[100vh] md:w-full"></img>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-32 md:pt-56 md:pb-72">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl text-gray-200 font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Unleash Your Potential on <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Digitalage</span></h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-300 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
                At Digitalage, we built an empowering platform for creators by creators. One where you retain ownership, receive fair compensation, and make meaningful connections with fans. Leave limitations behind - and unlock transformative success on Digitalage.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}