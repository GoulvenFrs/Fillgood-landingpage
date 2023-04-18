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
                  William a étudié à l&apos;université de Corte et est titulaire d&apos;un master en économie du tourisme. Apres une dizaine d&apos;années d&apos;expérience dans l&apos;entertainment , il oriente sa carrière vers la finance d&apos;entreprise puis se forme à la technologie blockchain au sein de l&apos;école Alyra. Convaincu de l&apos;importance de l&apos;activité physique pour le bien être général de la communauté, William contribue aujourd&apos;hui à la construction du projet Fillgood avec pour mission d&apos;accompagner les utilisateurs de la plateforme vers une pratique sportive plus régulière.
                </p>
              </div>
              <div className="member" data-aos="zoom-in">
                <Image className="ImageTeam" src={Goulven} alt="Goulven" />
                <h4>
                  Goulven / <span className="job">Direction technique</span>
                </h4>
                <p className="memberDescription">
                Goulven est l&apos;actuel directeur technique de la plateforme. Ingénieur généraliste, il s&apos;est ensuite spécialisé dans la gestion de projets IT. Son expérience de Chef de produit lui donne aujourd&apos;hui une compréhension du marché, de ses produits et une connaissance du marketing importante pour le développement de Fillgood. Goulven s&apos;est récemment formée aux spécificités de la blockchain au sein de l&apos;école Alyra et maitrise désormais la réalisation de DApps avec Truffle, Hardhat, Ethers.js et Web3.js.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
