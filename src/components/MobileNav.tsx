import { XMarkIcon } from '@heroicons/react/24/solid';
import React from 'react';

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
  const navAnimation = nav ? 'translate-x-0' : 'translate-x-full';

  return (
    <div className={`fixed ${navAnimation} transition-transform duration-300 top-0 left-0 right-0 bottom-0 z-[10000] bg-black`}>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="nav-link-mobile text-customLightGreen text-[21.5px]">Home</div>
        <div className="nav-link-mobile text-customLightGreen text-[21.5px]">Entrar</div>
        <div className="nav-link-mobile text-customLightGreen text-[21.5px]">Usuário</div>
        <div className="nav-link-mobile text-customLightGreen text-[21.5px]">Pesquisar</div>
        <div className="nav-link-mobile text-customLightGreen text-[21.5px]">Eventos</div>
        <div className="nav-link-mobile text-customLightGreen text-[21.5px]">Contato</div>
      </div>
      <div onClick={closeNav} className="absolute cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-customLightGreen">
        <XMarkIcon />
      </div>
    </div>
  );
}

export default MobileNav;
