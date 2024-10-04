"use client"

import Image from "next/image";
import {CiSearch} from "react-icons/ci";
import Link from "next/link";
import {redirectSearch} from "@/server-actions/redirect-search.action";
import {useEffect, useState} from "react";
import {isAuthenticated, logout} from "@/server-actions/auth.action";
import {Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/dropdown";
import {FiMenu} from "react-icons/fi";

export default function Header({search = ""}: { search?: string }) {
  const [isLogged, setIsLogged] = useState<any>();

  useEffect(() => {
    Promise.all([isAuthenticated()]).then(([isAuth]) => {
      setIsLogged(isAuth)
    });
  }, [setIsLogged]);

  const handleLogout = async () => {
    await logout();
  }
  if (isLogged === undefined) return <></>;

  return (<>
    <div className={`w-full grid grid-cols-10 bg-white text-black sticky top-0 z-50 px-4 xl:px-0`}>

      <div className={`col-start-1 col-span-5 xl:col-start-3 xl:col-span-3 flex justify-start`}>
        <Link href={"/"} className={`relative h-[70px] w-44 cursor-pointer duration-400 hover:opacity-70`}>
          <Image
            src={"/images/logo_recortada.png"}
            alt={"Logo do IFSP Eventos"}
            fill
            priority={true}
            style={{
              objectFit: "contain",
            }}
          />
        </Link>


        <form action={redirectSearch}
              className={`hidden ml-6 my-auto bg-neutral-100 py-1.5 px-2 rounded-md border-1 w-72 transition-colors duration-200 border-neutral-100 hover:border-neutral-300 focus-within:border-neutral-300 lg:flex items-center`}>
          <CiSearch className={"text-neutral-500 font-bold text-xl"}/>
          <input type="text" defaultValue={search} name="search" maxLength={255} autoComplete="off"
                 title={`Digite o nome do evento`}
                 className={`ml-1.5 bg-transparent outline-none w-full text-sm font-medium appearance-none`}
                 placeholder={"Pesquisar eventos"}/>
          <input type="submit" className="hidden" value="Search"/>
        </form>
      </div>

      <div className={`col-start-6 col-span-5 xl:col-start-6 xl:col-span-3 my-auto`}>
        <nav className={`hidden md:block w-full text-right space-x-5 text-[15px] font-medium`}>
          <div className={`inline-block cursor-pointer text-neutral-500 duration-200 hover:text-neutral-950`}>
            <Link href={"/events"}>Eventos</Link>
          </div>
          {isLogged ? (
            <>
              <div className={`inline-block cursor-pointer text-neutral-500 duration-200 hover:text-neutral-950`}>
                <Link href={"/user/account"}>Conta</Link>
              </div>
              <div className={`inline-block cursor-pointer text-neutral-500 duration-200 hover:text-neutral-950`}>
                <Link href={"/auth/log-in"} onClick={handleLogout}>Sair</Link>
              </div>
            </>
          ) : (
            <>
              <div className={`inline-block cursor-pointer text-neutral-500 duration-200 hover:text-neutral-950`}>
                <Link href={"/auth/log-in"}>Entrar</Link>
              </div>
              <Link href={"/auth/sign-up"}>
                <div
                  className={`inline-block cursor-pointer duration-200 bg-neutral-900 hover:bg-opacity-90 text-white py-1.5 px-5 rounded-md`}>
                  Registre-se
                </div>
              </Link>
            </>
          )}
        </nav>

        <Dropdown className="md:hidden" backdrop="blur">
          <DropdownTrigger className="md:hidden w-full flex justify-end">
            <div className={"w-full text-right"}>
              <FiMenu className={`text-3xl`}/>
            </div>
          </DropdownTrigger>
          <DropdownMenu variant="solid" aria-label="Static Actions">
            <DropdownItem key="events">
              <Link href={"/events"}>Eventos</Link>
            </DropdownItem>
            <DropdownItem key="loginoraccount">
              {isLogged ? (
                <Link href={"/user/account"}>Conta</Link>
              ) : (
                <Link href={"/auth/log-in"}>Entrar</Link>
              )}
            </DropdownItem>
            <DropdownItem key="registerorlogout">
              {isLogged ? (
                <Link href={"/auth/log-in"} onClick={handleLogout}>Sair</Link>
              ) : (
                <Link href={"/auth/sign-up"}>Registre-se</Link>
              )}
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>


      </div>

    </div>
  </>)
}