"use client";

import Header from "@/components/Header";
import React, {FormEvent, useEffect, useMemo, useState} from "react";
import Footer from "@/components/Footer";
import {Button, Input} from "@nextui-org/react";
import {useMask} from "@react-input/mask";
import {isRG} from "@/validations";
import {getSession} from "@/server-actions/auth.action";
import {usePathname, useRouter} from "next/navigation";
import {toastConfig} from "@/constants";
import {toast} from "react-toastify";
import {updateUser} from "@/server-actions/user.action";
import UserTickets from "@/components/user/UserTickets";

export default function UserAccount() {
  const [rg, setRg] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const [session, setSession] = useState<any>();
  const [hasDocument, setHasDocument] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    Promise.all([getSession()]).then(([session]) => {
      setSession(session);
      if (!session) router.push(`/auth/log-in?redir=${pathname}`);
      else if (session.user.document_initials === undefined || session.user.document_initials === null || session.user.document_initials === "") {
        toast.error("Complete seu cadastro.", toastConfig);
        setHasDocument(false);
      } else {
        setHasDocument(true);
        setRg(session.user.document_initials)
      }
    });
  }, [setSession]);

  const rgRef = useMask({
    mask: "nn.nnn.nnn-n",
    replacement: {n: /\d/},
  });

  const isRGInvalid = useMemo(() => {
    if (rg === "" || rg === undefined || rg === null) return true;
    if (rg === session?.user.document_initials) return false;
    return !isRG(rg);
  }, [rg, session?.user.document_initials])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true);
    const resp = await updateUser(rg);
    if ("error" in resp) {
      toast.error(resp.error, toastConfig);
    }
    toast.success("Dados alterados com sucesso.")
    setHasDocument(true)
    setIsLoading(false);
  }

  if (!session) return <><title>Perfil | IFSP Eventos</title></>;

  return (<div className={""}>
      <Header/>
      <title>Perfil | IFSP Eventos</title>
      <div className={`w-full py-20 sm:py-32  xl:py-40 light-page-header`}>

        <div className={`w-full grid gap-y-12 grid-cols-10 px-4 xl:px-0`}>

          <div
            className={`bg-white rounded-xl shadow-sm px-8 py-8 xl:col-start-3 xl:col-span-2 col-start-1 col-span-10`}>
            <span className={`text-2xl font-semibold`}>Detalhes da conta</span>
            <hr className={`my-4 w-full`}/>

            <form className="block mt-0" onSubmit={handleSubmit}>

              <span className={`font-medium mb-1 mt-4 block`}>E-mail</span>
              <Input maxLength={128} name="email" title="E-mail"
                     disabled={true}
                     value={session.user.email}
                     classNames={{inputWrapper: "rounded-[9px] border-1", base: "mb-1"}} type="email" autoComplete="off"
              />

              <span className={`font-medium mb-1 mt-4 block`}>Nome Completo</span>
              <Input maxLength={128} name="name" title="Nome Completo"
                     disabled={true}
                     value={session.user.name}
                     classNames={{inputWrapper: "rounded-[9px] border-1", base: "mb-1"}} type="email" autoComplete="off"
              />

              <span className={`font-medium mb-1 mt-4 block`}>R.G.</span>
              <Input maxLength={16} name="rg" title="RG"
                     ref={hasDocument ? undefined : rgRef}
                     disabled={hasDocument}
                     isInvalid={isRGInvalid}
                     onValueChange={setRg}
                     value={rg}
                     errorMessage="O RG informado é inválido"
                     classNames={{inputWrapper: "rounded-[9px] border-1", base: "mb-1"}} type="text"
                     autoComplete="off"
                     isRequired={true}/>

              <Button isLoading={isLoading} type="submit"
                      isDisabled={isRGInvalid || hasDocument}
                      className="mt-4 inline-block cursor-pointer duration-200 bg-neutral-900 hover:bg-opacity-90 text-white px-4 py-1.5 h-fit w-fit rounded-lg">
                {isLoading ? "" : "Salvar alterações"}
              </Button>

            </form>
          </div>

          <UserTickets userId={session.user.id}/>
        </div>


      </div>
      <Footer/>
    </div>
  );
}