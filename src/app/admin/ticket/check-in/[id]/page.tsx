import {Suspense} from "react";
import Loading from "@/components/Loading";
import TicketCheckComponent from "@/components/ticket/Ticket";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Validação',
}

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  return (
    <div className="w-full h-dvh flex flex-col justify-center items-center bg-[#000] text-white">
      <Suspense fallback={<Loading/>}>
        <TicketCheckComponent params={params}/>
      </Suspense>
    </div>
  );
}
