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

export default function SignIn() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        onPress={onOpen}
        className="bg-customLightGreen hover:bg-slate-300 transition-all duration-200 text-black font-semibold text-base px-4 py-1 rounded-lg"
      >
        Entrar
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur" placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Login</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  endContent={
                    <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="E-mail"
                  placeholder="Digite seu e-mail"
                  variant="bordered"
                />
                <Input
                  endContent={
                    <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Senha"
                  placeholder="Digite sua senha"
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
              </ModalBody>
              <ModalFooter>
                <Button className="font-semibold" color="danger" variant="flat" onPress={onClose}>
                  Fechar
                </Button>
                <Button className="hover:bg-slate-300 transition-all duration-200 bg-customLightGreen text-black font-semibold" onPress={onClose}>
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
