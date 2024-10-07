import {Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure} from "@nextui-org/react";
import {BsClipboard2Check} from "react-icons/bs";
import QrCodeModal from "@/components/events/subscription/qrcode/QrCodeModal";
import {Dispatch, SetStateAction, useState} from "react";
import PaymentModal from "./payment/PaymentModal";

export default (
  {
    action, isOpenConfirmModal, onOpenChangeConfirmModal
  }: {
    action?: (open: () => void, setPreferenceURL: Dispatch<SetStateAction<string>>) => void,
    isOpenConfirmModal: boolean,
    onOpenChangeConfirmModal: () => void
  }) => {
  const [preferenceURL, setPreferenceURL] = useState('');
  const {isOpen, onOpen, onOpenChange} = useDisclosure();


  return (
    <>
      <PaymentModal preferenceURL={preferenceURL} isOpen={isOpen} onOpenChange={onOpenChange}/>
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
                <Button color="danger" variant="light" onClick={onClose}>
                  Cancelar
                </Button>
                <Button
                  color="primary"
                  onClick={() => {
                    onClose();
                    if (action) action(onOpen, setPreferenceURL);
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