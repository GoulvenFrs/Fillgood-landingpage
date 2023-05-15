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
                  <h4>Launch Roadmap</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum a repellendus nemo minus alias officia culpa ab. </p>
                </div>
                <div className="bloc" data-aos="zoom-in">
                  <div className="number off">2</div>
                  <h4>Launch Presale</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum a repellendus nemo minus alias officia culpa ab. </p>
                </div>
                <div className="bloc" data-aos="zoom-in">
                  <div className="number off">3</div>
                  <h4>Mint the remaining NFTs on OpenSea</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum a repellendus nemo minus alias officia culpa ab. </p>
                </div>
                <div className="bloc" data-aos="zoom-in">
                  <div className="number off">4</div>
                  <h4>Mint the remaining NFTs on OpenSea</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum a repellendus nemo minus alias officia culpa ab. </p>
                </div>
              </div>

          </div>
        </div>
    );
  };