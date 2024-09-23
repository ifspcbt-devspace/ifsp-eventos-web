"use client";

import Link from "next/link";
import Image from "next/image";

import "./login.css";
import {Button, Input} from "@nextui-org/react";
import React, {Suspense, useState} from "react";
import {useSearchParams} from "next/navigation";
import Loading from "@/app/auth/email/confirmation/[token]/loading";
import {isEmail} from "@/utils";

export default function LoginPage() {
  return (
    <Suspense fallback={<Loading/>}>
      <Login/>
    </Suspense>
  )
}

function Login() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = useState("");
  const params = useSearchParams();
  const redirectTo = params.get("redir") || "/";

  const isEmailInvalid = React.useMemo(() => {
    if (email === "") return false;
    return !isEmail(email.trim());
  }, [email]);

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
          <Input maxLength={128} placeholder="E-mail" name="email" title="E-mail"
                 isInvalid={isEmailInvalid} errorMessage="O e-mail é inválido" onValueChange={setEmail}
                 classNames={{inputWrapper: "rounded-[9px]", base: "mb-1"}} type="email" autoComplete="off"
                 isRequired={true}/>

          <Input maxLength={16} placeholder="Senha" name="password" title="Senha" onValueChange={setPassword}
                 classNames={{inputWrapper: "rounded-[9px]", base: "mb-1"}} type="password" autoComplete="off"
                 isRequired={true}/>

          <Button isLoading={false} type="submit" className="mt-4 button data-[hover=true]:opacity-100">
            {!isLoading && "Entrar"}
          </Button>
          <div className="form-card-footer">
            <span>Não tem uma conta?</span>
            <Link className="text-grey duration-200 hover:opacity-90"
                  href={`/auth/sign-up${redirectTo === "/" ? "" : `?redir=${redirectTo}`}`}>Registre-se</Link>
          </div>
        </form>
      </div>

      <div className="hidden bg-silver text-small p-4 text-black rounded-md mt-2.5 max-w-[380px]">
        {/*show error*/}
      </div>

      <Link href={`/auth/reset-password${redirectTo === "/" ? "" : `?redir=${redirectTo}`}`}
            className="below-card-link">Esqueceu sua senha?</Link>
    </div>
  )
}