"use client"

import Link from "next/link";
import Image from "next/image";

import "./signup.css";
import {Button} from "@nextui-org/react";
import {useMask} from "@react-input/mask";
import React, {Suspense} from "react";
import {useSearchParams} from "next/navigation";
import Loading from "@/app/auth/email/confirmation/[token]/loading";

export default function RegisterPage() {
  return (
    <Suspense fallback={<Loading/>}>
      <Register/>
    </Suspense>
  )
}


function Register() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const params = useSearchParams();
  const redirectTo = params.get("redir") || "/";

  const phoneRef = useMask({
    mask: "(__) _____-____",
    replacement: {_: /\d/},
  });
  const cpfRef = useMask({
    mask: "nnn.nnn.nnn-nn",
    replacement: {n: /\d/},
  });
  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  const validatePassword = (value: string) => value.length >= 6;

  const isEmailInvalid = React.useMemo(() => {
    if (email === "") return false;
    return validateEmail(email.trim()) ? false : true;
  }, [email]);
  const isPasswordInvalid = React.useMemo(() => {
    if (password === "") return false;
    return validatePassword(password) ? false : true;
  }, [password]);
  const isConfirmPasswordInvalid = React.useMemo(() => {
    if (confirmPassword === "") return false;
    return password === confirmPassword ? false : true;
  }, [password, confirmPassword]);


  return (
    <div className="full-page-wrapper text-black">
      <title>Registrar | IFSP Eventos</title>
      <Link href="/"
            className="z-10 relative mb-8 opacity-100 hover:opacity-80 duration-200 text-grey w-[190px] h-[46px]">
        <Image priority={true} className="absolute object-contain border-0 inline-block h-auto"
               src={"/images/logo_branca_recortada.png"} alt={"logo"}
               fill/>
      </Link>

      <div className="p-10 bg-white rounded-xl shadow-sm max-w-[380px]">
        <form className="block mt-0">
          <div className="mb-8 text-center min-w-72">
            <span className="font-semibold block mb-3 text-2xl">Registre-se</span>
          </div>
          <input maxLength={256} placeholder="Nome completo" name="name" title="Nome completo"
                 className="text-field" type="text" autoComplete="off" required/>
          <input maxLength={256} placeholder="CPF" ref={cpfRef} name="cpf" title="CPF"
                 className="text-field" type="text" autoComplete="off" required/>
          <input maxLength={256} placeholder="E-mail" name="email" title="E-mail"
                 className="text-field" type="email" autoComplete="email" required/>
          <input maxLength={256} placeholder="Celular" ref={phoneRef} name="phone" title="Celular"
                 className="text-field" type="text" autoComplete="off" required/>
          <input type={"date"} placeholder="Nascimento" autoComplete="off" name="date" title="Data de nascimento"
                 required className="text-field"/>
          <input maxLength={256} placeholder="Senha" name="password" title="Senha"
                 className="text-field" type="password" autoComplete="off" required/>
          <input maxLength={256} placeholder="Confirmar senha" name="confirm_password" title="Confirmar senha"
                 className="text-field" type="password" autoComplete="off" required/>
          <Button isLoading={false} type="submit" className="button data-[hover=true]:opacity-100"
          >Registrar</Button>
          <div className="form-card-footer">
            <span>Já tem uma conta?</span>
            <Link className="text-grey duration-200 hover:opacity-90" href="/auth/log-in">Entrar</Link>
          </div>
        </form>
      </div>

      <div className="hidden bg-silver text-small p-4 text-black rounded-md mt-2.5 max-w-[380px]">
        {/*show error*/}
      </div>
    </div>
  )
}