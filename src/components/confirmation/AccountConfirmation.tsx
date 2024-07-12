"use client";

import Loading from "@/app/auth/email/confirmation/[token]/loading";
import { confirmAccount } from "@/server-actions/auth.action";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";

export default async function AccountConfirmation({
  token,
}: {
  token: string;
}) {
  const [confirmed, setConfirmed] = React.useState<any>();
  const [error, setError] = React.useState<any>();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    confirmAccount(token).then((res) => {
      if (res && res.error) {
        setConfirmed(false);
        setError(res.error);
      } else setConfirmed(true);
      setLoading(false);
    });
  }, [token]);

  if (loading) return <Loading />;

  return (
    <div className="w-full h-dvh flex flex-col justify-center items-center">
      {!confirmed ? (
        <>
          <FaCircleXmark className="text-9xl text-red-500 mb-16" />
          <span className="text-3xl">{error || "Token inválido"}</span>
        </>
      ) : (
        <>
          <FaCheckCircle className="text-9xl text-green-500 mb-16" />
          <span className="text-3xl">Seu token foi confirmado</span>
        </>
      )}
    </div>
  );
}
