
export default function Landing() {
  return (
    <section className="relative">

      {/* Illustration behind hero content */}
      <div className="w-full absolute brightness-50 top-0 pointer-events-none -z-1" aria-hidden="true">
        <img src="/images/digital_background.png" className="h-[70vh] w-full md:h-[100vh] md:w-full"></img>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-32 md:pt-56 md:pb-72">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl text-gray-200 font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">The future of <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">social media</span> starts now</h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-300 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
                Digitalage is pioneering a revolutionary social media platform centered around elevating creators, protecting individual rights, and cultivating authentic communities.
              </p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href="#0">Get started</a>
                </div>
                <div>
                  <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#0">Learn more</a>
                </div>
              </div>
            </div>
          </div>


        </div>

      </div>
    </section>
  )
}