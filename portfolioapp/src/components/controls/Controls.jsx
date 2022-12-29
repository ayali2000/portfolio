import "./controls.css"
import { useState } from "react"
import { ContactEmergency, Home, TextsmsTwoTone, Work, WorkHistory } from "@mui/icons-material"
import { motion } from "framer-motion"

const Controls = () => {
  const [ checkActive, setCheckActive ] = useState("#intro")
  const [controls ] = useState([{
    href:"#intro",
    className: "control control-1",
    icon: <Home />,
  },
  {
    href:"#portfolio",
    className: "control control-2",
    icon: <WorkHistory />
  },
  {
    href:"#works",
    className: "control control-3",
    icon: <Work />
  },
  {
    href:"#testimonial",
    className: "control control-4",
    icon: <ContactEmergency />
  },
  {
    href:"#contact",
    className: "control control-5",
    icon: <TextsmsTwoTone />
  },
])

  function active(param) {
    setCheckActive(param)
  };
  
  return (
    <motion.div
    initial = {{ x: 100 }}
    animate = {{ x:0 }}
    transition ={{ duration: 1 }}
    class="controls">
      {controls.map((item) => (
         <a href={item.href} key={item.href}>
            <div className={item.className} data-id="home" onClick={() => active(item.href)} style={{ backgroundColor: checkActive === item.href ? "#27AE60" : "", color:"#454e56" }}>
              {item.icon}
            </div>
          </a>
      ))}
    </motion.div>
  )
}

export default Controls