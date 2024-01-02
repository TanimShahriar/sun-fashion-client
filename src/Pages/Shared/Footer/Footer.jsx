import { MdFacebook } from "react-icons/md";
import { FaInstagram, FaLinkedin, FaPinterest, FaTelegram, FaTwitter, FaYoutube } from "react-icons/fa";
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  return (
    <div className="bg-gradient-to-r from-cyan-400 to-blue-600   items-center pb-2 border-b">
      <div className="flex justify-center pb-14 md:pb-9"> <img className="w-2/5 md:w-[25%] lg:w-[18%] xl:w-[15%]"
        src="images/cucet-footer-logo.png" alt="" srcset="" /> </div>
      <div className="space-y-9 grid grid-cols-1 md:grid-cols-2 md:pl-24 md:pr-16 lg:grid-cols-4 lg:px-7 xl:px-14 xl:ml-16">
        <div className=" font-[500] text-[14px] leading-7">
          <div className="flex justify-start md:mt-10">
            <h1
              className="text-white pb-[36px] font-sans uppercase font-normal tracking-wider underline underline-offset-[12px] decoration-red-500/90">
              Inform </h1> <span className="text-white font-sans uppercase font-normal tracking-wider">ation</span>
          </div>
          <p>Registration Start Date</p>
          <p>Registration End Date</p>
          <p>Book </p>
        </div>
        <div className=" font-[500] text-[14px] leading-7 tracking-wide md:">
          <div>
            <pre
              className="text-white pb-[34px] font-sans uppercase font-normal tracking-wider underline underline-offset-[12px] decoration-red-500/90"> dates &nbsp;</pre>
          </div>
          <p>23 Dec 2022</p>
          <p>30 May 2024</p>
          <p>23 Dec 2023 to 31 May 2024</p>
        </div>
        <div className="md:flex flex-col justify-between">
          <div className=" font-[500] text-[14px] leading-7 tracking-wide">
            <div className="flex justify-start">
              <h1
                className="text-white pb-[34px] font-sans uppercase font-normal tracking-wider underline underline-offset-[12px] decoration-red-500/90">
                About </h1> <span className="text-white font-sans uppercase font-normal tracking-wider">exam</span>
            </div>
            <p className=""> <a className="hover:text-[#cacaca]" href="#">Apply</a> </p>
            <p className=""> <a className="hover:text-[#cacaca]" href="#">Eligibility</a> </p>
            <p className=""> <a className="hover:text-[#cacaca]" href="#">Application Process</a> </p>
            <p className=""> <a className="hover:text-[#cacaca]" href="#">Syllabus</a> </p>
          </div>

        </div>
        <div className=" font-[500] text-[14px]  leading-6 tracking-wide md:order-4 lg:">
          <div className="flex justify-start">
            <h1
              className="text-white pb-[38px] font-sans uppercase font-normal tracking-wider underline underline-offset-[12px] decoration-red-500/90">
              get in t </h1> <span className="text-white font-sans uppercase font-normal tracking-wider">ouch</span>
          </div>
          <p className=""> <i className="fa fa-home text-[17px]"></i><strong
            className=" font-[500] text-[14px] tracking-wide">Our Company</strong> </p>
          <div className="leading-7">
            <p className=""> NH-70 Chandigarh-Ludhiana Highway, <br /> Florida, (US) <br /> General Helpline
              No:+1 987-6543-210 </p>
          </div>

        </div>
      </div>
      <div className=" contrast-200 mt-3 mb-3 md:-mt-4 md:-mb-2 lg:-mt-16 xl:-mt-24">
        <p>&nbsp;</p>
        <p>&nbsp;</p>
      </div>
      <div className=" mt-20 flex gap-6 justify-center items-center md:mb-1 mb-4  text-center text-xl ">
        <p> <a href="#"
          className="  duration-500  rounded-full inline-block pt-[7px]"> <MdFacebook className="text-4xl"></MdFacebook> </a> </p>
        <p> <a href="#"
          className="  duration-500  rounded-full inline-block pt-[7px]"> <FaTwitter className="text-3xl"></FaTwitter> </a> </p>
        <p> <a href="#"
          className="  duration-500  rounded-full inline-block pt-[7px]"> <FaInstagram className="text-3xl"></FaInstagram> </a> </p>
        <p> <a href="#"
          className="  duration-500  rounded-full inline-block pt-[7px]"> <FaLinkedin className="text-3xl"></FaLinkedin> </a> </p>
        <p> <a href="#"
          className="  duration-500  rounded-full inline-block pt-[7px]"> <FaYoutube className="text-3xl"></FaYoutube> </a> </p>
        <p> <a href="#"
          className="  duration-500  rounded-full inline-block pt-[7px]"><FaPinterest className="text-3xl"></FaPinterest> </a> </p>
        <p> <a href="#"
          className="  duration-500  rounded-full inline-block pt-[7px]"><FaTelegram className="text-3xl"></FaTelegram> </a> </p>

      </div>
    </div>

  );
};

export default Footer;

//BiLogoFacebook  BiLogoTwitter  BiLogoInstagram