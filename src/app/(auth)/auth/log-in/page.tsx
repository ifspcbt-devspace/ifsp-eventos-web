'use client';

import Link from 'next/link';
import Image from 'next/image';

import { Button, Input } from '@heroui/react';
import React, { FormEvent, Suspense, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Loading from '@/components/Loading';
import { isAuthenticated, login } from '@/server-actions/auth.action';
import { notifyError, notifySuccess } from '@/utils';

export default function LoginPage() {
  return (
    <Suspense fallback={<Loading />}>
      <Login />
    </Suspense>
  );
}

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [sessionVerified, setSessionVerified] = useState(false);
  const router = useRouter();
  const params = useSearchParams();
  const redirectTo = params.get('redir') || '/';

  useEffect(() => {
    const load = async () => {
      const isAuth = await isAuthenticated();
      if (isAuth) {
        router.replace(redirectTo);
      } else setSessionVerified(true);
    };

    load();
  }, [router]);

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    if (email === '' || password === '') {
      notifyError({ description: 'Preencha todos os campos' });
      setIsLoading(false);
      return;
    }
    const formData = new FormData();
    formData.append('email', email.trim());
    formData.append('password', password);
    const respLogin = await login(formData);
    if (respLogin && respLogin.error) {
      setError(respLogin.error);
    } else {
      notifySuccess({
        description: 'Login realizado com sucesso, redirecionando...',
      });
      setTimeout(() => router.push(redirectTo), 1500);
    }
    setIsLoading(false);
  };

  if (!sessionVerified) return <></>;

  return (
    <div className='full-page-wrapper text-black'>
      <title>Login | IFSP Eventos</title>
      <Link
        href='/'
        className='text-grey z-10 mb-8 opacity-100 duration-200 hover:opacity-80'
      >
        <Image
          priority={true}
          className='inline-block border-0'
          src={'/images/logo_branca_recortada.png'}
          alt={'logo branca'}
          width={190}
          height={100}
        />
      </Link>

      <div className='max-w-[380px] rounded-xl bg-white p-7 shadow-sm sm:p-10'>
        <form className='mt-0 block' onSubmit={handleOnSubmit}>
          <div className='mb-8 min-w-64 text-center'>
            <span className='mb-3 block text-2xl font-semibold'>Entrar</span>
            <p className='mb-1.5 text-sm opacity-75'>
              Preencha seus dados de login abaixo.
            </p>
          </div>
          <Input
            maxLength={128}
            placeholder='E-mail'
            name='email'
            title='E-mail'
            errorMessage='Preencha o seu e-mail'
            onValueChange={setEmail}
            classNames={{ inputWrapper: 'rounded-[9px]', base: 'mb-2' }}
            type='email'
            autoComplete='email'
            isRequired={true}
          />

          <Input
            maxLength={32}
            placeholder='Senha'
            name='password'
            title='Senha'
            onValueChange={setPassword}
            errorMessage='Preencha a sua senha'
            classNames={{ inputWrapper: 'rounded-[9px]', base: 'mb-2' }}
            type='password'
            autoComplete='password'
            isRequired={true}
          />

          <Button
            isLoading={isLoading}
            type='submit'
            className='button mt-4 data-[hover=true]:opacity-100'
          >
            {!isLoading && 'Entrar'}
          </Button>
          <div className='form-card-footer'>
            <span>Não tem uma conta?</span>
            <Link
              className='text-grey duration-200 hover:opacity-90'
              href={`/auth/sign-up${redirectTo === '/' ? '' : `?redir=${redirectTo}`}`}
            >
              Registre-se
            </Link>
          </div>
        </form>
      </div>

      <div
        className={`${error ? '' : 'hidden'} bg-silver text-small mt-2.5 max-w-[380px] rounded-md p-4 text-black`}
      >
        {error}
      </div>

      <Link
        href={`/auth/reset-password${redirectTo === '/' ? '' : `?redir=${redirectTo}`}`}
        className='below-card-link'
      >
        Esqueceu sua senha?
      </Link>
    </div>
  );
}
