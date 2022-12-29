import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import Controls from "./components/controls/Controls";
import "./global.css"
import Portfolio from "./components/portfolio/Portfolio";
import Testimonial from "./components/testimonial/Testimonial";
import Works from "./components/works/Works";
import Contact from "./components/contacts/Contact";
import { useState } from "react"


function App() {

  const [ mode,setMode ] = useState(false)

  return (
    <>
    <main className="sections" style={{ backgroundColor: !mode ? '#454e56' : 'white' ,color: !mode && 'white' }}>
       <div className="blur"></div>
       <Header mode={mode}  setMode={setMode} />
       <Intro />
       <Portfolio />
       <Works />
       <Testimonial />
       <Contact />
    </main>
    <Controls />
    </>
  );
}

export default App;
