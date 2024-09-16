"use client";

import Events from "@/components/events/Events";
import React, {Suspense} from "react";
import Footer from "@/components/Footer";
import LightPageHeader from "@/components/LightPageHeader";
import Loading from "@/app/auth/email/confirmation/[token]/loading";
import {redirect, RedirectType, useSearchParams} from "next/navigation";
import Header from "@/components/Header";

export default function SearchEvents() {
  return (
    <Suspense fallback={<Loading/>}>
      <Search/>
    </Suspense>
  )
}

function Search() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  if (query == "") redirect("/events", RedirectType.replace);
  return (
    <div className="bg-back-grey">
      <title>Resultados da Pesquisa | IFSP Eventos</title>
      <Header search={query}/>
      <LightPageHeader title={"Resultados da pesquisa"}/>
      <Events search={query}/>
      <Footer/>
    </div>
  );
}
