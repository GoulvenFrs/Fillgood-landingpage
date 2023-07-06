import Image from "next/image";
import React from "react";
import { useForm } from "@formcarry/react";
import Patch from "../images/pastille2.png";

export default function WhiteList() {
  // Call the "useForm" hook in your function component
/*   const { state, submit } = useForm({
    id: "Autofy5RJn",
  }); */

  function submit_form() {
    document.getElementById("form1").submit();
    document.getElementById("form1").reset();
    }

  // Success message
/*   if (state.submitted) {
    return (
    <>
      <div className="ProductSectionSubTitle2 top">Thank you! We received your submission.</div>
      <div className="HomeSectionSubTitle1"> Join the discord and take a look at the litepaper !</div>
    </>
    );
  } */
  return (
    <>
    <p className="ProductSectionSubTitle2 top"   data-aos="zoom-in" data-aos-duration="300"/*  href="https://discord.gg/vbaEg8rv"  target="_blank" */ >Join the Waitlist :</p>
    <form  id="form1" className="WhiteList" action="https://formcarry.com/s/3Xwe8FEA3u" method="POST" target="_blank" acceptCharset="UTF-8">  

        <input id="firstName" name="firstName" className="InputWhiteList InputName" placeholder="First name" type="text" required/>
        <input id="lastName" name="lastName" className="InputWhiteList InputName" placeholder="Last name" type="text" required /> 
         

        <input id="email" type="email" name="email" /* data-aos="zoom-in" data-aos-duration="200"  */ placeholder="Email" className="InputWhiteList InputMail" required/>
        <input type="hidden" name="_gotcha"></input>

        <button className="flip-card" type="submit" onClick={submit_form}>

            <div className="flip-card-inner">
              <div className="flip-card-front">
                <Image className="Patch " src={Patch} alt=""/>
              </div>
              <div className="flip-card-back">
                <Image className="Patch " src={Patch} alt=""/>
              </div>
            </div>

        </button>
        
      </form>
    </>

  );
}