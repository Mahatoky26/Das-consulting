import React, {useEffect} from 'react'
import Lottie from 'lottie-react'
import medical from '../assets/medical.json'
import cart from '../assets/cart.json'
import energie from '../assets/energie.json'
import AOS from "aos";
import "aos/dist/aos.css";

const Offre = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="w-screen p-0 m-o lg:mb-[10%] sm:mb-[20%] lg:mt-[8%] sm:mt-[15%] mt-[25%] mb-[25%]">
      <div>
        <p className="text-center mt-[5%] uppercase font-bold text-3xl text-blue-700">Nos Secteurs d' Intervention : </p>
        <div className="lg:flex lg:justify-center lg:mt-[8%]  sm:mt-[10%] mt-[25%]">
            <div className="font-bold text-center shadow-2xl border rounded-full lg:w-[25%] sm:w-[60%] flex items-center lg:text-3xl sm:text-4xl lg:pl-[2%] lg:right-[10%] sm:right-[-20%] relative text-red-600 w-[80%] text-2xl right-[-10%] py-[1%]" data-aos="zoom-in">
               <Lottie loop={true} animationData={medical} className="lg:w-[27%] sm:ml-[10%] mr-[10%] sm:w-[20%] ml-[10%] w-[20%]"/>
               MEDICAL
            </div>
            <div className="font-bold text-center shadow-2xl border flex items-center lg:w-[25%] relative lg:left-[0.5%] sm:left-[20%] sm:w-[60%] rounded-full lg:text-3xl text-gray-500 lg:mt-[0%] sm:mt-[10%] sm:text-4xl text-2xl w-[80%] left-[10%] mt-[15%]" data-aos="zoom-in">
                <Lottie loop={true} animationData={cart} className="lg:w-[25%] lg:mx-[4%] sm:mx-[6%] sm:w-[21%] w-[25%] mx-[2%]"/>
                E-COMMERCE
            </div>
            <div className="font-bold text-center shadow-2xl relative lg:left-[10%] sm:left-[20%] border flex items-center lg:text-3xl lg:w-[23%] sm:w-[60%] rounded-full sm:text-4xl lg:mt-[0%] sm:mt-[10%] text-yellow-500 text-2xl w-[80%] left-[10%] mt-[15%]" data-aos="zoom-in">
                <Lottie loop={true} animationData={energie} className="lg:w-[26%] lg:mx-[10%] sm:w-[21%] sm:mx-[11%] w-[25%] mx-[6%]"/>
                ENERGIE
            </div>
        </div>
      </div>
      <div>

      </div>

    </div>
  )
}

export default Offre
