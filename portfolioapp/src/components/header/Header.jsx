import "./header.css"
import { DarkMode, Email, Phone, WhatsApp } from '@mui/icons-material';

const Header = ({mode , setMode}) => {

  const changemode = () => {
     setMode(!mode)
  }  

  return (
     <header className={`header active ${!mode ? 'colormode':''}`} id="topbar">
        <div className="headerWrapper">
            <div className="headerleft">
                <h1 className="logo">Arafat</h1>
            </div>
            <div className="headercenter">
                <Phone className="headicons" />
                <span> (+233)246 027 872 </span>
                <WhatsApp className="headicons" />
                <span> (+233)246 027 872</span>
                <Email className="headicons" />
                <span> aliarafatyassin@gmail.com</span>
            </div>
            <div className="headerright" onClick={changemode}>
                <DarkMode style={{ cursor: 'pointer' }}/>
            </div>
        </div>
      </header>
  )
}

export default Header