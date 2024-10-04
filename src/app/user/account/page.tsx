"use client";

import Header from "@/components/Header";
import React, {useEffect, useMemo, useState} from "react";
import Footer from "@/components/Footer";
import {Button, Input} from "@nextui-org/react";
import {useMask} from "@react-input/mask";
import {isRG} from "@/validations";
import {getSession} from "@/server-actions/auth.action";
import {usePathname, useRouter} from "next/navigation";

export default function UserAccount() {
  const [rg, setRg] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const [session, setSession] = useState<any>();

  useEffect(() => {
    Promise.all([getSession()]).then(([session]) => {
      setSession(session);
      if (!session) router.push(`/auth/log-in?redir=${pathname}`);
    });
  }, [setSession]);

  const rgRef = useMask({
    mask: "nn.nnn.nnn-n",
    replacement: {n: /\d/},
  });

  const isRGInvalid = useMemo(() => {
    if (rg === "") return false;
    return !isRG(rg);
  }, [rg])

  if (!session) return <><title>Perfil | IFSP Eventos</title></>;

  return (<div className={""}>
      <Header/>
      <title>Perfil | IFSP Eventos</title>
      <div className={`w-full py-40 light-page-header`}>
        <div className={`mx-auto bg-white rounded-xl shadow-sm px-8 py-8 max-w-72 md:max-w-96`}>
          <span className={`text-2xl font-semibold`}>Detalhes da conta</span>
          <hr className={`my-4 w-full`}/>

          <form className="block mt-0">

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
                   ref={rgRef}
                   isInvalid={isRGInvalid}
                   onValueChange={setRg}
                   errorMessage="O RG informado é inválido"
                   classNames={{inputWrapper: "rounded-[9px] border-1", base: "mb-1"}} type="text"
                   autoComplete="off"
                   isRequired={true}/>

            <Button isLoading={false} type="submit"
                    onSubmit={(e) => {
                      e.preventDefault()
                    }}
                    className="mt-4 inline-block cursor-pointer duration-200 bg-neutral-900 hover:bg-opacity-90 text-white px-4 py-1.5 h-fit w-fit rounded-lg">
              {"Salvar alterações"}
            </Button>

          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
}