import Events from "@/components/home/Events";
import React, {Suspense} from "react";
import Hero from "@/components/home/Hero";
import Loading from "./auth/email/confirmation/[token]/loading";
import Warn from "@/components/home/Warn";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero/>
      <Suspense fallback={<Loading/>}>
        <Events/>
      </Suspense>
      <Warn/>
      <Footer/>
    </>
  );
}
