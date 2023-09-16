import React, { useState, useRef , useEffect } from "react";
import { Link } from "react-scroll";
import Lottie from "lottie-react";
import contact from "../assets/contact.json";
import Whatsapp from "../assets/Whatsapp.json";
import Gmail from "../assets/Gmail.json";

import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AOS from 'aos'
import 'aos/dist/aos.css'


const NavBar = () => {

  useEffect(() =>{
    AOS.init({duration: 2000});
  }, []);

  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };
  const handleClose = () => {
    setNav(!nav);
  };

  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    setShowModal(!showModal);
  };

  const [showList, setShowList] = useState(false);
  const handleList = () => {
    setShowList(!showList);
  };
  const handleListF = () => {
    setShowList(false);
  };

  const handleCModal = () => {
    setShowModal(!showModal);
  };
  const alerte = () => {
    toast.success("Message envoyer avec succés !");
  };
  const errore = () => {
    toast.error("Message n' est pas envoyer il y a une erreur !");
  };
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x395wc8",
        "template_2llkr6r",
        form.current,
        "NalC4XCA7eHNkkhsN"
      )
      .then(
        (result) => {
          alerte();
        },
        (error) => {
          console.log(error.text);
          errore();
        }
      );
    e.target.reset();
  };

  const redirectToLink = ()  => {
    window.open("https://wa.me/message/6VVP7TM7O6O4I1", "_blank");
  }

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 felx justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-0xl w-[55%] relative md:mt-0 mt-7  md:w-[44%] lg:w-[25%] text-blue-700  font-bold mr-4 sm:text-2xl cursor-pointer font-serif">
            <Link
              to="acceuil"
              smooth={true}
              onClick={() => handleItemClick("acceuil")}
            >
              DAS-CONSULTING
            </Link>
          </h1>
          <ul className="hidden md:flex w-[100%] lg:relative lg:left-[20%] left-[2%] mt-1 relative font-medium  h-[10%]">
            <Link
              to="acceuil"
              smooth={true}
              onClick={() => handleItemClick("acceuil")}
            >
              <li
                className={`cursor-pointer ${
                  selectedItem === "acceuil"
                    ? "border-b-4 border-blue-700"
                    : "hover:border-b-4 hover:border-blue-700"
                }`}
              >
                Acceuil
              </li>
            </Link>
            <Link
              to="apropos"
              smooth={true}
              onClick={() => handleItemClick("apropos")}
            >
              <li
                className={`cursor-pointer ${
                  selectedItem === "apropos"
                    ? "border-b-4 border-blue-700"
                    : "hover:border-b-4 hover:border-blue-700"
                }`}
              >
                A propos
              </li>
            </Link>
            <Link
              to="services"
              smooth={true}
              onClick={() => handleItemClick("services")}
            >
              <li
                className={`cursor-pointer ${
                  selectedItem === "services"
                    ? "border-b-4 border-blue-700"
                    : "hover:border-b-4 hover:border-blue-700"
                }`}
              >
                Services
              </li>
            </Link>
            <button
              class="px-12 py-3 lg:w-[16%] rounded-xl flex justify-between sm:relative lg:left-[28%] sm:left-[50%] sm:w-[10%] md:w-[40%] md:left-[7%] my-3 font-bold"
              onClick={handleList}
            >
              <Lottie
                loop={true}
                animationData={contact}
                className="lg:w-[50%] md:w-[17%] inline-block"
              />
              Contacter
            </button>
            <ToastContainer />
          </ul>

          <div
            className="md:hidden cursor-pointer relative mt-5 left-[30%]"
            onClick={() => {
              handleClick();
            }}
          >
            {!nav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-7 h-7 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            ) : (
              <p className="w-6 font-medium text-2xl cursor-pointer"  onClick={() => {
                handleClose();
                handleListF();
              }}>X</p>
            )}
          </div>
          <ToastContainer />
        </div>
      </div>
      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
      <Link
             onClick={() => {
              handleClose();
              handleListF();
            }}
            to="acceuil"
            smooth={true}
            offset={50}
            duration={500}
          ><li className="border-b-2 border-zinc-300 w-full cursor-pointer hover:border-b-4 hover:border-blue-700">
          
            Acceuil
          
        </li></Link>
        <Link
             onClick={() => {
              handleClose();
              handleListF();
            }}
            to="apropos"
            smooth={true}
            offset={50}
            duration={500}
          ><li className="border-b-2 border-zinc-300 w-full cursor-pointer hover:border-b-4 hover:border-blue-700">
         
            A propos
          
        </li></Link>
        <Link
             onClick={() => {
              handleClose();
              handleListF();
            }}
            to="services"
            smooth={true}
            offset={50}
            duration={500}
          ><li className="border-b-2 border-zinc-300 w-full cursor-pointer hover:border-b-4 hover:border-blue-700">
         
            Services
          
        </li></Link>
        <li
          className="border-b-2 border-zinc-300 w-full cursor-pointer hover:border-b-4 hover:border-blue-700"
          onClick={() => {
            handleList();
          }}
        >
          Contacter
        </li>
      </ul>


      <div
        className={
          !showModal
            ? "hidden"
            : "fixed sm:inset-0 bg-black bg-opacity-25 mt-[-23%] relative md:mt-[20%] sm:mt-[-12%] lg:mt-[-30%] backdrop-blur-sm flex justify-center items-center"
        }
      >
        <div class="flex flex-col justify-center items-center  w-[80%] lg:h-screen lg:mt-[25%] bg-transparent">
          <button
            className="text-white sm:relative ml-[60%]  md:abolute lg:relative md:ml-[87%] w-[10%] lg:ml-[72%] absolute top-[2%] sm:top-[1%] font-bold text-5xl lg:w-[5%] text-xl"
            onClick={handleCModal}
          >
            X
          </button>
          <div class="w-full p-8 sm:my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl bg-white lg:ml-[14%]">
            <form ref={form} onSubmit={sendEmail}>
              <div class="flex">
                <h1 class="font-bold uppercase sm:text-5xl text-1xl">
                  ContacteZ-nous <br /> Par Mail
                </h1>
              </div>
              <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-3">
                <input
                  class="w-full bg-gray-100 text-gray-900 sm:mt-2 sm:p-3 mt-0.5 p-0.5 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Nom*"
                  name="nom"
                  required
                />
                <input
                  class="w-full bg-gray-100 text-gray-900 sm:mt-2 sm:p-3 mt-0.5 p-0.5 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Prenom*"
                  name="prenom"
                  required
                />
                <input
                  class="w-full bg-gray-100 text-gray-900 sm:mt-2 sm:p-3 mt-0.5 p-0.5 rounded-lg focus:outline-none focus:shadow-outline"
                  type="email"
                  placeholder="Email*"
                  name="email"
                  required
                />
                <input
                  class="w-full bg-gray-100 text-gray-900 sm:mt-2 sm:p-3 mt-0.5 p-0.5 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Objet*"
                  name="objet"
                  required
                />
              </div>
              <div class="my-4">
                <textarea
                  placeholder="Message*"
                  class="w-full h-32 bg-gray-100 text-gray-900 sm:mt-2 sm:p-3 mt-0.5 p-0.5 rounded-lg focus:outline-none focus:shadow-outline"
                  name="message"
                  required
                ></textarea>
              </div>
              <div class="my-2 w-1/2 lg:w-1/4">
                <button
                  class="uppercase text-sm font-bold tracking-wide p-3 rounded-lg w-full 
                                focus:outline-none focus:shadow-outline text-white border bg-indigo-600 border-indigo-600
                                hover:bg-transparent hover:text-indigo-600 rounded-md
                                "
                  type="submit"
                >
                  Envoyer Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      
        
        <div className={ !showList
            ? "hidden"
            : "inline-flex rounded-md sm:mt-[32%] sm:w-[50%] relative mt-[72%] md:w-[40%] md:mt-[0%] lg:w-[20%] shadow-sm md:relative lg:ml-[80%] md:ml-[65%] "} role="group" >
          <button  onClick={() => {
            handleModal();
            handleList();
          }} class="inline-flex items-center px-4 py-2 w-[100%] text-sm font-medium lg:w-[40%] md:w-[70%] md:relative md:mt-[2%] text-center mx-1 hover:bg-indigo-400 hover:text-white">
            <Lottie
                loop={true}
                animationData={Gmail}
                className="w-[25%] inline-block bg-indigot-200"
              />
            Email
          </button>
         
          <button  onClick={() => {
            redirectToLink();
            handleList();
          }} class="inline-flex items-center px-4 py-2 text-sm w-[100%] font-medium lg:w-[40%] md:w-[70%] md:relative md:mt-[2%] mx-1 hover:bg-indigo-400 hover:text-white">
            <Lottie
                loop={true}
                animationData={Whatsapp}
                className="w-[25%] inline-block bg-indigot-200"
              />
            Whatsapp
          </button>
        </div>


    </div>


  );
};

export default NavBar;
