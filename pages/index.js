
import Navbar from "@/components/Navbar"
import Herosection from "@/components/Herosection"
import Contact from "@/components/Contact"
import Main from "@/components/Main"
import About from "@/components/About"
import Skills from "@/components/Skiils"
import Projects from "@/components/Projects"
import { Footer } from "@/components/Footer"
export default function Home() {
  return (
    <div>
   <Navbar/>
    <Main/>
    <Herosection />
    <About/>
    <Contact/>
    <Footer />
    </div>
    
  )
}
