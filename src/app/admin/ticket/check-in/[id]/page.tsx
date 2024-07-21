import { Button } from "@nextui-org/react";
import "./style.css";
import { consumeTicket } from "@/server-actions/ticket.action";
import { toast } from "react-toastify";
import { toastConfig } from "@/utils";

export default function Page({ params }: { params: { id: string } }) {
  const handleValidate = async () => {
    const resp = await consumeTicket(params.id);
    if (resp && resp.error) {
      toast.error(resp.error, toastConfig);
      return;
    } else toast.success("Ticket validado com sucesso!", toastConfig);
  };

  return (
    <div className="w-full h-dvh flex flex-col justify-center items-center">
      {/* desktop */}
      <div className="hidden md:block ticket">
        <div className="hidden ticket-content-wrapper md:flex flex-col justify-between">
          <div className="text-center">
            <span className="font-bold text-3xl">
              TICKET - FESTA JUNINA (27/07)
            </span>
            <p className="text-base">
              INSTITUTO FEDERAL DE SÃO PAULO - CUBATÃO
            </p>
          </div>

          <div className="px-12">
            <p>Nome cadastrado: Leonardo da Silva</p>
            <p>Emitido em 20/07/2024 às 14:23:42</p>
            <p>Status: Confirmado</p>
          </div>
          <div className="mx-auto">
            <Button
              onClick={handleValidate}
              className="mt-8 text-xl bg-btn rounded-md px-3 py-2 text-black font-extrabold text-opacity-100"
            >
              Validar
            </Button>
          </div>
        </div>
      </div>

      {/* mobile */}

      <div className="md:hidden block ticket-vertical">
        <div className="md:hidden ticket-content-wrapper-vertical flex flex-col justify-between">
          <div className="text-center">
            <span className="font-bold text-3xl">
              TICKET - FESTA JUNINA (27/07)
            </span>
            <p className="text-base">
              INSTITUTO FEDERAL DE SÃO PAULO - CUBATÃO
            </p>
          </div>

          <div className="text-center">
            <p>Leonardo da Silva</p>
            <p>Emitido em 20/07/2024 às 14:23:42</p>
            <p>Status: Confirmado</p>
          </div>
          <div className="mx-auto">
            <Button
              onClick={handleValidate}
              className="mt-8 text-xl bg-btn rounded-md px-3 py-2 text-black font-extrabold text-opacity-100"
            >
              Validar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
