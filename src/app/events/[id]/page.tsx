import Header from "@/components/Header";
import React, {Suspense} from "react";
import Footer from "@/components/Footer";
import "@/components/darkpageheader.css";
import {getEvent} from "@/server-actions/event.action";
import {Metadata} from "next";
import EventViewComponent from "@/components/events/single/EventView";

export async function generateMetadata(
  {params}: { params: { id: string } }
): Promise<Metadata> {
  const id = params.id

  const event = await getEvent(id);
  if ("error" in event) {
    return {
      title: "Evento não encontrado",
      description: "O evento que você está tentando acessar não foi encontrado.",
    }
  }

  return {
    title: event.name,
    description: event.description,
  }
}

export default function EventPage({params}: { params: { id: string } }) {
  return (
    <div className="bg-back-grey">
      <div className="min-h-[90vh] bg-white">
        <Header/>
        <Suspense fallback={"Carregando..."}>
          <EventViewComponent params={params}/>
        </Suspense>
      </div>
      <Footer/>
    </div>
  );

}