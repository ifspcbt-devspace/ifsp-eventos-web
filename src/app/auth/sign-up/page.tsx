"use client"

import Link from "next/link";
import Image from "next/image";

import "./signup.css";
import {Button, Input, useDisclosure} from "@nextui-org/react";
import {useMask} from "@react-input/mask";
import React, {FormEvent, Suspense, useEffect, useMemo, useState} from "react";
import {useRouter, useSearchParams} from "next/navigation";
import Loading from "@/app/auth/email/confirmation/[token]/loading";
import {generateRandomUsername} from "@/utils";
import {toast} from "react-toastify";
import {isAuthenticated, login, register} from "@/server-actions/auth.action";
import ConfirmRegister from "@/components/register/ConfirmRegister";
import {isEmail, isNumberPhone, isRG, isValidBirthDate} from "@/validations";
import {toastConfig} from "@/constants";

export default function RegisterPage() {
  return (
    <Suspense fallback={<Loading/>}>
      <Register/>
    </Suspense>
  )
}

function Register() {
  const [name, setName] = useState("");
  const [document, setDocument] = useState("");
  const [phone, setPhone] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sessionVerified, setSessionVerified] = useState(false);
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const router = useRouter();
  const params = useSearchParams();
  const redirectTo = params.get("redir") || "/";

  useEffect(() => {
    const load = async () => {
      const isAuth = await isAuthenticated();
      if (isAuth) {
        router.replace(redirectTo);
      } else setSessionVerified(true);
    }

    load();
  }, [router]);

  const phoneRef = useMask({
    mask: "(__) _____-____",
    replacement: {_: /\d/},
  });
  const documentRef = useMask({
    mask: "nn.nnn.nnn-n",
    replacement: {n: /\d/},
  });

  const validatePassword = (value: string) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>\/?`~\-])[A-Za-z\d!@#$%^&*()_+[\]{};':"\\|,.<>\/?`~\-]{6,}$/;
    return passwordRegex.test(value);
  };

  const isNameInvalid = useMemo(() => {
    if (name === "") return false;
    return name.length <= 4
  }, [name]);
  const isEmailInvalid = useMemo(() => {
    if (email === "") return false;
    return !isEmail(email.trim());
  }, [email]);
  const isDocumentInvalid = useMemo(() => {
    if (document === "") return false;
    return !isRG(document);
  }, [document])
  const isPhoneInvalid = useMemo(() => {
    if (phone === "") return false;
    return !isNumberPhone(phone);
  }, [phone])
  const isBirthDateInvalid = useMemo(() => {
    if (birthDate === "") return false;
    return !isValidBirthDate(birthDate);
  }, [birthDate]);
  const isPasswordInvalid = useMemo(() => {
    if (password === "") return false;
    return !validatePassword(password);
  }, [password]);
  const isConfirmPasswordInvalid = useMemo(() => {
    if (confirmPassword === "") return false;
    return password !== confirmPassword;
  }, [password, confirmPassword]);

  const handleRegister = async () => {
    const formatDate = (dateString: string): string => {
      const [year, month, day] = dateString.split("-");
      return `${day}/${month}/${year}`;
    }

    setIsLoading(true);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email.trim());
    formData.append("username", generateRandomUsername());
    formData.append("password", password);
    formData.append("birth_date", formatDate(birthDate));
    formData.append("document", document);
    formData.append("phone_number", phone);

    const resp = await register(formData);
    if (resp && resp.error) {
      setError(resp.error);
    } else {
      const respLogin = await login(formData);
      if (respLogin && respLogin.error) {
        setError(respLogin.error);
      } else {
        toast.success("Conta criada com sucesso, redirecionando...", toastConfig);
        setTimeout(() => router.replace(redirectTo), 2000)
      }
    }
    setIsLoading(false);
  };

  const handleOpenModal = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email === "" || password === "" || confirmPassword === "" || name === "" || birthDate === "" || document === "" || phone === "") {
      toast.error("Preencha todos os campos", toastConfig)
      setIsLoading(false);
      return;
    }
    if (isEmailInvalid || isPasswordInvalid || isConfirmPasswordInvalid || isNameInvalid || isBirthDateInvalid || isDocumentInvalid || isPhoneInvalid) {
      toast.error("Corrija as credenciais primeiro", toastConfig);
      setIsLoading(false);
      return;
    }
    onOpen();
  }

  if (!sessionVerified) return <></>

  return (
    <div className="full-page-wrapper-signup text-black">
      <title>Registrar | IFSP Eventos</title>

      <ConfirmRegister
        action={handleRegister}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />

      <Link href="/"
            className="z-10 relative mb-8 opacity-100 hover:opacity-80 duration-200 text-grey w-[190px] h-[46px]">
        <Image priority={true} className="absolute object-contain border-0 inline-block h-auto"
               src={"/images/logo_branca_recortada.png"} alt={"logo"}
               fill/>
      </Link>

      <div className="p-7 md:p-10 bg-white rounded-xl shadow-sm max-w-[380px]">
        <form className="block mt-0" autoComplete="off" onSubmit={handleOpenModal}>
          <div className="mb-8 text-center min-w-64">
            <span className="font-semibold block mb-3 text-2xl">Registre-se</span>
          </div>
          <Input maxLength={128} placeholder="Nome completo" name="name" title="Nome completo" onValueChange={setName}
                 isInvalid={isNameInvalid} errorMessage={"Certifique-se de colocar seu nome completo"}
                 classNames={{inputWrapper: "rounded-[9px]", base: "mb-1"}} type="text" autoComplete="off"
                 isRequired={true}/>

          <Input placeholder="RG" name="document" title="R.G." ref={documentRef}
                 isInvalid={isDocumentInvalid} errorMessage="O RG é inválido" onValueChange={setDocument}
                 classNames={{inputWrapper: "rounded-[9px]", base: "mb-1"}} type="text" autoComplete="off"
                 isRequired={true}/>

          <Input maxLength={128} placeholder="E-mail" name="email" title="E-mail"
                 isInvalid={isEmailInvalid} errorMessage="O e-mail é inválido" onValueChange={setEmail}
                 classNames={{inputWrapper: "rounded-[9px]", base: "mb-1"}} type="email" autoComplete="off"
                 isRequired={true}/>

          <Input placeholder="Celular" ref={phoneRef} name="phone" title="Celular"
                 isInvalid={isPhoneInvalid} errorMessage="O celular é inválido" onValueChange={setPhone}
                 classNames={{inputWrapper: "rounded-[9px]", base: "mb-1"}} type="text" autoComplete="off"
                 isRequired={true}/>

          <Input type={"date"} placeholder="Nascimento" autoComplete="off" name="date" title="Data de nascimento"
                 onValueChange={setBirthDate}
                 isInvalid={isBirthDateInvalid}
                 errorMessage={"Você deve ter pelo menos 12 anos de idade"}
                 isRequired={true} classNames={{inputWrapper: "rounded-[9px]", base: "mb-1"}}/>

          <Input maxLength={16} placeholder="Senha" name="password" title="Senha" onValueChange={setPassword}
                 errorMessage={"A senha deve conter pelo menos: 1 letra maiúscula; 1 letra minúscula; 1 número; 1 caractere especial; e 6 caracteres"}
                 isInvalid={isPasswordInvalid}
                 classNames={{inputWrapper: "rounded-[9px]", base: "mb-1"}} type="password" autoComplete="off"
                 isRequired={true}/>

          <Input maxLength={16} placeholder="Confirmar senha" name="confirm_password" title="Confirmar senha"
                 onValueChange={setConfirmPassword}
                 isInvalid={isConfirmPasswordInvalid}
                 errorMessage="A senha não corresponse a anterior"
                 classNames={{inputWrapper: "rounded-[9px]", base: "mb-1"}} type="password" autoComplete="off"
                 isRequired={true}/>

          <Button isLoading={isLoading} type="submit" className="button data-[hover=true]:opacity-100"
          >{!isLoading && "Registrar"}</Button>
          <div className="form-card-footer">
            <span>Já tem uma conta?</span>
            <Link className="text-grey duration-200 hover:opacity-90"
                  href={`/auth/log-in${redirectTo === "/" ? "" : `?redir=${redirectTo}`}`}>Entrar</Link>
          </div>
        </form>
      </div>

      <div className={`${error ? "" : "hidden "}bg-silver text-small p-4 text-black rounded-md mt-2.5 max-w-[380px]`}>
        {error}
      </div>
    </div>
  )
}