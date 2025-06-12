import Events from "@/components/events/Events";
import React, {Suspense} from "react";
import Warn from "@/components/home/Warn";
import Footer from "@/components/Footer";
import LightPageHeader from "@/components/LightPageHeader";
import Loading from "@/components/Loading";
import Header from "@/components/Header";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Eventos',
}

export default function EventsPage() {
  return (
    <div className="bg-back-grey">
      <Header/>
      <LightPageHeader title={"Todos eventos"}/>
      <Suspense fallback={<Loading/>}>
        <Events all={true}/>
      </Suspense>
      <Warn/>
      <Footer/>
    </div>
  );
}
