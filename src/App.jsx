import './App.css'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Header from "./Components/Header/Header"
import Hero from './Components/Hero/Hero'
import Products from './Components/Products/Products'
import Services from './Components/Services/Services'
import Testimonials from './Components/Testimonials/Testimonials'


function App() {

  return (
   <div className='container'>
    <Header />
    <Hero />
    <About />
    <Services />
    <Products />
    <Testimonials />
    <Contact />
    <Footer />
   </div>
  )
}

export default App
