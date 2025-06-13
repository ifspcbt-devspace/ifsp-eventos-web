import Link from 'next/link';
import Image from 'next/image';

const Footer = ({ className }: { className?: string }) => {
  return (
    <footer
      className={`grid w-full grid-cols-10 grid-rows-2 gap-4 bg-gray-50 px-4 py-16 text-black xl:px-0 ${className}`}
    >
      <div className='col-span-10 col-start-1 row-start-1 flex flex-col items-center justify-start xl:col-span-3 xl:col-start-3 xl:row-span-2 xl:items-start'>
        <Link className={`mb-5`} href={`/`}>
          <Image
            src={`/images/logo_recortada.png`}
            className={`overflow-clip bg-clip-content`}
            height={100}
            width={204}
            alt={`logo_recortada.png`}
          />
        </Link>
        <p className={`text-small mb-5 block opacity-75`}>
          Feito pelo time{' '}
          <Link
            className={`text-[#626a72]`}
            target={`_blank`}
            href={`https://github.com/ifspcbt`}
          >
            IFSPCBT Informática
          </Link>
          .
        </p>
        <p className='text-small block opacity-75'>
          © 2025 IFSP Eventos. Todos os direitos reservados.
        </p>
      </div>

      <div
        className={
          'col-span-10 col-start-1 row-start-2 flex w-full items-start justify-evenly xl:col-span-3 xl:col-start-6 xl:row-span-2 xl:row-start-1 xl:justify-between'
        }
      >
        <div className='flex flex-col justify-start xl:col-span-2 xl:col-start-6 xl:row-span-2 xl:row-start-1'>
          <h5 className={'footer-header'}>GERAL</h5>
          <Link href='/' className={`footer-link`}>
            Início
          </Link>
          <Link href='/events' className={`footer-link`}>
            Eventos
          </Link>
          <Link
            href='mailto:ifspcbt.informatica@gmail.com?subject=Suporte%20-%20IFSP%20Eventos'
            className={`footer-link`}
          >
            Contato
          </Link>
          <Link
            href='/terms-conditions'
            target='_blank'
            rel='noopener noreferrer'
            className={`footer-link`}
          >
            Termos e Condições
          </Link>
          <Link
            href='/privacy-policy'
            target='_blank'
            rel='noopener noreferrer'
            className={`footer-link`}
          >
            Política de Privacidade
          </Link>
        </div>

        <div className='col-span-3 col-start-7 row-start-2 flex flex-col justify-start sm:col-start-8 md:col-span-4 xl:col-span-1 xl:col-start-8 xl:row-span-2 xl:row-start-1'>
          <h5 className={'footer-header'}>GERENCIAMENTO</h5>
          <Link href='/auth/log-in' className={`footer-link`}>
            Entrar
          </Link>
          <Link href='/auth/sign-up' className={`footer-link`}>
            Registre-se
          </Link>
          <Link href='/user/account' className={`footer-link`}>
            Perfil
          </Link>
          <Link href='/auth/change-password' className={`footer-link`}>
            Redefinir senha
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
