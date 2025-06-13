'use client';

import React, { useEffect, useState } from 'react';
import {
  Button,
  CircularProgress,
  Popover,
  PopoverContent,
  PopoverTrigger,
  useDisclosure,
} from '@heroui/react';
import { Event, Ticket } from '@/models';
import { getEvent } from '@/server-actions/event.action';
import { getTickets } from '@/server-actions/ticket.action';
import { LuSearchX } from 'react-icons/lu';
import QrCodeModal from '@/components/ticket/qrcode/QrCodeModal';
import { notifyError } from '@/utils';

export default function UserTickets({ userId }: { userId: string }) {
  const [isLoading, setIsLoading] = useState(true);
  const [ticketsData, setTicketsData] = useState<{
    items: Ticket[];
    total: number;
  }>();
  const [ticketView, setTicketView] = useState<Ticket>();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    async function load() {
      const response = await getTickets(userId);
      if ('error' in response) {
        notifyError({ description: response.error });
        return;
      }
      setTicketsData(response);
      setIsLoading(false);
    }

    load();
  }, [userId]);

  return (
    <div
      className={`col-span-10 col-start-1 row-start-2 flex flex-col rounded-xl bg-white px-8 py-8 shadow-sm xl:col-span-3 xl:col-start-6 xl:row-start-1`}
    >
      <div>
        <span className={`text-2xl font-semibold`}>Seus ingressos</span>
        <hr className={`my-4 w-full`} />
      </div>
      <QrCodeModal
        ticket={ticketView}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      ></QrCodeModal>
      <div className={`custom-scrollbar max-h-72 flex-1 overflow-y-auto p-4`}>
        {isLoading ? (
          <FetchingLoading />
        ) : ticketsData?.total === 0 ? (
          <TicketsNotFound />
        ) : (
          <div className={`grid grid-cols-4 gap-y-4`}>
            {ticketsData?.items.map((ticket) => (
              <TicketItem
                key={ticket.id}
                ticket={ticket}
                downloadAction={() => {
                  setTicketView(ticket);
                  onOpen();
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function CodePopover({ code }: { code: string }) {
  const copy = async () => {
    await navigator.clipboard.writeText(code);
  };
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={`hidden md:block`}>
      <Popover
        isOpen={isOpen}
        onOpenChange={(open) => setIsOpen(open)}
        placement='right'
        shouldCloseOnBlur={true}
      >
        <PopoverTrigger>
          <span
            onMouseLeave={() => setIsOpen(false)}
            onClick={copy}
            className={`block h-fit w-fit cursor-pointer text-[10px] opacity-70`}
          >
            #{code}
          </span>
        </PopoverTrigger>
        <PopoverContent>
          <div className='px-2 py-1 text-sm'>Código copiado!</div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

function FetchingLoading() {
  return (
    <div className='flex h-full w-full flex-col items-center justify-center'>
      <CircularProgress
        aria-label='Carregando...'
        classNames={{
          svg: 'w-12 h-12 text-black',
          indicator: 'stroke-black',
          track: 'stroke-gray-200',
        }}
      />
      <span className='text-sm'>Carregando...</span>
    </div>
  );
}

function TicketsNotFound() {
  return (
    <div className='flex h-full w-full flex-col items-center justify-center'>
      <LuSearchX className={`h-12 w-12`} />
      <span className='text-sm'>Nenhum ingresso foi encontrado</span>
    </div>
  );
}

function TicketItem({
  ticket,
  downloadAction,
}: {
  ticket: Ticket;
  downloadAction: () => void;
}) {
  const [event, setEvent] = useState<Event>();

  useEffect(() => {
    async function load() {
      const response = await getEvent(ticket.event_id);
      if ('error' in response) {
        notifyError({ description: response.error });
        return;
      }
      setEvent(response);
    }

    load();
  }, [ticket.event_id]);

  return (
    <>
      <div className={`col-span-2`}>
        <span className={`text-md`}>{event?.name}</span>
        <CodePopover code={ticket.code} />
      </div>

      <div className={`hidden h-full items-center text-sm xl:flex`}>
        {ticket.status}
      </div>

      <div className={`col-span-2 xl:col-span-1`}>
        <Button
          onPress={downloadAction}
          className={`hover:bg-opacity-90 h-full w-full cursor-pointer rounded-lg bg-neutral-900 text-sm text-white duration-200`}
        >
          Download
        </Button>
      </div>
    </>
  );
}
