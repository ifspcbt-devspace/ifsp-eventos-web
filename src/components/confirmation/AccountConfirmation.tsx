'use client';

import Loading from '@/components/Loading';
import { confirmAccount } from '@/server-actions/auth.action';
import { Button } from '@heroui/react';
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { FaCircleXmark } from 'react-icons/fa6';

export default function AccountConfirmation({ token }: { token: string }) {
  const [isClicked, setIsClicked] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [res, setRes] = React.useState<any>(null);

  return (
    <div className='flex h-dvh w-full flex-col items-center justify-center'>
      <h1 className={`${isLoading ? 'hidden' : ''}text-4xl mb-8 font-bold`}>
        Confirmação de conta
      </h1>
      <p className={`${isClicked ? 'hidden' : ''}`}>Obrigado pela paciência</p>
      <p className={`${isClicked ? 'hidden' : ''}mb-8`}>
        Clique no botão abaixo para confirmar sua conta
      </p>
      <Button
        onPress={async () => {
          setIsLoading(true);
          setIsClicked(true);
          setTimeout(async () => {
            const response = await confirmAccount(token);
            setRes(response);
            setIsLoading(false);
          }, 10000);
        }}
        className={`${
          isClicked ? 'hidden' : ''
        }bg-customLightGreen text-small rounded-lg px-4 py-1 font-semibold text-black transition-all duration-200 hover:bg-slate-300 md:text-base`}
      >
        Verificar token
      </Button>
      {isLoading ? (
        <Loading />
      ) : (
        isClicked &&
        (res && res.error ? (
          <>
            <FaCircleXmark className='mb-16 text-9xl text-red-500' />
            <span className='text-3xl'>{res.error || 'Token inválido'}</span>
          </>
        ) : (
          <>
            <FaCheckCircle className='mb-16 text-9xl text-green-500' />
            <span className='text-3xl'>Seu token foi confirmado</span>
          </>
        ))
      )}
    </div>
  );
}
