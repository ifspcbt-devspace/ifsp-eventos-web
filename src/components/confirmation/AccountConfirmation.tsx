import { confirmAccount } from "@/server-actions/auth.action";
import React, { use } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";

export default function AccountConfirmation({
  token,
}: {
  token: string;
}) {
  const res = use(confirmAccount(token));

  return (
    <div className="w-full h-dvh flex flex-col justify-center items-center">
      {res && res.error ? (
        <>
          <FaCircleXmark className="text-9xl text-red-500 mb-16" />
          <span className="text-3xl">{res.error || "Token inválido"}</span>
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