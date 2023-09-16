import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Lottie from "lottie-react";
import callEntrant from "../assets/callEntrant.json";
import callSortant from "../assets/callSortant.json";
import writting from "../assets/writting.json";
import call from "../assets/call-center.json";
import computer from "../assets/computer.json";
import facture from "../assets/facture.json";
import check from "../assets/check.json";

const Apropos = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="w-full my-[6%] h-full" name="apropos">
      <div className="text-center">
        <h2 className="text-5xl font-bold">Notre Parcours</h2>
        <p className="text-3xl py-6 text-gray-500">
          Depuis notre lancement en 2021, nous avons acquis une solide
          expérience dans le domaine du trafic d'émission d'appel. Commençant
          avec succès dans le flux froid, nous avons élargi nos horizons pour
          proposer des services d'émission d'appel sur diverses campagnes en
          France, telles que le Compte Personnel de Formation et la Rénovation
          Globale.
        </p>
      </div>
      <div
        className=" m-7 w-full flex flex-col py-8 lg:w-[50%] lg:left-[25%] md:w-[60%] relative bottom-[-130%] left-[-1%] mx-1 md:left-[20%] sm:left-[15%] transform sm:-translate-x-1/2 bg-white-200 border border-slate-300 rounded-xl text-center shadow-xl md:top-[100%] sm:bottom-[-140%] sm:w-[70%] "
        data-aos="fade-down"
      >
        <p className="font-bold text-blue-700 text-2xl">Nos Spécialités : </p>
        <br></br>
        <div className="flex justify-between flex-wrap px-4 ">
          <div className="flex justify-between w-[50%] md:w-[30%] md:h-[25%]">
            <Lottie
              loop={true}
              animationData={callEntrant}
              className="w-[100%] md:w-[50%] sm:relative "
            />
            <p className="flex px-4 py-10 sm:py-10 md:py-4 text-slate-500">
              Appels Entrants
            </p>
          </div>
          <div className="flex justify-between w-[40%] md:w-[20%] md:h-[25%]">
            <Lottie
              loop={true}
              animationData={writting}
              className="w-[100%] md:w-[50%] sm:relative "
            />
            <p className="flex px-4 py-10 sm:py-10 md:py-4 text-slate-500">
              Flux froid
            </p>
          </div>
          <div className="flex justify-between w-[50%] md:w-[30%] md:h-[25%] ">
            <Lottie
              loop={true}
              animationData={callSortant}
              className="w-[100%] md:w-[50%] sm:relative "
            />
            <p className="flex px-4 py-10 sm:py-10 md:py-4 text-slate-500">
              Appels Sortants
            </p>
          </div>
        </div>
      </div>
      <div className="relative lg:flex lg:justify-center mt-[10%] mb-[15%]">
        <div className="lg:w-[25%]  bg-white relative lg:left-[-8%] shadow-2xl border rounded-[5%] lg:py-7 sm:py-11 sm:w-[70%] sm:left-[15%] py-11" data-aos="flip-left">
          <Lottie
            loop={true}
            animationData={call}
            className="lg:w-[25%] relative lg:left-[38%] sm:w-[20%] sm:left-[40%] w-[25%] left-[40%]"
          />
          <h1 className="font-bold text-center text-3xl text-blue-500">
            CENTRE D'APPEL
          </h1>
          <div className="flex text-center mt-[13%]">
            <Lottie
              loop={true}
              animationData={check}
              className="lg:w-[9%] relative lg:left-[14%] lg:mb-[5%] sm:w-[9%] sm:left-[17%] sm:top-[-10%] w-[9%] left-[10%]"
            />
            <p className="font-bold uppercase relative lg:left-[15%] lg:mt-[1%] sm:left-[20%] sm:mt-[2%] left-[15%]">
              RELATION CLIENT
            </p>
          </div>
          <div className="flex text-center mt-[5%]">
            <Lottie
              loop={true}
              animationData={check}
              className="lg:w-[9%] relative lg:left-[14%] lg:mb-[5%] sm:w-[9%] sm:left-[17%] sm:top-[-10%] w-[9%] left-[10%]"
            />
            <p className="font-bold uppercase relative lg:left-[15%] lg:mt-[1%] sm:left-[20%] sm:mt-[2%] left-[15%]">
              Enquêtes qualité
            </p>
          </div>
          <div className="flex text-center mt-[5%]">
            <Lottie
              loop={true}
              animationData={check}
              className="lg:w-[9%] relative lg:left-[14%] lg:mb-[5%] sm:w-[9%] sm:left-[17%] sm:top-[-10%] w-[9%] left-[10%]"
            />
            <p className="font-bold uppercase relative lg:left-[15%] lg:mt-[1%] sm:left-[20%] sm:mt-[2%] left-[15%]">
              Qualification des fiches
            </p>
          </div>
          <div className="flex text-center mt-[5%]">
            <Lottie
              loop={true}
              animationData={check}
              className="lg:w-[9%] relative lg:left-[14%] lg:mb-[5%] sm:w-[9%] sm:left-[17%] sm:top-[-10%] w-[9%] left-[10%]"
            />
            <p className="font-bold uppercase relative lg:left-[15%] lg:mt-[1%] sm:left-[20%] sm:mt-[2%] left-[15%]">
              Prise de rendez-vous
            </p>
          </div>
        </div>
        <div className="lg:w-[25%] relative lg:left-[0.2%] lg:mt-[0%] bg-slate-500 shadow-2xl border rounded-[5%] lg:py-7 sm:py-11 sm:w-[70%] sm:left-[15%] sm:mt-[10%] py-11 mt-[10%]" data-aos="zoom-in">
          <Lottie
            loop={true}
            animationData={computer}
            className="lg:w-[25%] relative lg:left-[38%] sm:w-[20%] sm:left-[40%] w-[25%] left-[40%]"
          />
          <h1 className="font-bold text-center text-3xl text-slate-800">
            FLUX FROID
          </h1>
          <div className="flex text-center mt-[13%]">
            <Lottie
              loop={true}
              animationData={check}
              className="lg:w-[9%] relative lg:left-[14%] lg:mb-[5%] sm:w-[9%] sm:left-[17%] sm:top-[-10%] w-[9%] left-[20%]"
            />
            <p className="font-bold uppercase relative lg:left-[15%] lg:mt-[1%] text-white sm:left-[20%] sm:mt-[2%] left-[25%]">
              RÉDACTION WEB
            </p>
          </div>
          <div className="flex text-center mt-[5%]">
            <Lottie
              loop={true}
              animationData={check}
              className="lg:w-[9%] relative lg:left-[14%] lg:mb-[5%] sm:w-[9%] sm:left-[17%] sm:top-[-10%] w-[9%] left-[20%]"
            />
            <p className="font-bold uppercase relative lg:left-[15%]  lg:mt-[1%] text-white sm:left-[20%] sm:mt-[2%] left-[25%]">
              MAILING
            </p>
          </div>
        </div>
        <div className="lg:w-[25%] lg:mt-[0%] bg-slate-400 relative lg:left-[8%] shadow-2xl border rounded-[5%] py-7 sm:py-11 sm:w-[70%] sm:left-[15%] sm:mt-[10%] mt-[10%] " data-aos="flip-right">
          <Lottie
            loop={true}
            animationData={facture}
            className="lg:w-[30%] relative lg:left-[35%] mb-0 sm:w-[35%] sm:left-[33%] left-[30%] w-[40%]"
          />
          <h1 className="font-bold text-center text-3xl text-red-700 uppercase">
            Divers
          </h1>
          <div className="flex lg:justify-center sm:text-center  lg:mt-[13%] lg:ml-0 sm:ml-2 sm:mt-[10%] mt-[15%] justify-center">
            <Lottie loop={true} animationData={check} className="lg:w-[7%] sm:w-[9%] w-[9%]" />
            <p className="font-bold uppercase text-white lg:mt-[0%] sm:mt-[2%] mt-[1%]">
              Offre juridique et comptable
            </p>
          </div>
          <div className="flex text-center lg:mt-[10%] sm:mt-[4%] lg:ml-0 sm:ml-2 mt-[10%] mb-[15%] justify-center">
            <Lottie
              loop={true}
              animationData={check}
              className="lg:w-[10%] relative lg:left-[13%] lg:mb-[5] sm:w-[9%] w-[14%] left-[10%] sm:left-[-1%]"
            />
            <p className="font-bold uppercase text-white lg:mt-[1%] sm:mt-[2%] mt-[2%]">
              Assistance juridique et établissementd'état financier
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apropos;
