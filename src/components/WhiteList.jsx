import Image from "next/image";
import React from "react";
import { useForm } from "@formcarry/react";

export default function WhiteList() {
  // Call the "useForm" hook in your function component
  const { state, submit } = useForm({
    id: "D1Or4ZyMxI",
  });

  // Success message
/*   if (state.submitted) {
    return <div>Thank you! We received your submission.</div>;
  } */
  return (
        <form  className="WhiteList" onSubmit={submit}>
          <input data-aos="zoom-in" data-aos-duration="200" id="email" type="email" name="email" placeholder="Email" className="InputWhiteList"/>
          <input id="message" name="message" className="InputWhiteListMessage" value="WhiteList"/>
          <button /* data-aos="zoom-in" data-aos-duration="600" */ className="ButtonWhiteList" type="submit">Subscribe !</button>
        </form>
  );
}