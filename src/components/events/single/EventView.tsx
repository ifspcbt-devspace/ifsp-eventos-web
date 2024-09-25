"use client";

import React, {Dispatch, SetStateAction, Suspense, useEffect, useState} from "react";
import {Event} from "@/models";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {getEvent} from "@/server-actions/event.action";
import {toast} from "react-toastify";
import {toastConfig} from "@/utils";
import DarkPageHeader from "@/components/DarkPageHeader";
import Link from "next/link";
import {useDisclosure} from "@nextui-org/react";
import ConfirmSubscription from "@/components/events/subscription/ConfirmSubscription";
import {enrollUser} from "@/server-actions/enrollment.action";
import {isAuthenticated} from "@/server-actions/auth.action";

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
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [imgUrl, setImgUrl] = useState("/images/default-event-thumb.svg");
  const [isAuth, setIsAuth] = useState(false);
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
      setEvent(event);
      setImgUrl(`https://eventos.ifspcbt.shop/api/v1/event/${event.id}/thumbnail`);
      const isAut = await isAuthenticated();
      setIsAuth(isAut);
      if (searchParams.get("open")) onOpen();
    }
    load();
  }, [params.id]);

  const handleSubscription = async (e: any) => {
    e.preventDefault()
    onOpen();
  }

  const handleAction = async (open: () => void, setTicketID: Dispatch<SetStateAction<string>>) => {
    if (event) {
      if (!isAuth) {
        router.push(`/auth/log-in?redir=${pathname + `?open=true`}`);
        return;
      }
      const resp = await enrollUser(event?.id);
      if (typeof resp === "object") {
        toast.error(resp.error, toastConfig);
      } else {
        toast.success("Inscrição foi realizada com sucesso", toastConfig);
        setTicketID(resp);
        open();
      }
    }
  }

  if (!event) return <></>;

  return (
    <>
      <ConfirmSubscription action={handleAction} isOpenConfirmModal={isOpen} onOpenChangeConfirmModal={onOpenChange}/>
      <DarkPageHeader title={`${event?.name} - ${event?.init_date.toLocaleString([], {dateStyle: "short"})}`}
                      imgUrl={imgUrl}
                      onError={() => setImgUrl("/images/default-event-thumb.svg")}
                      subtitle={`Por IFSP Cubatão`}/>
      <div className="py-10 grid grid-cols-10 w-full">
        <div className={"col-start-3 col-span-6"}>
          <div className="event-page-grid">
            <div className="font-semibold relative">
              <p className="text-lg mb-8">{event?.description}</p>
              <Link href={"#"} onClick={handleSubscription}>
                <div
                  className={`inline-block cursor-pointer duration-200 bg-neutral-900 hover:bg-opacity-90 text-white py-2 px-7 rounded-md`}>
                  Inscreva-se
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}