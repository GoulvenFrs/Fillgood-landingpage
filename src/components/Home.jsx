
import Image from 'next/image'

import Runner from "../images/Runner.png"

export default function Home() {
    return (
        <div  className="MainSection Background1 Home">
          <div className="MainSectionZoneText Home">
            <Image  className="HomeSectionImg1" src={Runner} alt=""/>
            <p className="HomeSectionTitle1" > MOVE,</p>
            <p className="HomeSectionTitle1" >HAVE FUN</p>
            <p className="HomeSectionTitle1" >AND COLLECT</p>
            <p className="HomeSectionTitle1" >YOUR REWARDS !</p>
            <p className="HomeSectionSubTitle1 top" >Participate in Fillgood sports experiences</p>
            <p className="HomeSectionSubTitle1" >and earn your first Figos !</p>
          </div>
        </div>
    );
  };
