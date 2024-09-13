import Events from "@/components/home/Events";
import Footer from "@/components/Footer";
import {Suspense} from "react";
import Hero from "@/components/home/Hero";
import Loading from "./auth/email/confirmation/[token]/loading";
import Header from "@/components/Header";
import Warn from "@/components/home/Warn";

export default function Home() {

  return (
    <div className="flex flex-col justify-center items-center">
      <Header/>
      <Hero/>
      <Suspense fallback={<Loading/>}>
        <Events/>
      </Suspense>
      <Warn/>
      <Footer/>
    </div>
  );
}
