import { Phone, WhatsApp, Email, Send } from "@mui/icons-material"
import "./contact.css"


const Contact = () => {
  return (
    <section className="section sec6 contact" id="contact">
      <div className="contactWrapper">
        <img src="assets/undraw_Business_deal_re_up4u.png" alt="" className="contactsvg" />
        <div className="contactinfo">
          <h1>Contacts</h1>
          <div className="info">
            <div>
              <Phone className="headicons" />
              <span> (+233)246 027 872 </span>
            </div>
            <div>
              <WhatsApp className="headicons" />
              <span> (+233)246 027 872</span>
            </div>
            <div>
              <Email className="headicons" />
              <span> aliarafatyassin@gmail.com</span>
            </div>
            <form method="POST">
            <div className='confrm'>
              <input type="text" className="emailfrm" placeholder="example@gmail.com" />
              <button><Send /> </button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact