import {Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@nextui-org/react";
import {useEffect} from "react";
import {initMercadoPago, Wallet} from '@mercadopago/sdk-react';


export default function PaymentModal({
                                       preferenceURL, isOpen,
                                       onOpenChange
                                     }: { preferenceURL: string, isOpen: boolean, onOpenChange: () => void }) {

  useEffect(() => {
    initMercadoPago('APP_USR-49633992-519d-470f-b9cf-1e3c1449c636', {locale: 'pt-BR'});
  }, [preferenceURL]);

  return (
    <Modal isOpen={isOpen} classNames={{closeButton: "hidden"}} onOpenChange={onOpenChange} placement="center">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Pagamento
            </ModalHeader>
            <ModalBody className="text-center mt-2 mb-2">
              <div className="mb-2">
                Aguarde até que o botão do Mercado Pago seja carregado:
              </div>
              <div className={`flex justify-center items-center`}>
                <div className={`max-w-72`}>
                  <Wallet initialization={{preferenceId: preferenceURL}}/>
                </div>
              </div>
              <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative mt-2"
                   role="alert">
                O botão gerará um QR Code Pix, independente de você ter o Mercado Pago ou não.
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="default" variant="light" onClick={onClose}>
                Fechar
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}