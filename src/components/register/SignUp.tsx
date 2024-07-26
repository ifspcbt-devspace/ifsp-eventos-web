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
  Input,
  Link,
  DatePicker,
  DateValue,
} from "@nextui-org/react";
import { MailIcon } from "@/icons/MailIcon";
import { LockIcon } from "@/icons/LockIcon";
import { register } from "@/server-actions/auth.action";
import { toastConfig } from "@/utils";
import { toast } from "react-toastify";
import { useMask } from "@react-input/mask";
import { I18nProvider } from "@react-aria/i18n";
import { getLocalTimeZone } from "@internationalized/date";

export default function SignUp() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isLoading, setIsLoading] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [birthDate, setBirthDate] = React.useState<DateValue>();
  const [cpf, setCpf] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const phoneRef = useMask({
    mask: "(__) _____-____",
    replacement: { _: /\d/ },
  });
  const cpfRef = useMask({
    mask: "nnn.nnn.nnn-nn",
    replacement: { n: /\d/ },
  });

  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  const validatePassword = (value: string) => value.length >= 6;

  const isEmailInvalid = React.useMemo(() => {
    if (email === "") return false;
    return validateEmail(email) ? false : true;
  }, [email]);
  const isPasswordInvalid = React.useMemo(() => {
    if (password === "") return false;
    return validatePassword(password) ? false : true;
  }, [password]);
  const isConfirmPasswordInvalid = React.useMemo(() => {
    if (confirmPassword === "") return false;
    return password === confirmPassword ? false : true;
  }, [password, confirmPassword]);

  const handleRegister = async (
    e: React.FormEvent<HTMLButtonElement>,
    onClose: () => void
  ) => {
    e.preventDefault();
    setIsLoading(true);
    if (isEmailInvalid || isPasswordInvalid || isConfirmPasswordInvalid) {
      toast.error("Corrija as credenciais primeiro", toastConfig);
      setIsLoading(false);
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("username", username);
    formData.append("password", password);
    formData.append(
      "birth_date",
      birthDate?.toDate(getLocalTimeZone()).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }) || ""
    );
    formData.append("cpf", cpf);
    formData.append("phone_number", phoneNumber);

    const resp = await register(formData);
    if (resp && resp.error) {
      toast.error(resp.error, toastConfig);
    } else {
      toast.success("Conta criada com sucesso", toastConfig);
      onClose();
    }
    setIsLoading(false);
  };

  return (
    <>
      <Link color="primary" href="#" className="text-sm" onClick={onOpen}>
        Registre-se
      </Link>
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
              <ModalHeader className="flex flex-col gap-1">
                Registro
              </ModalHeader>
              <ModalBody>
                <form name="register-form" id="register-form">
                  <Input
                    classNames={{
                      base: "mb-4",
                    }}
                    autoFocus
                    isRequired={true}
                    minLength={3}
                    label="Nome"
                    name="name"
                    errorMessage="Preencha seu nome"
                    placeholder="Digite seu nome"
                    onValueChange={setName}
                    variant="bordered"
                  />
                  <Input
                    classNames={{
                      base: "mb-4",
                    }}
                    endContent={
                      <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    label="E-mail"
                    isRequired={true}
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
                    label="Username"
                    isRequired={true}
                    minLength={8}
                    name="username"
                    errorMessage="Seu username deve possuir pelo menos 8 caracteres"
                    placeholder="Digite seu username"
                    onValueChange={setUsername}
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
                    isRequired={true}
                    placeholder="Digite sua senha"
                    isInvalid={isPasswordInvalid}
                    onValueChange={setPassword}
                    errorMessage="Senha deve ter no mínimo 8 caracteres"
                    type="password"
                    variant="bordered"
                  />
                  <Input
                    classNames={{
                      base: "mb-4",
                    }}
                    endContent={
                      <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    label="Confirme a Senha"
                    isRequired={true}
                    name="confirmPassword"
                    placeholder="Confirme sua senha"
                    isInvalid={isConfirmPasswordInvalid}
                    onValueChange={setConfirmPassword}
                    errorMessage="As senhas não conferem"
                    type="password"
                    variant="bordered"
                  />
                  <I18nProvider locale="pt-BR">
                    <DatePicker
                      classNames={{
                        base: "mb-4",
                      }}
                      label="Data de Nascimento"
                      isRequired={true}
                      errorMessage="Data de nascimento inválida"
                      name="birth_date"
                      onChange={setBirthDate}
                      variant="bordered"
                    />
                  </I18nProvider>

                  <Input
                    classNames={{
                      base: "mb-4",
                    }}
                    ref={cpfRef}
                    isRequired={true}
                    label="CPF"
                    name="cpf"
                    errorMessage="CPF inválido"
                    placeholder="Digite seu CPF"
                    onValueChange={setCpf}
                    variant="bordered"
                  />
                  <Input
                    classNames={{
                      base: "mb-4",
                    }}
                    ref={phoneRef}
                    isRequired={true}
                    label="Telefone"
                    name="phone_number"
                    errorMessage="Número de telefone inválido"
                    placeholder="Digite seu telefone"
                    onValueChange={setPhoneNumber}
                    variant="bordered"
                  />
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
                  onClick={(e) => handleRegister(e, onClose)}
                  className="hover:bg-slate-300 transition-all duration-200 bg-customLightGreen text-black font-semibold"
                  isLoading={isLoading}
                >
                  Registrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
