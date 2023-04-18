import Image from 'next/image'

import Runner from "../images/Runner2.png"

export default function Product() {
    return (
        <div  className="MainSection Background2 Home">
          <div className="MainSectionZoneText Home">
            <Image  className="ProductSectionImg1" src={Runner} alt=""/>
            <p className="ProductSectionTitle1" > GAGNEZ</p>
            <p className="ProductSectionTitle1" >DES FIGOS !</p>

            <p className="ProductSectionSubTitle1 top" >Le token sport qui récompense l&apos;activité physique de la communauté Fillgood.</p>
            <p className="ProductSectionSubTitle2 top" >Enregistrez immédiatement votre preuve de participation !</p>
          </div>
        </div>
    );
  };