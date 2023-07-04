import Image from "next/image";
import React from "react";
import { useForm } from "@formcarry/react";
import Patch from "../images/pastille2.png";

export default function WhiteList() {
  // Call the "useForm" hook in your function component
  const { state, submit } = useForm({
    id: "Autofy5RJn",
    /* debug: false, */
  });

  // Success message
  if (state.submitted) {
    return <div className="ProductSectionSubTitle2 top">Thank you! We received your submission.</div>;
  }
  return (
    <>
    <p className="ProductSectionSubTitle2 top"   data-aos="zoom-in" data-aos-duration="300"/*  href="https://discord.gg/vbaEg8rv"  target="_blank" */ >Join the Waitlist :</p>
    <form  className="WhiteList" onSubmit={submit}>  
        {/* <label htmlFor="email">Email</label> */}
        {/* <label htmlFor="message">Message</label> */} 
        
        <input id="firstName" name="firstName" className="InputWhiteList InputName" placeholder="First name"  required/>
        <input id="lastName" name="lastName" className="InputWhiteList InputName" placeholder="Last name" required /> 
         

        <input id="email" type="email" name="email" data-aos="zoom-in" data-aos-duration="200"  placeholder="Email" className="InputWhiteList InputMail" required/>
        {/* <input id="message" name="message" type="hidden"  defaultValue="WhiteList"/> */}
        
        {/* <input type="hidden" name="_next" value="https://fillgood.io"></input> */}
        
        <button /* className="ButtonWhiteList" */ type="submit">
          <Image className="Patch" src={Patch} alt=""/>
        </button>
        
      </form>
    </>

  );
}