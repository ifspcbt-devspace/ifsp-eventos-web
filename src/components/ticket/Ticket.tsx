"use client";

import { Ticket, TicketStatus } from "@/models";
import "./style.css";
import { consumeTicket, getTicket } from "@/server-actions/ticket.action";
import { getUser } from "@/server-actions/user.action";
import { toastConfig } from "@/utils";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function TicketUI({ id }: { id: string }) {
  const [ticket, setTicket] = useState<Ticket>();
  const [user, setUser] = useState<any>();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleValidate = async () => {
    setLoading(true);
    const resp = await consumeTicket(id);
    if (resp.error) toast.error(resp.error, toastConfig);
    else toast.success("Ticket validado com sucesso!", toastConfig);
    setLoading(false);
  };
  useEffect(() => {
    const fetchTicket = async (id: string) => {
      const resp = await getTicket(id);
      if ("error" in resp) {
        toast.error(resp.error, toastConfig);
        return;
      }
      setTicket(resp);
      const respUser = await getUser(resp.user_id);
      if ("error" in respUser) {
        toast.error(respUser.error, toastConfig);
        return;
      }
      setUser(respUser);
    };
    fetchTicket(id);
  }, [router]);

  const getAge = (birthDate: string) => {
    if (!birthDate) return "";
    const today = new Date();
    const [day, month, year] = birthDate.split("/");
    const birth = new Date(`${year}-${month}-${day}`);
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    const d = today.getDate() - birth.getDate();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate()) || d < 0) {
      age--;
    }
    return age + " anos";
  };

  return (
    <>
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
            <p>Nome cadastrado: {user?.name || "Carregando..."}</p>
            <p>Idade: {getAge(user?.birth_date)}</p>
            <p className="text-green-500 mt-2 text-center">{ticket?.status}</p>
          </div>
          <div className="mx-auto">
            <Button
              onClick={handleValidate}
              isLoading={loading}
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
            <p>{user?.name || "Carregando..."}</p>
            <p>Idade: {getAge(user?.birth_date)}</p>
            <p className="text-green-500 mt-2">{ticket?.status}</p>
          </div>
          <div className="mx-auto">
            <Button
              onClick={handleValidate}
              isLoading={loading}
              className="mt-8 text-xl bg-btn rounded-md px-3 py-2 text-black font-extrabold text-opacity-100"
            >
              Validar
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
