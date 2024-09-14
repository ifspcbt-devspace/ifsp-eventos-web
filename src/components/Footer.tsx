import Link from "next/link";
import Image from "next/image";

import "./footer.css"

const Footer = () => {
  return (
    <footer className="w-full grid grid-cols-10 bg-transparent text-black py-16 gap-4">
      <div className="col-start-3 col-span-3 flex flex-col justify-start">
        <Link className={`mb-5`} href={`/`}>
          <Image src={`/images/logo_recortada.png`} className={`overflow-clip bg-clip-content`} height={100} width={204}
                 alt={`logo_recortada.png`}/>
        </Link>
        <p className={`opacity-75 text-small mb-5`}>Feito pelo time <Link className={`text-[#626a72]`} target={`_blank`}
                                                                          href={`https://github.com/ifspcbt`}>IFSPCBT
          Informática</Link>.</p>
        <p className="opacity-75 text-small">
          © 2024 IFSP Eventos. Todos os direitos reservados.
        </p>
      </div>

      <div className="col-start-7 col-span-1 flex flex-col justify-start">
        <h5 className="footer-header">GERAL</h5>
        <Link
          href="/"
          className="footer-link"
        >
          Início
        </Link>
        <Link
          href="/events"
          className="footer-link"
        >
          Eventos
        </Link>
        <Link
          href="mailto:ifspcbt.informatica@gmail.com?subject=Suporte%20-%20IFSP%20Eventos"
          className="footer-link"
        >
          Contato
        </Link>
        <Link
          href="/terms-conditions"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          Termos e Condições
        </Link>
        <Link
          href="/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          Política de Privacidade
        </Link>
      </div>

      <div className="col-start-8 col-span-1 flex flex-col justify-start">
        <h5 className="footer-header">gerenciamento</h5>
        <Link
          href="/auth/sign-in"
          className="footer-link"
        >
          Entrar
        </Link>
        <Link
          href="/auth/sign-up"
          className="footer-link"
        >
          Registre-se
        </Link>
        <Link
          href="/profile"
          className="footer-link"
        >
          Perfil
        </Link>
        <Link
          href="/auth/change-password"
          className="footer-link"
        >
          Redefinir senha
        </Link>
      </div>


    </footer>
  );
};

export default Footer;
