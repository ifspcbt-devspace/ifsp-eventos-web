"use client";

import Image from "next/image";
import React, {useState} from "react";
import Link from "next/link";

export default function ({
                           event
                         }: {
  event: {
    id: string;
    name: string;
    description: string;
    imgUrl: string;
    owner: string;
    date: Date;
  }
}) {
  const [imgUrl, setImgUrl] = useState(event.imgUrl);

  return (
    <Link href={"/events/" + event.id}
          className="flex flex-col bg-transparent rounded-2xl col-span-1 row-span-1 h-full w-full duration-200 cursor-pointer no-underline hover:-translate-y-2">
      <div className="relative w-full h-full rounded-xl mb-4 overflow-hidden">
        <Image
          src={imgUrl}
          onError={() => {
            setImgUrl("/images/default-event-thumb.svg");
          }}
          alt="event-image"
          quality={100}
          height={532}
          width={400}
          className="overflow-clip box-content object-cover align-middle max-w-full w-full h-full inline-block"
        />
      </div>
      <div className={"text-sm opacity-75 mb-1.5"}>Por {event.owner}</div>
      <div className={`text-black text-left max-w-[450px]`}>
        <span
          className={"text-black mb-3 text-2xl block font-semibold"}>{event.name + " - " + event.date.toLocaleString([], {dateStyle: "short"})}</span>
        <p className={"text-sm opacity-75 line-clamp-5"}>{event.description}</p>
      </div>
    </Link>
  );
}
