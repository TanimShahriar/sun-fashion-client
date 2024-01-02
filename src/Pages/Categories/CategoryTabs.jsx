

const CategoryTabs = ({ items }) => {
  return (
    <div className="grid grid-cols-4 gap-2 p-2">
      {
        items.map(data => <div key={data._id} className="border p-4 rounded-lg ">

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
  );
};

export default CategoryTabs;