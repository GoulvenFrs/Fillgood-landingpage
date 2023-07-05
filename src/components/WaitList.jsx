import Image from "next/image";
import React from "react";
import { useForm } from "@formcarry/react";
import Runner from "../images/Runner3.png";
import WhiteList from "./WhiteList";

export default function WaitList() {
  // Call the "useForm" hook in your function component
  const { state, submit } = useForm({
    id: "3Xwe8FEA3u",
  });

  // Success message
/*   if (state.submitted) {
    return <div>Thank you! We received your submission.</div>;
  } */
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
{/*         <p className="ContactSectionTitle1">
        community <span className="logo green uncapitalize ">Fillgood &nbsp;</span>
        </p> */}
        <WhiteList/>
{/*         <form  className="Form" onSubmit={submit}>
          
          <input data-aos="zoom-in" data-aos-duration="200" id="email" type="email" name="email" placeholder="Email" className="Input"/>
          
          <input id="message" name="message" className="InputWhiteListMessage" defaultValue="WhiteList"/>
          <button data-aos="zoom-in" data-aos-duration="600" className="ButtonForm" type="submit">Send !</button>
        </form> */}
      </div>
    </div>
  );
}
