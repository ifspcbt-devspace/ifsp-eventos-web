import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@heroui/react';
import { useEffect } from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';

export default function PaymentModal({
  preferenceId,
  isOpen,
  onOpenChange,
}: {
  preferenceId: string;
  isOpen: boolean;
  onOpenChange: () => void;
}) {
  useEffect(() => {
    initMercadoPago('APP_USR-c70b9bb3-db83-4553-b86a-b288be06c4d4', {
      locale: 'pt-BR',
    });
  }, [preferenceId]);

  return (
    <Modal
      isOpen={isOpen}
      classNames={{ closeButton: 'hidden' }}
      onOpenChange={onOpenChange}
      placement='center'
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className='flex flex-col gap-1'>Pagamento</ModalHeader>
            <ModalBody className='mt-2 mb-2 text-center'>
              <div className='mb-2'>
                Aguarde até que o botão do Mercado Pago seja carregado:
              </div>
              <div className={`flex items-center justify-center`}>
                <div className={`max-w-72`}>
                  <Wallet initialization={{ preferenceId: preferenceId }} />
                </div>
              </div>
              <div
                className='relative mt-2 rounded border border-blue-400 bg-blue-100 px-4 py-3 text-blue-700'
                role='alert'
              >
                O botão gerará um QR Code Pix, independente de você ter o
                Mercado Pago ou não.
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color='default' variant='light' onPress={onClose}>
                Fechar
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
