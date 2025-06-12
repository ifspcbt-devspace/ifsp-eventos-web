"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

export default function ({
                           event,
                         }: {
  event: {
    id: string;
    name: string;
    description: string;
    imgUrl: string;
    owner: string;
    date: Date;
  };
}) {
  const [imgUrl, setImgUrl] = useState(event.imgUrl);

  return (
    <Link
      href={`/events/${event.id}`}
      className="px-8 md:px-0 flex flex-col bg-transparent rounded-2xl w-full h-full cursor-pointer no-underline duration-200 hover:-translate-y-2"
    >
      {/* Imagem responsiva */}
      <div className="rounded-xl overflow-hidden w-full mb-4 aspect-[3/4] relative">
        <Image
          src={imgUrl}
          onError={() => setImgUrl("/images/default_thumb.png")}
          alt="event-image"
          quality={100}
          fill
          className="object-cover"
        />
      </div>

      {/* Info do autor e data */}
      <div className="text-sm opacity-75 mb-1.5">
        Por {event.owner} -{" "}
        {event.date.toLocaleString("pt-BR", {
          day: "2-digit",
          month: "2-digit",
        })}
      </div>

      {/* Título e descrição responsivos */}
      <div className="text-left">
        <span className="text-black text-xl md:text-2xl font-semibold block mb-2">
          {event.name}
        </span>
        <p className="text-sm md:text-base opacity-75 line-clamp-5">
          {event.description}
        </p>
      </div>
    </Link>
  );
}
