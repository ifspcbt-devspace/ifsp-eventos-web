'use client';

import React, { FormEvent, useEffect, useMemo, useState } from 'react';
import { Button, Input } from '@heroui/react';
import { useMask } from '@react-input/mask';
import { isRG } from '@/validations';
import { getSession } from '@/server-actions/auth.action';
import { usePathname, useRouter } from 'next/navigation';
import { notifyError, notifySuccess } from '@/utils';
import { updateUser } from '@/server-actions/user.action';
import UserTickets from '@/components/user/UserTickets';

export default function UserAccount() {
  const [rg, setRg] = useState('');
  const router = useRouter();
  const pathname = usePathname();
  const [session, setSession] = useState<any>();
  const [hasDocument, setHasDocument] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    Promise.all([getSession()]).then(([session]) => {
      setSession(session);
      if (!session) router.push(`/auth/log-in?redir=${pathname}`);
      else if (
        session.user.document_initials === undefined ||
        session.user.document_initials === null ||
        session.user.document_initials === ''
      ) {
        notifyError({ description: 'Complete seu cadastro' });
        setHasDocument(false);
      } else {
        setHasDocument(true);
        setRg(session.user.document_initials);
      }
    });
  }, [setSession]);

  const rgRef = useMask({
    mask: 'nn.nnn.nnn-n',
    replacement: { n: /\d/ },
  });

  const isRGInvalid = useMemo(() => {
    if (rg === '' || rg === undefined || rg === null) return true;
    if (rg === session?.user.document_initials) return false;
    return !isRG(rg);
  }, [rg, session?.user.document_initials]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const resp = await updateUser(rg);
    if ('error' in resp) {
      notifyError({ description: resp.error });
    }
    notifySuccess({ description: 'Dados alterados com sucesso.' });
    setHasDocument(true);
    setIsLoading(false);
  };

  if (!session)
    return (
      <div className='light-page-header h-dvh w-full'>
        <title>Perfil | IFSP Eventos</title>
      </div>
    );

  return (
    <div className={''}>
      <title>Perfil | IFSP Eventos</title>
      <div className={`light-page-header w-full py-20 sm:py-32 xl:py-40`}>
        <div className={`grid w-full grid-cols-10 gap-y-12 px-4 xl:px-0`}>
          <div
            className={`col-span-10 col-start-1 rounded-xl bg-white px-8 py-8 shadow-sm xl:col-span-2 xl:col-start-3`}
          >
            <span className={`text-2xl font-semibold`}>Detalhes da conta</span>
            <hr className={`my-4 w-full`} />

            <form className='mt-0 block' onSubmit={handleSubmit}>
              <span className={`mt-4 mb-1 block font-medium`}>E-mail</span>
              <Input
                maxLength={128}
                name='email'
                title='E-mail'
                disabled={true}
                value={session.user.email}
                classNames={{
                  inputWrapper: 'rounded-[9px] border-1',
                  base: 'mb-1',
                }}
                type='email'
                autoComplete='off'
              />

              <span className={`mt-4 mb-1 block font-medium`}>
                Nome Completo
              </span>
              <Input
                maxLength={128}
                name='name'
                title='Nome Completo'
                disabled={true}
                value={session.user.name}
                classNames={{
                  inputWrapper: 'rounded-[9px] border-1',
                  base: 'mb-1',
                }}
                type='email'
                autoComplete='off'
              />

              <span className={`mt-4 mb-1 block font-medium`}>R.G.</span>
              <Input
                maxLength={16}
                name='rg'
                title='RG'
                ref={hasDocument ? undefined : rgRef}
                disabled={hasDocument}
                isInvalid={isRGInvalid}
                onValueChange={setRg}
                value={rg}
                errorMessage='O RG informado é inválido'
                classNames={{
                  inputWrapper: 'rounded-[9px] border-1',
                  base: 'mb-1',
                }}
                type='text'
                autoComplete='off'
                isRequired={true}
              />

              <Button
                isLoading={isLoading}
                type='submit'
                isDisabled={isRGInvalid || hasDocument}
                className='hover:bg-opacity-90 mt-4 inline-block h-fit w-fit cursor-pointer rounded-lg bg-neutral-900 px-4 py-1.5 text-white duration-200'
              >
                {isLoading ? '' : 'Salvar alterações'}
              </Button>
            </form>
          </div>

          <UserTickets userId={session.user.id} />
        </div>
      </div>
    </div>
  );
}
