import Events from "@/components/events/Events";
import React, {Suspense} from "react";
import Hero from "@/components/home/Hero";
import Loading from "./auth/email/confirmation/[token]/loading";
import Warn from "@/components/home/Warn";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <Suspense fallback={<Loading/>}>
        <Events max={3}/>
      </Suspense>
      <Warn/>
      <Footer/>
    </>
  );
}
