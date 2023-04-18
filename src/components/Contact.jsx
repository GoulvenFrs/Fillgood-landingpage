import Image from 'next/image'

import Runner from "../images/Runner3.png"


export default function Contact() {
    return (
        <div  className="MainSection Background2 Home">
          <div className="MainSectionZoneText Home">
            <Image  className="HomeSectionImg1" src={Runner} alt=""/>
            <p className="ContactSectionTitle1" > VOUS AUSSI PROPOSEZ</p>
            <p className="ContactSectionTitle1" >VOS EXPÉRIENCES </p>
            <p className="ContactSectionTitle1" >SPORTIVES A LA</p>
            <p className="ContactSectionTitle1" >COMMUNAUTÉ <span className="logo green">Fillgood &nbsp;</span></p>
            <form action="/send-data-here" method="post">
              <label >First name:</label>
              <input type="text" id="first" name="first" />
              <label >Last name:</label>
              <input type="text" id="last" name="last" />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
    );
  };