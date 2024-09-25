import {Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@nextui-org/react";
import {QRCodeCanvas} from "qrcode.react";
import {useRef} from "react";

export default function QrCodeModal({
                                      ticketId, isOpen,
                                      onOpenChange
                                    }: { ticketId: string, isOpen: boolean, onOpenChange: () => void }) {
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

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Ingresso gerado
            </ModalHeader>
            <ModalBody className="text-center mt-2 mb-2">
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