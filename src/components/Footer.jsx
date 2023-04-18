
import Image from 'next/image'
import Link from 'next/link';

import Logo from "../images/logo2.png"

export default function Footer() {
    return (
      <div className="Footer">
        <Link href="#home" className="MenuLogoContainer">
          <div className="MenuImg">
              <Image className="LogoImg" src={Logo} alt=""/>
          </div>
          <p className="LogoTitle">Fillgood</p>
        </Link>

        <div className="MenuItemContainer">
            <Link href="#sport" className="MenuItem">Accueil</Link>
            <Link href="#sport" className="MenuItem">Sport</Link>
            <Link href="#sport" className="MenuItem">Agenda</Link>
        </div>
        <div className="ConnectButton"> 
            {/* <ConnectButton /> */}
        </div>

      </div>
    );
  };