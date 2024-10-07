import {Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@nextui-org/react";
import {QRCodeCanvas} from "qrcode.react";
import {useRef, useEffect } from "react";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';


export default function QrCodeModal({
                                      preferenceURL, ticketId, isOpen,
                                      onOpenChange
                                    }: { preferenceURL:string, ticketId: string, isOpen: boolean, onOpenChange: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const downloadCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const url = canvas.toDataURL('image/png');

    const link = document.createElement('a');
    link.href = url;
    link.download = 'ingresso.png';
    link.click();
  };

  useEffect(() => {
      initMercadoPago('APP_USR-49633992-519d-470f-b9cf-1e3c1449c636', { locale: 'pt-BR' });
    }, []);

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Ingresso gerado
            </ModalHeader>
            <ModalBody className="text-center mt-2 mb-2">
              Esse é o seu ingresso para o evento. Certifique-se de pagá-lo antes de comparecer ao evento.
              <p className="mx-auto mb-2">
                <QRCodeCanvas
                  ref={canvasRef}
                  value={`https://eventos.ifspcbt.shop/admin/ticket/check-in/${ticketId}`}
                  size={256}
                  level={"M"}
                  title={"Ingresso do Evento"}
                />
              </p>
              <p>O seu ingresso foi enviado por e-mail, porém você pode baixá-lo antecipadamente.</p>
              <div>
                Para pagar, clique no botão abaixo:
                <Wallet initialization={{preferenceId: preferenceURL}} />
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="default" variant="light" onClick={onClose}>
                Fechar
              </Button>
              <Button
                color="primary"
                onClick={() => {
                  onClose();
                  downloadCanvas();
                }}
              >
                Download
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}