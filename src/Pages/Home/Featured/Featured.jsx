import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Featured = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])


  return (
    <div className="flex justify-center  bg-gradient-to-r from-cyan-400 to-blue-600 border-b border-blue-300 ">
      <div className="flex flex-col lg:flex-row items-center max-w-full w-[90%] m-4">


        <div data-aos="fade-left"
          data-aos-duration="1500"
          style={{ backgroundImage: 'url(https://i.ibb.co/fSzFPwF/outdoor-und.jpg)' }}
          className="bg-no-repeat bg-cover bg-center lg:bg-left flex flex-col w-[90%] lg:w-[40%] h-[470px] m-2 brightness-110 hover:brightness-90 ">
          <div className="absolute inset-0 bg-gray-900 bg-opacity-80">
            <div className="flex flex-col  items-center justify-center p-2 text-gray-300">
              <div className="font-bold text-2xl mt-[60%]  "> <a href="">Fashion winter sale</a></div>
              <div className="font-semibold text-sm text-slate-400  "> <a href="">browse in all our categories</a></div>
            </div>
            <div className="flex justify-center mt-3">
              <Link to="/fashion"><button className="bg-white text-black px-3 font-semibold text-xs py-2">shop by fashion</button></Link>
            </div>
          </div>
        </div>

        <div data-aos="fade-left"
          data-aos-duration="2000"
          style={{ backgroundImage: 'url(https://i.ibb.co/w0gvF38/cosmetics.jpg)' }}
          className="bg-no-repeat bg-cover bg-center lg:bg-left flex flex-col w-[90%] lg:w-[40%] h-[470px] m-2 brightness-110 hover:brightness-90 ">
          <div className="absolute inset-0 bg-pink-900 bg-opacity-70">
            <div className="flex flex-col items-center justify-center p-2 text-slate-300">
              <div className="font-bold  mt-10 text-2xl"> <a href="">cosmetics trends</a></div>
              <div className="font-semibold text-sm text-slate-400"> <a href="">browse in all our categories</a></div>
            </div>
            <div className="flex justify-center mt-3">
              <Link to="/cosmetics"><button className="bg-slate-900 text-slate-300 px-3 font-medium text-xs py-2">shop by cosmetics</button></Link>
            </div>
          </div>
        </div>



        <div data-aos="fade-left"
          data-aos-duration="2500"
          style={{ backgroundImage: 'url(https://i.ibb.co/CtVvXCP/girl-Glasses.webp)' }}
          className="bg-no-repeat bg-cover bg-center lg:bg-left flex flex-col w-[90%] lg:w-[40%] h-[470px] m-2 brightness-110 hover:brightness-90 ">
          <div className="absolute inset-0 bg-gray-900 bg-opacity-70">
            <div className="flex flex-col justify-center p-2 text-gray-300">
              <div className="font-bold text-2xl mt-[100%]"> <a href="">sunglasses <span className="text-red-600">sale</span></a></div>
              <div className="font-medium text-sm text-slate-300 ml-12"> <a href="">Find yours desire choice</a></div>
            </div>
            <div className="flex justify-center  ">
              <Link to="/sunglasses"><button className="bg-black text-white px-3 font-medium text-xs py-2">shop by glasses</button></Link>
            </div>

          </div>
        </div>

        <div data-aos="fade-left"
          data-aos-duration="3000"
          style={{ backgroundImage: 'url(https://i.ibb.co/nkhS8Fv/bags.jpg)' }}
          className="bg-no-repeat bg-cover bg-center lg:bg-left flex flex-col w-[90%] lg:w-[40%] h-[470px] m-2 brightness-110 hover:brightness-90 ">
          <div className="absolute inset-0 bg-slate-500 bg-opacity-80 space-y-3">
            <div className="flex flex-col items-center justify-center p-2 space-y-6 ">
              <div className="font-bold text-2xl mt-36 -rotate-45"> <a href="">Up to <span className="text-red-600 text-3xl">70%</span> <span className="text-sm">in all bags</span></a></div>
              <div className="font-bold text-xl mr-3 mt-2 -rotate-45"> <a href="">starting at 100$</a></div>
            </div>
            <div className="flex justify-center -rotate-45 ">
              <Link to="bag"><button className="bg-black text-white px-3 font-medium text-xs py-2 bg-opacity-50">shop by bags</button></Link>
            </div>
          </div>
        </div>

      </div>

    </div>

  );
};

export default Featured;





