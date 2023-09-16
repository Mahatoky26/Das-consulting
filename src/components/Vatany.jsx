import React ,{useEffect} from 'react'
import ordi from '../assets/ordi.json'
import Lottie from 'lottie-react'
import AOS from "aos";
import "aos/dist/aos.css";
const Vatany = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="w-full h-full bg-zinc-200 flex flex-col justify-between" name="acceuil">
      <div className="grid mt-20 md:grid-cols-2 max-w-[1240px] m-auto">
          <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
              <h1 className="py-3 text-5xl text-blue-700 md:text-7xl font-bold" data-aos="fade-left">DAS CONSULTING</h1>
              <p className="text-2xl">Est une société prestataire de services de confiance avec une expérience significative dans les diverses activités qu' elle exerce</p>
              <button className="py-3 px-6 sm:w-[60%] my-4 font-bold">Visiter</button>
          </div>
          <div>
            <Lottie className='w-full' loop={true} animationData={ordi} />
          </div>
      </div>
  	</div>
  )
}

export default Vatany
