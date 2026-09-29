import logo from '/icons/SHOP.CO.svg'

import x from '/icons/twitter.svg'
import insta from '/icons/instagram.svg'
import facebook from '/icons/facebook.svg'
import git from '/icons/github.svg'

import visa from '/icons/visa.svg'
import paypal from '/icons/paypal.svg'
import mscard from '/icons/mastercard.svg'
import gpay from '/icons/googlepay.svg'
import applepay from '/icons/applepay.svg'



const Footer = () => {
  return (
    <footer className="w-full bg-[#F0F0F0] pt-36 pb-10 px-4 sm:px-10">
      <div className="max-w-[1240px] mx-auto w-full flex flex-col gap-10">
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 w-full border-b border-gray-200 pb-10">
          
          <div className="col-span-2 flex flex-col gap-4">
            <img src={logo} alt="SHOP.CO LOGO" className="w-45" />
            <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
              We have clothes that suits your style and which you're proud to wear. From women to men.
            </p>
            <div className="flex items-center gap-3 mt-2 text-black">
              {[<img src={x} alt="twitter" />, <img src={facebook} alt="facebook" />, <img src={insta} alt="instagram" />, <img src={git} alt="github" />].map((emoji, idx) => (
                <span key={idx} className="w-7 h-7 bg-white rounded-full flex items-center justify-center border border-gray-200 text-xs shadow-sm cursor-pointer hover:bg-gray-50">
                  {emoji}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-sm font-bold uppercase tracking-wider text-black mb-4">Company</h5>
            <ul className="flex flex-col gap-2.5 text-sm text-gray-500 font-normal">
              <li><a href="#about" className="hover:text-black transition-colors">About</a></li>
              <li><a href="#features" className="hover:text-black transition-colors">Features</a></li>
              <li><a href="#works" className="hover:text-black transition-colors">Works</a></li>
              <li><a href="#career" className="hover:text-black transition-colors">Career</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-bold uppercase tracking-wider text-black mb-4">Help</h5>
            <ul className="flex flex-col gap-2.5 text-sm text-gray-500 font-normal">
              <li><a href="#support" className="hover:text-black transition-colors">Customer Support</a></li>
              <li><a href="#delivery" className="hover:text-black transition-colors">Delivery Details</a></li>
              <li><a href="#terms" className="hover:text-black transition-colors">Terms & Conditions</a></li>
              <li><a href="#privacy" className="hover:text-black transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-bold uppercase tracking-wider text-black mb-4">FAQ</h5>
            <ul className="flex flex-col gap-2.5 text-sm text-gray-500 font-normal">
              <li><a href="#account" className="hover:text-black transition-colors">Account</a></li>
              <li><a href="#deliveries" className="hover:text-black transition-colors">Manage Deliveries</a></li>
              <li><a href="#orders" className="hover:text-black transition-colors">Orders</a></li>
              <li><a href="#payments" className="hover:text-black transition-colors">Payments</a></li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full text-sm text-gray-500">
          <p>Shop.co © 2000-2023, All Rights Reserved</p>
          
          <div className="flex items-center gap-2">
            <img src={visa} alt="Visa" className="" />
            <img src={paypal} alt="PayPal" className="" />
            <img src={mscard} alt="MasterCard" className="" />
            <img src={gpay} alt="Google Pay" className="" />
            <img src={applepay} alt="Apple Pay" className="" />

          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
