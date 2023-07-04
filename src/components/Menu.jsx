
import Image from 'next/image'
import Link from 'next/link';

import Logo from "../images/logo1.png";
import En from "../images/united-kingdom.png"; 
import Fr from "../images/france.png"; 

export default function Menu() {
    return (
      <div className="Menu">
        <Link href="#home" className="MenuLogoContainer">
          <div className="MenuImg">
              <Image className="LogoImg" src={Logo} alt=""/>
          </div>
          <p className="LogoTitle">Fillgood</p>
        </Link>

        <div className="MenuItemContainer">
            <Link href="#product" className="MenuItem">Product</Link>
            <Link href="#sports" className="MenuItem">Sports</Link>
            <Link href="#roadmap" className="MenuItem">Roadmap</Link>
            <Link href="#team" className="MenuItem">Team</Link>
            <Link href="#contact" className="MenuItem">Waitlist</Link>
            <div className="dropdown" >
              <button  className="MenuItem dropbtn" >Litepaper</button>
              <div className="dropdown-content">
                <a href="../Fillgood_Token_Lite_Paper_EN.pdf" target='_blank' rel='noopener noreferrer'>
                  <Image className="country" src={En} alt=""/>
                </a>
                <a href="../Fillgood_Token_Lite_Paper_FR.pdf" target='_blank' rel='noopener noreferrer'>
                  <Image className="country" src={Fr} alt=""/>
                </a>
              </div>
            </div>

        </div>
        <div className="ConnectButton"> 
            {/* <ConnectButton /> */}
        </div>

      </div>
    );
  };
