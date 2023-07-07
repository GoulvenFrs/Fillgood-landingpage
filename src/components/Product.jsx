import Image from 'next/image'
import WhiteList from './WhiteList';
import Runner from "../images/Runner.png";
import Thunder from "../images/eclair.png";

export default function Product() {
    return (
        <div  className="MainSection Background2 Home">
          <div className="MainSectionZoneText Home">
            <Image  className="ProductSectionImg1" src={Thunder} alt=""/>
            <Image  className="ProductSectionImg1" src={Runner} alt=""/>
            
            <p data-aos="zoom-in" data-aos-duration="100"className="ProductSectionTitle1" > COLLECT YOUR</p>
            <p data-aos="zoom-in" data-aos-duration="200"className="ProductSectionTitle1" > FIRST FIGOS !</p>

            <p data-aos="zoom-in" data-aos-duration="300"className="ProductSectionSubTitle1 top" >1️⃣Subscribe to Fillgood</p>
            <br/>
            <p data-aos="zoom-in" data-aos-duration="300"className="ProductSectionSubTitle1" >2️⃣Book an activity on the platform</p>
            <br/>
            <p data-aos="zoom-in" data-aos-duration="300"className="ProductSectionSubTitle1" >3️⃣Participate in the activity and automatically receive your rewards</p>
            <br/>
            <p data-aos="zoom-in" data-aos-duration="500"className="HomeSectionSubTitle2" >Sports makes you Fillgood !</p>
            {/* <p className="ProductSectionSubTitle2 top"   data-aos="zoom-in" data-aos-duration="300" >Join the Waitlist :</p> */}
            <WhiteList/>
          </div>
        </div>
    );
  };