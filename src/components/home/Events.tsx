import React from "react";
import EventCard from "./EventCard";

const Events = () => {
  return (
    <div id="eventos" className="mt-5 mb-48 bg-black w-full flex flex-col items-center">
      <div className="text-center">
        <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-extrabold text-customLightGreen">
          Nossos Próximos Eventos
        </h1>
      </div>
      <div className="mt-16 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12">
        <EventCard
          name="Festa Junina"
          date="29/06"
          participants={0}
          maxParticipants={500}
          imageSrc="/images/festajunina.jpg"
        />
        <EventCard
          name="Hallowif"
          date="??/10"
          participants={0}
          maxParticipants={500}
          imageSrc="/images/iconeinterrogacao.webp"
        />
        <EventCard
          name="Em breve"
          date="??/??"
          participants={0}
          maxParticipants={500}
          imageSrc="/images/iconeinterrogacao.webp"
        />
      </div>
    </div>
  );
};

export default Events;
