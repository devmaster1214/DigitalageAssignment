
export default function Difference() {
  return (
    <section className="relative">

      <div className="w-full absolute top-0 pointer-events-none -z-10" aria-hidden="true">
        <img src="/images/gradient.png" className="h-screen w-full object-cover"></img>
        <img src="/images/gradient.png" className="h-screen w-full object-cover"></img>
        <img src="/images/gradient.png" className="h-screen w-full object-cover"></img>
        <img src="/images/gradient.png" className="h-screen w-full object-cover"></img>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6"> 
        <div className="py-12 md:py-20 text-white">
          <h2 className="text-4xl text-center font-extrabold pb-16">The Digitalage Difference</h2>
          <div className="flex flex-col items-center jusitfy-center gap-12" data-aos="zoom-y-out" data-aos-delay="150">
            <div className="flex grow flex-col md:flex-row items-center justify-strech xl:gap-48 md:gap-24 gap-12">
              <div className="w-full flex-1 rounded-lg bg-[rgb(63,42,85)] overflow-hidden" style={{boxShadow: '0 0px 7px -2px rgba(0, 0, 0, 0.6)'}}>
                <div className="px-6 pt-8 pb-2">
                  <p className="text-2xl pb-8">User-Centric Design</p>
                  <p className="text-sm">&nbsp;&nbsp;Our interface and algorithms are built to serve user needs - not exploit them.</p>
                  <p className="text-sm">&nbsp;&nbsp;We enable authentic connections without manipulating recommendations or compromising privacy.</p>
                </div>
                <div className="w-full flex justify-end">
                  <img
                    src="/images/digital_background.png"
                    className="pt-3 w-[80%] h-56 object-cover"
                  />
                </div>
              </div>
              <div className="w-full flex-1 rounded-lg bg-[rgb(78,87,152)] overflow-hidden" style={{boxShadow: '0 0px 7px -2px rgba(0, 0, 0, 0.6)'}}>
                <div className="px-6 pt-8 pb-2">
                  <p className="text-2xl pb-8">Creator Economy</p>
                  <p className="text-sm">&nbsp;&nbsp;We offer creators unmatched opportunities to monetize content while retaining rights.</p>
                  <p className="text-sm">&nbsp;&nbsp;Our fair compensation models empower sustainable creator careers.</p>
                </div>
                <div className="w-full flex justify-end">
                  <img src="/images/digital_background3.png" className="pt-3 w-[80%] h-56 object-cover"></img>
                </div>
              </div>
            </div>
            <div className="flex grow flex-col md:flex-row items-center justify-strech xl:gap-48 md:gap-24 gap-12">
              <div className="w-full flex-1 rounded-lg bg-[rgb(42,29,55)] overflow-hidden" style={{boxShadow: '0 0px 7px -2px rgba(0, 0, 0, 0.6)'}}>
                <div className="px-6 pt-8 pb-2">
                  <p className="text-2xl pb-8">Decentralized Architecture</p>
                  <p className="text-sm">&nbsp;&nbsp;Our decentralized platform powered by blockchain ensures security, transparency and gives users control over their data.</p>
                </div>
                <div className="w-full flex justify-end">
                  <img src="/images/digital_background4.png" className="pt-3 w-[80%] h-56 object-cover"></img>
                </div>
              </div>
              <div className="w-full flex-1 rounded-lg bg-[rgb(115,72,56)] overflow-hidden" style={{boxShadow: '0 0px 7px -2px rgba(0, 0, 0, 0.6)'}}>
                <div className="px-6 pt-8 pb-2">
                  <p className="text-2xl pb-8">Content Authenticity</p>
                  <p className="text-sm">&nbsp;&nbsp;We leverage advanced analytics to authenticate content, counter disinformation, and promote accurate information across the platform.</p>
                </div>
                <div className="w-full flex justify-end">
                  <img src="/images/digital_background5.png" className="pt-3 w-[80%] h-56 object-cover"></img>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}