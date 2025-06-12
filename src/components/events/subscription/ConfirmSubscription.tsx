import {Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure} from "@heroui/react";
import {BsClipboard2Check} from "react-icons/bs";
import {Dispatch, SetStateAction, useState} from "react";
import PaymentModal from "./payment/PaymentModal";

export default (
  {
    action, isOpenConfirmModal, onOpenChangeConfirmModal
  }: {
    action?: (open: () => void, setPreferenceId: Dispatch<SetStateAction<string>>) => void,
    isOpenConfirmModal: boolean,
    onOpenChangeConfirmModal: () => void
  }) => {
  const [preferenceId, setPreferenceId] = useState('');
  const {isOpen, onOpen, onOpenChange} = useDisclosure();


  return (
    <>
      <PaymentModal preferenceId={preferenceId} isOpen={isOpen} onOpenChange={onOpenChange}/>
      <Modal isOpen={isOpenConfirmModal} onOpenChange={onOpenChangeConfirmModal} placement="center" size="xs">
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
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancelar
                </Button>
                <Button
                  color="primary"
                  onPress={() => {
                    onClose();
                    if (action) action(onOpen, setPreferenceId);
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