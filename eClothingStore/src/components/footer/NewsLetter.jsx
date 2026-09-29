
const NewsletterCard = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 sm:px-10 relative z-10 translate-y-1/2">
      <div className="bg-black rounded-[20px] p-6 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-6">
        
        <h3 className="text-3xl md:text-4xl font-black text-white font-serif tracking-tight leading-tight w-full lg:w-[55%] text-left">
          STAY UP TO DATE ABOUT OUR LATEST OFFERS
        </h3>

        <div className="w-full lg:w-[35%] flex flex-col gap-3">
          <div className="bg-white rounded-full px-4 py-3 flex items-center w-full">
            <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="bg-transparent text-sm text-black outline-none w-full"
            />
          </div>

          <button className="w-full bg-white text-black font-medium text-sm md:text-base py-3 rounded-full hover:bg-gray-100 transition-colors focus:outline-none">
            Subscribe to Newsletter
          </button>
        </div>

      </div>
    </div>
  )
}

export default NewsletterCard
