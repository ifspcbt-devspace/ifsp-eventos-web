import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@heroui/react';
import { FaUserCheck } from 'react-icons/fa6';
import Link from 'next/link';

export default function ConfirmRegister({
  action,
  isOpen,
  onOpenChange,
}: {
  action?: () => void;
  isOpen: boolean;
  onOpenChange: () => void;
}) {
  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement='center'>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-col gap-1'>
                Confirmar Registro
              </ModalHeader>
              <ModalBody className='text-center'>
                <p className='mx-auto'>
                  <FaUserCheck className='text-7xl' />
                </p>
                <p>
                  Você concorda com nossa
                  <Link
                    href='/privacy-policy'
                    target='_blank'
                    className='inline-block text-blue-800'
                    rel='noopener noreferrer'
                  >
                    política de privacidade
                  </Link>
                  e com os nossos
                  <Link
                    href='/terms-conditions'
                    target='_blank'
                    className='inline-block text-blue-800'
                    rel='noopener noreferrer'
                  >
                    termos de uso
                  </Link>
                  ?
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color='danger' variant='light' onPress={onClose}>
                  Cancelar
                </Button>
                <Button
                  color='primary'
                  onPress={() => {
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
    </>
  );
}
