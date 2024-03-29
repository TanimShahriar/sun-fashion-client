// import { useQuery } from "@tanstack/react-query";
// import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAllProducts from "../../Hooks/useAllProducts";
import { useState } from "react";

const AllProducts = () => {
  const [allProducts] = useAllProducts();

  const [selects, setSelects] = useState("All")
  // console.log(allProducts);
  // const cosmetics = allProducts.filter(item => item.category === "cosmetics")
  // const fashion = allProducts.filter(item => item.category === "fashion")
  // const bag = allProducts.filter(item => item.category === "bag")
  // const sunglass = allProducts.filter(item => item.category === "sunglass");
  // console.log(cosmetics, bag, sunglass, fashion);


  // const axiosPublic = useAxiosPublic();
  // const { data: allProducts = [], refetch } = useQuery({
  //   queryKey: ["allProducts"],
  //   queryFn: async () => {
  //     const res = await axiosPublic.get("/allProducts")
  //     return res.data;
  //   }
  // })

  return (
    <div className="p-4">

      <div className="pt-12 border-b ">
        <div className="flex items-center justify-end my-4 p-2">

          <select className="border px-3 py-2 rounded-md " value={selects} onChange={e => setSelects(e.target.value)}>
            <option className="text-sm font-light lg:font-normal" >All</option>
            <option className="text-sm font-light lg:font-normal" >Bag</option>
            <option className="text-sm font-light lg:font-normal" >Sunglass</option>
            <option className="text-sm font-light lg:font-normal" >Fashion</option>
            <option className="text-sm font-light lg:font-normal" >Cosmetics</option>

          </select>
        </div>

        <div className="grid grid-cols-4 gap-2 p-2">
          {
            allProducts.filter(card => { return selects == "All" ? card : selects == card.category }).map(data => <div key={data._id} className="border p-4 rounded-lg ">

              <div data-aos="fade-up" className="">
                <img className=" h-44 lg:h-52 w-full lg:w-[550px]" src={data.image} alt="" />
                <h2 className=" text-center font-semibold mt-1">{data.name}</h2>
                <p className="text-xs text-center font-medium ">Brand: {data.brand}</p>
                <p className="text-xs text-center font-medium ">Price: {data.price}$</p>
                <p className="text-xs text-center font-medium ">category: {data.category}</p>
                <div className="flex justify-center mt-2">
                  <button className="px-3 py-1 bg-slate-500">add to cart</button>
                </div>
              </div>
            </div>)
          }
        </div>
      </div>

      {/* <div className="border-b">
        <h2 className="text-center font-semibold p-2">Bag items</h2>
        <div className="grid grid-cols-4 p-2 gap-2">
          {
            bag.map(data => <div key={data._id} className="border p-4 rounded-lg ">

              <div data-aos="fade-up" className="">
                <img className=" h-44 lg:h-52 w-full lg:w-[550px]" src={data.image} alt="" />
                <h2 className=" text-center font-semibold mt-1">{data.name}</h2>
                <p className="text-xs text-center font-medium ">Brand: {data.brand}</p>
                <p className="text-xs text-center font-medium ">Price: {data.price}$</p>
                <div className="flex justify-center mt-2">
                  <button className="px-3 py-1 bg-slate-500">add to cart</button>
                </div>
              </div>
            </div>)
          }
        </div>
      </div>

      <div className="border-b">
        <h2 className="text-center font-semibold p-2">fashion items</h2>
        <div className="grid grid-cols-4 gap-2 p-2">
          {
            fashion.map(data => <div key={data._id} className="border p-4 rounded-lg ">

              <div data-aos="fade-up" className="">
                <img className=" h-44 lg:h-52 w-full lg:w-[550px]" src={data.image} alt="" />
                <h2 className=" text-center font-semibold mt-1">{data.name}</h2>
                <p className="text-xs text-center font-medium ">Brand: {data.brand}</p>
                <p className="text-xs text-center font-medium ">Price: {data.price}$</p>
                <div className="flex justify-center mt-2">
                  <button className="px-3 py-1 bg-slate-500">add to cart</button>
                </div>
              </div>
            </div>)
          }
        </div>
      </div>

      <div className="">
        <h2 className="text-center font-semibold p-2">sunglass items</h2>
        <div className="grid grid-cols-4 gap-2">
          {
            sunglass.map(data => <div key={data._id} className="border p-4 rounded-lg ">

              <div data-aos="fade-down" className="">
                <img className=" h-44 lg:h-52 w-full lg:w-[550px]" src={data.image} alt="" />
                <h2 className=" text-center font-semibold mt-1">{data.name}</h2>
                <p className="text-xs text-center font-medium ">Brand: {data.brand}</p>
                <p className="text-xs text-center font-medium ">Price: {data.price}$</p>
                <div className="flex justify-center mt-2">
                  <button className="px-3 py-1 bg-slate-500">add to cart</button>
                </div>
              </div>
            </div>)
          }
        </div>
      </div> */}


    </div>
  );
};

export default AllProducts;