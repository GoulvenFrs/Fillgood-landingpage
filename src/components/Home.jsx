
import Image from 'next/image'

import Runner from "../images/Runner2.png"
import Linkedin from "../images/socials/linkedin.png"
import Discord from "../images/socials/discord.png"
import Twitter from "../images/socials/twitter.png"

export default function Home() {
    return (
        <div  className="MainSection Background1 Home">
          <div className="MainSectionZoneText Home">
            <Image  className="HomeSectionImg1" src={Runner} alt=""/>
            <p data-aos="zoom-in" data-aos-duration="100"className="HomeSectionTitle1" > MOVE,</p>
            <p data-aos="zoom-in" data-aos-duration="200"className="HomeSectionTitle1" >HAVE FUN</p>
            <p data-aos="zoom-in" data-aos-duration="300"className="HomeSectionTitle1" >AND COLLECT</p>
            <p data-aos="zoom-in" data-aos-duration="400"className="HomeSectionTitle1" >YOUR REWARDS !</p>
            <p data-aos="zoom-in" data-aos-duration="500"className="HomeSectionSubTitle1 top" >Fillgood is a physical activity stimulation solution using the Proof of Attendance Protocol to
	reward its users.</p>
  <br/>
            <p data-aos="zoom-in" data-aos-duration="500"className="HomeSectionSubTitle1" >New generation Move2Earn, Fillgood financially values the simple participation in the
activities offered on the platform and engages its community around two essential values of sport : pleasure and sharing.
</p>
            {/* <p data-aos="zoom-in" data-aos-duration="600"className="HomeSectionSubTitle1" >and earn your first Figos !</p> */}
            <div className="HomeItemContainer">
              <p className="HomeSocialText" data-aos="zoom-in" >FOLLOW US </p>
              <div className="HomeSocialGroup" >
                <a data-aos="zoom-in" data-aos-duration="600" href="https://discord.gg/VAUWV3M9C6" target="_blank"><Image className="HomeSocials" src={Discord} alt="Discord"/></a>
                <a data-aos="zoom-in" data-aos-duration="700"href="https://www.linkedin.com/company/fillgood-fr" target="_blank"><Image className="HomeSocials" src={Linkedin} alt="Linkedin"/></a>
                <a data-aos="zoom-in" data-aos-duration="800"href="https://twitter.com/FILLGOODoff" target="_blank"><Image className="HomeSocials" src={Twitter} alt="Twitter"/></a>
              </div>
              
            </div>
          </div>
        </div>
    );
  };
