import leftArrow from "/icons/arrow-left-bold.svg"
import rightArrow from '/icons/arrow-right-bold.svg'
import stars from '/icons/stars.svg'
import verified from '/icons/green-verification.svg'

const Testimonial = () => {
  return (
    <div>

      <div className="flex items-center justify-between p-10 bg--200">
        <h1 className="text-[45px] font-[1000]">OUR HAPPY CUSTOMERS</h1>
        <div className="flex flex-row justify-space">
            <button className="hover:px-3 hover:rounded-full hover:bg-white "><img src={leftArrow} alt="Left Arrow" /></button>
            <button className="hover:px-3 hover:rounded-full hover:bg-white "><img src={rightArrow} alt="Right Arrow" /></button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center p-10 gap-6">
        <img src={stars} alt="ratings"/>
        <h2 className="text-center text-gray-500 text-[20px] max-w-[600px]">
          TOSIN L. <img src={verified} alt="verified"/>
        </h2>
        
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-gray-500">comments</p>
        </div>
      </div>

    </div>
  )
}

export default Testimonial