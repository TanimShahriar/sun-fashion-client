import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";

const Subscribe = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  return (
    <div className="flex py-5 px-10 col-span-3 bg-gradient-to-r from-cyan-400 to-blue-600 border-b">
      <div className="flex items-center gap-10 col-span-2 w-2/3 ">
        <div data-aos="fade-up">
          <h4 className="text-xl font-bold">subscribe newsletter</h4>
          <h4 className="text-xs font-semibold">Get all the latest information on Events, Sales and Offers.</h4>
        </div>
        <div className="">
          <input className=" w-96 bg-opacity-60 h-10 px-2" placeholder="email " type="search" name="" id="" />
          <input className="p-2 bg-slate-900 text-white cursor-pointer hover:bg-opacity-80 duration-200 " type="submit" value="subscribe" />
        </div>

      </div>

      <div className="flex items-center navbar-end gap-2 col-span-1 w-1/3">

        <FaFacebookF className="cursor-pointer text-lg" />
        <FaTwitter className="cursor-pointer text-lg" />
        <FaLinkedin className="cursor-pointer text-lg" />
      </div>
    </div>
  );
};

export default Subscribe;