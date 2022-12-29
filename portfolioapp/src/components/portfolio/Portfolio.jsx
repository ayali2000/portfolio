import './portfolio.css'
import { mydata } from "../../data"
import { useState } from 'react'
import { GitHub, Link } from '@mui/icons-material'

const Portfolio = () => {
  const [ portbutt, setPortbutt ] = useState("Heloo")
  const butlist = [{
    text: "Heloo"
  },
  {
    text: "wudhjs" 
  },
  {
    text: "wuyd" 
  },
  {
    text: "wuyyhd" 
  },
  {
    text: "w8iw" 
  }
]

const selectitem = (text) => {
  setPortbutt(text)
}

  return (
    <section className="section sec3 portfolio" id="portfolio">
      <div className="portfolioWrapper">
        <h1 className="portfoliohead">Portfolio</h1>
        <nav className="ports">
          <ul>
            {butlist.map((each) => (
            <li onClick={() => selectitem(each.text)} style ={{ backgroundColor: portbutt === each.text && '#27AE60', color:portbutt === each.text ? 'white' : "black" }} >{ each.text }</li>
          ))}
          </ul>
        </nav>
        <div className="row row-cols-lg-4 row-cols-1 row-cols-md-3 row-cols-sm-2 portitemsWrapper">
          {mydata.map((each) => (
            <div className="col col-lg-3 col-md-5 col-sm-5 col-11 portitem">
              <img src={each.phone} alt="" className="portimg" />
              <div className="hov">
                <a href="#"><GitHub className='git'/></a>
                <a href="#"><Link className='git'/></a>
              </div>
          </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio