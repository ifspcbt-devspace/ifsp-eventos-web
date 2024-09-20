"use client";

import Link from "next/link";
import Image from "next/image";

import "./login.css";
import {Button} from "@nextui-org/react";
import React from "react";
import {useSearchParams} from "next/navigation";

export default function Login() {
  const params = useSearchParams();
  const redirectTo = params.get("redir") || "/";


  return (
    <div className="full-page-wrapper text-black">
      <title>Login | IFSP Eventos</title>
      <Link href="/" className="z-10 mb-8 opacity-100 hover:opacity-80 duration-200 text-grey">
        <Image priority={true} className="border-0 inline-block" src={"/images/logo_branca_recortada.png"}
               alt={"logo branca"}
               width={190} height={100}/>
      </Link>

      <div className="p-10 bg-white rounded-xl shadow-sm max-w-[380px]">
        <form className="block mt-0">
          <div className="mb-8 text-center min-w-72">
            <span className="font-semibold block mb-3 text-2xl">Entrar</span>
            <p className="mb-1.5 text-sm opacity-75">Preencha seus dados de login abaixo.</p>
          </div>
          <input maxLength={256} placeholder="E-mail" name="email"
                 className="text-field" type="email" autoComplete="username" required/>
          <input maxLength={256} placeholder="Senha" name="password" id="wf-log-in-email"
                 className="text-field" type="password" autoComplete="password" required/>
          <Button isLoading={false} type="submit" className="button data-[hover=true]:opacity-100"
          >Entrar</Button>
          <div className="form-card-footer">
            <span>Não tem uma conta?</span>
            <Link className="text-grey duration-200 hover:opacity-90" href="/auth/sign-up">Registre-se</Link>
          </div>
        </form>
      </div>

      <div className="hidden bg-silver text-small p-4 text-black rounded-md mt-2.5 max-w-[380px]">
        {/*show error*/}
      </div>

      <Link href="/auth/reset-password" className="below-card-link">Esqueceu sua senha?</Link>
    </div>
  )
}