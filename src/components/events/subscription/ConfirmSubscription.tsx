import {Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@nextui-org/react";
import {BsClipboard2Check} from "react-icons/bs";

export default function ConfirmSubscription(
  {
    action, isOpen,
    onOpenChange
  }: { action?: () => void, isOpen: boolean, onOpenChange: () => void }) {
  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Confirmar Inscrição
              </ModalHeader>
              <ModalBody className="text-center">
                <p className="mx-auto">
                  <BsClipboard2Check className="text-7xl"/>
                </p>
                <p>Você tem certeza que gostaria de realizar a inscrição neste evento?</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onClick={onClose}>
                  Cancelar
                </Button>
                <Button
                  color="primary"
                  onClick={() => {
                    onClose();
                    if (action) action();
                  }}
                >
                  Confirmar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>);
}