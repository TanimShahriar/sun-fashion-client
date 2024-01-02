import { FaShare } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa6";
import { MdOutlineLocalShipping, MdOutlinePayment } from "react-icons/md";

import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";

const Service = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  return (
    <div className="border-b py-5 bg-gradient-to-r from-cyan-400 to-blue-600 px-20">
      <div className="grid lg:grid-cols-4 gap-4">
        <div data-aos="fade-down"
          data-aos-duration="1500"
          className="text-center bg-slate-50 bg-opacity-50 p-4 hover:bg-opacity-30">
          <FaHeadphones className="ml-[45%] text-2xl" />
          <h3 className="mt-4 text-2xl font-semibold italic">Customer support</h3>
          <h4 className="font-medium">Need assistant?</h4>
          <p className="text-xs mt-5 font-medium">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur soluta harum nam facilis pariatur totam. Laborum iste qui voluptatum ut.</p>
        </div>
        <div data-aos="fade-down"
          data-aos-duration="2000"
          className="text-center bg-slate-50 bg-opacity-50 p-4 hover:bg-opacity-30 duration-400">
          <MdOutlinePayment className="ml-[45%] text-2xl" />
          <h3 className="mt-4 text-2xl font-semibold italic">Secure payment</h3>
          <h4 className="font-medium">safe and fast</h4>
          <p className="text-xs mt-5 font-medium">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur soluta harum nam facilis pariatur totam. Laborum iste qui voluptatum ut.</p>
        </div>
        <div data-aos="fade-down"
          data-aos-duration="2500"
          className="text-center bg-slate-50 bg-opacity-60 p-4 hover:bg-opacity-30 duration-400">
          <FaShare className="ml-[45%] text-2xl" />
          <h3 className="mt-4 text-2xl font-semibold italic">free returns</h3>
          <h4 className="font-medium">easy and free</h4>
          <p className="text-xs mt-5 font-medium">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur soluta harum nam facilis pariatur totam. Laborum iste qui voluptatum ut.</p>
        </div>
        <div data-aos="fade-down"
          data-aos-duration="3000"
          className="text-center bg-slate-50 bg-opacity-50 p-4 hover:bg-opacity-30 duration-400">
          <MdOutlineLocalShipping className="ml-[45%] text-2xl" />
          <h3 className="mt-4 text-2xl font-semibold italic">free shipping</h3>
          <h4 className="font-medium">order over 99<span className="text-red-500">$</span> </h4>
          <p className="text-xs mt-5 font-medium">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur soluta harum nam facilis pariatur totam. Laborum iste qui voluptatum ut.</p>
        </div>
      </div>
    </div>
  );
};

export default Service;