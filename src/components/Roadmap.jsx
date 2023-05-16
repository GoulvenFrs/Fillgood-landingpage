import Image from 'next/image'



export default function Roadmap() {
  
    return (
        <div  className="MainSection Background2 Home Roadmap">
          <div className="MainSectionZoneText Home Roadmap">

              <div className="container">
                <h2 data-aos="zoom-in">THE <span className="green">ROADMAP</span></h2>
                <div className="line"></div>
                <div className="bloc" data-aos="zoom-in">
                  <div className="number">1</div>
                  <h4>Q1/Q2 2023 : Landing page & Discord launch</h4>
                  <p>Creation and launch of the landing page, the Discord and other social networks to start communicating about the project and building the community. </p>
                </div>
                <div className="bloc" data-aos="zoom-in">
                  <div className="number off">2</div>
                  <h4>Q2 2023 : Testnet launch & Litepaper</h4>
                  <p>Launch of the Dapp on testnet, our beta testers will test all the features as well as an audit firm. The litepaper will be released.  </p>
                </div>
                <div className="bloc" data-aos="zoom-in">
                  <div className="number off">3</div>
                  <h4>Q3 2023 : Whitepaper & Community growth</h4>
                  <p>The Whitepaper will be released and we will focus on the growth of the community on this quarter. </p>
                </div>
                <div className="bloc" data-aos="zoom-in">
                  <div className="number off">4</div>
                  <h4>Q4 2023 : Mainnet launch & Airdrop</h4>
                  <p>Launch of the Dapp on mainnet and airdrop for beta testers and the community.</p>
                </div>
              </div>

          </div>
        </div>
    );
  };