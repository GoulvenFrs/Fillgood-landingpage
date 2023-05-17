
import Image from 'next/image'
import Link from 'next/link';

import Logo from "../images/logo1.png"
import Linkedin from "../images/socials/linkedin.png"
import Discord from "../images/socials/discord.png"
import Twitter from "../images/socials/twitter.png"

export default function Footer() {
    return (
      <div className="Footer">
        <Link href="#home" className="FooterLogoContainer">
          <div className="MenuImg">
              <Image className="LogoImg" src={Logo} alt=""/>
          </div>
          <p className="LogoTitle">Fillgood</p>
        </Link>

        <div className="FooterItemContainer">
          <p className="FooterText" >FOLLOW US </p>
          <a href="https://discord.gg/VNqjMgQH" target="_blank"><Image className="FooterSocials" src={Discord} alt="Discord"/></a>
          <a href="https://www.linkedin.com/company/fillgood-fr" target="_blank"><Image className="FooterSocials" src={Linkedin} alt="Linkedin"/></a>
          <a href="https://twitter.com/FILLGOODoff" target="_blank"><Image className="FooterSocials" src={Twitter} alt="Twitter"/></a>

        </div>

      </div>
    );
  };