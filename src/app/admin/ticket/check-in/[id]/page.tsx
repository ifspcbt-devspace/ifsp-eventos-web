import { Suspense } from "react";
import Loading from "@/app/auth/email/confirmation/[token]/loading";
import TicketUI from "@/components/ticket/Ticket";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Validação',
}

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className="w-full h-dvh flex flex-col justify-center items-center bg-[#000] text-white">
      <Suspense fallback={<Loading />}>
        <TicketUI id={params.id} />
      </Suspense>
    </div>
  );
}
