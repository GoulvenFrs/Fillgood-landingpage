import Image from 'next/image'

import Runner from "../images/Runner2.png"

export default function Product() {
    return (
        <div  className="MainSection Background2 Home">
          <div className="MainSectionZoneText Home">
            <Image  className="ProductSectionImg1" src={Runner} alt=""/>
            <p className="ProductSectionTitle1" > EARN</p>
            <p className="ProductSectionTitle1" >SOME FIGOS !</p>

            <p className="ProductSectionSubTitle1 top" >The sports token that rewards physical activity in the Fillgood community.</p>
            <p className="ProductSectionSubTitle2 top" >Register your proof of participation immediately!</p>
          </div>
        </div>
    );
  };