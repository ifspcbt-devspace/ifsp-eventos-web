import { Bars3Icon } from "@heroicons/react/24/solid";
import React from "react";
import { IoSearch } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import SignIn from "./login/SignIn";
import Link from "next/link";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  return (
    <div className="w-full top-0 h-24 bg-black shadow-md">
      <div className="flex items-center justify-between w-[72%] mx-auto h-[100%]">
        <h1 className="text-customLightGreen font-extrabold flex-[0.65] text-[17px]">
          IFSP EVENTOS
        </h1>
        <div className="nav-link hover:text-slate-300 transition-all duration-200 text-customLightGreen font-semibold text-[12.5px] cursor-pointer">
          Home
        </div>

        <Link
          className="nav-link hover:text-slate-300 transition-all duration-200 text-customLightGreen font-semibold text-[12.5px] cursor-pointer ml-4"
          scroll
          href="/#eventos"
        >
          Eventos
        </Link>
        <Link href="mailto:ifspcbt.informatica@gmail.com?subject=Suporte no site IFSP Eventos" className="nav-link hover:text-slate-300 transition-all duration-200 text-customLightGreen font-semibold text-[12.5px] cursor-pointer ml-4">
          Contato
        </Link>

        <div className="nav-link hover:text-slate-500 transition-all duration-200 text-customLightGreen font-inter cursor-pointer">
          <IoSearch />
        </div>
        <div className="nav-link hover:text-slate-500 transition-all duration-200 text-customLightGreen font-inter cursor-pointer ml-2">
          <LuUser2 />
        </div>
        <div className="ml-2">
          <SignIn />
        </div>
        <div onClick={openNav}>
          <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-customLightGreen" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
