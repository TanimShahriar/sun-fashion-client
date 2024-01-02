import { Link } from "react-router-dom";
import useAllProducts from "../../../Hooks/useAllProducts";



const Cosmetics = () => {
  const [allProducts] = useAllProducts();
  // console.log(allProducts);
  const cosmetics = allProducts.filter(item => item.category === "cosmetics")



  return (
    <div className="p-4">

      <div className="pt-12 border-b ">
        <div className="flex items-center justify-between">
          <h2 className="text-center font-semibold p-2">cosmetics items</h2>
          <div className="flex pr-2  gap-2 ">
            <Link to="/sunglasses"><button className="bg-black text-white px-3 font-medium text-xs py-2">shop by glasses</button></Link>
            <Link to="/bag"><button className="bg-black text-white px-3 font-medium text-xs py-2">shop by bags</button></Link>
            <Link to="/fashion"><button className="bg-black text-white px-3 font-medium text-xs py-2">shop by fashion</button></Link>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2 p-2">
          {
            cosmetics.map(data => <div key={data._id} className="border p-4 rounded-lg ">

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




    </div>
  );
};

export default Cosmetics;