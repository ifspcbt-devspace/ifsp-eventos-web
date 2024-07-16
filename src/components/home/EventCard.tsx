"use client";

import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

export default function ({
  handleEventClick,
  name,
  date,
  maxParticipants,
  imageSrc,
}: {
  eventId?: string;
  handleEventClick?: (e: any) => void;
  name: string;
  date: string;
  maxParticipants: number;
  imageSrc: string;
}) {
  const [isLoading, setIsLoading] = React.useState(false);
  const handleClick = async (e: any) => {
    setIsLoading(true);
    if (handleEventClick) handleEventClick(e);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col bg-greenxd rounded-2xl col-span-1 row-span-1 h-80 w-64 md:h-98 md:w-80">
      <div className="relative w-full h-60 md:h-80 object-contain">
        <Image
          src={imageSrc}
          alt="event-image"
          quality={100}
          fill
          className="rounded-t-xl"
        />
      </div>
      <div className="flex-1 flex flex-col items-center py-2">
        <div className="text-center font-bold text-greens mb-4">
          {name} - {date}
        </div>
        <div className="font-semibold text-center text-greenp text-[14px] mb-3">
          Até {maxParticipants} Participantes
        </div>
        <div className="flex flex-row justify-between items-center w-9/12">
          <Button
            isLoading={isLoading}
            onClick={handleClick}
            className="text-[13px] bg-greenp hover:bg-slate-600 transition-all duration-200 text-white font-semibold px-[0.65rem] py-[0.3rem] rounded-[5px]"
          >
            Inscrever
          </Button>

          <p className="font-bold text-greens">Grátis</p>
        </div>
      </div>
    </div>
  );
}
