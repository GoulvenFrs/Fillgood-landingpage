import Image from "next/image";
import React from "react";
/* import { useForm } from "@formcarry/react"; */
import Patch from "../images/pastille2.png";

export default function WhiteList2() {


  function submit_form() {
    document.getElementById("form2").submit();
    document.getElementById("form2").reset();
    }


  return (
    <>
    <p className="ProductSectionSubTitle2 "   data-aos="zoom-in" data-aos-duration="300"/*  href="https://discord.gg/vbaEg8rv"  target="_blank" */ >Join the Waitlist :</p>
    <form  id="form2" className="WhiteList" action="https://formcarry.com/s/Autofy5RJn" method="POST" target="_blank" acceptCharset="UTF-8">  

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