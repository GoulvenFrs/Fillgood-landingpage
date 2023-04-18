import Image from "next/image";

import William from "../images/team/william.png"
import Goulven from "../images/team/goulven.png"

export default function Team() {
  return (
    <div className="MainSection Background1 Home">
      <div className="MainSectionZoneText Home">
        <div className="team">
          <div className="container">
            <h2 data-aos="zoom-in">
              THE <span className="green">TEAM</span>
            </h2>
            <div className="team__flex">
              <div className="member" data-aos="zoom-in">
                <Image className="ImageTeam" src={William} alt="William" />
                <h4>
                  William / <span className="job">Direction générale</span>
                </h4>
                <p className="memberDescription">
                  William a étudié à l'université de Corte et est titulaire d'un master en économie du tourisme. Apres une dizaine d'années d'expérience dans l'entertainment , il oriente sa carrière vers la finance d'entreprise puis se forme à la technologie blockchain au sein de l'école Alyra. Convaincu de l'importance de l'activité physique pour le bien être général de la communauté, William contribue aujourd'hui à la construction du projet Fillgood avec pour mission d'accompagner les utilisateurs de la plateforme vers une pratique sportive plus régulière.
                </p>
              </div>
              <div className="member" data-aos="zoom-in">
                <Image className="ImageTeam" src={Goulven} alt="Goulven" />
                <h4>
                  Goulven / <span className="job">Direction technique</span>
                </h4>
                <p className="memberDescription">
                Goulven est l'actuel directeur technique de la plateforme. Ingénieur généraliste, il s'est ensuite spécialisé dans la gestion de projets IT. Son expérience de Chef de produit lui donne aujourd'hui une compréhension du marché, de ses produits et une connaissance du marketing importante pour le développement de Fillgood. Goulven s'est récemment formée aux spécificités de la blockchain au sein de l'école Alyra et maitrise désormais la réalisation de DApps avec Truffle, Hardhat, Ethers.js et Web3.js.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
