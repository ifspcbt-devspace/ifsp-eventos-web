"use client";

import React, { useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Link,
} from "@nextui-org/react";
import { MailIcon } from "@/icons/MailIcon";
import { LockIcon } from "@/icons/LockIcon";
import {
  getSession,
  isAuthenticated,
  login,
  logout,
} from "@/server-actions/auth.action";
import { toastConfig } from "@/utils";
import { toast } from "react-toastify";
import SignUp from "../register/SignUp";
import { SessionData } from "@/models";

export default function SignIn() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [session, setSession] = React.useState<SessionData | undefined>();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    Promise.all([getSession(), isAuthenticated()]).then(([s, isAuth]) => {
      if (isAuth && s) setSession(s);
      setIsLoading(false);
    });
  }, [setSession]);

  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
  const validatePassword = (value: string) => value.length >= 8;

  const isEmailInvalid = React.useMemo(() => {
    if (email === "") return false;

    return validateEmail(email) ? false : true;
  }, [email]);
  const isPasswordInvalid = React.useMemo(() => {
    if (password === "") return false;

    return validatePassword(password) ? false : true;
  }, [password]);

  const handleOpenModal = async () => {
    setIsLoading(true);
    if (session) {
      await logout();
      toast.info("Logout efetuado", toastConfig);
      setSession(undefined);
    } else onOpen();
    setIsLoading(false);
  };

  const handleLogin = async (
    e: React.FormEvent<HTMLFormElement>,
    onClose: () => void
  ) => {
    e.preventDefault();
    setIsLoading(true);

    if (isEmailInvalid || isPasswordInvalid) {
      toast.error("Corrija as credenciais primeiro", toastConfig);
      setIsLoading(false);
      return;
    }
    const resp = await login(new FormData(e.currentTarget));
    if (resp && resp.error) {
      toast.error(resp.error, toastConfig);
    } else {
      const s = await getSession();
      if (s) setSession(s);
      else {
        toast.error("Erro ao obter sessão", toastConfig);
        return;
      }
      toast.success("Login efetuado com sucesso", toastConfig);
      onClose();
    }
    setIsLoading(false);
  };

  return (
    <>
      <Button
        onClick={handleOpenModal}
        isLoading={isLoading}
        className="bg-customLightGreen hover:bg-slate-300 transition-all duration-200 text-black font-semibold text-small md:text-base px-4 py-1 rounded-lg"
      >
        {!session ? "Entrar" : "Sair"}
      </Button>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        backdrop="blur"
        placement="center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Login</ModalHeader>
              <ModalBody>
                <form
                  onSubmit={(e) => handleLogin(e, onClose)}
                  name="login-form"
                  id="login-form"
                >
                  <Input
                    classNames={{
                      base: "mb-4",
                    }}
                    autoFocus
                    endContent={
                      <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    label="E-mail"
                    name="email"
                    placeholder="Digite seu e-mail"
                    isInvalid={isEmailInvalid}
                    errorMessage="E-mail inválido"
                    onValueChange={setEmail}
                    variant="bordered"
                  />
                  <Input
                    classNames={{
                      base: "mb-4",
                    }}
                    endContent={
                      <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    label="Senha"
                    name="password"
                    placeholder="Digite sua senha"
                    isInvalid={isPasswordInvalid}
                    onValueChange={setPassword}
                    errorMessage="Senha deve ter no mínimo 8 caracteres"
                    type="password"
                    variant="bordered"
                  />

                  <div className="flex py-2 px-1 justify-between">
                    <SignUp />
                    <Link color="primary" href="#" size="sm">
                      Esqueceu sua senha?
                    </Link>
                  </div>
                </form>
              </ModalBody>
              <ModalFooter>
                <Button
                  onPress={onClose}
                  className="font-semibold"
                  color="danger"
                  variant="flat"
                >
                  Fechar
                </Button>
                <Button
                  type="submit"
                  className="hover:bg-slate-300 transition-all duration-200 bg-customLightGreen text-black font-semibold"
                  isLoading={isLoading}
                  form="login-form"
                >
                  Entrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
