"use client";

import Loading from "@/app/auth/email/confirmation/[token]/loading";
import { confirmAccount } from "@/server-actions/auth.action";
import { Button } from "@nextui-org/react";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";

export default function AccountConfirmation({ token }: { token: string }) {
  const [isClicked, setIsClicked] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [res, setRes] = React.useState<any>(null);

  return (
    <div className="w-full h-dvh flex flex-col justify-center items-center">
      <h1 className={`${isLoading ? "hidden " : ""}text-4xl font-bold mb-8`}>
        Confirmação de conta
      </h1>
      <p className={`${isClicked ? "hidden " : ""}`}>Obrigado pela paciência</p>
      <p className={`${isClicked ? "hidden " : ""}mb-8`}>
        Clique no botão abaixo para confirmar sua conta
      </p>
      <Button
        onClick={async () => {
          setIsLoading(true);
          setIsClicked(true);
          setTimeout(async () => {
            const response = await confirmAccount(token);
            setRes(response);
            setIsLoading(false);
          }, 10000);
        }}
        className={`${
          isClicked ? "hidden " : ""
        }bg-customLightGreen hover:bg-slate-300 transition-all duration-200 text-black font-semibold text-small md:text-base px-4 py-1 rounded-lg`}
      >
        Verificar token
      </Button>
      {isLoading ? (
        <Loading />
      ) : (
        isClicked &&
        (res && res.error ? (
          <>
            <FaCircleXmark className="text-9xl text-red-500 mb-16" />
            <span className="text-3xl">{res.error || "Token inválido"}</span>
          </>
        ) : (
          <>
            <FaCheckCircle className="text-9xl text-green-500 mb-16" />
            <span className="text-3xl">Seu token foi confirmado</span>
          </>
        ))
      )}
    </div>
  );
}
