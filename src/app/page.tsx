"use client";

import Description from "@/components/home/Description";
import Events from "@/components/home/Events";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import Nav from "@/components/Nav";
import { useState } from "react";
import Hero from "@/components/home/Hero";
import Introduction from "@/components/home/Introduction";

export default function Home() {
  const [nav, setNav] = useState(false);

  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
    <div className="overflow-x-hidden flex flex-col justify-center items-center">
      <MobileNav nav={nav} closeNav={closeNav} />
      <Nav openNav={openNav} />
      <Hero />
      <div className="mt-20"></div>
      <Introduction />
      <Description />
      <Events />
      <Footer />
    </div>
  );
}
