import Image from "next/image";
import Link from "next/link";

import Carousel from "./Carousel";

import Basket from "../images/sports/basket.png";
import Rider from "../images/sports/rider.png";
import Special from "../images/sports/special.png";
import Rider2 from "../images/sports/rider2.png";
import Boxe from "../images/sports/Boxe.png";

export default function Sports() {
  return (
    <div className="MainSection Background1 Home">
      <div className="MainSectionZoneText Home">
        <p data-aos="zoom-in" data-aos-duration="100"className="SportsTitle top">CHOOSE FROM </p>
        <p data-aos="zoom-in" data-aos-duration="200"className="SportsTitle">HUNDREDS OF SPORTS EXPERIENCES</p>
        <p data-aos="zoom-in" data-aos-duration="300"className="SportsTitle">REFERENCED ON <span className="green logo">Fillgood</span></p>
        <Carousel show={3} /* infiniteLoop */ >
          <div data-aos="zoom-in" data-aos-duration="8000" className="Card">
            <div>
              <Image src={Basket} alt="basket" className="CardImage" />
            </div>
            <p className="CardText">Team</p>
            <p className="CardTitle">BASKETBALL</p>
          </div>
          <div data-aos="zoom-in" data-aos-duration="1300" className="Card">
            <div>
              <Image src={Rider} alt="rider" className="CardImage" />
            </div>
            <p className="CardText">Team</p>
            <p className="CardTitle">RIDE AND PLAY</p>
          </div>
          <div data-aos="zoom-in" data-aos-duration="2000" className="Card">
            <div>
              <Image src={Special} alt="special" className="CardImage" />
            </div>
            <p className="CardText">Team</p>
            <p className="CardTitle">SPECIAL</p>
          </div>
          <div data-aos="zoom-in" data-aos-duration="2700" className="Card">
            <div>
              <Image src={Rider2} alt="rider" className="CardImage" />
            </div>
            <p className="CardText">Solo</p>
            <p className="CardTitle">RIDE </p>
          </div>
          <div data-aos="zoom-in" data-aos-duration="3400" className="Card">
            <div>
              <Image src={Boxe} alt="boxe" className="CardImage" />
            </div>
            <p className="CardText">Solo</p>
            <p className="CardTitle">BOXE</p>
          </div>
{/*           <div data-aos="zoom-in" data-aos-duration="6000"  className="Card">
            <div>
              <Image src={Rider} alt="rider" className="CardImage" />
            </div>
            <p className="CardText">Team</p>
            <p className="CardTitle">RIDE AND PLAY</p>
          </div>
          <div data-aos="zoom-in" data-aos-duration="7000" className="Card">
            <div>
              <Image src={Special} alt="special" className="CardImage" />
            </div>
            <p className="CardText">Team</p>
            <p className="CardTitle">SPECIAL</p>
          </div>
          <div data-aos="zoom-in" data-aos-duration="8000" className="Card">
            <div>
              <Image src={Rider2} alt="rider" className="CardImage" />
            </div>
            <p className="CardText">Solo</p>
            <p className="CardTitle">RIDE </p>
          </div> */}
        </Carousel>
      </div>
    </div>
  );
}
