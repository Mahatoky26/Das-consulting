import React, { useEffect } from "react";
import CImg from "../assets/collaboration.jpg";
import Lottie from 'lottie-react'
import point from '../assets/point.json'
import AOS from "aos";
import "aos/dist/aos.css";

const Differentiation = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="h-full w-screen bg-gray-400">
      <p className="text-blue-700 font-bold text-3xl uppercase text-center lg:pt-[3%] pt-[9%] sm:pt-[7%] md:pt-[5%]">
        NOS ENGAGEMENT :
      </p>
      <div className="lg:flex lg:justify-center ">
        <div className="lg:w-[50%] w-full ">
          <div className="lg:flex lg:justify-center lg:m-[5%] ">
            <div
              className="lg:w-[50%] lg:m-[2%] lg:text-1xl m-[10%] md:m-[5%] sm:m-[5%] font-bold text-white flex items-center"
              data-aos="fade-right"
            >
              <Lottie loop={true} animationData={point} className="lg:w-[60%] inline-block lg:mb-[47%] md:w-[10%] md:mb-[6%] sm:mb-[7%] sm:w-[13%] w-[80%] mb-[64%]"/> Nous offrons un service à la clientèle de premier ordre. Nous
              disposons d’une équipe disponible 24h/24 et 7j/7, capable de
              résoudre les problèmes rapidement et efficacement, et sont
              toujours prêts à aider les clients.
            </div>
            <div
              className="lg:w-[50%] lg:m-[2%] m-[10%] lg:text-1xl md:m-[5%] sm:m-[5%] font-bold text-white flex items-center"
              data-aos="fade-left"
            >
              <Lottie loop={true} animationData={point} className="lg:w-[60%] inline-block lg:mb-[47%] md:w-[10%] md:mb-[6%] sm:w-[13%] sm:mb-[7%] w-[80%] mb-[64%]"/> Nous utilisons les dernières technologies. Cela peut inclure des
              systèmes de CRM, des outils d'analyse et des outils
              d'automatisation. Cela vous aidera à être plus efficace et à mieux
              servir vos clients.
            </div>
          </div>
          <div className="lg:flex lg:justify-center lg:m-[5%]">
            <div
              className="lg:w-[50%] lg:m-[2%] lg:text-1xl md:m-[5%] sm:m-[5%] m-[10%] font-bold text-white flex items-center"
              data-aos="fade-right"
            >
              <Lottie loop={true} animationData={point} className="lg:w-[50%] inline-block lg:mb-[31%] md:w-[8%] md:mb-[3%] sm:mb-[3%] sm:w-[8%] w-[65%] mb-[44%]"/> Formation de haut niveau à nos agents pour les aider à mieux
              comprendre les besoins de nos clients et à leur fournir un service
              de meilleure qualité.
            </div>
            <div
              className="lg:w-[50%] lg:m-[2%] md:m-[5%] lg:text-1xl sm:m-[5%] m-[10%] font-bold text-white flex items-center"
              data-aos="fade-left"
            >
              <Lottie loop={true} animationData={point} className="lg:w-[60%] inline-block lg:mb-[48%] md:w-[10%] md:mb-[6%] sm:w-[13%] sm:mb-[7%] w-[80%] mb-[64%]"/> Nous offrons des avantages compétitifs à nos agents. Cela peut
              inclure des salaires plus élevés, des horaires flexibles et des
              avantages sociaux complets. Cela nous permet d'attirer et de
              conserver les meilleurs agents.
            </div>
          </div>
          <div className="lg:flex lg:justify-center lg:m-[5%]">
            <div
              className="lg:w-[50%] lg:m-[2%] md:m-[5%] lg:text-1xl m-[10%] sm:m-[5%] font-bold text-white flex items-center"
              data-aos="zoom-in"
            >
              <Lottie loop={true} animationData={point} className="lg:w-[60%] inline-block lg:mb-[44%] md:w-[10%] md:mb-[6%] sm:w-[13%] sm:mb-[7%] w-[80%] mb-[73%]"/> Nous investissons dans la recherche et le développement. C'est
              une opportunité pour nous de rester à la pointe des dernières
              tendances et à développer des moyens innovants pour améliorer
              notre service à la clientèle.
            </div>
          </div>
        </div>

        <div className="lg:w-[55%] w-[100%] ">
          <img className="w-full lg:mt-[12%]" src={CImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Differentiation;
