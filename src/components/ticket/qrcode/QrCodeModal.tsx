import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@nextui-org/react";
import {QRCodeCanvas} from "qrcode.react";
import React, {useRef} from "react";
import {Ticket} from "@/models";


export default function QrCodeModal({
                                      ticket, isOpen,
                                      onOpenChange
                                    }: { ticket?: Ticket, isOpen: boolean, onOpenChange: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  if (!ticket) return <></>;

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
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              <div>
                Ingresso <CodePopover code={ticket.code}/>
              </div>
            </ModalHeader>
            <ModalBody className="text-center mt-2 mb-2">
              <p className="mx-auto mb-2">
                <QRCodeCanvas
                  ref={canvasRef}
                  value={`https://eventos.gremioifspcbt.shop/admin/ticket/check-in/${ticket.id}`}
                  size={256}
                  level={"M"}
                  title={"Ingresso do Evento"}
                />
              </p>
              <p>O seu ingresso foi enviado por e-mail, porém você pode baixá-lo por aqui.</p>
              <p>Válido em: {ticket.valid_in.toLocaleString("pt-BR", {day: "2-digit", month: "2-digit"})}</p>
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

function CodePopover({code}: { code: string }) {
  const copy = async () => {
    await navigator.clipboard.writeText(code);
  };
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Popover isOpen={isOpen} onOpenChange={(open) => setIsOpen(open)} placement="right"
             shouldCloseOnBlur={true}>
      <PopoverTrigger>
                <span onMouseLeave={() => setIsOpen(false)}
                      onClick={copy}
                      className={`text-sm opacity-90 cursor-pointer w-fit h-fit`}>#{code}</span>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-2 py-1 text-sm">
          Código copiado!
        </div>
      </PopoverContent>
    </Popover>
  )
}