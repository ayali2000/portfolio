import "./intro.css"
import { motion } from "framer-motion"
import { Download } from "@mui/icons-material"
import Typewriter from "typewriter-effect"

const Intro = () => {


  return (
    <section className="section sec2 intro" id="intro">
        <div className="introWrapper">
            <div className="introLeft">
                <div className="introdesign">
                    <motion.img 
                    initial = {{ x: '-70vw' }}
                    animate = {{ x: 0 }}
                    transition = {{ duration: 1 }}
                    src="assets/9iceme.jpg" alt="" className="introimg" />
                </div>
            </div>
            <div className="introRight">
                <h3>Hi There, My Name Is</h3>
                <motion.h1
                whileHover={{ scale:1.3, originX:0, color: "#27AE60"  }}
                transition = {{ type:'spring', stiffness:300 }}
                >Ali Arafat Yassin</motion.h1>
                <h3>I'm a <span style={{ color:"#27AE60" }}><Typewriter
                options={{
                  strings:["Web Developer","Graphic Designer", "Geomatic Engineer"],
                  autoStart:true,
                  delay:75,
                  loop:true,
                }}
                /></span></h3>
                <div className="cv">
                    <span className="cvtext"> Download cv</span>
                    <motion.div 
                    initial={{ x:0 }}
                    animate={{ x:100 }}
                    transition={{ duration:1.7,delay:0.5, type:'spring' }}
                    className="cvdownload">
                    <a href="assets/CV1.pdf">
                      <Download style={{ color:'black' }}/>
                    </a>
                    </motion.div>
                </div>
            </div>
        </div>
      </section>
  )
}

export default Intro