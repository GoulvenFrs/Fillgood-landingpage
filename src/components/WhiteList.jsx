import Image from "next/image";
import React from "react";
import { useForm } from "@formcarry/react";
import Patch from "../images/pastille2.png";

export default function WhiteList() {
  // Call the "useForm" hook in your function component
  const { state, submit } = useForm({
    id: "3Xwe8FEA3u",
  });

  // Success message
  if (state.submitted) {
    return <div className="ProductSectionSubTitle2 top">Thank you! We received your submission.</div>;
  }
  return (
    <>
    <p className="ProductSectionSubTitle2 top"   data-aos="zoom-in" data-aos-duration="300"/*  href="https://discord.gg/vbaEg8rv"  target="_blank" */ >Join the Waitlist :</p>
    <form  className="WhiteList" onSubmit={submit}>         
        <input id="email" type="email" name="email" data-aos="zoom-in" data-aos-duration="200"  placeholder="Email" className="InputWhiteList" required/>
        <input id="message" name="message" className="InputWhiteListMessage" defaultValue="WhiteList"/>
        {/* <input type="hidden" name="_next" value="https://fillgood.io"></input> */}
        
        <button /* className="ButtonWhiteList" */ type="submit">
          <Image className="Patch" src={Patch} alt=""/>
        </button>
        
      </form>
    </>

  );
}