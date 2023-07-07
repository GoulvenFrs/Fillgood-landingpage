import Image from "next/image";
import React from "react";
import Runner from "../images/Runner3.png";
import WhiteList2 from "./WhiteList2";

export default function WaitList() {

  return (
    <div className="MainSection Background2 Home">
      <div data-aos="zoom-in" className="MainSectionZoneText Home">
        <Image className="ContactSectionImg1" src={Runner} alt="" />
        <p className="ContactSectionTitle1"> Join the waitlist </p>
        <p className="ContactSectionTitle1"> to exclusively follow</p>
        <p className="ContactSectionTitle1">the launch of <span className="logo green uncapitalize ">Fillgood &nbsp;</span>  </p>
        <p className="ContactSectionTitle1"> and receive the first</p>
        <p className="ContactSectionTitle1">rewards reserved for </p>
        <p className="ContactSectionTitle1"> early adopters !</p>
        <WhiteList2/>
      </div>
    </div>
  );
}
