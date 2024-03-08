import React from "react";
import Image from "next/image";
import Poster_im2 from "../../Assets/Poster2.1.png";
import "./Hero2.css";

const Hero2 = () => {
  return (
    <>
      <div className="hero2">
        <div className="hero2-left">
          <div className="hero2-left-heading">
            <h1>We are your Business & Technology Innovation Partner</h1>
          </div>
          <div className="hero2-left-content">
            <p>
              BitLab was born from our obsession with helping startups succeed
              and our frustration with the traditional software development
              agency model.
            </p>
            <p>
              Dev Agencies expect "specifications" to deliver a "project". We
              turn your Vision into Product by understanding your Business.
            </p>
          </div>
          <button>Book a Call</button>
        </div>
        <div className="hero2-right">
          <Image src={Poster_im2} alt="Hero2image" width={680} height={530} />
        </div>
      </div>
    </>
  );
};

export default Hero2;
