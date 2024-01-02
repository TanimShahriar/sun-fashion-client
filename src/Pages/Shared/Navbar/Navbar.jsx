import { FaHeart, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import AOS from "aos"; import "aos/dist/aos.css"; import { useEffect } from "react";

const Navbar = () => {
  useEffect(() => { AOS.init({ duration: 1500 }) }, []);

  const handleSearch = e => {

  }

  const navLinks = <>

    <NavLink className="focus:bg-slate-600 px-3 py-1 text-base text-slate-200  rounded-md font-semibold  btn-outline mr-2 duration-300 " to='/'>Home</NavLink>
    <NavLink className="focus:bg-slate-600 px-3 py-1 text-base text-slate-200  rounded-md font-semibold  btn-outline mr-2 duration-300 " to='/apartment'>Categories</NavLink>
    <NavLink className="focus:bg-slate-600 px-3 py-1 text-base text-slate-200  rounded-md font-semibold  btn-outline mr-2 duration-300 " to='/allProducts'>Products</NavLink>
    <NavLink className="focus:bg-slate-600 px-3 py-1 text-base text-slate-200  rounded-md font-semibold  btn-outline mr-2 duration-300 " to='/gallery'>Pages</NavLink>
    <NavLink className="focus:bg-slate-600 px-3 py-1 text-base text-slate-200  rounded-md font-semibold  btn-outline mr-2 duration-300 " to='/gallery'>Blogs</NavLink>

  </>
  return (
    <div className="navbar bg-gradient-to-r from-cyan-400 to-blue-600 max-w-screen-2xl fixed z-10 bg-opacity-30  px-10 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>
        {/* <Link to="/"><img className="h-12 lg:h-16" src="https://i.ibb.co/XbCZ2G9/thehill-logo-teal.webp" alt="" /></Link> */}
        <Link to="/">
          <div className="hidden lg:flex text-lg bg-slate-300 py-2 px-5 rounded-2xl">
            <h1 data-aos="zoom-in" className="font-semibold">Sun</h1>
            <h1 data-aos="zoom-in" className="text-red-500 font-bold ml-2">fashion</h1>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>

      <div className="gap-3">


      </div>
      <div className="text-xl  space-x-1 text-slate-200 navbar-end gap-3">


        <Link to=""> <FaSearch onSubmit={handleSearch} className="cursor-pointer" /></Link>
        <Link to="/signIn"><FaUser className="cursor-pointer" /></Link>
        <FaHeart className="cursor-pointer" />
        <FaShoppingCart className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;

