export default function Newsletter() {
  return (
    <section className="relative">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20 flex justify-center">

          <div className="grow relativee bg-[rgb(64,41,85)] rounded py-10 px-8 md:py-16 md:px-12 max-w-3xl overflow-hidden" style={{boxShadow: '0 0px 7px -2px rgba(0, 0, 0, 0.6)'}} data-aos="zoom-y-out">
            <div className="relative flex flex-col lg:flex-row justify-between items-center">

              <div className="text-center lg:text-left">
                <h3 className="h3 text-white mb-2">Join the Digitalage Community  </h3>
                <p className="text-gray-300 text-md mb-6">We invite creators, consumers, partners and investors to help us reinvent social media technology for good. Sign up today to receive updates and early access.</p>

                <div className="w-full flex justify-center pt-8 pb-2">
                  <a className="btn text-white border-[1px] border-[rgb(157,108,217)] bg-transparent transition duration-300 hover:bg-[rgb(84,61,105)] shadow" href="/signup">Join Digitalage Now</a>
                </div>
                <p className="text-sm text-gray-400 mt-3">By building an ethical platform focused on transparency and putting principles first, Digitalage aims to restore trust in social systems and online communities. The future starts now - join us.</p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}