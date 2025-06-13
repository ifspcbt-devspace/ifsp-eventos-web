'use client';

import Image from 'next/image';
import { CiSearch } from 'react-icons/ci';
import Link from 'next/link';
import { redirectSearch } from '@/server-actions/redirect-search.action';
import { useEffect, useState } from 'react';
import { isAuthenticated, logout } from '@/server-actions/auth.action';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@heroui/dropdown';
import { FiMenu } from 'react-icons/fi';

export default function Header({ search = '' }: { search?: string }) {
  const [isLogged, setIsLogged] = useState<any>();
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    Promise.all([isAuthenticated()]).then(([isAuth]) => {
      setIsLogged(isAuth);
    });
  }, [setIsLogged]);

  const handleLogout = async () => {
    await logout();
  };

  return (
    <>
      <div
        className={`sticky top-0 z-50 grid w-full grid-cols-10 bg-white px-4 text-black transition-shadow duration-200 xl:px-0 ${
          hasShadow ? 'shadow-md' : ''
        }`}
      >
        <div
          className={`col-span-5 col-start-1 flex justify-start xl:col-span-3 xl:col-start-3`}
        >
          <Link
            href={'/'}
            className={`relative h-[70px] w-44 cursor-pointer duration-400 hover:opacity-70`}
          >
            <Image
              src={'/images/logo_recortada.png'}
              alt={'Logo do IFSP Eventos'}
              fill
              priority={true}
              style={{
                objectFit: 'contain',
              }}
            />
          </Link>

          <form
            action={redirectSearch}
            className={`my-auto ml-6 hidden w-72 items-center rounded-md border-1 border-neutral-100 bg-neutral-100 px-2 py-1.5 transition-colors duration-200 focus-within:border-neutral-300 hover:border-neutral-300 lg:flex`}
          >
            <CiSearch className={'text-xl font-bold text-neutral-500'} />
            <input
              type='text'
              defaultValue={search}
              name='search'
              maxLength={255}
              autoComplete='off'
              title={`Digite o nome do evento`}
              className={`ml-1.5 w-full appearance-none bg-transparent text-sm font-medium outline-none`}
              placeholder={'Pesquisar eventos'}
            />
            <input type='submit' className='hidden' value='Search' />
          </form>
        </div>

        <div
          className={`col-span-5 col-start-6 my-auto xl:col-span-3 xl:col-start-6`}
        >
          <nav
            className={`hidden w-full space-x-5 text-right text-[15px] font-medium md:block`}
          >
            <div
              className={`inline-block cursor-pointer text-neutral-500 duration-200 hover:text-neutral-950`}
            >
              <Link href={'/events'}>Eventos</Link>
            </div>
            {isLogged === undefined ? (
              <></>
            ) : isLogged ? (
              <>
                <div
                  className={`inline-block cursor-pointer text-neutral-500 duration-200 hover:text-neutral-950`}
                >
                  <Link href={'/user/account'}>Conta</Link>
                </div>
                <div
                  className={`inline-block cursor-pointer text-neutral-500 duration-200 hover:text-neutral-950`}
                >
                  <Link href={'/auth/log-in'} onClick={handleLogout}>
                    Sair
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div
                  className={`inline-block cursor-pointer text-neutral-500 duration-200 hover:text-neutral-950`}
                >
                  <Link href={'/auth/log-in'}>Entrar</Link>
                </div>
                <Link href={'/auth/sign-up'}>
                  <div
                    className={`hover:bg-opacity-90 inline-block cursor-pointer rounded-md bg-neutral-900 px-5 py-1.5 text-white duration-200`}
                  >
                    Registre-se
                  </div>
                </Link>
              </>
            )}
          </nav>

          <Dropdown className='md:hidden' backdrop='blur'>
            <DropdownTrigger className='flex w-full justify-end md:hidden'>
              <div className={'w-full text-right'}>
                <FiMenu className={`text-3xl`} />
              </div>
            </DropdownTrigger>
            <DropdownMenu variant='solid' aria-label='Static Actions'>
              <DropdownItem key='events'>
                <Link href={'/events'}>Eventos</Link>
              </DropdownItem>
              <DropdownItem key='loginoraccount'>
                {isLogged === undefined ? (
                  <></>
                ) : isLogged ? (
                  <Link href={'/user/account'}>Conta</Link>
                ) : (
                  <Link href={'/auth/log-in'}>Entrar</Link>
                )}
              </DropdownItem>
              <DropdownItem key='registerorlogout'>
                {isLogged ? (
                  <Link href={'/auth/log-in'} onClick={handleLogout}>
                    Sair
                  </Link>
                ) : (
                  <Link href={'/auth/sign-up'}>Registre-se</Link>
                )}
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </>
  );
}
