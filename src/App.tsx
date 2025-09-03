import { Card } from "./components/Card"
import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"
import { KeyPoints } from "./components/KeyPoints"
import { Services } from "./components/Services"
import { Contact } from "./components/Contact"
import { OurWork } from "./components/Work"


function App() {


  return (
    <>
     <Navbar />
     <div id="home"><Hero/></div>
     <div id = "about"><Card/></div>
     <div ><KeyPoints/></div>
     <div id="our-work"><OurWork/></div>
     <div id="services"><Services/></div>
     <div id="contact"><Contact/></div>
    </>
  )
}

export default App
