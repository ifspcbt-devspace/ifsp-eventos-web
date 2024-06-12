'use client';
import Description from "@/components/Description";
import Events from "@/components/Eventos";
import Footer from "@/components/Footer";
import Introduction from "@/components/Introduction";
import Menu from "@/components/Menu";
import MobileNav from "@/components/MobileNav";
import Nav from "@/components/Nav";
import { useState } from "react";

export default function Home() {
  const [nav, setNav] = useState(false);

  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  
  return (
    <div className="overflow-x-hidden ">
      <MobileNav nav={nav} closeNav={closeNav} />
      <Nav openNav={openNav} />
      <Menu />
      <div className=" mt-72"></div>
      <Introduction />
      <div className=" mt-2"></div>
      <Description />
      <Events />
      <Footer />
      
    </div>
  );
}
