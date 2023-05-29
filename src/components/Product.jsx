import Image from 'next/image'

import Runner from "../images/Runner.png"

export default function Product() {
    return (
        <div  className="MainSection Background2 Home">
          <div className="MainSectionZoneText Home">
            <Image  className="ProductSectionImg1" src={Runner} alt=""/>
            <p data-aos="zoom-in" data-aos-duration="100"className="ProductSectionTitle1" > EARN</p>
            <p data-aos="zoom-in" data-aos-duration="200"className="ProductSectionTitle1" >SOME FIGOS !</p>

            <p data-aos="zoom-in" data-aos-duration="300"className="ProductSectionSubTitle1 top" >The sports token that rewards physical activity in the Fillgood community.</p>
            <a className="ProductSectionSubTitle2 top" data-aos="zoom-in" data-aos-duration="1000" href="https://discord.gg/VNqjMgQH" target="_blank" >Join the Discord !</a>
          </div>
        </div>
    );
  };