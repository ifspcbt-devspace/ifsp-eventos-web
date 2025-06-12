import Events from "@/components/events/Events";
import React, {Suspense} from "react";
import Hero from "@/components/home/Hero";
import Warn from "@/components/home/Warn";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Loading from "@/components/Loading";

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
