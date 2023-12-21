

export default function DigitalOffer() {
  return (
    <section className="relative">

      <div className="max-w-6xl mx-auto px-4 sm:px-6"> 
        <div className="pb-12 md:pb-20">
          <div className="flex flex-col items-center gap-16" data-aos="zoom-y-out" data-aos-delay="150">
            <h2 className="text-4xl text-bold">What Digitalage Offers You</h2>
            <div className="flex flex-row items-center justify-stretch gap-4">
              <div className="flex flex-col items-center justify-stretch gap-8">
                <h3 className="text-2xl text-center">All-in-One Content Toolkit</h3>
                <p className="text-xl text-center">Our integrated creation tools - from editing to effects, publishing to analytics - help streamline your workflow.</p>
              </div>
              <div className="self-stretch lg:w-1.5 lg:h-auto bg-blue-500"></div>
              <div className="flex flex-col items-center justify-stretch gap-8">
                <h3 className="text-2xl text-center">Subscription Services & Commerce</h3>
                <p className="text-xl text-center">Monetize content, offer exclusive access, and sell merchandise seamlessly. Memberships are frictionless for fans globally.</p>
              </div>
              <div className="self-stretch lg:w-1.5 lg:h-auto bg-blue-500"></div>
              <div className="flex flex-col items-center justify-stretch gap-8">
                <h3 className="text-2xl text-center">Sustainable Career Building</h3>
                <p className="text-xl text-center">Thrive long-term with our accelerated Network Program for ambitious creators invested in digital content careers.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}