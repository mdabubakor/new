"use client";
import React, { useState } from "react";
import Container from "./Container";
import { Logo, Navbar } from "../../data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoClose, IoReorderThreeOutline } from "react-icons/io5";

const Header = () => {
  const path = usePathname();
  console.log(path);
  const [show, setShow] = useState(false);
  const delet =()=>{
    console.log(setShow(false));
    
  }

  return (
    <div className=" sticky top-0 z-10 h-32 ">
      <Container className="  ">
     <div className="navbar bg-base-100 flex items-center justify-between  h-20">
     <div> 
    <h1 className="text-5xl font-thin underline ">AB<span className="text-yellow-700 font-bold">bio</span></h1>
  </div>
  <div className="flex-none">
    <button className="lg:hidden btn btn-square btn-ghost relative sm:right-5 md:right-4 ">
      <svg onClick={()=>setShow(!show)}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current "><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
    </button>
  </div>
  <div className="flex-1 absolute top-16 sm:left-10 lg:left-80 ">
    {
      show && <div className={``}>
        {
          Navbar.map((item)=>(
            <ul className="mt-4">
              <Link key={item?._id} href={item?.href} className={``}> {
            <li className={` btn btn-ghost text-2xl font-serif bg-zinc-100 px-3 rounded-lg shadow-inner shadow-zinc-900 border-r border-yellow-400  ${item?.href === path && " hover:bg-zinc-100 shadow shadow-yellow-300" } `}>
              {item?.title}
            </li>
            }</Link>
            </ul>
          ))
        }
      </div> 
     
    }
  </div>
    <div className="md:hidden sm:hidden  lg:flex gap-10 ">
  {
          Navbar.map((item)=>(
            <ul className="mt-4 ">
              <Link key={item?._id} href={item?.href} className={` `}> {
              <li className={`btn btn-ghost text-2xl font-serif bg-white px-3 rounded-lg shadow-inner shadow-zinc-800 border-r border-yellow-400 hover:bg-zinc-100 hover:shadow hover:shadow-yellow-300 ${item?.href === path && " hover:bg-zinc-100 shadow shadow-yellow-300"}`}>
                {item?.title}
              </li>
            }</Link>
            </ul>
          ))
        }
  </div>

  {/* <div className="flex-none">
    <button className="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
    </button>
  </div> */}
</div>
      </Container>
    </div>
  );
};

export default Header;
