import React, { useEffect } from "react";
import CImg from "../assets/C.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
const Service = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="w-full" name="services">
      <div className="px-4 py-12">
        <h1 className="text-3xl pt-8 text-black font-bold uppercase text-center relative mt-0">
          nos services :
        </h1>
      </div>
      <div className="w-screen h-[700px] bg-gray-900/90">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={CImg}
          alt=""
        />
      </div>
      <div className="max-w-[1240px] relative mt-[-150%] mx-auto text-white sm:relative sm:mt-[-50%] sm:left-[1%] bottom-[-270%] sm:h-screen md:relative md:mt-[-25%] md:left-[-0%] md:bottom-[-400%]">
        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
          <div className="bg-white rounded-xl shadow-2xl" data-aos="flip-left">
            <p className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]">
              .
            </p>
            <h3 className="font-bold text-2xl my-6">Télévente :</h3>
            <p className="text-gray-600 text-xl">
              Maximisez vos ventes avec notre équipe dédiée à la télévente. Nous
              vous aiderons à atteindre vos objectifs commerciaux et à
              développer votre chiffre d'affaires.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-2xl" data-aos="zoom-in">
            <p className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]">
              .
            </p>
            <h3 className="font-bold text-2xl my-6">Téléprospection :</h3>
            <p className="text-gray-600 text-xl">
              Identifiez de nouvelles opportunités commerciales avec notre
              service de téléprospection efficace. Nous ciblons les prospects
              qualifiés pour vous assurer un taux de conversion élevé.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-2xl" data-aos="flip-right">
            <p className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]">
              .
            </p>
            <h3 className="font-bold text-2xl my-6">
              Qualification des fichiers :{" "}
            </h3>
            <p className="text-gray-600 text-xl">
              Assurez-vous d'avoir des données clients précises et à jour grâce
              à notre service de qualification de fichiers. Nous nettoyons et
              enrichissons vos bases de données pour une meilleure efficacité de
              vos campagnes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
