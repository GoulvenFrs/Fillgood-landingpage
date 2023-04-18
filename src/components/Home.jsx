
import Image from 'next/image'

import Runner from "../images/Runner.png"

export default function Home() {
    return (
        <div  className="MainSection Background1 Home">
          <div className="MainSectionZoneText Home">
            <Image  className="HomeSectionImg1" src={Runner} alt=""/>
            <p className="HomeSectionTitle1" > BOUGEZ,</p>
            <p className="HomeSectionTitle1" >AMUSEZ-VOUS</p>
            <p className="HomeSectionTitle1" >ET RECEVEZ</p>
            <p className="HomeSectionTitle1" >VOS RÉCOMPENSES !</p>
            <p className="HomeSectionSubTitle1 top" >Participez aux expériences sportives Fillgood</p>
            <p className="HomeSectionSubTitle1" >et remportez vos premiers Figos !</p>
          </div>
        </div>
    );
  };
