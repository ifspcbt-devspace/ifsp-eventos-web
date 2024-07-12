"use client";

import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";
import { MailIcon } from "@/icons/MailIcon";
import { LockIcon } from "@/icons/LockIcon";
import { login } from "@/server-actions/auth.action";
import { toastConfig } from "@/utils";
import { toast } from "react-toastify";

export default function SignIn() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
  const validatePassword = (value: string) => value.length >= 6;

  const isEmailInvalid = React.useMemo(() => {
    if (email === "") return false;

    return validateEmail(email) ? false : true;
  }, [email]);
  const isPasswordInvalid = React.useMemo(() => {
    if (password === "") return false;

    return validatePassword(password) ? false : true;
  }, [password]);

  const handleLogin = async (
    e: React.FormEvent<HTMLFormElement>,
    onClose: () => void
  ) => {
    e.preventDefault();
    if (isEmailInvalid || isPasswordInvalid) {
      toast.error("Corrija as credenciais primeiro", toastConfig);
      return;
    }
    const resp = await login(new FormData(e.currentTarget));
    if (resp && resp.error) {
      toast.error(resp.error, toastConfig);
    } else {
      toast.success("Login efetuado com sucesso", toastConfig);
      onClose();
    }
  };

  return (
    <>
      <Button
        onPress={onOpen}
        className="bg-customLightGreen hover:bg-slate-300 transition-all duration-200 text-black font-semibold text-base px-4 py-1 rounded-lg"
      >
        Entrar
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="blur"
        placement="top-center"
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
                    errorMessage="Senha deve ter no mínimo 6 caracteres"
                    type="password"
                    variant="bordered"
                  />

                  <div className="flex py-2 px-1 justify-between">
                    <Checkbox
                      classNames={{
                        label: "text-small",
                      }}
                    >
                      Lembre-se de mim
                    </Checkbox>
                    <Link color="primary" href="#" size="sm">
                      Esqueceu sua senha?
                    </Link>
                  </div>
                </form>
              </ModalBody>
              <ModalFooter>
                <Button className="font-semibold" color="danger" variant="flat">
                  Fechar
                </Button>
                <Button
                  type="submit"
                  className="hover:bg-slate-300 transition-all duration-200 bg-customLightGreen text-black font-semibold"
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
