import Description from "@/components/home/Description";
import Events from "@/components/home/Events";
import Footer from "@/components/Footer";
import {Suspense} from "react";
import Hero from "@/components/home/Hero";
import Introduction from "@/components/home/Introduction";
import Loading from "./auth/email/confirmation/[token]/loading";
import Header from "@/components/Header";

export default function Home() {

  return (
    <div className="flex flex-col justify-center items-center">

      <Header/>
      <Hero/>
      <Introduction/>
      <Description/>
      <Suspense fallback={<Loading/>}>
        <Events/>
      </Suspense>
      <Footer/>
    </div>
  );
}
