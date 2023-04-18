import Image from "next/image";
import Link from "next/link";

import Carousel from "./Carousel";

import Basket from "../images/sports/basket.png";
import Rider from "../images/sports/rider.png";
import Special from "../images/sports/special.png";
import Rider2 from "../images/sports/rider2.png";

export default function Sports() {
  return (
    <div className="MainSection Background1 Home">
      <div className="MainSectionZoneText Home">
        <p className="SportsTitle top">FAITES VOTRE CHOIX PARMI LES</p>
        <p className="SportsTitle">MILLIERS D'EXPÉRIENCES SPORTIVES</p>
        <p className="SportsTitle">RÉFÉRENCÉES SUR <span className="green logo">Fillgood</span></p>
        <Carousel show={3} /* infiniteLoop */ >
          <div className="Card">
            <div>
              <Image src={Basket} alt="basket" className="CardImage" />
            </div>
            <p className="CardText">En groupe</p>
            <p className="CardTitle">BASKETBALL</p>
          </div>
          <div className="Card">
            <div>
              <Image src={Rider} alt="rider" className="CardImage" />
            </div>
            <p className="CardText">En groupe</p>
            <p className="CardTitle">RIDE AND PLAY</p>
          </div>
          <div className="Card">
            <div>
              <Image src={Special} alt="special" className="CardImage" />
            </div>
            <p className="CardText">En groupe</p>
            <p className="CardTitle">SPECIAL</p>
          </div>
          <div className="Card">
            <div>
              <Image src={Rider2} alt="rider" className="CardImage" />
            </div>
            <p className="CardText">En solo</p>
            <p className="CardTitle">RIDE </p>
          </div>
          <div className="Card">
            <div>
              <Image src={Basket} alt="basket" className="CardImage" />
            </div>
            <p className="CardText">En groupe</p>
            <p className="CardTitle">BASKETBALL</p>
          </div>
          <div className="Card">
            <div>
              <Image src={Rider} alt="rider" className="CardImage" />
            </div>
            <p className="CardText">En groupe</p>
            <p className="CardTitle">RIDE AND PLAY</p>
          </div>
          <div className="Card">
            <div>
              <Image src={Special} alt="special" className="CardImage" />
            </div>
            <p className="CardText">En groupe</p>
            <p className="CardTitle">SPECIAL</p>
          </div>
          <div className="Card">
            <div>
              <Image src={Rider2} alt="rider" className="CardImage" />
            </div>
            <p className="CardText">En solo</p>
            <p className="CardTitle">RIDE </p>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
