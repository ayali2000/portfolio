import "./work.css"
import { mydata } from "../../data"
import { useState } from "react"

const Works = () => {
  const [ workimg , setWorkimg ] = useState(3)
  function lArrow() {
    setWorkimg(workimg === 0 ? mydata.length - 1 : workimg - 1)
  }

  function rArrow() {
    setWorkimg(workimg === mydata.length-1 ? 0 : workimg + 1)
  }

  let url = mydata[workimg].phone

  return (
    <section className="section work" id="works">
      <div className="workWrapper">
        <div className="Arrow lArrow" onClick={lArrow}></div>
        <img src={ url } alt="" className="workimg" />
        <div className="Arrow rArrow" onClick={rArrow}></div>
      </div>
    </section>
  )
}

export default Works