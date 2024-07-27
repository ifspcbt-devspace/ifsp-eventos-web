import { Suspense } from "react";
import Loading from "./loading";
import AccountConfirmation from "@/components/confirmation/AccountConfirmation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Ativação de conta',
}

export default function ConfirmAccount({
  params,
}: {
  params: { token: string };
}) {
  return (
    <Suspense fallback={<Loading />}>
      <AccountConfirmation token={params.token} />
    </Suspense>
  );
}
