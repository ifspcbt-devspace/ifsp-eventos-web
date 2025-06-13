'use client';

import Link from 'next/link';
import Image from 'next/image';

import { Button, Input, useDisclosure } from '@heroui/react';
import { useMask } from '@react-input/mask';
import React, {
  FormEvent,
  Suspense,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Loading from '@/components/Loading';
import {
  generateRandomUsername,
  notifyError,
  notifySuccess,
  notifyWarn,
} from '@/utils';
import { isAuthenticated, login, register } from '@/server-actions/auth.action';
import ConfirmRegister from '@/components/register/ConfirmRegister';
import { isNumberPhone, isRG, isValidBirthDate } from '@/validations';

export default function RegisterPage() {
  return (
    <Suspense fallback={<Loading />}>
      <Register />
    </Suspense>
  );
}

function Register() {
  const [name, setName] = useState('');
  const [document, setDocument] = useState('');
  const [phone, setPhone] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionVerified, setSessionVerified] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
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

  const phoneRef = useMask({
    mask: '(__) _____-____',
    replacement: { _: /\d/ },
  });
  const documentRef = useMask({
    mask: 'nn.nnn.nnn-n',
    replacement: { n: /[a-zA-Z0-9]/ },
  });

  const getPasswordRequirements = (value: string) => {
    return {
      length: value.length >= 6,
      lowercase: /[a-z]/.test(value),
      uppercase: /[A-Z]/.test(value),
      number: /\d/.test(value),
      special: /[!@#$%^&*()_+\[\]{};':"\\|,.<>\/?`~\-]/.test(value),
    };
  };

  const getInvalidPasswordMessages = (value: string): string[] => {
    const req = getPasswordRequirements(value);
    const errors = [];
    if (!req.length) errors.push('mínimo de 6 caracteres');
    if (!req.lowercase) errors.push('1 letra minúscula');
    if (!req.uppercase) errors.push('1 letra maiúscula');
    if (!req.number) errors.push('1 número');
    if (!req.special) errors.push('1 caractere especial');
    return errors;
  };

  const validatePassword = (value: string): boolean => {
    return getInvalidPasswordMessages(value).length === 0;
  };

  const isNameInvalid = useMemo(() => {
    if (name === '') return false;
    return name.length <= 4;
  }, [name]);
  const isEmailInvalid = useMemo(() => {
    if (confirmEmail === '') return false;
    return email !== confirmEmail;
  }, [email, confirmEmail]);
  const isDocumentInvalid = useMemo(() => {
    if (document === '') return false;
    return !isRG(document);
  }, [document]);
  const isPhoneInvalid = useMemo(() => {
    if (phone === '') return false;
    return !isNumberPhone(phone);
  }, [phone]);
  const isBirthDateInvalid = useMemo(() => {
    if (birthDate === '') return false;
    return !isValidBirthDate(birthDate);
  }, [birthDate]);
  const isPasswordInvalid = useMemo(() => {
    if (password === '') return false;
    return !validatePassword(password);
  }, [password]);
  const isConfirmPasswordInvalid = useMemo(() => {
    if (confirmPassword === '') return false;
    return password !== confirmPassword;
  }, [password, confirmPassword]);

  const handleRegister = async () => {
    const formatDate = (dateString: string): string => {
      const [year, month, day] = dateString.split('-');
      return `${day}/${month}/${year}`;
    };

    setIsLoading(true);
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email.trim());
    formData.append('username', generateRandomUsername());
    formData.append('password', password);
    formData.append('birth_date', formatDate(birthDate));
    formData.append('document', document);
    formData.append('phone_number', phone);

    const resp = await register(formData);
    if (resp && resp.error) {
      setError(resp.error);
    } else {
      const respLogin = await login(formData);
      if (respLogin && respLogin.error) {
        setError(respLogin.error);
      } else {
        notifySuccess({
          description: 'Conta criada com sucesso, redirecionando...',
        });
        setTimeout(() => router.replace(redirectTo), 2000);
      }
    }
    setIsLoading(false);
  };

  const handleOpenModal = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      email === '' ||
      password === '' ||
      confirmPassword === '' ||
      confirmEmail === '' ||
      name === '' ||
      birthDate === '' ||
      document === '' ||
      phone === ''
    ) {
      notifyError({ description: 'Preencha todos os campos' });
      setIsLoading(false);
      return;
    }
    if (
      isEmailInvalid ||
      isPasswordInvalid ||
      isConfirmPasswordInvalid ||
      isNameInvalid ||
      isBirthDateInvalid ||
      isDocumentInvalid ||
      isPhoneInvalid
    ) {
      notifyError({ description: 'Corrija as credenciais primeiro' });
      setIsLoading(false);
      return;
    }
    onOpen();
  };

  if (!sessionVerified) return <></>;

  return (
    <div className='full-page-wrapper-signup text-black'>
      <title>Registrar | IFSP Eventos</title>

      <ConfirmRegister
        action={handleRegister}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />

      <Link
        href='/'
        className='text-grey relative z-10 mb-8 h-[46px] w-[190px] opacity-100 duration-200 hover:opacity-80'
      >
        <Image
          priority={true}
          className='absolute inline-block h-auto border-0 object-contain'
          src={'/images/logo_branca_recortada.png'}
          alt={'logo'}
          fill
        />
      </Link>

      <div className='max-w-[380px] rounded-xl bg-white p-7 shadow-sm md:p-10'>
        <form
          className='mt-0 block'
          autoComplete='off'
          onSubmit={handleOpenModal}
        >
          <div className='mb-8 min-w-64 text-center'>
            <span className='mb-3 block text-2xl font-semibold'>
              Registre-se
            </span>
          </div>
          <Input
            maxLength={128}
            placeholder='Nome completo'
            name='name'
            title='Nome completo'
            onValueChange={setName}
            isInvalid={isNameInvalid}
            errorMessage={'Certifique-se de colocar seu nome completo'}
            classNames={{ inputWrapper: 'rounded-[9px]', base: 'mb-2' }}
            type='text'
            autoComplete='off'
            isRequired={true}
          />

          <Input
            placeholder='RG'
            name='document'
            title='R.G.'
            ref={documentRef}
            isInvalid={isDocumentInvalid}
            errorMessage='O RG é inválido'
            onValueChange={setDocument}
            classNames={{ inputWrapper: 'rounded-[9px]', base: 'mb-2' }}
            type='text'
            autoComplete='off'
            isRequired={true}
          />

          <Input
            maxLength={128}
            placeholder='E-mail'
            name='email'
            title='E-mail'
            errorMessage='Preencha o seu e-mail'
            onValueChange={setEmail}
            classNames={{ inputWrapper: 'rounded-[9px]', base: 'mb-2' }}
            type='email'
            autoComplete='off'
            isRequired={true}
          />

          <Input
            maxLength={128}
            placeholder='Confirmar E-mail'
            name='confirm_email'
            title='Confirmar E-mail'
            isInvalid={isEmailInvalid}
            errorMessage='Os e-mails não correspoondem'
            onValueChange={setConfirmEmail}
            classNames={{ inputWrapper: 'rounded-[9px]', base: 'mb-2' }}
            type='email'
            autoComplete='off'
            onPaste={(e) => {
              e.preventDefault();
              notifyWarn({
                description:
                  'Por favor, digite seu e-mail manualmente para evitar erros.',
              });
            }}
            isRequired={true}
          />

          <Input
            placeholder='Celular'
            ref={phoneRef}
            name='phone'
            title='Celular'
            isInvalid={isPhoneInvalid}
            errorMessage='O celular é inválido'
            onValueChange={setPhone}
            classNames={{ inputWrapper: 'rounded-[9px]', base: 'mb-2' }}
            type='text'
            autoComplete='off'
            isRequired={true}
          />

          <Input
            type={'date'}
            placeholder='Nascimento'
            autoComplete='off'
            name='date'
            title='Data de nascimento'
            onValueChange={setBirthDate}
            isInvalid={isBirthDateInvalid}
            errorMessage={'Você deve ter pelo menos 12 anos de idade'}
            isRequired={true}
            classNames={{ inputWrapper: 'rounded-[9px]', base: 'mb-2' }}
          />

          <Input
            maxLength={32}
            placeholder='Senha'
            name='password'
            title='Senha'
            onValueChange={setPassword}
            errorMessage={
              isPasswordInvalid
                ? `A senha deve conter: ${getInvalidPasswordMessages(password).join(', ')}`
                : undefined
            }
            isInvalid={isPasswordInvalid}
            classNames={{ inputWrapper: 'rounded-[9px]', base: 'mb-2' }}
            type='password'
            autoComplete='off'
            isRequired={true}
          />

          <Input
            maxLength={32}
            placeholder='Confirmar senha'
            name='confirm_password'
            title='Confirmar senha'
            onValueChange={setConfirmPassword}
            isInvalid={isConfirmPasswordInvalid}
            errorMessage='As senhas não coincidem'
            classNames={{ inputWrapper: 'rounded-[9px]', base: 'mb-2' }}
            type='password'
            autoComplete='off'
            isRequired={true}
          />

          <Button
            isLoading={isLoading}
            type='submit'
            className='button data-[hover=true]:opacity-100'
          >
            {!isLoading && 'Registrar'}
          </Button>
          <div className='form-card-footer'>
            <span>Já tem uma conta?</span>
            <Link
              className='text-grey duration-200 hover:opacity-90'
              href={`/auth/log-in${redirectTo === '/' ? '' : `?redir=${redirectTo}`}`}
            >
              Entrar
            </Link>
          </div>
        </form>
      </div>

      <div
        className={`${error ? '' : 'hidden'}bg-silver text-small mt-2.5 max-w-[380px] rounded-md p-4 text-black`}
      >
        {error}
      </div>
    </div>
  );
}
