"use client";

import React, {Dispatch, SetStateAction, Suspense, useEffect, useState} from "react";
import {Enrollment, Event, SessionData, TicketSale} from "@/models";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {getEvent, getTicketSales} from "@/server-actions/event.action";
import {toast} from "react-toastify";
import {toastConfig} from "@/constants";
import DarkPageHeader from "@/components/DarkPageHeader";
import Link from "next/link";
import {useDisclosure} from "@nextui-org/react";
import ConfirmSubscription from "@/components/events/subscription/ConfirmSubscription";
import {enrollUser, listUserEnrollments} from "@/server-actions/enrollment.action";
import {getSession} from "@/server-actions/auth.action";
import "./eventview.css"

export default function EventViewComponent({params}: { params: { id: string } }) {
  return (
    <Suspense>
      <EventView params={params}/>
    </Suspense>
  )
}

export function EventView({params}: { params: { id: string } }) {
  const searchParams = useSearchParams();
  const [event, setEvent] = useState<Event>();
  const [enrollment, setEnrollment] = useState();
  const [ticketSales, setTicketSales] = useState<TicketSale[]>();
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [ticketSaleID, setTicketSaleID] = useState<string>("");
  const [imgUrl, setImgUrl] = useState("/images/default_thumb.png");
  const [session, setSession] = useState<SessionData>();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const load = async () => {
      const event = await getEvent(params.id);
      if ("error" in event) {
        router.replace("/");
        toast.warn(event.error, toastConfig);
        return;
      }
      const ticketSales = await getTicketSales(event.id);
      if ("error" in ticketSales) {
        router.replace("/");
        toast.warn(ticketSales.error, toastConfig);
        return;
      }
      setEvent(event);
      setImgUrl(`${process.env.API_BASE_URL}/event/${event.id}/thumbnail`);
      setTicketSales(ticketSales);
      const sessionData = await getSession();
      if (sessionData) setSession(sessionData);

      const enrollments = await listUserEnrollments();
      let enrollment = undefined;
      if (!("error" in enrollments)) {
        enrollment = enrollments.find((enrollment: Enrollment) => enrollment.event_id === event.id);
        setEnrollment(enrollment);
      }
      if (searchParams.get("open") && !enrollment) onOpen();
    }
    load();
  }, [params.id]);

  const handleSubscription = async (ticketSaleId: string) => {
    if (enrollment) {
      router.push(`/user/account`);
      toast.info("Faça o download do seu ingresso", toastConfig);
      return;
    }
    setTicketSaleID(ticketSaleId);
    onOpen();
  }

  const handleAction = async (open: () => void, setPreferenceId: Dispatch<SetStateAction<string>>) => {
    if (event) {
      if (!session) {
        router.push(`/auth/log-in?redir=${pathname + `?open=true`}`);
        return;
      }
      if (!session.user.document_initials) {
        router.push(`/user/account`);
        return;
      }
      const resp = await enrollUser(event.id, ticketSaleID);
      if ("error" in resp) {
        toast.error(resp.error, toastConfig);
      } else if (resp.preferenceId) {
        setPreferenceId(resp.preferenceId);
        open();
      }
    }
  }

  if (!event) return <></>;

  return (
    <>
      <div className={"relative"}>
        <ConfirmSubscription action={handleAction} isOpenConfirmModal={isOpen} onOpenChangeConfirmModal={onOpenChange}/>

      </div>

      <DarkPageHeader title={`${event?.name}`}
                      imgUrl={imgUrl}
                      onError={() => setImgUrl("/images/default_thumb.png")}
                      subtitle={`Por IFSP Cubatão - ${event?.init_date.toLocaleString("pt-BR", {
                        day: "2-digit",
                        month: "2-digit"
                      })}`}/>
      <div className="py-10 grid grid-cols-10 w-full px-4 xl:px-0">
        <div className={"col-start-1 col-span-10 xl:col-start-3 xl:col-span-6"}>
          <div className="xl:grid grid-cols-[1fr_400px] grid-rows-auto grid-flow-col gap-8">
            <div className="row-start-1 col-start-1 col-span-2 xl:col-span-1 font-semibold relative">
              <p className="text-[12px] md:text-lg mb-8 block">{event?.description}</p>
              {
                ticketSales &&
                ticketSales.length > 0 ? (
                  ticketSales.map((ticket, index) => (
                    <Link href={"#"} onClick={async (e) => {
                      e.preventDefault()
                      await handleSubscription(ticket.id)
                    }}>
                      <div key={index}
                           className={`inline-block cursor-pointer duration-200 bg-neutral-900 hover:bg-opacity-90 text-white py-2 px-7 rounded-md`}>
                        {enrollment ? "Veja seus ingressos" : "Pague: " + ticket.price.toLocaleString('pt-br', {
                          style: 'currency',
                          currency: 'BRL'
                        })}
                      </div>
                    </Link>
                  ))
                ) : (
                  <div
                    className={`inline-block cursor-pointer duration-200 bg-neutral-900 hover:bg-opacity-90 text-white py-2 px-7 rounded-md`}>
                    Não existe ingressos para esse evento
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </>
  )

}

