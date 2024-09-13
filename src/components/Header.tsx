import Image from "next/image";
import {CiSearch} from "react-icons/ci";
import Link from "next/link";

export default function Header() {
  return (<>
    <div className={`w-full grid grid-cols-10 bg-white text-black sticky top-0 z-50`}>

      <div className={`col-start-3 col-span-3 flex justify-start`}>
        <div className={`relative h-[70px] w-44 cursor-pointer duration-400 hover:opacity-70`}>
          <Image
            src={"/images/logo_recortada.png"}
            alt={"Logo do IFSP Eventos"}
            fill
            priority={true}
            style={{
              objectFit: "contain",
            }}
          />
        </div>


        <form action={"#"}
          className={`ml-6 my-auto bg-neutral-100 py-1.5 px-2 rounded-md border-1 w-72 transition-colors duration-200 border-neutral-100 hover:border-neutral-300 focus-within:border-neutral-300 flex items-center`}>
          <CiSearch className={"text-neutral-500 font-bold text-xl"}/>
          <input type="text" maxLength={255} title={`Digite o nome do evento`}
                 className={`ml-1.5 bg-transparent outline-none w-full text-sm font-medium appearance-none`}
                 placeholder={"Pesquisar eventos"}/>
          <input type="submit" className="hidden" value="Search"/>
        </form>
      </div>

      <div className={`col-start-6 col-span-3 my-auto`}>
        <nav className={`w-full text-right space-x-5 text-[15px] font-medium`}>
          <div className={`inline-block cursor-pointer text-neutral-500 duration-200 hover:text-neutral-950`}>
            <Link href={"#eventos"}>Eventos</Link>
          </div>
          <div className={`inline-block cursor-pointer text-neutral-500 duration-200 hover:text-neutral-950`}>
            <Link href={"#entrar"}>Entrar</Link>
          </div>
          <Link href={"#registrar"}>
            <div
              className={`inline-block cursor-pointer duration-200 bg-neutral-900 hover:bg-opacity-90 text-white py-1.5 px-5 rounded-md`}>
              Registre-se
            </div>
          </Link>
        </nav>
      </div>

    </div>
  </>)
}