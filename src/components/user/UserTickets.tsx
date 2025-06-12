"use client";

import React, {useEffect, useState} from "react";
import {Button, CircularProgress, Popover, PopoverContent, PopoverTrigger, useDisclosure} from "@heroui/react";
import {Event, Ticket} from "@/models";
import {getEvent} from "@/server-actions/event.action";
import {getTickets} from "@/server-actions/ticket.action";
import {LuSearchX} from "react-icons/lu";
import QrCodeModal from "@/components/ticket/qrcode/QrCodeModal";
import {notifyError} from "@/utils";

export default function UserTickets({userId}: { userId: string }) {
  const [isLoading, setIsLoading] = useState(true);
  const [ticketsData, setTicketsData] = useState<{
    items: Ticket[],
    total: number
  }>();
  const [ticketView, setTicketView] = useState<Ticket>();
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  useEffect(() => {
    async function load() {
      const response = await getTickets(userId);
      if ("error" in response) {
        notifyError({description: response.error});
        return
      }
      setTicketsData(response);
      setIsLoading(false);
    }

    load();
  }, [userId]);

  return (
    <div
      className={`xl:col-start-6 xl:col-span-3 xl:row-start-1 row-start-2 col-start-1 col-span-10 bg-white rounded-xl shadow-sm px-8 py-8 flex flex-col`}>
      <div>
        <span className={`text-2xl font-semibold`}>Seus ingressos</span>
        <hr className={`my-4 w-full`}/>
      </div>
      <QrCodeModal ticket={ticketView} isOpen={isOpen} onOpenChange={onOpenChange}></QrCodeModal>
      <div className={`flex-1 overflow-y-auto max-h-72 custom-scrollbar p-4`}>

        {
          isLoading ?
            <FetchingLoading/>
            :
            ticketsData?.total === 0 ?
              <TicketsNotFound/>
              :
              <div className={`grid grid-cols-4 gap-y-4`}>
                {ticketsData?.items.map((ticket) => (
                  <TicketItem key={ticket.id} ticket={ticket} downloadAction={() => {
                    setTicketView(ticket);
                    onOpen();
                  }}/>
                ))}
              </div>
        }

      </div>

    </div>
  )
}

function CodePopover({code}: { code: string }) {
  const copy = async () => {
    await navigator.clipboard.writeText(code);
  };
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={`hidden md:block`}>
      <Popover isOpen={isOpen} onOpenChange={(open) => setIsOpen(open)} placement="right"
               shouldCloseOnBlur={true}>
        <PopoverTrigger>
                <span onMouseLeave={() => setIsOpen(false)}
                      onClick={copy}
                      className={`text-[10px] opacity-70 block cursor-pointer w-fit h-fit`}>#{code}</span>
        </PopoverTrigger>
        <PopoverContent>
          <div className="px-2 py-1 text-sm">
            Código copiado!
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}

function FetchingLoading() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <CircularProgress classNames={{svg: "w-12 h-12", base: ""}} aria-label="Loading..."/>
      <span className="text-sm">Carregando...</span>
    </div>
  )
}

function TicketsNotFound() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <LuSearchX className={`h-12 w-12`}/>
      <span className="text-sm">Nenhum ingresso foi encontrado</span>
    </div>
  )
}

function TicketItem({ticket, downloadAction}: { ticket: Ticket, downloadAction: () => void }) {
  const [event, setEvent] = useState<Event>();

  useEffect(() => {
    async function load() {
      const response = await getEvent(ticket.event_id);
      if ("error" in response) {
        notifyError({description: response.error});
        return
      }
      setEvent(response);
    }

    load();
  }, [ticket.event_id]);


  return (<>
    <div className={`col-span-2`}>
      <span className={`text-md`}>{event?.name}</span>
      <CodePopover code={ticket.code}/>
    </div>

    <div className={`h-full text-sm items-center hidden xl:flex`}>
      {ticket.status}
    </div>

    <div className={`col-span-2 xl:col-span-1`}>
      <Button
        onPress={downloadAction}
        className={`cursor-pointer duration-200 hover:bg-opacity-90 bg-neutral-900 text-white w-full h-full rounded-lg text-sm`}>Download</Button>
    </div>
  </>)
}