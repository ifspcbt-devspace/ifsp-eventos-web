import { Suspense } from "react";
import Loading from "./loading";
import AccountConfirmation from "@/components/confirmation/AccountConfirmation";

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
