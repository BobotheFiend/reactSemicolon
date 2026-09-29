import SignUp from "./signupBar/SignUp"
import NavBar from "./navBar/NavBar"
import Hero from "./hero/Hero"
import Brands from "./brands/Brands"
import Products from "./clothes/Products"
import BrowseDressStyle from "./browseDressStyle/BrowseDressStyle"
import Testimonial from "./testimonial/Testimonial"
import NewsletterCard from "./footer/NewsLetter"
import Footer from "./footer/BaseFooter"

const HomePage = () => {
  return (
    <>
        <SignUp/>
        <NavBar/>
        <Hero/>
        <Brands/>
        <Products/>
        <BrowseDressStyle/>
        <Testimonial/>
        <NewsletterCard/>
        <Footer/>
    </>
  )
}

export default HomePage