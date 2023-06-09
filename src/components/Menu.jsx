
import Image from 'next/image'
import Link from 'next/link';

import Logo from "../images/logo1.png";
import En from "../images/united-states.png"; 
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
            <Link href="#product" className="MenuItem nodisplay">Product</Link>
            <Link href="#sports" className="MenuItem nodisplay">Sports</Link>
            <Link href="#roadmap" className="MenuItem nodisplay">Roadmap</Link>
            <Link href="#team" className="MenuItem nodisplay">Team</Link>
            <Link href="#waitlist" className="MenuItem nodisplay">Waitlist</Link>
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
{/*         <div className="ConnectButton"> 
            <ConnectButton />
        </div> */}

      </div>
    );
  };
