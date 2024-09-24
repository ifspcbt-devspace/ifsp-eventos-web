"use client";

import React, {useEffect, useState} from "react";
import {Event} from "@/models";
import {useRouter} from "next/navigation";
import {getEvent} from "@/server-actions/event.action";
import {toast} from "react-toastify";
import {toastConfig} from "@/utils";
import DarkPageHeader from "@/components/DarkPageHeader";
import Link from "next/link";

export default function EventView({params}: { params: { id: string } }) {
  const [event, setEvent] = useState<Event>();
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
    }
    load();
  }, [params.id]);

  if (!event) return <></>;

  return (
    <>
      <DarkPageHeader title={`${event?.name} - ${event?.init_date.toLocaleString([], {dateStyle: "short"})}`}
                      subtitle={`Por IFSP Cubatão`}/>
      <div className="py-10 grid grid-cols-10 w-full">
        <div className={"col-start-3 col-span-6"}>
          <div className="event-page-grid">
            <div className="font-semibold relative">
              <p className="text-lg mb-8">{event?.description}</p>
              <Link href={"/auth/sign-up"}>
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