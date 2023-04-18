
import Image from 'next/image'
import Link from 'next/link';

import Logo from "../images/logo2.png"

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
            <Link href="#product" className="MenuItem">Produit</Link>
            <Link href="#sports" className="MenuItem">Sports</Link>
            <Link href="#roadmap" className="MenuItem">Roadmap</Link>
            <Link href="#team" className="MenuItem">Team</Link>
            <Link href="#contact" className="MenuItem">Contact</Link>
        </div>
        <div className="ConnectButton"> 
            {/* <ConnectButton /> */}
        </div>

      </div>
    );
  };
