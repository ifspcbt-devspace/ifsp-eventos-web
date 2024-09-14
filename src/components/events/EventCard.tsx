import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function ({
                           event
                         }: {
  event: {
    id: string;
    name: string;
    description: string;
    img: string;
    owner: string;
    date: string;
  }
}) {

  return (
    <Link href={"#"}
          className="flex flex-col bg-transparent rounded-2xl col-span-1 row-span-1 h-full w-full duration-200 cursor-pointer no-underline hover:-translate-y-2">
      <div className="relative w-full h-full rounded-xl mb-4 overflow-hidden">
        <Image
          src={event.img}
          alt="event-image"
          quality={100}
          height={100}
          width={100}
          className="overflow-clip box-content object-cover align-middle max-w-full w-full h-full inline-block"
        />
      </div>
      <div className={"text-sm opacity-75 mb-1.5"}>Por {event.owner}</div>
      <div className={`text-black text-left max-w-[450px]`}>
        <span
          className={"text-black mb-3 text-2xl block font-semibold"}>{event.name + " - " + new Date(event.date).toLocaleString([], {dateStyle: "short"})}</span>
        <p className={"text-sm opacity-75"}>{event.description}</p>
      </div>
    </Link>
  );
}
