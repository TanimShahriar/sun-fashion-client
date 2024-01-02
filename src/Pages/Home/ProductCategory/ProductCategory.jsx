import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const Courses = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])


  const axiosPublic = useAxiosPublic();
  const { data: category = [], refetch } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await axiosPublic.get("/category")
      return res.data;
    }
  })


  return (
    <div className="py-5  bg-gradient-to-r from-cyan-300 to-blue-500">
      <Helmet>
        <title>Sun fashion | Category</title>
      </Helmet>
      <h2 className="ml-5  text-center text-lg font-bold pb-3">Shop by category</h2>
      <div className="grid lg:grid-cols-6 gap-2 px-5">
        {
          category.map(data => <div key={data._id} className=" p-4 rounded-lg ">

            <div data-aos="fade-up" className="">
              <img className=" h-44 lg:h-52 w-full lg:w-[550px]" src={data.image} alt="" />
              <h2 className=" text-center font-semibold mt-1">{data.name}</h2>
              <p className="text-xs text-center font-medium ">{data.quantity} products</p>
            </div>
          </div>)
        }

      </div>
    </div>
  );
};

export default Courses;