import AOS from "aos"; import "aos/dist/aos.css"; import { useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';



const Banner = () => {
  useEffect(() => { AOS.init({ duration: 1500 }) }, []);

  return (
    <>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper text-center"
      >
        <SwiperSlide>

          <div className=" px-4 lg:px-40 lg:flex justify-between items-center gap-28 pt-20 bg-gradient-to-r from-cyan-400 to-blue-600 h-[700px] ">

            {/* div-1: Content */}
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              className="space-y-4 w-full">
              <div className="text-xl lg:text-2xl opacity-70 font-medium  space-y-2">
                <h2 className="italic ml-3">Winter fashion trendy</h2>
                <h2 className="text-3xl font-bold">Get up to 30% off </h2>
                <h2 className="text-5xl font-bold">On jackets </h2>
                <p className="font-semibold mr-6">Starting at <span className="bg-slate-800 py-1 px-3 text-white"> <span className="">$199</span><sup className=" text-xs"> .99</sup> </span> </p>
              </div>

              <div className="space-x-0 ">
                {/* <a className="bg-[#723d9c] px-4 py-2 rounded-lg" href="/Resume.pdf" download>Download Resume</a> <a className="bg-[#723d9c] px-4 py-2 rounded-lg">Browse More</a> */}

                <div className="flex ml-10 items-center ">
                  <button className="btn btn-neutral">shop now</button>
                </div>


              </div>
            </div>

            {/* div-2: logo/image */}
            <div className="" >
              <img className="w-96 lg:w-[2600px] opacity-60 rounded-3xl  h-72 mt-5 lg:h-[633px]" src="https://i.ibb.co/0rhTwhk/smiling-lady-model.png" alt="" />
            </div>

          </div>
        </SwiperSlide>

        {/* slide-2 */}
        <SwiperSlide>

          <div className="text-left px-4 lg:px-40 lg:flex justify-between items-center gap-28 pt-20 bg-gradient-to-r from-cyan-400 to-blue-600 h-[700px] ">

            {/* div-1: Content */}
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              className="space-y-4 w-full">
              <div className="text-xl lg:text-2xl opacity-70 font-medium  space-y-2">
                <h2 className="italic">New season hasty</h2>
                <h2 className="flex text-6xl font-bold"> <span className="text-base -rotate-90">up to</span>20% off </h2>
                <p className="font-semibold mr-6">Starting at <span className="bg-slate-800 py-1 px-3 text-white"> <span className="">$199</span><sup className=" text-xs"> .99</sup> </span> </p>
              </div>

              <div className="space-x-0 ">
                {/* <a className="bg-[#723d9c] px-4 py-2 rounded-lg" href="/Resume.pdf" download>Download Resume</a> <a className="bg-[#723d9c] px-4 py-2 rounded-lg">Browse More</a> */}

                <div className="flex items-center ">
                  <button className="btn btn-neutral">shop now</button>
                </div>


              </div>
            </div>

            {/* div-2: logo/image */}
            <div className="" >
              <img className="w-96 lg:w-[2600px] opacity-60 rounded-3xl  h-72 mt-5 lg:h-[633px]" src="https://i.ibb.co/LZLG6CD/style-2.png" alt="" />
            </div>

          </div>

        </SwiperSlide>


      </Swiper>
    </>
  );
};

export default Banner;







// import AOS from "aos"; import "aos/dist/aos.css"; import { useEffect } from "react";

// const Banner = () => {
//   useEffect(() => { AOS.init({ duration: 1500 }) }, []);

// //   return (
// <div className=" px-4 lg:px-40 lg:flex justify-between items-center gap-28 pt-20 bg-gradient-to-r from-cyan-400 to-blue-600 h-[700px] ">

//   {/* div-1: Content */}
//   <div
//     data-aos="fade-up"
//     data-aos-anchor-placement="center-bottom"
//     className="space-y-4 w-full">
//     <div className="text-xl lg:text-2xl opacity-70 font-medium space-y-1">
//       <h2 className="italic">Winter fashion trendy</h2>
//       <h2 className="text-3xl font-bold">Get up to 30% off </h2>
//       <h2 className="text-5xl font-bold">On jackets </h2>
//     </div>
//     <p className="font-semibold">A Starting at <span className="bg-slate-800 py-1 px-3 text-white"> <span className="">$199</span><sup className=" text-xs"> .99</sup> </span> </p>
//     <div className="space-x-0 ">
//       {/* <a className="bg-[#723d9c] px-4 py-2 rounded-lg" href="/Resume.pdf" download>Download Resume</a>
//           <a className="bg-[#723d9c] px-4 py-2 rounded-lg">Browse More</a> */}

//       <div className="flex items-center ">
//         <button className="btn btn-neutral">shop now</button>
//       </div>


//     </div>
//   </div>

//   {/* div-2: logo/image */}
//   <div className="" >
//     <img className="w-96 lg:w-[2600px] opacity-60 rounded-3xl  h-72 mt-5 lg:h-[633px]" src="https://i.ibb.co/0rhTwhk/smiling-lady-model.png" alt="" />
//   </div>

// </div>
//   );
// };

// export default Banner;