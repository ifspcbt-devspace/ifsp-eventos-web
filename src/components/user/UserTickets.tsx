"use client";

import React from "react";
import {Button, Popover, PopoverContent, PopoverTrigger} from "@nextui-org/react";

export default function UserTickets() {

  return (
    <div
      className={`xl:col-start-6 xl:col-span-3 xl:row-start-1 row-start-2 col-start-2 col-span-8 bg-white rounded-xl shadow-sm px-8 py-8 flex flex-col`}>
      <div>
        <span className={`text-2xl font-semibold`}>Seus ingressos</span>
        <hr className={`my-4 w-full`}/>
      </div>

      <div className={`flex-1 overflow-y-auto max-h-72 custom-scrollbar p-4`}>
        <div className={`grid grid-cols-4 gap-y-4`}>

          <TicketItem/>
          <TicketItem/>
          <TicketItem/>
          <TicketItem/>
          <TicketItem/>
          <TicketItem/>
          <TicketItem/>
          <TicketItem/>
          <TicketItem/>

        </div>

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
  )
}

function TicketItem() {
  return (<>
    <div className={`col-span-2`}>
      <span className={`text-md`}>Festa JunIF</span>
      <CodePopover code={`DSAD8232DS`}/>
    </div>

    <div className={`h-full text-sm items-center hidden xl:flex`}>
      Válido
    </div>

    <div className={`col-span-2 xl:col-span-1`}>
      <Button isLoading={false}
              className={`cursor-pointer duration-200 hover:bg-opacity-90 bg-neutral-900 text-white w-full h-full rounded-lg text-sm`}>Download</Button>
    </div>
  </>)
}