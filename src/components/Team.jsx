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
              THE <span className="orange">TEAM</span>
            </h2>
            <div className="team__flex">
              <div className="member" data-aos="zoom-in">
                <Image className="ImageTeam" src={William} alt="William" />
                <h4>
                  William / <span className="job">General Management</span>
                </h4>
                <p className="memberDescription">
                William studied at the University of Corte and holds a master&apos;s degree in tourism economics. After ten years of experience in the entertainment industry, he turned his career towards corporate finance and then trained in blockchain technology at the Alyra school. Convinced of the importance of physical activity for the general well-being of the community, William is now helping to build the Fillgood project with the mission of helping the platform&apos;s users to practice sports more regularly.
                </p>
              </div>
              <div className="member" data-aos="zoom-in">
                <Image className="ImageTeam" src={Goulven} alt="Goulven" />
                <h4>
                  Goulven / <span className="job">Technical management</span>
                </h4>
                <p className="memberDescription">
                Goulven is the current CTO of the platform. He is a general engineer and then specialized in IT project management. His experience as a Product Manager gives him an understanding of the market, its products and marketing knowledge that is important to Fillgood&apos;s development. Goulven recently trained in the specifics of blockchain at the Alyra school and now masters the creation of DApps with Truffle, Hardhat, Ethers.js and Web3.js.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
